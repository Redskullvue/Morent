<template>
  <div class="w-15 h-15 rounded-full flex items-center justify-center">
    <i-loading class="animate-spin" />
    <p class="text-xs font-bold">Loading</p>
  </div>
</template>

<script>
import { iLoading } from "./icons/index";
export default {
  name: "YLoading",
  components: {
    iLoading,
  },
};
</script>

<style></style>
