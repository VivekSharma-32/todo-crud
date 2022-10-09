import { APIGatewayProxyEvent } from "aws-lambda";

export type APIGatewayProxyEventNormalised<TInputModel> = Omit<
  APIGatewayProxyEvent,
  "body"
> & {
  body: TInputModel;
};
