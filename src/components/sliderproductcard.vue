<template>
  <div class="w-full flex items-center">
    <!-- Product Card -->
    <div class="bg-white w-64 p-4 rounded-lg md:w-11/12">
      <!-- Product Card Header -->
      <div class="flex items-center justify-between">
        <h2 class="font-semibold">KoenigSegg</h2>
        <h2><i-heart class="text-red-500" /></h2>
      </div>
      <div><h4 class="text-gray-500">Sport</h4></div>
      <!-- Car-Image -->
      <div class="relative mt-4 lg:mt-8">
        <img
          class="w-48 h-18 ml-4 lg:ml-10"
          src="../assets/images/koenigsegg.png"
          alt="Car Image"
        />
        <div
          class="absolute w-44 h-6 bottom-0 bg-gray-200 opacity-90 blur-md ml-4 lg:ml-10"
        ></div>
      </div>
      <!-- Car Information -->
      <div
        class="flex items-center justify-between text-gray-500 mt-4 mb-4 lg:mt-8"
      >
        <div class="flex items-center">
          <i-clutch />
          90L
        </div>
        <div class="flex items-center">
          <i-clutch />
          Manuel
        </div>
        <div class="flex items-center">
          <i-user />
          2 People
        </div>
      </div>
      <!-- Price And Rent Button -->
      <div class="flex items-center justify-between mt-2 lg:mt-8">
        <h2 class="font-bold text-black">
          $99.00 / <span class="font-semibold text-gray-500 font-sm">day</span>
        </h2>
        <button
          class="bg-blue-600 hover:bg-blue-700 rounded-md py-2 px-4 text-white"
        >
          Rent Now !
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { iHeart, iClutch, iUser } from "./icons/index";
export default {
  name: "sliderProductCard",
  props: ["Name", "Price", "Gas", "Class"],
  components: {
    iHeart,
    iClutch,
    iUser,
  },
};
</script>

<style></style>
