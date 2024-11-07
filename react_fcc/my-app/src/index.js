import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';

// const navbar = (
//     <nav>
//         <h1>Mudi's Website</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Menu</li>
//         </ul>
//     </nav>
// );

// ReactDOM.createRoot(document.getElementById("root")).render(navbar);
// const root = document.querySelector("#root");
// ReactDOM.append(navbar, root);
// const page = (
//   <div>
//     <h1>My awesome website in React</h1>
//     <h3>Reason I love React</h3>
//     <ol>
//       <li>It's composable</li>
//       <li>It's declarative</li>
//       <li>it's a hireable skill</li>
//       <li>It's actively maintained by skilled people</li>
//     </ol>
//   </div>
// )


// ReactDOM.render(page, document.getElementById("root"))
// document.getElementById("root").append(JSON.stringify(page))



// function TemporaryName() {
//   return (
//     <div>
//     <img src="../public/logo512.png" width="40px" alt='imaging'/>
//     <h1>Fun facts about React</h1>
//     <ul>
//       <li>Was first released in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100k stars on Github</li>
//       <li>Is maintained by Facebook</li>
//       <li>Power thousands of enterprise apps, including mobile apps</li>
//     </ul>
//   </div>
//   )
// }


// /**
// Challenge: 

// - Move the `footer` into its own component called "Footer" 
//   and render that component inside the Page component.
// - Move the `h1` and `ol` together into another component
//   called "MainContent" and render inside Page as well.
// */



function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"));