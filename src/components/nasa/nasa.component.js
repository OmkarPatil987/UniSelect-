import { useEffect, useState } from "react";
import "./nasa.component.css";
import axios from "axios";

export function NasaComponent() {
  const [mars, setMars] = useState([]);

  function LoadPhotos() {
    axios
      .get(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY&quot"
      )
      .then((response) => {
        setMars(response.data.photos);
      })
      .catch((ex) => {
        console.log(ex);
      });
  }

  useEffect(() => {
    LoadPhotos();
  }, []);

  return (
    <div className="container-fluid mt-3">
      <h2>Mars Rover Photos </h2>
      <div className="d-flex flex-wrap">
        {mars.map((item) => (
          <div key={item.id} className="card m-2 p-2" id="card">
            <img src={item.img_src} className="card-img-top" height="200" />
            <div className="card-body">
              <dl>
                <dt>Camera</dt>
                <dd>{item.camera.full_name}</dd>
                <dt>Rover</dt>
                <dd>{item.rover.name}</dd>
              </dl>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/*
import { useEffect, useState } from "react";
import "./nasa.component.css";

export function NasaComponent() {
  const [mars, setMars] = useState([]);

  function LoadPhotos() {
    fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY&quot"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setMars(data.photos);
      });
  }

  useEffect(() => {
    LoadPhotos();
  }, []);

  return (
    <div className="container-fluid mt-3">
      <h2>Mars Rover Photos </h2>
      <div className="d-flex flex-wrap">
        {mars.map((item) => (
          <div className="card m-2 p-2" id="card">
            <img src={item.img_src} className="card-img-top" height="200" />
            <div className="card-body">
              <dl>
                <dt>Camera</dt>
                <dd>{item.camera.full_name}</dd>
                <dt>Rover</dt>
                <dd>{item.rover.name}</dd>
              </dl>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
/*
import { useEffect, useState } from "react";

export function NasaComponent() {
  const [mars, setMars] = useState([]);

  function LoadPhotos() {
    fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY&quot"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setMars(data.photos);
      });
  }

  useEffect(() => {
    LoadPhotos();
  }, []);

  return (
    <div className="container-fluid mt-3">
      <h2>Mars Rover Photos </h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Photo Id</th>
            <th>Preview</th>
            <th>Camera</th>
            <th>Rover</th>
          </tr>
        </thead>
        <tbody>
          {mars.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <img src={item.img_src} width="100" height="100" />
              </td>
              <td>{item.camera.full_name}</td>
              <td>{item.rover.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
*/
