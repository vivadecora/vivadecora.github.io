<template>
  <nav class="page__nav">
    <ul :class="isOpenOnMobile === false ? 'page__nav__list--is-hidden-on-mobile' : 'page__nav__list' ">
      <li v-for="(category, index) in categories" :key="index" class="page__nav__list__item">
        <NuxtLink v-slot="{ navigate, href }" :to="`/${category.slug}/`" class="page__nav__list__anchor" custom>
          <a :href="href" @click="navigate">{{ category.name }}</a>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    isOpenOnMobile: {
      type: Boolean,
      required: false,
      default: true
    },
    categories: {
      type: Array,
      required: true
    }
  }
})
</script>

<style lang="scss">
@import '~decore/sass/3 - base/spacing-variables';
@import '~decore/sass/3 - base/colors/colors-typography';
@import '~decore/sass/3 - base/colors/colors-backgrounds';
@import '~decore/sass/3 - base/colors/colors-borders';
@import '~decore/sass/2 - helpers/mixins/_bem-block-element-modifier';
@import '~decore/sass/2 - helpers/breakpoints';

.page {
  @include element('nav') {
    grid-area: navigation;
    position: sticky;
    top: 0;
    background-color: $color-background__white;
    z-index: 2;
    width: 280px;

    @media (min-width: $screen-tablet-min) {
      width: 100%;
      border-top: 1px solid $color-border__tertiary--light;
      border-bottom: 1px solid $color-border__tertiary--light;
      box-shadow: 1px 1.732px 5px 0 rgb(235 235 235 / 75%);
    }

    @include element('list') {
      max-width: 1280px;
      margin: 0 auto;
      display: flex;
      flex-wrap: nowrap;
      list-style: none;
      color: $color-typography__primary;
      flex-direction: column;
      position: fixed;
      z-index: 1;
      background-color: #fff;
      top: 0;
      bottom: 0;
      width: 280px;
      padding: 0;
      overflow: auto;
      transition: all ease-in-out .25s;

      @media (min-width: $screen-tablet-min) {
        gap: spacing(1);
        flex-wrap: wrap;
        padding: spacing(2);
        width: 100%;
        flex-direction: row;
        position: relative;
        background-color: $color-background__white;
        overflow: initial;
        justify-content: center;
      }

      @include modifier('is-hidden-on-mobile') {
        transform: translateX(-100%);

        @media (min-width: $screen-tablet-min) {
          display: flex;
          transform: none;
        }
      }

      @include element('item') {
        font-size: 13px;
        letter-spacing: .325px;
        line-height: 1.53;
        text-transform: uppercase;
        padding: 0;
        border-bottom: 1px solid $color-border__tertiary--light;

        @media (min-width: $screen-tablet-min) {
          margin-right: spacing(2);
          border-bottom: 0;
        }
      }

      @include element('anchor') {
        color: inherit;
        text-decoration: none;
        padding: spacing(2);
        display: block;

        @media (min-width: $screen-tablet-min) {
          padding: 0;
        }
      }
    }
  }
}
</style>
