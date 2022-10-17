import { UpdateCommand } from "@aws-sdk/lib-dynamodb";

export const handler = async (event) => {
  const { body } = event.pathParameters;
  const updateOne = new UpdateCommand({
    TableName: process.env.TODO_TABLE,
    Key: {
      ...body,
    },
  });
};
