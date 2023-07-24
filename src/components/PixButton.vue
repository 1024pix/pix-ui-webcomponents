<script setup>
defineProps({
  type: {
    type: String,
    //required: true,
  },
})
</script>

<template>
  <button v-bind:type="type">
    <slot></slot>
  </button>
</template>

<style>
button {
  background-color: red;
}
</style>
