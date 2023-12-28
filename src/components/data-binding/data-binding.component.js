import { useState } from "react";

export function DataBindingComponent() {
  const [Name, setName] = useState("");
  const [Price, setPrice] = useState(0);
  const [City, setCity] = useState("");
  const [Stock, setStock] = useState(false);

  function NameChange(e) {
    setName(e.target.value);
  }
  function PriceChange(e) {
    setPrice(e.target.value);
  }
  function CityChange(e) {
    setCity(e.target.value);
  }
  function StockChange(e) {
    setStock(e.target.checked);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <h2>Register</h2>
          <dl>
            <dt>Name</dt>
            <dd>
              <input onChange={NameChange} type="text" />
            </dd>
            <dt>Price</dt>
            <dd>
              <input onChange={PriceChange} type="number" />
            </dd>
            <dt>City</dt>
            <dd>
              <select onChange={CityChange}>
                <option>Delhi</option>
                <option>Hyd</option>
              </select>
            </dd>
            <dt>Stock</dt>
            <dd className="form-switch">
              <input
                onChange={StockChange}
                type="checkbox"
                className="form-check-input"
              />{" "}
              Available
            </dd>
          </dl>
        </div>
        <div className="col-9">
          <h2>Details</h2>
          <dl>
            <dt>Name</dt>
            <dd>{Name}</dd>
            <dt>Price</dt>
            <dd>{Price}</dd>
            <dt>City</dt>
            <dd>{City}</dd>
            <dt>Stock</dt>
            <dd>{Stock == true ? "Avaialble" : "Out of Stock"}</dd>
          </dl>
        </div>
      </div>
    </div>
  );
}

/*
import { useState } from "react";

export function DataBindingComponent() {
  const [userName, setUserName] = useState("david");

  function HandleUserName(e) {
    setUserName(e.target.value);
  }

  return (
    <div className="container-fluid">
      <h2>Register User</h2>
      <dl>
        <dt>User Name</dt>
        <dd>
          <input type="text" onKeyUp={HandleUserName} />
        </dd>
      </dl>
      <p>Hello ! {userName}</p>
    </div>
  );
}

/*
import { useState } from "react";

export function DataBindingComponent() {
  const [categories] = useState(["Electronics", "Footwear"]);
  return (
    <div className="container-fluid">
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </div>
  );
}

/*import { useState } from "react";

export function DataBindingComponent() {
  const [userName, setUserName] = useState("John");
  return (
    <div className="container-fluid">
      <h2>One Way</h2>
      User Name : <input type="text" value={userName} />
      <p>Hello ! {userName}</p>
    </div>
  );
}

/*

import aspNetPoster from "./images/.net.png";
export function DataBindingComponenet() {
  var courses = [
    {
      title: "ASP.NET",
      Poster: aspNetPoster,
      Topics: ["web", "API", "MVC"],
    },
    {
      title: "AWS",
      Poster: "./images/aws.png",
  
      Topics: ["cloud", "services", "database"],
    },
    {
      title: "DIgital marketing",
      Poster: "./images/dmarketing.png",
      Topics: ["web", "marketing", "cloud"],
    },
    {
      title: "DAta Science",
      Poster: "./images/ds.jpg",
      Topics: ["cloud", "databse", "MVC"],
    },
  ];

  return (
    <div className="container-fluid">
      <h2>course</h2>
      <div className="d-flex flex-wrap">
        {courses.map((course) => (
          <div className="card m-2 p-2 w-25" key={course.title}>
            <img
              src={course.Poster}
              className="card-img-top"
              height="150"
              alt={course.title}
            />

            <div className="card-header">
              <h3>{course.title}</h3>
            </div>

            <div className="card-body">
              <ul>
                {course.Topics.map((topic) => (
                  <li>{topic}</li>
                ))}
              </ul>
            </div>
            <div className="card-foooter">
              <button className="btn btn-primary w-100 ">join course</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/*
  var menu = [
    { Category: "Electronics", Products: ["TV", "Mobile"] },
    { Category: "Footwear", Products: ["Nike Casulas", "Lee Boot"] },
  ];

  return (
    <div className="container-fluid">
      <h2>selct category</h2>
      {menu.map((item) => (
        <details key={item.Category}>
          <summary>{item.Category}</summary>
          <ul>
            {item.Products.map((product) => (
              <li key="product">{product}</li>
            ))}
          </ul>
        </details>
      ))}

      <h2>Shopping list</h2>
      <ol>
        {menu.map((item) => (
          <li key={item.Category}>
            {item.Category}
            <ul>
              {item.Products.map((product) => (
                <li key={product}>{product}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <h2>Select product</h2>

      <select>
        {menu.map((item) => (
          <optgroup label={item.Category} key={item.Category}>
            {item.Products.map((product) => (
              <option key={product}>{product}</option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
}

/*
  var products = [
    { Name: "TV", Price: 2000, Stock: true },
    { Name: "Mobile", Price: 5000, Stock: false },
    { Name: "Nike Casuals", Price: 7000, Stock: true },
  ];

  return (
    <div className="container-fluid">
      <h2>Product Table</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th> Name</th>
            <th> Price</th>
            <th> Stock</th>
            <th> Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.Name}>
              <td>{product.Name}</td>
              <td>{product.Price}</td>
              <td>{product.Stock == true ? "available" : "out of stock"}</td>
              <td>
                <button className="btn btn-info">
                  <span className="bi bi-eye-fill"></span>
                </button>
                <button className="btn btn-warning ms-2">
                  <span className="bi bi-pen"></span>
                </button>
                <button className="btn btn-danger ms-2">
                  <span className="bi bi-trash"></span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/*
  var categories = ["ALL", "Electronics", "Footwear", "Fashion"];

  return (
    <div className="container-fluid">
      <h2> Product Details</h2>
      <ol>
        {
          //to come unconditonally we use map becasue with filter there is condition
          categories.map((category) => (
            <li>{category}</li>
          ))
        }
      </ol>
      <select>
        {categories.map((category) => (
          <option>{category}</option>
        ))}
      </select>

      <ul className="list-unstyled">
        {categories.map((category) => (
          <li>
            <input type="checkbox" />
            {category}
          </li>
        ))}
      </ul>

      <div>
        {categories.map((category) => (
          <div>
            <button className="w-25">{category}</button>{" "}
          </div>
        ))}
      </div>
    </div>
  );
}

/*
    var Product = {
    Name: "samsung TV",
    Price: 1200,
    stock: true,
  };
  return (
    /*
    className="container-fluid": In Bootstrap, the class container-fluid is used to create a full-width container
     that spans the entire viewport. The "fluid" part indicates that the container's width will adjust to the width 
     of the viewport, making it responsive across different screen sizes.
    
    */
/*
    <div className="container-fluid">
      <h2>Product details </h2>
      <dl>
        <dt>Name</dt>
        <dd>{Product.Name}</dd>

        <dt>Price</dt>
        <dd>{Product.Price}</dd>

        <dt>Stock</dt>
        <dd>{Product.stock == true ? "Avilable" : "out of stock"}</dd>
      </dl>
    </div>
  );
}

*/
