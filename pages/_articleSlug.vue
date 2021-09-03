<template>
  <Page>
    <template #main>
      <article class="article">
        <h1 class="article__title">
          {{article.title}}
        </h1>
        <nuxt-content :document="article" class="article__content" />
      </article>
    </template>
  </Page>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData (context: any) {
    const articles: any[] = await context.$content('articles')
      .where({ slug: context.params.articleSlug, published: true })
      .fetch()

    return {
      article: articles[0]
    }
  }
})
</script>
<style lang="scss">
@import '~decore/sass/2 - helpers/mixins/_bem-block-element-modifier';
@import '~decore/sass/3 - base/colors/_colors-typography';
@import '~decore/sass/3 - base/colors/_colors-backgrounds';
@import '~decore/sass/3 - base/colors/_colors-borders';
@import '~decore/sass/3 - base/spacing-variables';

.article {
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

    @include element('anchor') {
      text-decoration: none;
      color: inherit;
    }
  }

  @include element('content') {
    border-bottom: 1px solid $color-border__tertiary;
    padding-bottom: spacing(2);
    margin-bottom: spacing(2);

    p {
      color: $color-typography__primary;
      line-height: 24px;
      font-size: 16px;
      font-weight: 400;
      margin: .5rem 0;
    }

    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 1rem 0;
      font-family: inherit;
      font-weight: 500;
      line-height: 1.1;
      color: $color-typography__primary;
    }

    a {
      color: $color-typography__secundary;
    }

    ul {
      margin: 1rem 0;
    }

    textarea {
      max-width: 100%;
    }
  }
}
</style>
