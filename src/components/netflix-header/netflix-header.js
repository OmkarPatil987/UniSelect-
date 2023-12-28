import "./netflix-header.css";

export function NetflixHeader() {
  return (
    <div className="header">
      <div>
        <div className="brand-title"> Netflix</div>
      </div>

      <div className="d-flex">
        <div className="input-group">
          <span className="bi bi-globe input-group-text"></span>
          <select className="form-select">
            <option>Language</option>
            <option>English</option>
            <option>Lहिंदी</option>
          </select>
        </div>

        <div className="ms-4">
          <button className="btn btn-danger">sign in</button>
        </div>
      </div>
    </div>
  );
}
