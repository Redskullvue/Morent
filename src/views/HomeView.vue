<template>
  <div
    class="grid grid-cols-12 md:grid-rows-[370px_minmax(250px,_1fr)] m-4 p-2 md:gap-y-10 overflow-hidden"
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
      <button class="text-md font-semibold text-blue-500">View All</button>
    </div>
    <div
      class="col-span-12 flex items-center overflow-y-auto gap-x-3 relative lg:ml-4"
    >
      <slider-product-card v-for="i in 4" :key="i" />
    </div>
    <div class="col-span-12 mt-4 text-md text-gray-400 font-semibold">
      <h2>Recomendation Car</h2>
    </div>
    <div
      class="col-span-12 flex flex-col gap-x-6 gap-y-6 md:flex-row flex-wrap"
    >
      <div v-for="i in 8" :key="i" class="mt-4 flex-auto">
        <mobile-product-card />
      </div>
    </div>
    <div class="col-span-12 mt-4 flex justify-center mb-4">
      <button
        class="bg-blue-600 rounded-md py-2 px-4 text-white hover:bg-blue-700"
      >
        Show More Cars
      </button>
    </div>
  </div>
  <div class="col-span-12 mt-10 md:bg-white p-6"><y-footer /></div>
</template>

<script>
// @ is an alias to /src
import yAdds from "@/components/ads.vue";
import pickDropInfo from "@/components/pickDropInfo.vue";
import sliderProductCard from "@/components/sliderproductcard.vue";
import mobileProductCard from "@/components/mobileproductcard.vue";
import YFooter from "@/components/footer.vue";
export default {
  name: "HomeView",

  components: {
    yAdds,
    pickDropInfo,
    sliderProductCard,
    mobileProductCard,
    YFooter,
  },
};
</script>
