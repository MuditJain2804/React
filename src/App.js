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

// function Greeting({ name }) {
//   return <h1>Hello, {name}</h1>;
// }

// export default function App() {
//   return <Greeting name="world" />
// }

// export default function Avatar() {
//   const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
//   const description = 'Gregorio Y. Zara';
//   return (
//     <img
//       className="avatar"
//       src={avatar}
//       alt={description}
//     />
//   );
// }

// const baseUrl = 'https://i.imgur.com/';
// const person = {
//   name: 'Gregorio Y. Zara',
//   imageId: '7vQD0fP',
//   imageSize: 's',
//   theme: {
//     backgroundColor: 'black',
//     color: 'pink'
//   }
// };

// export default function TodoList() {
//   return (
//     <div style={person.theme}>
//       <h1>{person.name}'s Todos</h1>
//       <img
//         className="avatar"
//         src={baseUrl + person.imageId + person.imageSize + '.jpg'}
//         alt={person.name}
//       />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     </div>
//   );
// }

// export function getImageUrl(imageId, size = 's') {
//   return (
//     'https://i.imgur.com/' +
//     imageId +
//     size +
//     '.jpg'
//   );
// }

// function Profile({imageId,name, size=70,profession,award,discovery}){
//   return (
//       <section className="profile">
//         <h2>{name}</h2>
//       <img
//         className="avatar"
//         src = {getImageUrl(imageId)}
//         alt={name}
//         width={size}
//         height={size}
//         />
//         <ul>
//           <li>
//             <b>Profession: </b> 
//             {profession}
//           </li>
//           <li>
//             <b>Awards: {award.length}</b> 
//             ({award.join(',')})
//           </li>
//           <li>
//             <b>Discovered: </b>
//             {discovery}
//           </li>
//         </ul>
//       </section>
//   )
// }

// export default function Gallery() {
//   return (
//     <div>
//       <h1>Notable Scientists</h1>
//         <Profile
//           imageId = "szV5sdG"
//           name="Maria Skłodowska-Curie"
//           discovery="polonium (chemical element)"
//           profession="physicist and chemist"
//           award={['Nobel Prize in Physics','Nobel Prize in Chemistry','Davy Medal','Matteucci Medal']}
//         />
//         <Profile
//           imageId = "YfeOqp2"
//           name="Katsuko Saruhashi"
//           discovery="a method for measuring carbon dioxide in seawater"
//           profession="physicist and chemist"
//           award={['Miyake Prize for geochemistry','Tanaka Prize']}
//         />
//         </div>
//   );
// }


// export default function app(){
//   return(
//     <button>
//       Click me
//     </button>
//   )
// }

// export default function app(){
//   function handleClick(){
//     alert('You clicked me !')
//   }

//   return(
//     <button onClick={handleClick}>
//       Click me
//     </button>
//   )
// }

// export default function Signup() {
//   return (
//     <form onSubmit={() => alert('Submitting!')}>
//       <input />
//       <button>Send</button>
//     </form>
//   );
// }

import {useState} from 'react';
import { sculptureList } from './data';

export default function Gallery(){
    const[index,setIndex] = useState(0);
    const[showMore, setShowMore] = useState(false);

    let hasPrev = index>0;
    let hasNext = index<sculptureList.length - 1;

    function handleNextClick(){
        if(hasNext){
            setIndex(index + 1);
        }
    }
    function handlePrevClick(){
        if(hasPrev){
            setIndex(index -1);
        }
    }
    function handleMoreClick(){
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];

    return(
        <>
            <button 
                onClick={handlePrevClick}
                disabled = {!hasPrev}
            >
                Previous
            </button>
            <button 
                onClick={handleNextClick}
                disabled = {!hasNext}
            >
                Next
            </button>
            <h2><i>{sculpture.name}</i> by {sculpture.artist}</h2>
            <h3>({index + 1 } of {sculptureList.length})</h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            <p>
            {showMore && sculpture.description}
            </p>
            <img 
                src={sculpture.url}
                alt={sculpture.alt}
            />
        </>
    );

}