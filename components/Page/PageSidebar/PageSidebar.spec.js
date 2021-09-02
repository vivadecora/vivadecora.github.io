import { mount } from '@vue/test-utils'
import PageSidebar from './PageSidebar.vue'

describe('Testes do PageSidebar', () => {
  test('Está definido', () => {
    const wrapper = mount(PageSidebar, {
      stubs: ['NuxtLink']
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
