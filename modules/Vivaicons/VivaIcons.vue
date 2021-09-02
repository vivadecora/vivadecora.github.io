<template>
  <svg
    v-if="icon !== null"
    class="viva-icon"
    :width="icon.width"
    :height="icon.height"
    :viewBox="icon.viewBox"
    :style="`font-size: ${fontSize};fill:currentColor;`"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path :d="icon.path" />
  </svg>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import VivaIconsLib from './VivaIconsLib'

interface VivaIconInterface {
  name: string;
  height: string;
  viewBox: string;
  width: string;
  path: string;
}

type AcceptableSizes = 'small' | 'medium' | 'large';

export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: false,
      default: 'medium'
    } as PropOptions<AcceptableSizes>
  },
  data () {
    const icon: VivaIconInterface = VivaIconsLib.getIcon(this.name) as VivaIconInterface

    const fontSize: any = {
      small: '15px',
      medium: '20px',
      large: '30px'
    }

    return {
      icon,
      fontSize: fontSize[this.size]
    }
  }
})
</script>
<style>
.viva-icon {
  width: 1em;
  height: auto;
}
</style>
