// // import React from "react";
// // import "./Button.css";


// // export default class Button extends React.Component {
// //   render() {
// //     return (
// //       <div className="">
// //         <button>Кнопка</button>
// //       </div>
// //     );
// //   }
// // }

// import React from "react";
// import "./Button.css";

// export default class Button extends React.Component {
//   render() {
//     const className = [
//       "Button",
//       this.props.actions ? "actions" : "",
//       this.props.wide ? "wide" : "",
//     ];

//     return (
//       <div className={className.join(" ").trim()}>
//         <button>{this.props.name}</button>
//       </div>
//     );
//   }
// }

import React from "react";
import "./Button.css";

export default class Button extends React.Component {
  handleClick = () => {
    
    this.props.clickHandler(this.props.name);
  };

  render() {
    const className = [
      "Button",
      this.props.actions ? "actions" : "",
      this.props.wide ? "wide" : "",
    ];

    return (
      <div className={className.join(" ").trim()}>
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}