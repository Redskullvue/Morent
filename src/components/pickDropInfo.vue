<template>
  <div
    class="flex flex-col md:flex-row items-center md:items-center md:justify-between gap-x-4 gap-y-2 relative mt-10"
  >
    <div class="bg-white flex-auto p-4 shadow-lg w-full rounded-xl">
      <h3 class="text-slate-800 font-bold mb-2">Pick-up</h3>
      <div class="flex items-center justify-between">
        <div>
          <h4 class="px-1">Locations</h4>
          <select class="form-select border-0">
            <option>Select City</option>
          </select>
        </div>
        <div>
          <h4 class="px-1">Date</h4>
          <select class="form-select border-0">
            <option>20/June/2023</option>
          </select>
        </div>
        <div>
          <h4 class="px-1">Time</h4>
          <select class="form-select border-0">
            <option>19:00</option>
          </select>
        </div>
      </div>
    </div>
    <button
      class="bg-blue-600 -my-6 z-10 w-16 h-16 md:w-40 hover:shadow-blue-700 hover:bg-blue-600 text-white flex items-center justify-center rounded-lg shadow-lg shadow-blue-500"
    >
      <i-switch />
    </button>
    <div class="bg-white flex-auto p-4 shadow-lg w-full rounded-xl">
      <h3 class="text-slate-800 font-bold">Drop-Off</h3>
      <div class="flex items-center justify-between">
        <div>
          <h4 class="px-1">Locations</h4>
          <select class="form-select border-0">
            <option>Select City</option>
          </select>
        </div>
        <div>
          <h4 class="px-1">Date</h4>
          <select class="form-select border-0">
            <option>20/June/2023</option>
          </select>
        </div>
        <div>
          <h4 class="px-1">Time</h4>
          <select class="form-select border-0">
            <option>19:00</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { iSwitch } from "./icons/index";
export default {
  name: "pickDropInfo",
  components: {
    iSwitch,
  },
};
</script>

<style></style>
