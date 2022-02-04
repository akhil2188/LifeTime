import ResultService, { IResultService, UnrankedResult } from "@services/resultService";
import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";

export const handler = async (
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyResultV2> => _handler(
  event,
  new ResultService(),
)

export const _handler = async (
  event: APIGatewayProxyEventV2,
  resultService: IResultService,
): Promise<APIGatewayProxyResultV2> => {
  const result: UnrankedResult = JSON.parse(event.body)
  if (!result || !result.bib || !result.name || !result.time) {
    return {
      statusCode: 400,
      body: 'invalid result!'
    }
  }
  try {
    await resultService.addResult(result)
    return {
      statusCode: 201
    }
  }
  catch (err) {
    console.error(err)
    return {
      statusCode: 500,
      body: String(err)
    }
  }
}