<script setup>
const { data: friends } = await useFetch("/api/friends");
</script>

<template>
  <main>
    <h1>I am dynamically rendered</h1>
    <pre>{{ friends }}</pre>
  </main>
</template>
