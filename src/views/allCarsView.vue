<template>
  <div
    class="p-1 mx-1 grid-cols-12 lg:grid lg:grid-rows-[240px_minmax(250px,_1fr)]"
  >
    <div class="hidden lg:block col-span-3 row-start-1 sticky mt-20">
      <filter-bar class="rounded-lg" />
    </div>
    <pick-drop-info class="col-start-4 col-end-13 ml-3 row-start-1" />
    <div
      class="mt-6 col-start-4 col-end-13 flex items-center flex-wrap flex-row justify-start gap-x-10 lg:ml-3"
    >
      <mobile-product-card v-for="i in 10" :key="i" class="my-4 flex-auto" />
    </div>
    <div class="flex justify-center w-full col-start-4 col-end-13">
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
import pickDropInfo from "@/components/pickDropInfo.vue";
import mobileProductCard from "@/components/mobileproductcard.vue";
import yLoading from "@/components/loading.vue";
import filterBar from "@/components/filterbar.vue";
export default {
  name: "allCarsView",
  components: {
    pickDropInfo,
    mobileProductCard,
    yLoading,
    filterBar,
  },
  data() {
    return {
      showMoreCars: false,
    };
  },
  methods: {
    showMore() {
      this.showMoreCars = true;
      setTimeout(() => {
        this.showMoreCars = false;
      }, 5000);
    },
  },
};
</script>

<style></style>
