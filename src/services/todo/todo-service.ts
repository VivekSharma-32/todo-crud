import {
  DeleteCommand,
  GetCommand,
  PutCommand,
  ScanCommand,
} from "@aws-sdk/lib-dynamodb";
import { TodoItem } from "entity/todoEntity/todo.entity";
import { ddbDocClient } from "../../lib/dynamodb/ddb";
import { v4 as uuid } from "uuid";
import _ from "lodash";
export class TodoService {
  // create data in dynamoDB
  // async create(entity: TodoItem) {
  //   entity.id = uuid();
  //   const putCommand = new PutCommand({
  //     TableName: process.env.TODO_TABLE,
  //     Item: { ...entity },
  //   });
  //   await ddbDocClient.send(putCommand);
  // }

  async create(entity: TodoItem): Promise<TodoItem> {
    entity.id = uuid();
    entity.completed = false;
    entity.createdAt = new Date().getTime();
    const putCommand = new PutCommand({
      TableName: process.env.TODO_TABLE,
      Item: {
        ...entity,
      },
    });

    await ddbDocClient.send(putCommand);

    return entity;
  }
  // get data from dynamodb
  async get(id: string): Promise<TodoItem> {
    const getCommand = new GetCommand({
      TableName: process.env.TODO_TABLE,
      Key: {
        id,
      },
    });
    const { Item: todo } = await ddbDocClient.send(getCommand);
    return todo as TodoItem;
  }

  // updata data in dynamodb
  async update(toUpdate: TodoItem, target: TodoItem): Promise<TodoItem> {
    const entity = {
      ...target,
      ..._.omitBy(toUpdate, _.isNil),
    };

    const putCommand = new PutCommand({
      TableName: process.env.TODO_TABLE,
      Item: entity,
    });

    await ddbDocClient.send(putCommand);
    return entity;
  }

  // list data from the dynamodb
  async list(): Promise<TodoItem[]> {
    const scanCommand = new ScanCommand({
      TableName: process.env.TODO_TABLE,
    });

    const { Items: todos } = await ddbDocClient.send(scanCommand);

    return todos as unknown as TodoItem[];
  }

  // delete data from dynamodb
  async delete(id: string) {
    const deleteCommand = new DeleteCommand({
      TableName: process.env.TODO_TABLE,
      Key: {
        id,
      },
    });

    await ddbDocClient.send(deleteCommand);
  }
}
