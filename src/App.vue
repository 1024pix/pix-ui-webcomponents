<script setup>
import './index.js'

function myClickFunction() {
  window.alert('This is myClickFunction')
}
</script>

<template>
  <form>
    <div>
      <pix-button>Button par défaut</pix-button>
    </div>
    <div>
      <pix-button type="button" backgroundColor="green" @click="myClickFunction"
        >Button button</pix-button
      >
    </div>
    <div>
      <pix-button type="submit" backgroundColor="green">Button submit</pix-button>
    </div>
  </form>
</template>
