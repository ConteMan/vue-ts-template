<script setup lang="ts">
import BaseLayout from '~/layout/BaseLayout.vue'

type ATarget = '_self' | '_blank' | '_parent' | '_top'
interface navItem {
  name: string
  link: string
  target: ATarget
}
interface socialItem {
  name: string
  link: string
  target: ATarget
  icon?: string
}
interface Data {
  userName: string
  tag: string
  slogan: string
  nav?: navItem[]
  social?: socialItem[]
  createdAt: string
}

const data = reactive<Data>({
  userName: 'ConteMan',
  tag: '间歇性整理控 / 三只猫 / 喜欢晴天 / 爱吃花椒',
  slogan: 'Slow down, not so much to seize',
  createdAt: '2019',
  social: [
    {
      name: 'GitHub',
      link: 'https://github.com/ConteMan',
      target: '_self',
      icon: 'mdi-github',
    },
  ],
})

const { userName, tag, slogan, nav, social, createdAt } = toRefs(data)

const isDark = useDark()
const toggleDark = useToggle(isDark)
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
        <RouterLink to="/hello">
          TO Hello Page
        </RouterLink>
      </div>
    </div>
  </BaseLayout>
</template>

<style scoped>
.copyright svg,.record svg {
  fill: #8c8c8c;
}
</style>
