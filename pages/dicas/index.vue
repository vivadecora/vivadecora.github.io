<template>
  <Page>
    <template #main>
      <article-card
        :article="article"
        v-for="(article, index) in articles" :key="index">
      </article-card>
    </template>
  </Page>
</template>

<script lang="ts">
import Vue from 'vue'
import Pagination from '~/components/Pagination/Pagination.vue'
import ArticleCard from '~/components/Article/ArticleCard.vue'

export default Vue.extend({
  components: {
    Pagination,
    ArticleCard
  },
  async asyncData (context: any) {
    const articles = await context.$content('articles').where({ published: true }).fetch()

    return {
      articles
    }
  }
})
</script>

