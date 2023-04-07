<template>
  <div class="w-full bg-white rounded-lg p-4">
    <!-- Product Card Header -->
    <div class="flex items-center justify-between">
      <h2 class="font-semibold">KoenigSegg</h2>
      <h2><i-heart class="text-red-500" /></h2>
    </div>
    <div><h4 class="text-gray-500">Sport</h4></div>
    <!-- Car-Image -->
    <div class="flex items-center justify-between">
      <div class="relative mt-4 lg:mt-8 flex items-center justify-center">
        <img
          class="w-48 h-18"
          src="../assets/images/koenigsegg.png"
          alt="Car Image"
        />
        <div
          class="absolute w-44 h-6 bottom-0 bg-gray-200 opacity-90 blur-md"
        ></div>
      </div>
      <div
        class="flex flex-col justify-center gap-y-4 text-gray-500 mt-4 mb-4 lg:mt-8"
      >
        <div class="flex items-center text-sm">
          <i-clutch />
          90L
        </div>
        <div class="flex items-center text-sm">
          <i-clutch />
          Manuel
        </div>
        <div class="flex items-center text-sm">
          <i-user />
          2 People
        </div>
      </div>
    </div>
    <div class="flex items-center justify-between mt-2 lg:mt-8">
      <h2 class="font-bold text-black">
        $99.00 / <span class="font-semibold text-gray-500 font-sm">day</span>
      </h2>
      <button
        class="bg-blue-600 rounded-md py-2 px-4 text-white hover:bg-blue-700"
        @click="goTo"
      >
        Rent Now !
      </button>
    </div>
  </div>
</template>

<script>
import { iHeart, iClutch, iUser } from "./icons/index";
export default {
  name: "mobileProductCard",
  components: {
    iHeart,
    iClutch,
    iUser,
  },
  methods: {
    goTo() {
      this.$router.push({
        name: "singleCar",
        params: { data: "KoenigSegg" },
      });
    },
  },
};
</script>

<style></style>
