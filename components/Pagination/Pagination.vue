<template>
  <nav
    v-if="records > 1"
    class="pagination"
    role="navigation"
  >
    <NuxtLink
      v-if="prev !== null"
      v-slot="{ navigate, href }"
      :to="getRoute(prev)"
      custom
    >
      <a
        :href="href"
        class="pagination__item--prev"
        @click="navigate"
      >Anterior</a>
    </NuxtLink>

    <ul class="pagination__list">
      <template v-for="(page, index) in pages">
        <NuxtLink
          v-if="page !== null"
          :key="index"
          v-slot="{ navigate, href }"
          :to="getRoute(page)"
          custom
        >
          <li :class="page === current ? 'pagination__item--active' : 'pagination__item'">
            <a
              class="pagination__anchor"
              :href="href"
              @click="navigate"
            >{{ page }}</a>
          </li>
        </NuxtLink>
        <li
          v-else
          :key="index"
          class="pagination__item--inactive"
        >
          <span>...</span>
        </li>
      </template>
    </ul>
    <NuxtLink
      v-if="next !== null"
      v-slot="{ navigate, href }"
      :to="getRoute(next)"
      custom
    >
      <a
        :href="href"
        class="pagination__item--next"
        @click="navigate"
      >Próxima</a>
    </NuxtLink>
  </nav>
</template>

<script type="ts">
import Vue from 'vue'
import Pagination from '~/modules/Pagination/Pagination'
import PaginationHelper from '~/modules/Pagination/PaginationHelper'

export default Vue.extend({
  props: {
    records: {
      type: Number,
      required: true
    },
    current: {
      type: Number,
      required: true
    }
  },
  data () {
    const pagination = new Pagination(this.records, this.current)
    return {
      originalParams: this.$route.params,
      pages: pagination.pages,
      prev: pagination.prev,
      next: pagination.next
    }
  },
  head () {
    return {
      link: [{ rel: this.prev, name: 'prev' }, { rel: this.next, name: 'next' }]
        .filter(link => link.rel !== null)
        .map((valid) => {
          return {
            hid: valid.name,
            rel: valid.name,
            href: 'https://www.vivadecora.com.br/pro' + this.getRoute(valid.rel, true).href
          }
        })
    }
  },
  methods: {
    getRoute (pageNumber, shouldResolve = false) {
      const params = Object.assign({}, this.originalParams)
      params.pageNumber = pageNumber
      const routeNames = PaginationHelper.getRouteNames(this.$route.name)
      const route = {
        params,
        query: this.$route.query,
        name: pageNumber === 1 ? routeNames.base : routeNames.paginated
      }
      return shouldResolve ? this.$router.resolve(route) : route
    }
  }
})
</script>
<style lang="scss">
@use 'sass:math';
@import '~decore/sass/2 - helpers/mixins/bem-block-element-modifier';
@import '~decore/sass/3 - base/spacing-variables';
@import '~decore/sass/3 - base/colors/colors-backgrounds';
@import '~decore/sass/3 - base/colors/colors-borders';
@import '~decore/sass/3 - base/colors/colors-typography';

.pagination {
  display: flex;
  align-items: center;
  margin-bottom: math.div(spacing(1), 2);
  flex-wrap: wrap;

  @include element('list') {
    list-style: none;
    display: flex;
    padding: 0;
    flex-wrap: wrap;
  }

  @include element('item') {
    background-color: $color-background__white;
    border-radius: 0;
    border: none;
    border-left: 1px solid $color-border__tertiary;
    border-right: 1px solid $color-border__tertiary;
    color: $color-typography__primary;
    font-size: 16px;
    font-weight: 700;
    float: left;
    padding: 0;
    text-transform: uppercase;
    text-decoration: none;
    transition: all 1s ease 0;
    display: flex;

    &:hover {
      background-color: $color-background__light;
      border-color: transparent;
      color: #464646;
    }

    @include modifier('active') {
      background-color: $color-background__light;
      border-color: transparent;
      color: $color-typography__primary;
    }

    @include modifier('inactive') {
      pointer-events: none;
      padding: math.div(spacing(1), 2) spacing(2);
    }

    @include modifier('prev') {
      border-left: 0;
      padding: math.div(spacing(1), 2) spacing(2);
    }

    @include modifier('next') {
      border-right: 0;
      padding: math.div(spacing(1), 2) spacing(2);
    }
  }

  @include element('anchor') {
    width: 100%;
    color: inherit;
    text-decoration: none;
    padding: math.div(spacing(1), 2) spacing(2);
  }

}
</style>
