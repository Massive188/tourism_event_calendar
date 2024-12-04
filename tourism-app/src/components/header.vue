<template>
   <header class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-6">
        <div class="flex items-center">
          <a href="/" class="text-2xl font-bold text-blue-600">Event Hub</a>
        </div>
        <nav class="space-x-8">
          <a href="#about" class="text-gray-600 hover:text-blue-600">About</a>
          <a href="#events" class="text-gray-600 hover:text-blue-600">Events</a>
          <a href="#contact" class="text-gray-600 hover:text-blue-600">Contact</a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>   
    import ImageSlider from './ImageSlider.vue';

    export default {
        components: {
            ImageSlider
        }
    };
</script>