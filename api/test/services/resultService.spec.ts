import mysql from "@lib/mysql"
import ResultService from "@services/resultService"
import { assertResultsAreRanked } from "@test/assertResultsAreRanked"

describe('resultService', () => {
  afterAll(() => {
    mysql().end()
  })

  it('should get all results in ranked order', async () => {
    const results = await new ResultService().getRanked()
    
    assertResultsAreRanked(results)
  })
})
