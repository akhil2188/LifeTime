import { RankedResult, UnrankedResult } from "./types";

const UNRANKED_RESULTS = Array.from(
  new Array(
    Math.round(Math.random() * 10) + 1
  )
    .keys()
).map<UnrankedResult>((_, index) => ({
  bib: `B${index + 100}`,
  name: `Person #${index}`,
  time: Math.round(Math.random() * 1000000),
}))

function addResult(result: UnrankedResult) {
  UNRANKED_RESULTS.push(result)
}

async function getResultsData() {
 
  const response = await fetch("http://localhost:5000/results");
  const data = await response.json();
  console.log("Data", data);
  // return data;
  const unrankedData: Array<UnrankedResult> = [];
  for(let i = 0; i < data.length; i++) {
    unrankedData.push({bib: data[i].bib, name: data[i].name, time: data[i].time});
  }
  
  unrankedData.sort((a, b) => a.time < b.time
      ? -1
      : a.time > b.time
        ? 1
        : 0
    );
 return unrankedData;

}



function getResults() {
  const fetchDataPromise = new Promise<Array<RankedResult>>((resolve, reject) => {
    getResultsData().then((data) => {
    
    const ranked: Array<RankedResult> = [];
    for(let i = 0; i < data.length; i++){
      ranked.push({bib: data[i].bib, name: data[i].name, time: data[i].time, rank: i+1});
    }
    
    console.log("Akhil");
    
    console.log("Ranked",ranked)
    resolve(ranked);
  });
  });
  return fetchDataPromise;
    
}

export default {
  addResult,
  getResults
}