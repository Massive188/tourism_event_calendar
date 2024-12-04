<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button @click="toggleMenu" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex-1 flex items-center justify-center sm:justify-start">
          <a href="#" class="flex-shrink-0">
            <img src="../assets/images/eventhub.png" alt="GameHub Logo" class="h-8 w-8">
          </a>
        </div>
        <div class="hidden sm:flex sm:items-center sm:justify-center flex-1">
          <div class="flex space-x-4">
            <div class="relative group">
              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">News</a>
              <div class="absolute hidden group-hover:block bg-gray-700 text-white rounded-md mt-1 z-10" style="width: 200px;">
                <a href="#" class="block px-4 py-2">Latest News</a>
                <a href="#" class="block px-4 py-2">Updates</a>
                <a href="#" class="block px-4 py-2">Patch Notes</a>
              </div>
            </div>
            <div class="relative group">
              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Community</a>
              <div class="absolute hidden group-hover:block bg-gray-700 text-white rounded-md mt-1 z-10" style="width: 200px;">
                <a href="#" class="block px-4 py-2">Forums</a>
                <a href="#" class="block px-4 py-2">Clans</a>
                <a href="#" class="block px-4 py-2">Events</a>
              </div>
            </div>
            <div class="relative group">
              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Support</a>
              <div class="absolute hidden group-hover:block bg-gray-700 text-white rounded-md mt-1 z-10" style="width: 200px;">
                <a href="#" class="block px-4 py-2">Help Center</a>
                <a href="#" class="block px-4 py-2">Contact Us</a>
                <a href="#" class="block px-4 py-2">FAQ</a>
              </div>
            </div>
            <div class="relative group">
              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Events</a>
              <div class="absolute hidden group-hover:block bg-gray-700 text-white rounded-md mt-1 z-10" style="width: 200px;">
                <a href="#" class="block px-4 py-2">Upcoming Events</a>
                <a href="#" class="block px-4 py-2">Past Events</a>
                <a href="#" class="block px-4 py-2">Event Calendar</a>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden sm:flex sm:items-center">
          <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</a>
        </div>
      </div>
    </div>

    <div class="sm:hidden" id="mobile-menu" :class="{ hidden: !isMenuActive }">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">News</a>
        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Community</a>
        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Support</a>
        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Events</a>
        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Login</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuActive: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    }
  }
};
</script>

<style scoped>
/* set any additional scoped styles here for reminder */
</style>