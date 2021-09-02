<template>
  <main class="page__main">
    <slot />
  </main>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    } as PropOptions<String>
  }
})
</script>
<style lang="scss">
@import '~decore/sass/2 - helpers/mixins/_bem-block-element-modifier';
@import '~decore/sass/2 - helpers/_breakpoints';
@import '~decore/sass/3 - base/colors/_colors-typography';
@import '~decore/sass/3 - base/spacing-variables';
@import '~decore/sass/3 - base/colors/_colors-backgrounds';

.page {
  @include element('main') {
    grid-area: content;
    line-height: 1.4;
    color: $color-typography__primary;
    padding: spacing(2);

    @include element('title') {
      color: $color-typography__primary;
      font-size: 32px;
      font-weight: 700;
      letter-spacing: -.6px;
      line-height: 1.25;
      margin: 5px 0 16px;
      padding-bottom: 13px;
      position: relative;

      &::before {
        background-color: $color-background__primary;
        bottom: 0;
        content: "";
        height: 2px;
        margin: 0 auto;
        position: absolute;
        left: 0;
        width: 30px;
      }
    }

  }
}
</style>
