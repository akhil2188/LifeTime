// https://stackoverflow.com/a/57542002  ¯\_(ツ)_/¯
export function toHhMmSs(millis: number): string {
  const h = Math.floor(millis / 1000 / 60 / 60);
  const m = Math.floor((millis / 1000 / 60 / 60 - h) * 60);
  const s = Math.round(((millis / 1000 / 60 / 60 - h) * 60 - m) * 60);

  function padLeft(x: number) {
    return x < 10 ? `0${x}` : `${x}`;
  }

  const hhmmss = `${padLeft(h)}:${padLeft(m)}:${ padLeft(s)}`;

  return hhmmss;

}

export function toMillis(hhmmss: string) {
  const [hh, mm, ss] = hhmmss.split(':')
  const millis = (+hh * 60 * 60 * 1000) + (+mm * 60 * 1000) + (+ss * 1000)

  return millis
}
