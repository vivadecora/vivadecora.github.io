<template>
  <footer class="page__footer">
    <p class="page__footer__copyrights">
      Copyrights © {{ currentYear }} Viva Decora
    </p>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      currentYear: new Date().getFullYear()
    }
  }
})
</script>

<style lang="scss">
@import '~decore/sass/2 - helpers/mixins/_bem-block-element-modifier';
@import '~decore/sass/3 - base/colors/_colors-typography';
@import '~decore/sass/3 - base/spacing-variables';
@import '~decore/sass/3 - base/colors/_colors-backgrounds';

.page {
  @include element('footer') {
    grid-area: footer;

    @include element('copyrights') {
      position: relative;
      padding: spacing(2);
      font-size: 14px;
      text-align: center;
      color: $color-typography__tertiary--light;

      &::before {
        background-color: $color-background__x-light;
        content: '';
        height: 2px;
        position: absolute;
        margin: 0 auto;
        left: 0;
        right: 0;
        top: 0;
        width: 30px;
      }
    }
  }
}
</style>
