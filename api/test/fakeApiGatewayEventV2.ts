import { APIGatewayProxyEventV2 } from 'aws-lambda';

export function fakeApiGatewayEventV2<T extends object>({
  body,
  pathParameters,
  queryStringParameters,
}: {
  body?: T,
  pathParameters?: {},
  queryStringParameters?: {},
}) {
  return {
    body: JSON.stringify(body),
    headers: {},
    pathParameters,
    queryStringParameters,
  } as APIGatewayProxyEventV2;
}
