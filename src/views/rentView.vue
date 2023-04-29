<template>
  <div class="flex flex-col justify-center grid-cols-12 md:grid">
    <!-- 2Divs one for Rent Summary the oth er for the form -->
    <div
      class="bg-white px-4 py-4 mx-4 rounded-lg col-start-9 col-end-13 row-start-1 md:mt-6"
    >
      <div class="flex flex-col justify-center">
        <h2 class="font-bold text-md mb-2">Rental Summary</h2>
        <h4 class="text-sm text-gray-500">
          Prices may change depending on the length of the rental and the price
          of your rental car.
        </h4>
      </div>
      <!-- Car INformation -->
      <div class="flex items-center mt-4 mb-10 border-b-2 py-4">
        <div class="w-36">
          <img
            src="../assets/images/Ad1.png"
            alt="Picture"
            class="rounded-lg"
          />
        </div>
        <div class="flex flex-col justify-around ml-4 h-20">
          <h2 class="font-bold text-md">Nissan GT-R</h2>
          <h4 class="font-bold text-sm text-blue-400">Good</h4>
          <h4 class="text-sm text-gray-400">+440 Reviews</h4>
        </div>
      </div>
      <div class="flex items-center justify-between mb-2">
        <h2 class="text-md text-gray-400 font-semibold">SubTotal</h2>
        <h2 class="font-bold">$99.00</h2>
      </div>
      <div class="flex items-center justify-between">
        <h2 class="text-md text-gray-400 font-semibold">Tax</h2>
        <h2 class="font-bold">$0.00</h2>
      </div>
      <div
        class="bg-gray-200 w-full rounded-lg px-2 py-2 mt-6 flex justify-between mb-6"
      >
        <input
          type="text"
          class="bg-gray-200 text-sm outline-none"
          placeholder="Apply Promo Code"
        />
        <button class="font-bold text-sm">Apply Now</button>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex flex-col">
          <div>
            <h1 class="font-bold text-lg">Total Rental Price</h1>
          </div>
          <div class="text-sm text-gray-400 mt-2">
            <h4>OverAll Rental Price</h4>
          </div>
        </div>
        <h4 class="font-bold text-xl">$99.00</h4>
      </div>
    </div>
    <!-- The Form -->
    <div
      class="bg-white flex flex-col justify-center mt-6 px-4 py-4 mx-4 rounded-lg col-start-1 col-end-9 row-start-1"
    >
      <div class="flex items-center justify-between">
        <h2 class="font-bold text-md">Billing Info</h2>
        <h4 class="text-sm text-gray-400">Step 1 of 4</h4>
      </div>
      <div class="text-sm text-gray-400 mt-1">
        Please enter your billing info
      </div>
      <form class="flex flex-col justify-center mt-4">
        <label class="font-bold mb-2">Name</label>
        <input
          type="text"
          placeholder="Your Name"
          class="p-4 bg-gray-100 rounded-lg"
        />
        <label class="font-bold mb-2 mt-4">Address</label>
        <input
          type="text"
          placeholder="Address"
          class="p-4 bg-gray-100 rounded-lg"
        />
        <label class="font-bold mb-2 mt-4">Phone Number</label>
        <input
          type="text"
          placeholder="Your Phone Number  "
          class="p-4 bg-gray-100 rounded-lg"
        />
        <label class="font-bold mb-2 mt-4">Town/City</label>
        <input
          type="text"
          placeholder="Town/City"
          class="p-4 bg-gray-100 rounded-lg"
        />
      </form>
    </div>
    <div
      class="bg-white flex flex-col justify-center mt-6 px-4 py-4 mx-4 rounded-lg col-start-1 col-end-9"
    >
      <div class="flex items-center justify-between">
        <h2 class="font-bold text-md">Rental Info</h2>
        <h4 class="text-sm text-gray-400">Step 2 of 4</h4>
      </div>
      <div class="text-sm text-gray-400 mt-1">
        Please select your rental date
      </div>
      <form class="flex flex-col justify-center mt-4">
        <h1 class="font-bold mb-5 text-blue-500">Pick - Up</h1>
        <label class="font-bold mb-2">Locations</label>
        <select class="p-4 bg-gray-100 rounded-lg">
          <option>Select City</option>
        </select>
        <label class="font-bold mb-2 mt-4">Time</label>
        <select class="p-4 bg-gray-100 rounded-lg">
          <option>Select Time</option>
        </select>
        <label class="font-bold mb-2 mt-4">Date</label>
        <select class="p-4 bg-gray-100 rounded-lg">
          <option>Select Date</option>
        </select>
      </form>
      <form class="flex flex-col justify-center mt-4">
        <h1 class="font-bold mb-5 text-blue-500">Drop - Off</h1>
        <label class="font-bold mb-2">Locations</label>
        <select class="p-4 bg-gray-100 rounded-lg">
          <option>Select City</option>
        </select>
        <label class="font-bold mb-2 mt-4">Time</label>
        <select class="p-4 bg-gray-100 rounded-lg">
          <option>Select Time</option>
        </select>
        <label class="font-bold mb-2 mt-4">Date</label>
        <select class="p-4 bg-gray-100 rounded-lg">
          <option>Select Date</option>
        </select>
      </form>
    </div>
    <!-- Payment MEthod Section -->
    <div class="bg-white px-4 py-4 mx-4 rounded-lg mt-6 col-start-1 col-end-9">
      <div class="flex items-center justify-between">
        <h2 class="font-bold text-md">Payment Method</h2>
        <h4 class="text-sm text-gray-400">Step 3 of 4</h4>
      </div>
      <div class="text-sm text-gray-400 mt-1">
        Please Enter Your Payment information
      </div>
      <form class="flex flex-col justify-center mt-4">
        <div class="flex items-center justify-between mb-8">
          <h4 class="text-blue-500 font-bold">Credit Card</h4>
          <div class="flex items-center justify-center">
            <h5 class="text-slate-600 font-bold">VISA</h5>
            <span class="w-4 h-4 rounded-full bg-yellow-400"></span>
            <span class="w-4 h-4 rounded-full bg-red-400 -ml-2"></span>
          </div>
        </div>
        <label class="font-bold mb-2">Card Number</label>
        <input
          type="text"
          placeholder="Card Number"
          class="p-4 bg-gray-100 rounded-lg"
        />
        <label class="font-bold mb-2 mt-4">Card Holder</label>
        <input
          type="text"
          placeholder="Card Holder"
          class="p-4 bg-gray-100 rounded-lg"
        />
        <label class="font-bold mb-2 mt-4">expiration Date</label>
        <input
          type="text"
          placeholder="MM/YYYY"
          class="p-4 bg-gray-100 rounded-lg"
        />
        <label class="font-bold mb-2 mt-4">CVC</label>
        <input
          type="text"
          placeholder="CVC"
          class="p-4 bg-gray-100 rounded-lg"
        />
      </form>
    </div>
    <div class="bg-white px-4 py-4 mx-4 rounded-lg mt-6 col-start-1 col-end-9">
      <div class="flex items-center justify-between">
        <h2 class="font-bold text-md">Confirmation</h2>
        <h4 class="text-sm text-gray-400">Step 4 of 4</h4>
      </div>
      <div class="text-sm text-gray-400 mt-1">
        We are getting to the end. Just few clicks and your rental is ready!
      </div>
      <div class="bg-gray-200 rounded-lg px-2 py-2 my-4 flex items-center">
        <p class="mr-2">C</p>
        <p class="text-sm">
          I agree with sending an Marketing and newsletter emails. No spam,
          promissed!
        </p>
      </div>
      <div class="bg-gray-200 rounded-lg px-2 py-2 my-4 flex items-center">
        <p class="mr-2">C</p>
        <p class="text-sm">
          I agree with our terms and conditions and privacy policy!
        </p>
      </div>
      <button
        class="bg-blue-600 rounded-md py-2 px-4 text-white hover:bg-blue-700"
      >
        Rent Now
      </button>
      <div class="w-10 h-10 mt-8 text-blue-500">
        <i-secure />
      </div>
      <h2 class="font-bold text-lg mt-4">All your data are safe</h2>
      <p class="text-gray-400 mt-2 text-sm">
        We are using the most advanced security to provide you the best
        experience ever.
      </p>
    </div>
  </div>
</template>

<script>
import { iSecure } from "../components/icons/index";
export default {
  name: "rentView",
  components: {
    iSecure,
  },
};
</script>

<style></style>
