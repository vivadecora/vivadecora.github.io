import { mount } from '@vue/test-utils'
import PageHeader from './PageHeader.vue'

describe('Testes do PageHeader', () => {
  test('Tem tag <header>', () => {
    const header = mount(PageHeader, {
      propsData: {
        onToggle: x => x,
        headline: ''
      }
    })
    const headerNode = header.find('header')
    expect(headerNode.exists()).toBe(true)
  })
})
