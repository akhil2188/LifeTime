import { RankedResult, UnrankedResult } from "@services/resultService"
import fetch from "node-fetch"

describe('post result endpoint', () => {

  it('should add a result', async () => {

    const result: UnrankedResult = {
      bib: `B${Math.round(Math.random() * 100)}`,
      name: `Thing ${Math.round(Math.random() * 10)}`,
      time: Math.round(Math.random() * 1000)
    }

    const API_URL = process.env.API_URL + '/results'

    const postResponse = await fetch(
      API_URL,
      {
        body: JSON.stringify(result),
        method: 'POST'
      })
    expect(postResponse.status).toEqual(201)

    const getResponse = await fetch(API_URL)
    expect(getResponse.status).toEqual(200)

    const getResponseBody = await getResponse.text()
    expect(getResponseBody).toBeTruthy()

    const results: RankedResult[] = JSON.parse(getResponseBody)

    expect(results).toContainEqual(
      expect.objectContaining(result)
    )
  })
})
