import { NetflixHeader } from "../netflix-header/netflix-header";
import { Netflixmain } from "../netflix-main/netflix-main";
import "./netflix-index.css";

export function NetflixIndex() {
  return (
    <div id="banner">
      <div id="shade">
        <NetflixHeader />

        <main>
          <div>
            <Netflixmain />
          </div>
        </main>
      </div>
    </div>
  );
}
