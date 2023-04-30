<template>
  <div
    class="grid grid-cols-12 md:grid-rows-[360px_minmax(250px,_1fr)] m-4 p-2 md:gap-y-10 overflow-hidden"
  >
    <div class="col-span-12">
      <y-adds add1="Ad1" add2="Ad2" />
    </div>
    <div class="col-span-12">
      <pick-drop-info />
    </div>
    <div
      class="flex items-center justify-between mb-4 col-span-12 mt-10 md:mt-0"
    >
      <h2 class="text-md font-semibold text-gray-400">Popular Cars</h2>
      <router-link to="/all"
        ><button class="text-md font-semibold text-blue-500">
          View All
        </button></router-link
      >
    </div>
    <div class="col-span-12 flex items-center overflow-y-auto gap-x-6 relative">
      <slider-product-card v-for="i in 4" :key="i" />
    </div>
    <div class="col-span-12 mt-4 text-md text-gray-400 font-semibold">
      <h2>Recomendation Car</h2>
    </div>
    <div class="col-span-12 gap-x-6 gap-y-6 md:flex-row md:flex flex-wrap">
      <div
        v-for="(car, index) in carsData"
        :key="carsData[car]"
        class="mt-4 flex-auto"
      >
        <mobile-product-card
          v-if="index <= showList"
          :Brand="car.Make_Name"
          :Model="car.Model_Name"
          :Price="car.Model_ID"
        />
      </div>
    </div>
    <div class="col-span-12 mt-8 flex justify-center mb-4">
      <button
        class="bg-blue-600 w-28 rounded-md py-2 px-4 text-white hover:bg-blue-700"
        @click="showMore"
      >
        <p v-if="!showMoreCars">More Cars</p>
        <y-loading v-if="showMoreCars" />
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import yAdds from "@/components/ads.vue";
import pickDropInfo from "@/components/pickDropInfo.vue";
import sliderProductCard from "@/components/sliderproductcard.vue";
import mobileProductCard from "@/components/mobileproductcard.vue";
import yLoading from "@/components/loading.vue";
import axios from "axios";
export default {
  name: "HomeView",
  components: {
    yAdds,
    pickDropInfo,
    sliderProductCard,
    mobileProductCard,
    yLoading,
  },
  mounted() {
    axios
      .get(
        "https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/BMW?format=json&"
      )
      .then((res) => {
        console.log(res);
        this.carsData = res.data.Results;
      });
  },
  data() {
    return {
      showMoreCars: false,
      carsData: [],
      showList: 8,
    };
  },
  methods: {
    showMore() {
      this.showMoreCars = true;
      setTimeout(() => {
        this.showList = this.showList + 10;
      }, 2000);
      setTimeout(() => {
        this.showMoreCars = false;
      }, 2000);
    },
  },
};
</script>
