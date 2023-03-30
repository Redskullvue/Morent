<template>
  <div
    class="flex items-center p-2 justify-center flex-col lg:grid grid-cols-12 lg:grid-rows-[410px_minmax(250px,_1fr)] gap-x-4 gap-y-4"
  >
    <!-- Sider Bar Filter -->
    <div
      class="col-span-3 hidden bg-white row-span-full rounded-2xl lg:block sticky top-0"
    >
      <filter-bar />
    </div>
    <div class="p-4 flex-col flex lg:col-span-5">
      <img
        src="../assets/images/Ad1.png"
        alt="Car"
        class="rounded-xl lg:w-full lg:h-72"
      />
      <div class="flex items-center justify-between lg:justify-between mt-5">
        <img
          src="../assets/images/interior.png"
          alt=""
          class="w-24 h-16 lg:w-32 lg:h-28 rounded-xl ring-2 ring-offset-2 ring-blue-400"
        />
        <img
          src="../assets/images/interior2.png"
          alt=""
          class="w-24 h-16 lg:w-32 lg:h-28 rounded-xl ring-2 ring-offset-2 ring-blue-400"
        />
        <img
          src="../assets/images/Ad1.png"
          alt=""
          class="w-24 h-16 lg:w-32 lg:h-28 rounded-xl ring-2 ring-offset-2 ring-blue-400"
        />
      </div>
    </div>
    <!-- Car Info -->
    <div
      class="w-full h-full bg-white rounded-lg p-10 flex flex-col lg:col-span-4"
    >
      <!-- Mobile Header -->
      <div>
        <h2 class="font-bold lg:text-lg">Nissan GT-R</h2>
        <p class="text-xs lg:text-md font-semibold text-gray-400">+10 Review</p>
      </div>
      <!-- Car Description -->
      <div class="mt-4 lg:mt-8">
        <p class="text-sm lg:text-md font-semibold text-gray-400">
          NISMO has become the embodiment of Nissan's outstanding performance,
          inspired by the most unforgiving proving ground, the "race track".
        </p>
      </div>
      <div class="mt-6 flex-col flex lg:mt-10">
        <div class="flex items-center justify-between">
          <h4 class="text-gray-400 text-md font-semibold">
            Type Car : <span class="text-black text-sm">Sport</span>
          </h4>
          <h4 class="text-gray-400 text-md font-semibold">
            Capacity : <span class="text-black text-sm">2 Person</span>
          </h4>
        </div>
        <div class="flex items-center justify-between mt-2">
          <h4 class="text-gray-400 text-md font-semibold">
            Gasoline : <span class="text-black text-sm">70 L</span>
          </h4>
          <h4 class="text-gray-400 text-md font-semibold">
            Shifter : <span class="text-black text-sm"> Manual</span>
          </h4>
        </div>
      </div>
      <div class="flex items-center justify-between mt-8 lg:mt-10">
        <h2 class="font-bold text-black">
          $99.00 / <span class="font-semibold text-gray-500 font-sm">day</span>
        </h2>
        <button
          class="bg-blue-600 rounded-md py-3 px-5 text-lg text-white hover:bg-blue-700"
          @click="goTo"
        >
          Rent Now !
        </button>
      </div>
    </div>
    <div
      class="w-full h-80 bg-white rounded-lg p-4 mt-5 flex flex-col col-span-8 col-start-4 col-end-13 overflow-y-scroll"
    >
      <h1 class="font-bold text-lg">
        Reviews
        <span class="bg-blue-600 ml-4 rounded-lg text-white px-3 py-1">13</span>
      </h1>
      <!-- Review PRofile -->
      <div v-for="i in 13" :key="i">
        <div class="mt-6 flex items-start justify-between">
          <div class="flex items-center">
            <img
              class="w-8 h-8 rounded-full md:w-10 md:h-10"
              src="../assets/images/Profile.png"
              alt="profile"
            />
            <div class="ml-4">
              <h2 class="font-bold">Alex Burbachov</h2>
              <h4 class="text-sm text-gray-400">CEO at BlueWhale</h4>
            </div>
          </div>
          <div class="text-sm font-light text-gray-400">21 July 2022</div>
        </div>
        <p class="text-gray-400 font-semibold text-sm mt-2">
          We are very happy with the service from the MORENT App. Morent has a
          low price . . .
        </p>
      </div>
    </div>
    <div
      class="px-2 text-start mt-4 flex items-center justify-between w-full col-span-9 col-start-4"
    >
      <div class="text-gray-400 font-semibold">Recent Cars</div>
      <button class="text-blue-600 font-semibold">View All</button>
    </div>
    <div class="w-full col-start-4 col-end-13">
      <div
        class="mt-4 flex items-center overflow-y-auto gap-x-3 relative lg:ml-14 lg:overflow-visible w-11/12"
      >
        <slider-product-card v-for="i in 3" :key="i" />
      </div>
    </div>
  </div>
</template>

<script>
import sliderProductCard from "../components/sliderproductcard.vue";
import filterBar from "@/components/filterbar.vue";
export default {
  name: "singleCar",
  components: {
    sliderProductCard,
    filterBar,
  },
};
</script>

<style></style>
