<template>
  <div>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe :src="`https://www.googletagmanager.com/ns.html?id=${gtmId}`"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      gtmId: 'GTM-KG4VTKG'
    }
  },
  head () {
    return {
      script: [{
        innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${(this as any).gtmId}')`
      }]
    }
  }
})

</script>

<style lang="scss">
  * {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, sans-serif;
    letter-spacing: -0.23px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  ::after,
  ::before {
    box-sizing: border-box;
    margin: 0;
  }

  body img {
    max-width: 100%;
  }
</style>
