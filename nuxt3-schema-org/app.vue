<script setup>
useSchemaOrg([
  defineWebSite({
    name: "Tim Benniks Press kit",
  }),
  definePerson({
    name: "Tim Benniks",
    image: "/icon.png",
    sameAs: ["https://timbenniks.dev/"],
  }),
  defineArticle({
    // name and description can usually be inferred
    image: "/photos/16x9/photo.jpg",
    datePublished: new Date(2020, 1, 1),
    dateModified: new Date(2020, 1, 1),
  }),
]);
</script>

<template>
  <Head>
    <Title>Friends is fun</Title>
  </Head>
  <img src="/friends.png" alt="Friends" width="600" />
</template>
