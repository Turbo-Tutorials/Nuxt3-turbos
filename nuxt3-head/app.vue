<script setup>
const title = ref("Friends");

useHead({
  titleTemplate: (title) => `Nuxt 3 likes ${title}`,
  bodyAttrs: {
    class: "friends",
  },
});
</script>

<template>
  <Head>
    <Title>{{ title }}</Title>
  </Head>
  <img src="/friends.png" alt="Friends" width="600" />
</template>
