import { APIGatewayProxyEventNormalised } from "@interfaces/api-gateway-proxy-event";
import { handlerfn } from "@lib/lambda/api-gateway-lambda";
import { badRequest, created, serverError } from "@lib/response/response";
import {
  CreateTodoInputModel,
  CreateTodoOutputModel,
} from "@models/todo/create-todo.model";
import { TodoService } from "@services/todo/todo-service";

export const handler = handlerfn(
  async (event: APIGatewayProxyEventNormalised<CreateTodoInputModel>) => {
    try {
      const todoService = new TodoService();
      const { body } = event;
      const inputModel = new CreateTodoInputModel(body);
      const validationErrors = inputModel.validate();
      if (validationErrors) {
        return badRequest(validationErrors);
      }
      const entity = inputModel.toEntity();
      await todoService.create(entity);
      const outputModel = new CreateTodoOutputModel(entity);
      return created(outputModel);
    } catch (err) {
      return serverError(event);
    }
  }
);
