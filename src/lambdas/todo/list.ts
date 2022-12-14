import { APIGatewayProxyEventNormalised } from "@interfaces/api-gateway-proxy-event";
import { handlerfn } from "@lib/lambda/api-gateway-lambda";
import { notFound, ok, serverError } from "@lib/response/response";
import { GetTodoOutputModel } from "@models/todo/get-todo";
import { ListTodoOutputModel } from "@models/todo/list-todo";
import { TodoService } from "@services/todo/todo-service";

export const handler = handlerfn(
  async (event: APIGatewayProxyEventNormalised) => {
    try {
      const todoService = new TodoService();

      const entities = await todoService.list();

      const outputModel = new ListTodoOutputModel(entities);

      return ok(outputModel);
    } catch (ex) {
      console.log(ex);
      return serverError(event);
    }
  }
);
