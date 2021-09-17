<template>
  <div>
    <div
      :class="isPageNavOpenOnMobile ? 'page__mobile-backdrop--is-open' : 'page__mobile-backdrop' "
      @click="isPageNavOpenOnMobile = !isPageNavOpenOnMobile"
    />
    <div class="page">
      <PageHeaderDeprecated :onToggle="onTogglePageHeader" />
      <PageNavDeprecated :categories="categories" :isOpenOnMobile="isPageNavOpenOnMobile" />
      <slot name="carousel" />
      <PageMain>
        <slot name="main" />
      </PageMain>
      <PageSidebar />
      <PageFooter />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PageFooter from '~/components/Page/PageFooter/PageFooter.vue'
import PageMain from '~/components/Page/PageMain/PageMain.vue'
import PageSidebar from '~/components/Page/PageSidebar/PageSidebar.vue'
import PageHeaderDeprecated from '~/components/Page/PageHeader/PageHeaderDeprecated.vue'
import PageNavDeprecated from '~/components/Page/PageNav/PageNavDeprecated.vue'

export default Vue.extend({
  components: {
    PageHeaderDeprecated,
    PageNavDeprecated,
    PageFooter,
    PageMain,
    PageSidebar
  },
  data () {
    return {
      headline: 'Time de engenharia da Viva Decora',
      isPageNavOpenOnMobile: false,
      categories: [{
        name: 'Artigos',
        href: '/'
      }, {
        name: 'Dicas',
        href: '/dicas'
      }]
    }
  },
  methods: {
    onTogglePageHeader (): void {
      (this as any).isPageNavOpenOnMobile = !(this as any).isPageNavOpenOnMobile
    }
  }
})
</script>
<style lang="scss">
@import '~decore/sass/2 - helpers/_breakpoints';
@import '~decore/sass/3 - base/_spacing-variables';
@import '~decore/sass/2 - helpers/mixins/_bem-block-element-modifier';

.page {
  display: block;
  position: relative;
  font-family: sans-serif;

  @include element('mobile-backdrop') {
    position: fixed;
    background-color: rgba(0, 0, 0, .75);
    opacity: 0;
    z-index: 2;
    transition: all ease-in-out .25s;

    @include modifier('is-open') {
      right: 0;
      left: 0;
      top: 0;
      bottom: 0;
      opacity: 1;
    }

    @media (min-width: $screen-tablet-min) {
      display: none;
    }
  }

  @include element('above-content') {
    grid-area: above-content;
    display: block;
  }

  @media (min-width: $screen-tablet-min) {
    display: grid;
    grid-template-areas:
      'header header header header'
      'navigation navigation navigation navigation'
      '. above-content above-content .'
      '. content sidebar .'
      '. footer footer .';
    grid-template-columns: 1fr minmax(550px, 1000px) minmax(218px, 280px) 1fr;
    grid-gap: spacing(1);
    position: relative;
    font-family: sans-serif;
  }

}

</style>
