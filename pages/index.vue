<template>
  <Page>
    <template v-if="false">
      <section class="page__above-content">
        Acima da borda
      </section>
    </template>
    <template #main>
      <h1>
        Olá mundo
      </h1>
      <div v-for="(article, index) in articles" :key="index">
        {{article.title}}
      </div>
    </template>
  </Page>
</template>

<script lang="ts">
import Vue from 'vue'
import Pagination from '~/components/Pagination/Pagination.vue'

export default Vue.extend({
  components: {
    Pagination
  },
  async asyncData (context: any) {
    const articles = await context.$content('articles').where({ published: true }).fetch()

    return {
      articles
    }
  }
})
</script>
