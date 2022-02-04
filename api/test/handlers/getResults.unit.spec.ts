import { APIGatewayProxyStructuredResultV2 } from "aws-lambda"
import { _handler } from "@handlers/getResults"
import { fakeApiGatewayEventV2 } from "@test/fakeApiGatewayEventV2"
import { IResultService, RankedResult } from "@services/resultService"
import { assertResultsAreRanked } from "@test/assertResultsAreRanked"

describe('get results handler', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  
  it('should return all results in ranked order', async () => {
    const data = Array.from(
      new Array(
        Math.round(Math.random() * 100)
      )
        .keys()
    ).map<RankedResult>((_, index) => ({
      bib: `B${index + 100}`,
      name: `Thing ${index}`,
      rank: index + 1,
      time: index + 1000,
    }))
    assertResultsAreRanked(data)

    const resultServiceMock: IResultService = {
      addResult: undefined,
      getRanked: jest.fn(async () => data),
    }
    const response = await _handler(
      fakeApiGatewayEventV2({
        body: {},
        pathParameters: {},
        queryStringParameters: {},
      }),
      resultServiceMock,
    ) as APIGatewayProxyStructuredResultV2

    expect(response.statusCode).toEqual(200)
    expect(response.body).toBeTruthy()

    const results: RankedResult[] = JSON.parse(response.body)
    expect(results)
      .toEqual(
        expect.arrayContaining(
          data
        )
      )

    assertResultsAreRanked(results)
  })
})