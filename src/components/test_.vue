<template>
    <div>
      <label for="selectedDate">Select a date:</label>
      <input type="date" id="selectedDate" v-model="selectedDate" @change="onDateChange" />
      <p>Selected Date: {{ selectedDate }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedDate: null, // Initialize the selectedDate to null or some default value
      };
    },
    methods: {
      onDateChange() {
        // The selectedDate will automatically be updated due to v-model
        console.log('Selected Date:', this.selectedDate);





        
      },
    },
  };
  </script>