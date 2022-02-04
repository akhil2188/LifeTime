import { _handler } from "@handlers/getResults"
import ResultService, { RankedResult } from "@services/resultService"
import { assertResultsAreRanked } from "@test/assertResultsAreRanked"
import fetch from "node-fetch"

describe('get results endpoint', () => {
  it('should fetch all results in ranked order', async () => {
    const data = await new ResultService().getRanked()
    assertResultsAreRanked(data)

    const response = await fetch(process.env.API_URL + '/results')
    const body = await response.text()

    expect(response.status).toEqual(200)
    expect(body).toBeTruthy()
    const results: RankedResult[] = JSON.parse(body)
    expect(results)
      .toEqual(
        expect.arrayContaining(
          data
        )
      )

    assertResultsAreRanked(results)
  })
})