import { StatusCodes } from "http-status-codes";

export const serverError = (event: any) => {
  return {
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify({
      status: "failed",
      details: [
        {
          reason: `Something went wrong, requestId ${event.requestContext.requestId}`,
        },
      ],
    }),
  };
};
export const created = (dataObj) => {
  return {
    statusCode: StatusCodes.CREATED,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify(dataObj),
  };
};

export const badRequest = (message) => {
  return {
    statusCode: StatusCodes.BAD_REQUEST,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify({
      status: "failed",
      details: message === "string" ? message : JSON.stringify(message),
    }),
  };
};
export const ok = (dataObj) => {
  return {
    statusCode: StatusCodes.OK,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify(dataObj),
  };
};

export const okNoContent = () => {
  return {
    statusCode: StatusCodes.NO_CONTENT,
    headers: { "Access-Control-Allow-Origin": "*" },
  };
};

export const notFound = (message) => {
  return {
    statusCode: StatusCodes.NOT_FOUND,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify({
      status: "failed",
      details: message === "string" ? message : JSON.stringify(message),
    }),
  };
};
