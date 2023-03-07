<template>
  <div class="container mx-auto bg-gray-100">
    <y-header />
    <router-view />
  </div>
</template>

<script>
import "./tailwind.css";
import yHeader from "@/components/header.vue";
export default {
  name: "App",
  components: {
    yHeader,
  },
};
</script>
<style></style>
