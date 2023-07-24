<script setup>
  import { ref, onMounted, reactive } from "vue";
  import Header from '../components/Header.vue'
  import Sidebar from '../components/Sidebar.vue'
  import Footer from '../components/Footer.vue'
  import Query from '../components/Query.vue'
  import History from '../components/HistoryTable.vue'


</script>

<template>
  <div class="container">
    <div class="header">
      <Header />
    </div>
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="query">
      <Query />
    </div>
    <div class="history">
      <History />
    </div>



    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<style scoped>

  .container {
      display: grid;
      height: 100vh;
      grid-template-columns: 100px 1fr 1fr;
      grid-template-rows: 50px 1fr 1fr 50px;
      grid-template-areas:
          "header header header"
          "sidebar query query"
          "sidebar history history"
          "sidebar history history"
          "sidebar history history"
          "sidebar footer footer";
      
      background-color: white;
  }

  /* ---------Thanh dau trang--------*/

  .header {
      grid-area: header;
      color: blue;
      background-color: #70a1ff;
      display: flex;
  }

  /*-----------------------------------*/

  /*-------- Thanh menu ben trai------- */
  
  .sidebar {
      grid-area: sidebar;
      background-color: #09006f;
  }

  .sidebar nav {
      height: 100%;
  }

  .sidebar nav ul {
      height: 100%;
      list-style-type: none;
      margin: 0px 0 20px 0;
  }

  .sidebar nav ul li {
      margin: 0px 0 40px 0;
  }

  .sidebar nav ul li a {
      display: flex;
      flex-direction: column;
      width: 100%;
      color: white;
      text-decoration: none;
      align-items: center;
      justify-content: center;
      text-align: center;
  }

  .sidebar nav ul li a img {
      width: 50px;
      height: 50px;
  }

  .sidebar nav ul li a:hover {
      background-color: #2980b9;
      border-radius: 10px;
  }

  /*-----------------------------------*/

  /* ---------Thanh cuoi trang--------*/
  .footer {
      grid-area: footer;
      font-size: 8px;
      text-align: center;
      justify-items: center;
      background-color: #70a1ff;
      color: white;
  }

  .footer h1 {
      margin-top: 15px;
  }

  /*-----------------------------------*/

  /*------------- query ------------ */
  .query {
    grid-area: query;
    /* color: blue; */
    /* background-color: #70a1ff; */
    display: flex;
  }

  /*-----------------------------------*/

  /*------------- History ------------ */
  .history {
    grid-area: history;
    /* color: blue; */
    /* background-color: #70a1ff; */
    display: flex;
  }

  /*-----------------------------------*/
</style>