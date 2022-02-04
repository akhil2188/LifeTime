import { RankedResult } from "../src/services/resultService";

export function assertResultsAreRanked(results: RankedResult[]) {
  expect(results.length).toBeTruthy();

  for (let i = 0; i < results.length - 1; i++) {
    expect(results[i].rank)
      .toEqual(
        results[i + 1].rank - 1
      );
  }
}
