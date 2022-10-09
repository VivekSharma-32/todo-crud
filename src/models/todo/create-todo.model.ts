import { BaseInputModel } from "@models/base.model";
import { TodoItem } from "entity/todoEntity/todo.entity";

import Joi, { boolean, string } from "joi";

export class CreateTodoInputModel extends BaseInputModel {
  constructor(obj: any) {
    super();
    Object.assign(this, obj);
  }
  schema = Joi.object({
    id: Joi.string().id().guid(),
    todo: Joi.string().required(),
    completed: Joi.boolean().optional(),
    createdAt: Joi.date().optional(),
  });
  todo: string;
  completed: boolean;
  createdAt: Date;

  toEntity(): TodoItem {
    const entity = new TodoItem();
    entity.todo = this.todo;
    entity.completed = this.completed;
    entity.createdAt = this.createdAt;
    return entity;
  }
}

export class CreateTodoOutputModel {
  constructor(entity: TodoItem) {
    this.todo = entity.todo;
    this.completed = entity.completed;
  }
  todo: string;
  completed: boolean;
}
