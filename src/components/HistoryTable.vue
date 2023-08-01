<template>
  <div class="table-content">
    <table class="table">
      <tr class="table-head">
        <td class="th-id">ID</td>
        <td class="th-value">Value</td>
        <td class="th-timestamp">Timestamp</td>
      </tr>
      <tr class="table-body" v-for="collectionName in collectionNames" >
        <td class="th-id">{{ collectionName.id }}</td>
        <td class="th-value">{{ collectionName.value }}</td>
        <td class="th-timestamp">{{ collectionName.timestamp }}</td>
      </tr>
    </table>
  </div>
</template>
  
<script>
  import firebase from 'firebase/compat/app';
  import 'firebase/firestore';
  
  export default {
    props: ['receivedData'],
    data() {
      return {
        collectionNames: [],
      };
    },
    watch: {
      receivedData(newData, oldData) {
        this.handleNewData(newData);
      },
    },
    methods: {
      handleNewData(newData) {
      // Access the Firestore collection and get the data
        if (newData == 'Mode') {
          firebase.firestore().collection('Mode').get()
          .then(querySnapshot => {
              // Transform the query snapshot to an array of objects
              const collectionNames = [];
              querySnapshot.forEach(doc => {
                var date = doc.data().timestap.toDate()
                var timestamp = (date.getDate() < 10? ('0' + date.getDate()) : date.getDate())+
                                  "/"+((date.getMonth()+1) < 10? ('0' + (date.getMonth()+1)) : (date.getMonth()+1))+
                                  "/"+date.getFullYear()+
                                  " "+(date.getHours() < 10? ('0' + date.getHours()) : date.getHours())+
                                  ":"+(date.getMinutes() < 10? ('0' + date.getMinutes()) : date.getMinutes())+
                                  ":"+(date.getSeconds() < 10? ('0' + date.getSeconds()) : date.getSeconds());
                collectionNames.push({ id: doc.id, value: doc.data().buttonStatus5, timestamp: timestamp });
              });
              this.collectionNames = collectionNames;
          })
          .catch(error => {
              console.error('Error getting documents: ', error);
          });
        }
        else if (newData == 'Fan') {
          firebase.firestore().collection('Fan').get()
          .then(querySnapshot => {
              // Transform the query snapshot to an array of objects
              const collectionNames = [];
              querySnapshot.forEach(doc => {
                var date = doc.data().timestap.toDate()
                var timestamp = (date.getDate() < 10? ('0' + date.getDate()) : date.getDate())+
                                  "/"+((date.getMonth()+1) < 10? ('0' + (date.getMonth()+1)) : (date.getMonth()+1))+
                                  "/"+date.getFullYear()+
                                  " "+(date.getHours() < 10? ('0' + date.getHours()) : date.getHours())+
                                  ":"+(date.getMinutes() < 10? ('0' + date.getMinutes()) : date.getMinutes())+
                                  ":"+(date.getSeconds() < 10? ('0' + date.getSeconds()) : date.getSeconds());
                collectionNames.push({ id: doc.id, value: doc.data().buttonStatus3, timestamp: timestamp });
              });
              this.collectionNames = collectionNames;
          })
          .catch(error => {
              console.error('Error getting documents: ', error);
          });
        }
        else if (newData == 'Motor') {
          firebase.firestore().collection('Motor').get()
          .then(querySnapshot => {
              // Transform the query snapshot to an array of objects
              const collectionNames = [];
              querySnapshot.forEach(doc => {
                var date = doc.data().timestap.toDate()
                var timestamp = (date.getDate() < 10? ('0' + date.getDate()) : date.getDate())+
                                  "/"+((date.getMonth()+1) < 10? ('0' + (date.getMonth()+1)) : (date.getMonth()+1))+
                                  "/"+date.getFullYear()+
                                  " "+(date.getHours() < 10? ('0' + date.getHours()) : date.getHours())+
                                  ":"+(date.getMinutes() < 10? ('0' + date.getMinutes()) : date.getMinutes())+
                                  ":"+(date.getSeconds() < 10? ('0' + date.getSeconds()) : date.getSeconds());
                collectionNames.push({ id: doc.id, value: doc.data().buttonStatus4, timestamp: timestamp });
              });
              this.collectionNames = collectionNames;
          })
          .catch(error => {
              console.error('Error getting documents: ', error);
          });
        }
        else if (newData == 'Pump1') {
          firebase.firestore().collection('Pump1').get()
          .then(querySnapshot => {
              // Transform the query snapshot to an array of objects
              const collectionNames = [];
              querySnapshot.forEach(doc => {
                var date = doc.data().timestap.toDate()
                var timestamp = (date.getDate() < 10? ('0' + date.getDate()) : date.getDate())+
                                  "/"+((date.getMonth()+1) < 10? ('0' + (date.getMonth()+1)) : (date.getMonth()+1))+
                                  "/"+date.getFullYear()+
                                  " "+(date.getHours() < 10? ('0' + date.getHours()) : date.getHours())+
                                  ":"+(date.getMinutes() < 10? ('0' + date.getMinutes()) : date.getMinutes())+
                                  ":"+(date.getSeconds() < 10? ('0' + date.getSeconds()) : date.getSeconds());
                collectionNames.push({ id: doc.id, value: doc.data().buttonStatus1, timestamp: timestamp });
              });
              this.collectionNames = collectionNames;
          })
          .catch(error => {
              console.error('Error getting documents: ', error);
          });
        }
        else if (newData == 'Pump2') {
          firebase.firestore().collection('Pump2').get()
          .then(querySnapshot => {
              // Transform the query snapshot to an array of objects
              const collectionNames = [];
              querySnapshot.forEach(doc => {
                var date = doc.data().timestap.toDate()
                var timestamp = (date.getDate() < 10? ('0' + date.getDate()) : date.getDate())+
                                  "/"+((date.getMonth()+1) < 10? ('0' + (date.getMonth()+1)) : (date.getMonth()+1))+
                                  "/"+date.getFullYear()+
                                  " "+(date.getHours() < 10? ('0' + date.getHours()) : date.getHours())+
                                  ":"+(date.getMinutes() < 10? ('0' + date.getMinutes()) : date.getMinutes())+
                                  ":"+(date.getSeconds() < 10? ('0' + date.getSeconds()) : date.getSeconds());
                collectionNames.push({ id: doc.id, value: doc.data().buttonStatus2, timestamp: timestamp });
              });
              this.collectionNames = collectionNames;
          })
          .catch(error => {
              console.error('Error getting documents: ', error);
          });
        }
        else if (newData == 'LightSensor') {
          firebase.firestore().collection('LightSensor').get()
          .then(querySnapshot => {
              // Transform the query snapshot to an array of objects
              const collectionNames = [];
              querySnapshot.forEach(doc => {
                var date = doc.data().timestamp.toDate()
                var timestamp = (date.getDate() < 10? ('0' + date.getDate()) : date.getDate())+
                                  "/"+((date.getMonth()+1) < 10? ('0' + (date.getMonth()+1)) : (date.getMonth()+1))+
                                  "/"+date.getFullYear()+
                                  " "+(date.getHours() < 10? ('0' + date.getHours()) : date.getHours())+
                                  ":"+(date.getMinutes() < 10? ('0' + date.getMinutes()) : date.getMinutes())+
                                  ":"+(date.getSeconds() < 10? ('0' + date.getSeconds()) : date.getSeconds());
                collectionNames.push({ id: doc.id, value: doc.data().value, timestamp: timestamp });
              });
              this.collectionNames = collectionNames;
          })
          .catch(error => {
              console.error('Error getting documents: ', error);
          });
        }
      },
    },
  };
</script>

<style>
  .table-content {
    background-color: #f5f1fa;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }

  .table {
    width: 100%;
    padding: 5px 5px 0 5px;
    border-collapse: collapse;
    border: 1px solid #dfdde2;
  }

  tr {
    border: 1px solid #dfdde2;
  }

  .table-head {
    background-color: #e3deea;
    height: 35px;
  }

  .table-body {
    height: 40px;
    background-color: #f5f1fa;
  }

  .th-id {
    width: 40%;
    padding-left: 30px;
  }

  .th-value {
    width: 25%;
  }

  .th-timestamp {
    width: 35%;
  }
</style>
  