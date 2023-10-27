import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React JS
//         </a>
//       </header>
//     </div>
//   );
// }

//   function MyButton(){
//   return(
//       <button>I'm a button</button>
    
//   );
// }
// export default function App(){
//   return(
// <div>
//   <h1>Welcome to my app</h1>
//   <MyButton/>
// </div>
// );
// }

// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90,
// };

// export default function Profile() {
//   return (
//     <>
//       <h1>{user.name}</h1>
//       <img
//         className="avatar"
//         src={user.imageUrl}
//         alt={'Photo of ' + user.name}
//         style={{
//           width: user.imageSize,
//           height: user.imageSize
//         }}
//       />
//     </>
//   );
// }

// import { useState } from 'react';

// export default function MyApp(){
//   return(
//     <div>
//       <h1>Counters that update seprately</h1>
//       <MyButton />
//       <MyButton />
//     </div>
//   );
// }
// function MyButton(){
//   const[count , setCount] = useState(0);

//   function handleClick(){
//     setCount(count+1);
//   }
//   return(
//     <button onClick={handleClick}>
//       clicked {count} times
//     </button>
//   );
// }

// export default function MyApp(){
//   const[count , setCount] = useState(0);
//   function handleClick(){
//     setCount(count+1);
//   }
//   return(
//     <div>
//     <h1>Counters that update seprately</h1>
//     <MyButton count = {count} onClick={handleClick}/>
//     <MyButton count = {count} onClick={handleClick}/>
//     </div>
//   );
// } 
// function MyButton({count , onClick}){
//   return (
//     <div>
//       <button onClick={onClick}>
//       clicked {count} times
//       </button>
//     </div>
//   );
// }
// function Greeting(){
//   return <h1>Hello World</h1>
// }li
// export default function App(){
//   return <Greeting/>
// }

function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}

export default function App() {
  return <Greeting name="world" />
}
