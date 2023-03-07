<template>
  <div class="flex items-center justify-between">
    <!-- SearchBar -->
    <div
      class="rounded-lg flex items-center border-2 border-gray-200 flex-auto mr-4"
    >
      <i-search class="mx-2 text-gray-500" />
      <input
        class="p-2 outline-none w-full"
        placeholder="Search Somthing Here"
      />
    </div>
    <!-- Filter Button -->
    <button class="rounded-lg border-2 border-gray-200 p-2 md:hidden">
      <i-filter class="text-gray-500" />
    </button>
  </div>
</template>

<script>
import { iSearch, iFilter } from "./icons/index";
export default {
  name: "searchBar",
  components: {
    iSearch,
    iFilter,
  },
};
</script>

<style></style>
