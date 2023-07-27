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

  * {
    /* padding: 0;
    margin: 0; */
    font-family: Merriweather;
    font-size: 16px;
  }
  .container {
    display: grid;
    /* width: 100%; */
    /* height: 100%; */
    grid-template-columns: 100px 1fr;
    grid-template-rows: 50px 100px 1fr 50px;
    grid-template-areas:
      "header header"
      "sidebar query "
      "sidebar history"
      "sidebar footer";
    
    grid-gap: 0;
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
    width: 90%;
    margin: auto;
    display: flex;
  }

  /*-----------------------------------*/

  /*------------- History ------------ */
  .history {
    grid-area: history;
    /* color: blue; */
    /* background-color: #70a1ff; */
    width: 90%;
    margin: 0 auto 0 auto;
    display: flex;
    border: 1px solid #dfdde2;
    border-radius: 5px;
  }

  /*-----------------------------------*/
</style>