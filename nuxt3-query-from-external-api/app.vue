<script setup>
const limit = ref(2);

const {
  data: talks,
  pending,
  refresh,
} = await useAsyncData("talks", () =>
  $fetch(
    `https://timbenniks-compositions.vercel.app/api/talks?limit=${limit.value}`
  )
);

function seeAll() {
  limit.value = 200;
  refresh();
}
</script>

<template>
  <div>
    <template v-if="pending">Loading talks...</template>
    <template v-else>
      <p><button @click="seeAll">Load all talks</button></p>
      <p>Showing {{ talks.items.length }} talks</p>
      <pre>{{ talks.items }}</pre>
    </template>
  </div>
</template>
