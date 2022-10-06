<script setup>
const { data: friends } = await useFetch("/api/friends");
</script>

<template>
  <pre>{{ friends }}</pre>
</template>
