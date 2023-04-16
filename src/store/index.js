import { combineReducers, createStore } from 'redux';
import { iphoneReducer } from './iphonesReducer';


const rootReducer = combineReducers({
    iphones: iphoneReducer
})

export const store = createStore(rootReducer)

// async function fetchIphones() {
//     const response = await fetch(....)
//     const data = response.json()
//     return data
//   }
  
//   async function getIphones() {
//     const cache = localtorage.getItem('IPHONES') // Json.parse!!!
//     if (cache) {
//         const difference = cache.time - Date.now()
//         if (difference > 24h) {
//           const iphones = await fetchIphones()
//           const time = Date.now()
//           localStorage.setItem({iphones, time}) // Json.stringify!!!
//         } else {
//           return cache
//         }
//     } else {
//       const iphones = await fetchIphones()
//       const time = Date.now()
//       localStorage.setItem({iphones, time}) // Json.stringify!!!
//     }
//   }