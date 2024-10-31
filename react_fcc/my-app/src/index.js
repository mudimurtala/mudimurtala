import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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


function CustomPage() {
  return (
    <div>
      <header>
        <nav>
          <img src='../public/logo193.png' width="40px"></img>
        </nav>
      </header>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>Because I want to be an expert Front-End Developer</li>
        <li>Because React is used by most</li>
        <li>Because it is easy to learn</li>
        <li>Because of it's dominance in the industry</li>
      </ol>
      <footer><small>© 2024 mudi development. All rights reserved.</small></footer>
    </div>
  )
}

ReactDOM.render(<CustomPage />, document.querySelector("#root"));