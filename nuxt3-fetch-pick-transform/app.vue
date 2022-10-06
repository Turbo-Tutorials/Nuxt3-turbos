<script setup>
const { data: friends } = await useFetch("/api/friends", {
  transform: (response) => {
    const res = [];

    for (const person in response) {
      res.push({ name: person, message: response[person] });
    }

    return res;
  },
});
</script>

<template>
  <pre>{{ friends }}</pre>
</template>
