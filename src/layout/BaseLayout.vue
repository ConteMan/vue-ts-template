<script setup lang="ts">
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
  logo: string
  siteName: string
  userName: string
  tag: string
  slogan: string
  nav?: navItem[]
  social?: socialItem[]
  createdAt: string
}

const data = reactive<Data>({
  logo: '/images/logo.gif',
  siteName: 'Conte World',
  userName: 'ConteMan',
  tag: '间歇性整理控 / 三只猫 / 喜欢晴天 / 爱吃花椒',
  slogan: 'Slow down, not so much to seize',
  createdAt: '2019',
  nav: [
    {
      name: 'Wiki',
      link: 'https://conteworld.notion.site/',
      target: '_blank',
    },
  ],
  social: [
    {
      name: 'GitHub',
      link: 'https://github.com/ConteMan',
      target: '_self',
      icon: 'mdi-github',
    },
  ],
})

const { logo, siteName, userName, tag, slogan, nav, social, createdAt } = toRefs(data)

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div
    w-full max-w="[800px]"
    h="screen"
    pb="[24px]"
    flex="~ col"
    text="[14px]"
  >
    <div
      max-h="[200px]"
      min-h="[24px]"
      flex="grow-1 shrink-1"
    />
    <div
      w="[80px]"
      h="[80px]"
      flex justify-center items-center
    >
      <img :src="logo" w="[80px]" h="[80px]">
    </div>

    <div
      h="[32px]"
      mt="[24px]"
      flex="~ grow-0 shrink-0" items-center
    >
      <span>Welcome to</span>
      <span uppercase font-bold ml-1> {{ siteName }}</span>
    </div>
    <div
      h="[32px]"
      flex="~ grow-0 shrink-0" items-center
      text="[13px]"
    >
      {{ tag }}
    </div>
    <div
      h="[32px]"
      flex="~ grow-0 shrink-0 wrap" items-center
    >
      <span uppercase font-bold mr-1>{{ userName }}</span>
      <span>said</span>
      <div uppercase ml-1 mr-1 font-italic>
        "{{ slogan }}"
      </div>
    </div>
    <slot />

    <div mt="[24px]" pb="[24px]">
      <div
        class="copyright"
        leading="[12px]"
      >
        <svg width="300" height="12">
          <text dominant-baseline="baseline" font-size="10" y="10" x="0" text-anchor="start">
            CODE && DESIGN BY {{ userName.toUpperCase() }} © {{ createdAt }} - 2022
          </text>
        </svg>
      </div>
    </div>
  </div>
</template>

  <style scoped>
  .copyright svg,.record svg {
    fill: #8c8c8c;
  }
  </style>

