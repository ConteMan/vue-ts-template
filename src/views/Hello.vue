<script setup lang="ts">
import BaseLayout from '~/layout/BaseLayout.vue'
</script>

<template>
  <BaseLayout>
    <div
      class="nav-container"
      h="[32px]"
      mt="[16px]"
      flex="~ grow-0 shrink-0 wrap" justify-start items-center
      space="x-[16px]"
      underline decoration="2 offset-4"
    >
      <div
        uppercase
        hover:text="red-600"
        hover:decoration="red-600"
      >
        <RouterLink to="/">
          TO Home Page
        </RouterLink>
      </div>
    </div>
    <HelloWorld msg="Hello World" />
  </BaseLayout>
</template>
