<template>
  <div id="app">
    <Navbar />
    <ImageSlider />
    <EventHub />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import EventHub from './components/EventHub.vue';
import ImageSlider from './components/ImageSlider.vue';
import Footer from './components/Footer.vue';
export default {
  components: {

    Navbar,
    ImageSlider,
    EventHub,
    Footer
  }
};
</script>

<style>
/* Add any global styles here */
</style>