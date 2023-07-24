<script setup>
import {ref} from 'vue'

const button = ref()

defineProps({
  type: {
    type: String,
    //required: true,
  },
})

function triggerAction(event) {
  console.log('triggerAction')
  button.value.getRootNode().host.closest('form')
    .dispatchEvent(new Event('submit', {cancelable: true}))
  //button.value.dispatchEvent(new Event('submit', {cancelable: true, composed: true}))
  console.log('Done')
}
</script>

<template>
  <button ref="button" v-bind:type="type" @click="triggerAction">
    <slot></slot>
  </button>
</template>

<style>
button {
  background-color: red;
}
</style>
