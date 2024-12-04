<template>
    <div class="relative">
      <div class="overflow-hidden h-64 sm:h-80 lg:h-96">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="absolute inset-0 transition-opacity duration-1000"
          :class="{ 'opacity-100': index === currentIndex, 'opacity-0': index !== currentIndex }"
        >
          <img :src="image" alt="Slider Image" class="w-full h-full object-cover" />
        </div>
      </div>
  
      <!-- Navigation Dots -->
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <span
          v-for="(image, index) in images"
          :key="index"
          class="h-3 w-3 bg-white rounded-full cursor-pointer"
          :class="{ 'bg-blue-600': index === currentIndex }"
          @click="goToSlide(index)"
        ></span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentIndex: 0,
        images: [
          'https://via.placeholder.com/800x400.png?text=Slide+1',
          'https://via.placeholder.com/800x400.png?text=Slide+2',
          'https://via.placeholder.com/800x400.png?text=Slide+3'
        ]
      };
    },
    mounted() {
      this.startAutoSlide();
    },
    methods: {
      startAutoSlide() {
        setInterval(() => {
          this.currentIndex = (this.currentIndex + 1) % this.images.length;
        }, 3000);
      },
      goToSlide(index) {
        this.currentIndex = index;
      }
    }
  };
  </script>
  