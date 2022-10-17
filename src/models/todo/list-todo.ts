import { TodoItem } from "entity/todoEntity/todo.entity";
import { BaseTodoOutputModel } from "./base-todo";
import { GetTodoOutputModel } from "./get-todo";

export class ListTodoOutputModel {
  constructor(entities: TodoItem[]) {
    this.todos = entities.map((entity) => new GetTodoOutputModel(entity));
  }
  todos: GetTodoOutputModel[];
}
