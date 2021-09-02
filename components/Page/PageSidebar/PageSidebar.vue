<template>
  <aside
    class="page__sidebar"
    role="complementary"
    itemscope="itemscope"
    itemtype="http://schema.org/WPSideBar"
  >
    <section class="page__sidebar__widget">
      <h3 class="page__sidebar__title">
        Sidebar Widget
      </h3>
    </section>
    <section
      v-if="posts.length > 0"
      class="page__sidebar__widget"
    >
    </section>
    <slot />
  </aside>
</template>

<script type="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    posts: {
      type: Array,
      required: false,
      default: () => []
    }
  }
})
</script>

<style lang="scss">
@import '~decore/sass/2 - helpers/mixins/_bem-block-element-modifier';
@import '~decore/sass/2 - helpers/_breakpoints';
@import '~decore/sass/3 - base/spacing-variables';

.page {
  @include element('sidebar') {
    grid-area: sidebar;
    padding-right: spacing(2);
    padding-left: spacing(2);

    @media (min-width: $screen-tablet-min) {
      padding-left: spacing(1);
      position: sticky;
      top: 90px;
      height: min-content;
    }

    @include element('widget') {
      margin-top: spacing(2);
    }

  }
}

</style>
