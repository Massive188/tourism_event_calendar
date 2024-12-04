<template>
    <div class="event-hub">
      <h1 class="text-2xl font-bold mb-4">Current Events</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="event in events" :key="event.id" class="event-card bg-white p-4 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold">{{ event.title }}</h2>
          <p class="text-gray-600">{{ event.date }}</p>
          <p class="text-gray-800">{{ event.description }}</p>      
          <a :href="event.link" class="text-blue-500 hover:underline mt-2 block">Learn More</a>    
        </div>
      </div>
    </div>
    
    <div class="event-hub">
      <h1 class="text-2xl font-bold mb-4">Upcoming Events</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="event in events" :key="event.id" class="event-card bg-white p-4 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold">{{ event.title }}</h2>
          <p class="text-gray-600">{{ event.date }}</p>
          <p class="text-gray-800">{{ event.description }}</p>      
          <a :href="event.link" class="text-blue-500 hover:underline mt-2 block">Learn More</a>    
        </div>
      </div>
    </div>

    
</template>

  <script>      
  export default {  
    name: 'EventHub',
    data() {
      return {
        events: [
          {
            id: 1,
            title: 'Vue.js Workshop',   
            date: '2023-12-01',
            description: 'A workshop to learn Vue.js from scratch.',
            link: '#'
          },
          {
            id: 2,
            title: 'JavaScript Conference',
            date: '2023-12-05',
            description: 'A conference for JavaScript enthusiasts.',
            link: '#'
          },
          {
            id: 3,
            title: 'Web Development Bootcamp',
            date: '2023-12-10',
            description: 'An intensive bootcamp to become a web developer.',
            link: '#'
          },
        ]
      };
    }
  };


  </script>
  
  <style scoped>
  .event-hub {
    padding: 20px;
  }
  
  .event-card {
    transition: transform 0.2s;
  }
  
  .event-card:hover {
    transform: scale(1.05);
  }
  </style>