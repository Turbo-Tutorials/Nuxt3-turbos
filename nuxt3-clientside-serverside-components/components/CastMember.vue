<script lang="ts" setup>
export interface Props {
  line: string;
  name: string;
}

defineProps<Props>();
</script>

<template>
  <p>{{ name }} - {{ line }}</p>
</template>
