export function NetflixRegister() {
  return (
    <div>
      <div>
        <p>Ready to watch ?</p>
        <div className="input-group">
          <input
            type="email"
            placeholder="your email"
            className="form-control"
          ></input>

          <button className="btn btn-danger">
            Get started
            <span className="bi bi-chevron-right"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
