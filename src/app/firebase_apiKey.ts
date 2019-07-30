export const FIREBASE_CONFIG = {
    apiKey: "AIzaSyDDCNXdRSqAOyqo8NOtWkT-1ewuQaO9MMU",
    authDomain: "bookingapp-3da7d-b3b1d.firebaseapp.com",
    databaseURL: "https://bookingapp-3da7d-b3b1d.firebaseio.com",
    projectId: "bookingapp-3da7d",
    storageBucket: "gs://bookingapp-3da7d.appspot.com",
    messagingSenderId: "792164457322",
    appId: "1:792164457322:web:6f1f6670290f1860"
  };

  export const fetchRooms = snapshot => {
    let arrayOfRooms = [];
    snapshot.forEach(element => {
          let item  = element.val();
          item.key = element.key;
          arrayOfRooms.push(item);
    }); 
    return arrayOfRooms;
  }