<template>
  <div class="container mx-auto bg-gray-100">
    <y-header />
    <router-view />
    <div class="col-span-12 mt-10 md:bg-white p-6"><y-footer /></div>
  </div>
</template>

<script>
import "./tailwind.css";
import yHeader from "@/components/header.vue";
import YFooter from "@/components/footer.vue";
export default {
  name: "App",
  components: {
    yHeader,
    YFooter,
  },
};
</script>
<style></style>
