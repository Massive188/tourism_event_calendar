<!-- src/App.vue -->
<template>
    <div id="app">
      <Navbar />
      <router-view />
    </div>
  </template>
  
  <script>
  import Navbar from './components/Navbar.vue';
  
  export default {
    components: {
      Navbar
    }
  };
  </script>
  
  <style>
  /* Add any global styles here */
  </style>