<template>
  <div class="container">

    <div class="header">
      <Header />
    </div>

    <div class="sidebar">
      <Sidebar />
    </div>

    <div class="query">
      <Query @clear="handleClear" @collection-selected="handleCollectionSelected" @date-selected="handleDateSelected" @order-selected="handleOrderSelected"/>
    </div>

    <div class="history">
      <History :clear="clear" :receivedCollection="collectionToSend" :receivedDate="dateToSend" :receivedOrder="orderToSend"/>
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
        clear: false,
        collectionToSend: null,
        dateToSend: null,
        orderToSend: null
      };
    },

    methods: {
      handleClear() {
        this.clear = (this.clear == true ? false : true);
      },

      handleCollectionSelected(collection) {
        this.collectionToSend = collection;
      },

      handleDateSelected(date) {
        this.dateToSend = date;
      },

      handleOrderSelected(order) {
        this.orderToSend = order;
      }
    },
  }
</script>

<style scoped>

  * {
    /* padding: 0;
    margin: 0; */
    font-family: Merriweather;
    font-size: 16px;
    height: 100%;
  }

  .container {
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-template-rows: 50px 100px 1fr 50px;
    grid-template-areas:
      "header header"
      "sidebar query "
      "sidebar history"
      "sidebar footer";
    
    grid-gap: 0;
    min-height: 100vh;
    background-color: white;
  }

  /* ---------Thanh dau trang--------*/

  .header {
    grid-area: header;
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
  }

  /*-----------------------------------*/

  /*------------- query ------------ */
  .query {
    grid-area: query;
    /* color: blue; */
    /* background-color: #70a1ff; */
    width: 90%;
    
    margin: 10px auto 0 auto;
  }

  /*-----------------------------------*/

  /*------------- History ------------ */
  .history {
    grid-area: history;
    /* color: blue; */
    /* background-color: #70a1ff; */
    width: 90%;
    height: 93%;
    margin: 20px auto 0 auto;
    border: 1px solid #dfdde2;
    border-radius: 5px;
  }

  /*-----------------------------------*/
</style>