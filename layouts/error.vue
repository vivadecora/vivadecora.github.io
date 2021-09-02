<template>
  <Page>
    <template #main>
      {{ error.statusCode }} Página não encontrada
    </template>
  </Page>
</template>

<script lang="ts">
import Vue from 'vue'
import Page from '~/components/Page/Page.vue'
export default Vue.extend({
  components: {
    Page
  },
  props: {
    error: {
      type: Object,
      default: null
    }
  }
})
</script>
