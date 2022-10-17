import { APIGatewayProxyEvent } from "aws-lambda";

export type APIGatewayProxyEventNormalised<TInputModel = string> = Omit<
  APIGatewayProxyEvent,
  "body"
> & {
  body: TInputModel;
};
