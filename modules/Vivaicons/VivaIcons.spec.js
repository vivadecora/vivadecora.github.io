import { mount } from '@vue/test-utils'
import VivaIcons from './VivaIcons.vue'

describe('Testes do VivaIcons', () => {
  test('VivaIcons existe e não tem slot', () => {
    const footer = mount(VivaIcons, {
      propsData: {
        name: 'android'
      }
    })
    expect(footer.findAll('svg').length).toBe(1)
  })
})
