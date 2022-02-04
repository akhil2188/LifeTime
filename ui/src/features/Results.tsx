import React from "react"
import { useAppSelector } from "../app/hooks";
import { toHhMmSs } from "../time";
import { selectResults } from "./resultsSlice";

export default () => {
  const results = useAppSelector(selectResults);

  return (
    <div className='results' data-testid='results'>
      <table>
        <thead>
          <tr>
            <th>Bib</th>
            <th>Name</th>
            <th>Time</th>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody>
          {results.data.map(x => (
            <tr key={x.bib}>
              <td data-testclass='bib'>{x.bib}</td>
              <td data-testclass='name'>{x.name}</td>
              <td data-testclass='time'>{toHhMmSs(x.time)}</td>
              <td data-testclass='rank'>{x.rank}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

