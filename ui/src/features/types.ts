
export type UnrankedResult = {
  bib: string
  name: string
  time: number
}

export type RankedResult = UnrankedResult & {
  rank: number
}
