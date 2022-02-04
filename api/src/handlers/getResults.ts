import ResultService, { IResultService } from "@services/resultService";
import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";

export const handler = async (
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyResultV2> => _handler(
  event,
  new ResultService(),
)

export const _handler = async (
  _: APIGatewayProxyEventV2,
  resultService: IResultService,
): Promise<APIGatewayProxyResultV2> => ({
  statusCode: 200,
  body: JSON.stringify(
    await resultService.getRanked()
  )
})
