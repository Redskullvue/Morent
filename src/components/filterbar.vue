<template>
  <div class="h-screen w-full p-4 bg-white">
    <h4 class="w-full text-gray-400 text-sm">Type</h4>
    <div class="mt-4 flex flex-col gap-y-4">
      <div class="flex items-center">
        <input type="checkbox" class="w-4 h-4" />
        <span class="mx-2 text-slate-500">Sport</span>
        <span class="text-gray-400">(12)</span>
      </div>
      <div class="flex items-center">
        <input type="checkbox" class="w-4 h-4" />
        <span class="mx-2 text-slate-500">SUV</span>
        <span class="text-gray-400">(12)</span>
      </div>
      <div class="flex items-center">
        <input type="checkbox" class="w-4 h-4" />
        <span class="mx-2 text-slate-500">Sedan</span>
        <span class="text-gray-400">(12)</span>
      </div>
      <div class="flex items-center">
        <input type="checkbox" class="w-4 h-4" />
        <span class="mx-2 text-slate-500">Coupe</span>
        <span class="text-gray-400">(12)</span>
      </div>
    </div>

    <!-- This is Capacity Category -->

    <h4 class="w-full text-gray-400 text-sm mt-10">Capacity</h4>
    <div class="mt-4 flex flex-col gap-y-4">
      <div class="flex items-center">
        <input type="checkbox" class="w-4 h-4" />
        <span class="mx-2 text-slate-500">2 Person</span>
        <span class="text-gray-400">(12)</span>
      </div>
      <div class="flex items-center">
        <input type="checkbox" class="w-4 h-4" />
        <span class="mx-2 text-slate-500">4 Person</span>
        <span class="text-gray-400">(12)</span>
      </div>
      <div class="flex items-center">
        <input type="checkbox" class="w-4 h-4" />
        <span class="mx-2 text-slate-500">6 Person</span>
        <span class="text-gray-400">(12)</span>
      </div>
      <div class="flex items-center">
        <input type="checkbox" class="w-4 h-4" />
        <span class="mx-2 text-slate-500">8 Or More</span>
        <span class="text-gray-400">(12)</span>
      </div>
    </div>

    <!-- Pricing Section -->
    <div class="mt-10">
      <h4 class="w-full text-gray-400 text-sm mt-10">Price</h4>
      <input type="range" class="w-full mt-4" v-model="money" />
      <p class="font-bold text-gray-700">Max .${{ money }}.00</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "filterBar",
  data() {
    return {
      money: 100,
    };
  },
};
</script>

<style></style>
