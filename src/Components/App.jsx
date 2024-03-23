// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React is amsing</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// import Product from './Product';

// export default function App() {
//   return (
//     <div>
//       <h1>Products</h1>

//       <Product />
//       <Product />
//       <Product />
//     </div>
//   );
// }

// =============================================================Пропси=========================================

// import { Product } from './Product';

// export default function App() {
//   return (
//     <div>
//       <h1>Best selling</h1>

//       <Product name="Tacos With Lime" />
//       <Product name="Fries and Burger" />
//     </div>
//   );
// }


// src/components/App.jsx

// import { Product } from "./Product";

// export default function App() {
//   return (
//     <div>
//       <h1>Best selling</h1>

//       <Product
//         name="Tacos With Lime"
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         price={10.99}
//       />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//         price={14.29}
//       />
//     </div>
//   );
// }
// export default function App() {
//   return (
//     <div>
//       <h1>Best selling</h1>

//       <Product
//         name="Tacos With Lime"
//         price={10.99}
//       />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//         price={14.29}
//       />
//     </div>
//   );
// }


// =============================================Умовний рендеринг=============================


// const Mailbox = ({ username, messages }) => {
//   return (
//     <>
//       <p>Hello {username}</p>
//       {messages.length > 0 && (
//         <p>You have {messages.length} unread messages</p>
//       )}
//     </>
//   );
// };


// Тернарний оператор


// const Mailbox = ({ name, unreadMessages }) => {
//   return (
//     <div>
//       <p>Hello {name}</p>
//       <p>
//         {unreadMessages.length > 0
//           ? `You have ${unreadMessages.length} unread messages`
//           : "No unread messages"}
//       </p>
//     </div>
//   );
// };



// const Mailbox = ({ username, messages }) => {
//   return (
//     <div>
//       <p>Hello {username}</p>
//       {messages.length > 0 ? (
//         <div>
//           <p>You have {messages.length} unread messages</p>
//           <MessageList messages={messages} />
//         </div>
//       ) : (
//         <p>No unread messages</p>
//       )}
//     </div>
//   );
// };