import React from "react";
import Login from "./Login";

// function renderConditionally() {
//   if (isLoggedIn === true) {
//     return (
//       <div>
//         <h1>Hello</h1>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <Login />
//       </div>
//     );
//   }
// }

let isLoggedIn = true;
function App() {
  return (
    <div className="container">
      {isLoggedIn === true ? <h1>Hello</h1> : <Login />}

      {/* {renderConditionally()} */}
    </div>
  );
}

export default App;
