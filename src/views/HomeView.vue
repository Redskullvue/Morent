<template>
  <div
    class="grid grid-cols-12 md:grid-rows-[370px_minmax(300px,_1fr)] m-4 p-2 md:gap-y-10"
  >
    <div class="col-span-12">
      <y-adds add1="Ad1" add2="Ad2" />
    </div>
    <div class="col-span-12">
      <pick-drop-info />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import yAdds from "@/components/ads.vue";
import pickDropInfo from "@/components/pickDropInfo.vue";
export default {
  name: "HomeView",
  components: {
    yAdds,
    pickDropInfo,
  },
};
</script>
