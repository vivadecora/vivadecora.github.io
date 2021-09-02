<template>
  <Page>
    <template #main>
      <h1>
        {{article.title}}
      </h1>
      <nuxt-content :document="article" />
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
