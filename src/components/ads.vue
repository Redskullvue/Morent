<template>
  <div class="w-full flex gap-8 mb-4">
    <div class="w-full md:w-1/2">
      <img class="rounded-xl" :src="require(`@/assets/images/${add1}.png`)" />
    </div>
    <div class="w-1/2 hidden md:block">
      <img class="rounded-xl" :src="require(`@/assets/images/${add2}.png`)" />
    </div>
  </div>
</template>

<script>
export default {
  name: "yAdds",
  props: {
    add1: String,
    add2: String,
  },
};
</script>

<style></style>
