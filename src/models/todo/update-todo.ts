import { BaseInputModel } from "@models/base.model";
import { TodoItem } from "entity/todoEntity/todo.entity";
import Joi from "joi";
import { BaseTodoOutputModel } from "./base-todo";

export class UpdateTodoInputModel extends BaseInputModel {
  constructor(obj: any) {
    super();
    Object.assign(this, obj);
  }
  schema = Joi.object({
    todo: Joi.string(),
    completed: Joi.boolean(),
  });
  todo: string;
  completed: boolean;

  toEntity(): TodoItem {
    const entity = new TodoItem();
    entity.todo = this.todo;
    entity.completed = this.completed;
    return entity;
  }
}
export class UpdateTodoOutputModel extends BaseTodoOutputModel {}
