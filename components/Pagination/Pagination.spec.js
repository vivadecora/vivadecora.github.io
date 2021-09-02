import { it } from '@jest/globals'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import VueMeta from 'vue-meta'
import VueRouter from 'vue-router'
import PaginationComponent from './Pagination.vue'

describe('components/Pagination.vue', () => {
  /* <<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>> */
  it('Não há paginação quando existe somente uma página', () => {
    const wrapper = shallowMount(PaginationComponent, {
      mocks: {
        $route: { params: '' }
      },
      propsData: {
        records: 1,
        current: 1
      }
    })
    expect(wrapper.html()).toBe('')
  })

  /* <<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>> */
  it('getRoute monta a rota corretamente', () => {
    const router = new VueRouter({
      routes: [
        {
          name: 'categoryBySlug',
          path: '/:categoryBySlug/',
          pathToRegexpOptions: {
            strict: true
          }
        },
        {
          name: 'authorBySlug',
          path: '/:authorBySlug/',
          pathToRegexpOptions: {
            strict: true
          }
        }
      ]
    })

    const $route = {
      name: 'categoryBySlug'
    }
    const $router = {
      resolve: jest.fn()
    }
    const wrapper = shallowMount(PaginationComponent, {
      mocks: {
        $route,
        $router
      },
      propsData: {
        records: 1,
        current: 1
      }
    })

    let getRoute = jest.fn()

    getRoute = wrapper.vm.getRoute(1, false)
    expect(getRoute.name).toBe('categoryBySlug')

    getRoute = wrapper.vm.getRoute(2, false)
    expect(getRoute.name).toBe('categoryBySlug-paginated')

    const resolveParams = (slug, param) => {
      return {
        name: slug,
        params: {
          [slug]: param
        }
      }
    }

    getRoute = wrapper.vm.getRoute(1, true)
    const resolveCategory = router.resolve(resolveParams('categoryBySlug', 'arquitetura')).resolved
    expect(resolveCategory.fullPath).toBe('/arquitetura/')

    getRoute = wrapper.vm.getRoute(2, true)
    const resolveAuthor = router.resolve(resolveParams('authorBySlug', 'author')).resolved
    expect(resolveAuthor.fullPath).toBe('/author/')
  })

  /* <<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>> */
  it('Prev é null na página 1', () => {
    const $route = {
      name: 'categoryBySlug'
    }
    const $router = {
      resolve: jest.fn()
    }
    const wrapper = shallowMount(PaginationComponent, {
      mocks: {
        $route,
        $router
      },
      stubs: ['NuxtLink'],
      propsData: {
        records: 10,
        current: 1
      }
    })
    expect(wrapper.vm.$data.prev).toBeNull()
  })

  /* <<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>> */
  it('Next é null na última página', () => {
    const $route = {
      name: 'categoryBySlug'
    }
    const $router = {
      resolve: jest.fn()
    }
    const wrapper = shallowMount(PaginationComponent, {
      mocks: {
        $route,
        $router
      },
      stubs: ['NuxtLink'],
      propsData: {
        records: 10,
        current: 10
      }
    })
    expect(wrapper.vm.$data.next).toBeNull()
  })

  it('Carrega a options head()', () => {
    const localVue = createLocalVue()
    localVue.use(VueMeta, {
      keyName: 'head'
    })
    const wrapper = shallowMount(PaginationComponent, {
      localVue,
      mocks: {
        $route: {
          params: {}
        }
      },
      propsData: {
        records: 1,
        current: 1
      }
    })
    expect(wrapper.vm.$meta().refresh().metaInfo).toBeDefined()
  })
})
