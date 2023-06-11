<script setup lang="ts">
import { storeToRefs } from "pinia";

const friendsStore = useFriendsStore();
const { characters } = storeToRefs(friendsStore);

function addJoey() {
  friendsStore.addCharacter("Joey", "How you doin?");
}

const line = friendsStore.getLineByName("Ross");
</script>
<template>
  <button @click="addJoey">Add Joey</button>

  <pre>{{ line }}</pre>
</template>
