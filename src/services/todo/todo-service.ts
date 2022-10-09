import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { TodoItem } from "entity/todoEntity/todo.entity";
import { ddbDocClient } from "../../lib/dynamodb/ddb";

export class TodoService {
  async create(entity: TodoItem) {
    const putCommand = new PutCommand({
      TableName: process.env.TODO_TABLE,
      Item: { ...entity },
    });

    await ddbDocClient.send(putCommand);
  }
}
