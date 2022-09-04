<script setup lang="ts">
defineProps({
  msg: {
    type: String,
    default: 'Empty',
    required: false,
  },
})
</script>

<template>
  <div text="red" font-bold mt-4 flex items-center>
    <span>{{ msg }}</span>
  </div>
  <div />
</template>

<style scoped>
</style>
