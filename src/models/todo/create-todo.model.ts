import { BaseInputModel } from "@models/base.model";
import { TodoItem } from "entity/todoEntity/todo.entity";

import Joi, { boolean, string } from "joi";
import { BaseTodoOutputModel } from "./base-todo";

export class CreateTodoInputModel extends BaseInputModel {
  constructor(obj: any) {
    super();
    Object.assign(this, obj);
  }
  schema = Joi.object({
    todo: Joi.string().required(),
  });
  todo: string;

  toEntity(): TodoItem {
    const entity = new TodoItem();
    entity.todo = this.todo;
    return entity;
  }
}

export class CreateTodoOutputModel extends BaseTodoOutputModel {}
