<template>
  <div>
    <!-- Footer Header -->
    <div
      class="flex flex-col md:flex-row md:items-start items-center justify-between md:border-b-2 border-gray-100"
    >
      <div class="w-full md:mt-6 md:mr-24">
        <h1 class="text-blue-500 font-bold text-3xl mb-4">Morent</h1>
        <h4 class="w-3/4 text-sm text-gray-400">
          Our vision is to provide convenience and help increase your sales
          business.
        </h4>
      </div>
      <!-- Footer Items -->
      <div
        class="w-full mt-8 flex items-center justify-between mb-4 md:justify-end md:mt-4 md:w-11/12 md:ml-10 md:gap-x-10"
      >
        <div class="ml-1">
          <h2 class="font-bold text-lg mb-4">About</h2>
          <ul class="text-sm text-gray-400 flex flex-col gap-y-3">
            <li>How it Works</li>
            <li>Featured</li>
            <li>PartnerShip</li>
            <li>Bussiness Relation</li>
          </ul>
        </div>
        <div class="mr-5">
          <h2 class="font-bold text-lg mb-4">Socials</h2>
          <ul class="text-sm text-gray-400 flex flex-col gap-y-3 items-start">
            <li>Discord</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>FaceBook</li>
          </ul>
        </div>
      </div>
      <div class="w-full mt-8 md:mt-4 md:ml-10">
        <div>
          <h2 class="font-bold text-lg mb-4">Community</h2>
          <ul class="text-sm text-gray-400 flex flex-col gap-y-3 items-start">
            <li>Events</li>
            <li>Blogs</li>
            <li>PodCast</li>
            <li>Invite a Friend</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex flex-col md:flex-row">
      <div class="w-full mt-6 text-xs">©2022 MORENT. All rights reserved</div>
      <div
        class="w-full mt-10 mb-4 flex items-center justify-between font-bold text-xs md:mt-6 md:justify-end gap-x-4"
      >
        <div>Privacy & Policy</div>
        <div>Terms & Condition</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "YFooter",
};
</script>

<style></style>
