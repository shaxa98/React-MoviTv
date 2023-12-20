const HeaderComponent = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-secondary">
        <div className="container-fluid">
          <div className="container">
            <div className="row w-100">
              <div className="col">
                <a className="navbar-brand" id="navbar-brand" href="/">
                  <img
                    src="/img/tvm-header-logo-bk.png"
                    alt="Bootstrap"
                    width="140"
                    height="50"
                  />
                </a>
              </div>

              <div className="col my-2 d-flex">
                <input
                  className="form-control me-2"
                  id="search-btn"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-search mt-2"
                  id="search-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  f
                </svg>
              </div>
              <div className="col my-1">
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="nav-login active"
                        aria-current="page"
                        href="#"
                      >
                        Login
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="nav-reg active"
                        aria-current="page"
                        href="#"
                      >
                        Register
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="container-fluid bg-info">
        <div className="container">
          <div className="btn-group py-2">
            <a
              href="/"
              className="btn btn-info text-white"
              aria-current="page"
              id="TabShows"
            >
              Shows
            </a>
            <a
              href="/people"
              className="btn btn-info text-white"
              id="TabPeople"
            >
              People{" "}
            </a>
            <a
              href="network"
              className="btn btn-info text-white"
              id="TAbNetwork"
            >
              Network{" "}
            </a>
            <a
              href="web-chanel"
              className="btn btn-info text-white"
              id="TabWebchanels"
            >
              Web Chanels{" "}
            </a>
            <a
              href="articles"
              className="btn btn-info text-white"
              id="TabArticles"
            >
              Articles{" "}
            </a>
            <a
              href="countdown"
              className="btn btn-info text-white"
              id="TabCountdown"
            >
              Countdown{" "}
            </a>
            <a href="forums" className="btn btn-info text-white" id="TabForum">
              Forums{" "}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
