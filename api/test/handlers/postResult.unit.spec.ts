import { IResultService, UnrankedResult } from "@services/resultService"
import { APIGatewayProxyStructuredResultV2 } from "aws-lambda"
import { fakeApiGatewayEventV2 } from "@test/fakeApiGatewayEventV2"
import { _handler } from "@handlers/postResult"

describe('post result handler', () => {
  it('should add a result and return 201', async () => {

    const resultServiceMock: IResultService = {
      addResult: jest.fn(),
      getRanked: undefined,
    }

    const result: UnrankedResult = {
      bib: `B${Math.round(Math.random() * 100)}`,
      name: `Thing ${Math.round(Math.random() * 10)}`,
      time: Math.round(Math.random() * 1000)
    }

    const response = await _handler(
      fakeApiGatewayEventV2({
        body: result,
        pathParameters: {},
        queryStringParameters: {},
      }),
      resultServiceMock,
    ) as APIGatewayProxyStructuredResultV2

    expect(response.statusCode).toEqual(201)
    expect(response.body).toBeUndefined()

    expect(
      resultServiceMock.addResult
    ).toHaveBeenCalledWith(
      result
    )
  })
})