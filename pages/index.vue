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
  async asyncData () {
    return {
    }
  }
})
</script>
