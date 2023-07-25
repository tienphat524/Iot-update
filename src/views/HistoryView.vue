<template>
  <div class="container">

    <div class="header">
      <Header />
    </div>

    <div class="sidebar">
      <Sidebar />
    </div>

    <div class="query">
      <Query @option-selected="handleOptionSelected"/>
    </div>

    <div class="history">
      <History :receivedData="dataToSend"/>
      <!-- <h1 style="color: black;">{{ selectedOption }}</h1> -->
    </div>

    <div class="footer">
      <Footer />
    </div>

  </div>
</template>

<script>
  import { ref, onMounted, reactive } from "vue";
  import Header from '../components/Header.vue'
  import Sidebar from '../components/Sidebar.vue'
  import Footer from '../components/Footer.vue'
  import Query from '../components/Query.vue'
  import History from '../components/HistoryTable.vue'

  export default {
    components: {
      Header,
      Sidebar,
      Footer,
      Query,
      History,
    },

    data() {
      return {
        selectedOption: null,
        dataToSend: null,
      };
    },

    methods: {
      handleOptionSelected(option) {
        this.selectedOption = option;
        this.dataToSend = option;
      },
    },
  }
</script>

<style scoped>

  .container {
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 100px 1fr;
    grid-template-rows: 50px 100px 1fr 1fr 50px;
    grid-template-areas:
      "header header"
      "sidebar query "
      "sidebar history"
      "sidebar history"
      "sidebar footer";
    
    background-color: white;
  }

  /* ---------Thanh dau trang--------*/

  .header {
    grid-area: header;
    position: relative;
    width: 100%;
  }

  /*-----------------------------------*/

  /*-------- Thanh menu ben trai------- */
  
  .sidebar {
    grid-area: sidebar;
    position: relative;
  }

  /*-----------------------------------*/

  /* ---------Thanh cuoi trang--------*/
  .footer {
    grid-area: footer;
    position: relative;
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