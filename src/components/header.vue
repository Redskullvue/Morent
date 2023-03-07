<template>
  <div class="my-8 bg-white w-full px-8 py-2">
    <!-- MobileHeader Logo And Profile -->
    <div class="flex items-center justify-between p-2 mb-4">
      <div class="flex items-center flex-auto">
        <h1 class="text-blue-500 font-bold text-3xl">Morent</h1>
        <search-bar class="md:block px-2 hidden mx-10 w-1/2" />
      </div>
      <div class="flex items-center gap-x-5">
        <!-- Buttons For Desktop mod -->
        <div
          class="hidden md:block ring-2 ring-gray-200 p-1 rounded-full cursor-pointer transition-colors duration-500 hover:text-blue-500 hover:ring-blue-500"
        >
          <i-bell />
        </div>

        <div
          class="hidden md:block ring-2 ring-gray-200 p-1 rounded-full cursor-pointer transition-colors duration-500 hover:text-blue-500 hover:ring-blue-500"
        >
          <i-heart />
        </div>
        <div
          class="hidden md:block ring-2 ring-gray-200 p-1 rounded-full cursor-pointer transition-colors duration-500 hover:text-blue-500 hover:ring-blue-500"
        >
          <i-setting />
        </div>
        <!-- Profile Image -->
        <div>
          <img
            class="w-8 h-8 rounded-full md:w-10 md:h-10"
            src="../assets/images/Profile.png"
            alt="profile"
          />
        </div>
      </div>

      <!-- Search Bar and Filtering -->
    </div>
    <div class="p-2">
      <search-bar class="md:hidden" />
    </div>
  </div>
</template>

<script>
import searchBar from "./searchbar.vue";
import { iSetting, iBell, iHeart } from "./icons/index";
export default {
  name: "YHeader",
  components: {
    searchBar,
    iSetting,
    iBell,
    iHeart,
  },
};
</script>

<style scoped></style>
