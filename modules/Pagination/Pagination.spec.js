import Pagination from './Pagination'

describe('Testes do Pagination', () => {
  test('Pagination existe', () => {
    expect(Pagination).toBeDefined()
  })

  test('Pagination define paginas corretamente com current intermediario', () => {
    const pagination = new Pagination(20, 5)
    expect(pagination.pages).toEqual([1, null, 4, 5, 6, null, 20])
  })

  test('Pagination determina corretamente primeira e última página', () => {
    const paginationInFirstPage = new Pagination(15, 1)

    expect(paginationInFirstPage.prev).toBe(null)
    expect(paginationInFirstPage.next).toBe(2)

    const paginationInMiddlePage = new Pagination(15, 7)
    expect(paginationInMiddlePage.prev).toBe(6)
    expect(paginationInMiddlePage.next).toBe(8)

    const paginationInLastPage = new Pagination(15, 15)
    expect(paginationInLastPage.prev).toBe(14)
    expect(paginationInLastPage.next).toBe(null)
  })

  test('Pagination define corretamente paginas no comeco', () => {
    const paginationCurrent1 = new Pagination(20, 1)
    expect(paginationCurrent1.pages).toEqual([1, 2, null, 20])
    expect(paginationCurrent1.current).toBe(1)

    const paginationCurrent2 = new Pagination(20, 2)
    expect(paginationCurrent2.pages).toEqual([1, 2, null, 20])
    expect(paginationCurrent2.current).toBe(2)

    const paginationCurrent3 = new Pagination(20, 3)
    expect(paginationCurrent3.pages).toEqual([1, 2, 3, null, 20])
    expect(paginationCurrent3.current).toBe(3)

    const paginationCurrent4 = new Pagination(20, 4)
    expect(paginationCurrent4.pages).toEqual([1, null, 3, 4, 5, null, 20])
    expect(paginationCurrent4.current).toBe(4)
  })

  test('Pagination define corretamente paginas no final', () => {
    const paginationCurrentLast = new Pagination(20, 20)
    expect(paginationCurrentLast.pages).toEqual([1, null, 19, 20])

    const paginationCurrentLastLess1 = new Pagination(20, 19)
    expect(paginationCurrentLastLess1.pages).toEqual([1, null, 18, 19, 20])

    const paginationCurrentLastLess2 = new Pagination(20, 18)
    expect(paginationCurrentLastLess2.pages).toEqual([1, null, 18, 19, 20])
  })

  test('Pagination define corretamente paginacoes curtas', () => {
    const paginationShort1 = new Pagination(1, 1)

    expect(paginationShort1.prev).toBe(null)
    expect(paginationShort1.next).toBe(null)
    expect(paginationShort1.current).toBe(1)

    const paginationShort1from3 = new Pagination(3, 1)
    expect(paginationShort1from3.pages).toEqual([1, 2, 3])
    expect(paginationShort1from3.prev).toBe(null)
    expect(paginationShort1from3.next).toBe(2)

    const paginationShort3from3 = new Pagination(3, 3)
    expect(paginationShort3from3.pages).toEqual([1, 2, 3])
    expect(paginationShort3from3.prev).toBe(2)
    expect(paginationShort3from3.next).toBe(null)
    expect(paginationShort3from3.current).toBe(3)
  })
})
