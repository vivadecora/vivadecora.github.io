<template>
  <div class="article-card">
    <h2 class="article-card__title">
      <nuxt-link :to="`/${article.slug}`" class="article-card__link">
        {{article.title}}
      </nuxt-link>
    </h2>
    <nuxt-content class="article-card__excerpt" :document="{body: article.excerpt}" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    article: {
      type: Object,
      required: true
    }
  }
})
</script>
<style lang="scss">
@import '~decore/sass/2 - helpers/mixins/_bem-block-element-modifier';

.article-card {
  margin-bottom: 40px;

  @include element('link') {
    text-decoration: none;
    color: inherit;
  }

  @include element('title') {
    font-size: calc(1.225rem + 1vw);
    position: relative;
    margin: 0 0 40px 0;
    color: #333;

    &::after {
      content: "";
      position: absolute;
      width: 110px;
      background-color: #ff5656;
      height: 2px;
      left: 0;
      bottom: -10px;
    }
  }

  @include element('excerpt') {
    font-size: calc(0.825rem + .3vw);
    line-height: 1.5;
  }
}
</style>
