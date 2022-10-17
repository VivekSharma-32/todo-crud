import { TodoItem } from "entity/todoEntity/todo.entity";

export class BaseTodoOutputModel {
  constructor(entity: TodoItem) {
    Object.assign(this, entity);
    this.createdAt = new Date(this.createdAt);
  }
  id: string;
  todo: string;
  completed: boolean;
  createdAt: Date;
}
