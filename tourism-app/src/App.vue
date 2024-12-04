<template>
  <div id="app">
    <Navbar />
    <ImageSlider />
    <EventHub />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import EventHub from './components/EventHub.vue';
import ImageSlider from './components/ImageSlider.vue';
export default {
  components: {

    Navbar,
    ImageSlider,
    EventHub
  }
};
</script>

<style>
/* Add any global styles here */
</style>