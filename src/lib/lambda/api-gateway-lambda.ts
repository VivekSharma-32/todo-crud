import { badRequest } from "@lib/response/response";
import { APIGatewayProxyEvent } from "aws-lambda";
export const handlerfn = (lambda) => {
  return async (event: APIGatewayProxyEvent) => {
    let model: any;
    try {
      model = JSON.parse(event.body);
      event.body = model;
    } catch {
      return badRequest([
        {
          reason: "Invalid JSON",
        },
      ]);
    }
    return lambda(event);
  };
};
