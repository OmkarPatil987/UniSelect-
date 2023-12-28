import { useState } from "react";
import "./styledemo.componenet.css";

export function StyleDemoComponenet() {
  const [theme, setTheme] = useState("");

  function handleThemeChange(e) {
    if (e.target.checked) {
      setTheme("dark-theme");
    } else {
      setTheme("");
    }
  }

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ height: "400px" }}
    >
      <form className={theme}>
        <div className="form-switch">
          <input
            type="checkbox"
            onChange={handleThemeChange}
            className="form-check-input"
          />{" "}
          Dark Mode
        </div>
        <h3>
          <span className="bi bi-person-fill"></span>User Login
        </h3>
        <dl>
          <dt>User Name</dt>
          <dd>
            <input type="text" className="form-control" />
          </dd>
          <dt>Password</dt>
          <dd>
            <input type="password" className="form-control" />
          </dd>
        </dl>
        <button className="btn btn-dark w-100">Login</button>
      </form>
    </div>
  );
}

// import { useState } from "react";
// import { useState } from "react";
// import "./styledemo.componenet.css";
// export function StyleDemoComponenet() {
//   const [theme, setTheme] = useState("");

//   function handleThemeChange(e) {
//     if (e.target.checked) {
//       setTheme("dark-theme");
//     } else {
//       setTheme("");
//     }
//   }
//   return (
//     <div
//       className="container-fluid d-flex justify-content-center align-items-center "
//       style={{ height: "500px" }}
//     >
//       <form className={theme}>
//         <div className="form-switch">
//           <input
//             type="checkbox"
//             onChange={handleThemeChange}
//             className="form-check-input"
//           />
//           Dark mODe
//         </div>

//         <h3>
//           <span className="bi bi-person-fill"></span>User Login
//         </h3>
//         <dl>
//           <dt>USer name</dt>
//           <dd>
//             <input type="text" className="form-control"></input>
//           </dd>
//           <dt>Password</dt>
//           <dd>
//             <input type="password" className="form-control"></input>
//           </dd>
//         </dl>
//         <button className="btn btn-danger">Login</button>
//       </form>
//     </div>
//   );
// }

/*
  const [styleObject, setstyleobject] = useState({
    backgroundcolor: "",
    textALign: "",
  });
  function backgroundchange(e) {
    setstyleobject({
      backgroundcolor: e.target.value,
      textAlign: styleObject.textALign,
    });
    // setbgcolor(styleObject.backgroundcolor);
  }

  function alignchange(e) {
    setstyleobject({
      backgroundColor: styleObject.backgroundcolor,
      textAlign: e.target.value,
    });
  }

  return (
    <div className="container-fluid">
      <h2>choose styles</h2>
      <dl>
        <dt> Background color</dt>
        <dd>
          <select onChange={backgroundchange}>
            <option value="yellow"> yellow </option>
            <option value="green"> green </option>
            <option value="red"> red </option>
          </select>
        </dd>

        <dt>text align</dt>
        <dd>
          <select onChange={alignchange}>
            <option value="left">left</option>
            <option value="center">center</option>
            <option value="right">right</option>
          </select>
        </dd>
      </dl>
      <h1 style={styleObject}>sample text</h1>
    </div>
  );
}

/*
  const [styleObject, setStyleObject] = useState({ border: "", boxShadow: "" });
  const [userError, setUserError] = useState("");

  function handleUserName(e) {
    if (
      e.target.value.charCodeAt(0) >= 65 &&
      e.target.value.charCodeAt(0) <= 90
    ) {
      setStyleObject({
        border: "2px solid red",
        boxShadow: "2px 2px 3px red",
      });

      setUserError("");
    } else {
      setStyleObject({
        border: "2px solid green",
        boxShadow: "2px 2px 3px green",
      });
      setUserError("name must start with uppercase leter");
    }
  }

  return (
    <div className="container-fluid">
      <h2>Register User</h2>
      <dd>
        <input type="text" style={styleObject} onBlur={handleUserName}></input>
      </dd>
      <dd className="text-danger">{userError}</dd>
    </div>
  );
}
*/
