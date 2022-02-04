import resultsReducer, {
  addResult,
  INITIAL_STATE,
} from "./resultsSlice"
import { UnrankedResult } from './types'

describe('results slice', () => {

  it('should have the correct initial state', () => {
    expect(
      resultsReducer(undefined, { type: 'some/bogus/action' })
    ).toEqual(INITIAL_STATE)
  })

  it('should add a result', async () => {
    const result: UnrankedResult = {
      bib: `B${Math.round(Math.random() * 100)}`,
      name: `Thing ${Math.round(Math.random() * 10)}`,
      time: Math.round(Math.random() * 1000)
    }
    const actual = resultsReducer(
      undefined,
      addResult(
        result
      )
    )
    expect(actual.data).toContainEqual(
      expect.objectContaining(
        result
      )
    )
  })
})
