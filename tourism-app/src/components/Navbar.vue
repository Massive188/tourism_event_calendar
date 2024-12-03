<!-- src/components/Navbar.vue -->
 import VueGridLayout from 'vue-grid-layout';

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <a href="#" class="navbar-logo">EventHub</a>
      <div class="navbar-menu" :class="{ active: isMenuActive }" id="navbarMenu">
        <ul class="navbar-links">
          <li class="navbar-item"><a href="#" class="navbar-link">Home</a></li>
          <li class="navbar-item"><a href="#" class="navbar-link">Events</a></li>
          <li class="navbar-item"><a href="#" class="navbar-link">Calendar View</a></li>
          <li class="navbar-item"><a href="#" class="navbar-link">Submit Event</a></li>
        </ul>
        <div class="navbar-search">
          <input type="text" placeholder="Search events...">
        </div>
        <ul class="navbar-user">
          <li class="navbar-item"><a href="#" class="navbar-link">Sign Up</a></li>
          <li class="navbar-item"><a href="#" class="navbar-link">Login</a></li>
          <li class="navbar-item"><a href="#" class="navbar-link">My Events</a></li>
          <li class="navbar-item"><a href="#" class="navbar-link">Notifications</a></li>
        </ul>
        <ul class="navbar-utility">
          <li class="navbar-item"><a href="#" class="navbar-link">About Us</a></li>
          <li class="navbar-item"><a href="#" class="navbar-link">Contact/Support</a></li>
          <li class="navbar-item"><a href="#" class="navbar-link">Help/FAQ</a></li>
        </ul>
      </div>
      <div class="navbar-toggle" @click="toggleMenu" id="navbarToggle">
        <span class="navbar-toggle-icon"></span>
        <span class="navbar-toggle-icon"></span>
        <span class="navbar-toggle-icon"></span>
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
.navbar {
  background-color: #333;
  overflow: hidden;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
}

.navbar-logo {
  color: #fff;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
}

.navbar-menu {
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
}

.navbar-links, .navbar-user, .navbar-utility {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.navbar-item {
  margin-left: 20px;
}

.navbar-link {
  color: #fff;
  text-decoration: none;
  padding: 14px 20px;
  display: block;
}

.navbar-link:hover {
  background-color: #575757;
}

.navbar-search input {
  padding: 8px;
  border: none;
  border-radius: 4px;
}

.navbar-toggle {
  display: none;
  cursor: pointer;
}

.navbar-toggle-icon {
  width: 25px;
  height: 3px;
  background-color: #fff;
  margin: 5px 0;
}

@media (max-width: 768px) {
  .navbar-menu {
    display: none;
    flex-direction: column;
    width: 100%;
  }

  .navbar-menu.active {
    display: flex;
  }

  .navbar-toggle {
    display: block;
  }
}
</style>