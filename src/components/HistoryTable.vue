<template>
    <div>
      <ul>
        <li v-for="collectionName in collectionNames" :key="collectionName">
          {{ collectionName }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import firebase from 'firebase/compat/app';
  import 'firebase/firestore';
  
  export default {
    data() {
      return {
        collectionNames: [],
      };
    },
    created() {
    // Access the Firestore collection and get the data
        firebase.firestore().listCollections()
        .then(querySnapshot => {
            // Transform the query snapshot to an array of objects
            const collectionNames = [];
            querySnapshot.forEach(doc => {
                collectionNames.push({ id: doc.id, ...doc.data() });
            });
            this.collectionNames = collectionNames;
        })
        .catch(error => {
            console.error('Error getting documents: ', error);
        });
    },
  };
  </script>
  