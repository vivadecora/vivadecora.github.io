import { mount } from '@vue/test-utils'
import PageMain from './PageMain'

describe('Testes do PageMain', () => {
  test('PageMain pode ou não ter título', () => {
    const wrapperNoTitle = mount(PageMain)
    const h1 = wrapperNoTitle.find('h1')
    expect(h1.exists()).toBe(false)
  })
})
