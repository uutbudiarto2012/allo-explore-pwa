const AppHeader = () => {
  return (
    <header className="app-header">
      <div className="wrapper">
        <div className="arrow-left">
          <a href="/#">
            <img src="/assets/images/ic_arrow_back.svg" alt="" />
          </a>
        </div>
        <div className="header-wrapper">
          <h1>ALLO EXPLORE</h1>
        </div>
      </div>
      <div className="search-wrapper">
        <div className="input-box">
          <input type="text" className="input-search" id="input-search" placeholder="Search..." />
          <div className="icon">
            <img src="/assets/images/ic_search.png" alt="" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default AppHeader