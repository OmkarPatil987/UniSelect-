import { NetflixRegister } from "../netflix-register/netflix-register";
import "./netflix-main.css";

export function Netflixmain() {
  return (
    <div className="text-white text-center">
      <h1>Unlimited movies,tc shows and more</h1>
      <h3>watch anymore.cancel anytime</h3>
      <NetflixRegister></NetflixRegister>
    </div>
  );
}
