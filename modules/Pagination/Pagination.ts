export default class Pagination {
  prev: number | null;
  next?: number | null;
  current: number | null;
  pages: Array<number| null>;

  constructor (records: number, current: number) {
    this.prev = current > 1 ? current - 1 : null
    this.next = current < records ? current + 1 : null
    this.current = current >= 1 && current <= records ? current : null

    const head = [1, null]
    const body = current <= 3
      ? (current === 3 ? [1, 2, 3] : [1, 2])
      : [current - 1, current, current + 1].filter(value => value > 0)
    const tail = current + 3 > records
      ? (current === records ? [records - 1, records] : [records - 2, records - 1, records])
      : [null, records]

    let numbers: Array<number | null> = current > 3 ? head : []
    numbers = current + 3 > records ? numbers : numbers.concat(body)
    numbers = numbers.concat(tail)

    const numbersFallback = Array(records).fill(null).map((_, i) => i + 1)

    this.pages = records > 3 ? numbers : numbersFallback
  }
}
