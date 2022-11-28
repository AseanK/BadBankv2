function NavBar(){
  
  var style = document.createElement('style');
  style.innerHTML = `
  #nav .tooltiptext{
    visibility: hidden;
    position: absolute;
    background-color: gray;
    border-radius: 6px;
    width: 240px;
    z-index: 1;
    text-align: center;
    margin-top: 10px;
    margin-left: -120px;
  }
  #nav:hover .tooltiptext{
    visibility: visible;
    color: black
  }
  #nav:focus {
    color: white;
  }
  #nav:focus .tooltiptext{
    color: black;
  }
  `;
  
  document.head.appendChild(style);

    return(
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <a className="navbar-brand" href="#">BadBank</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <a className="nav-link" id="nav" href="#/CreateAccount/">Create Account<br/>
              <span className="tooltiptext" id="tooltiptext">You can create a new account in this tab</span>
              </a>
           </li>
            <li className="nav-item">
              <a className="nav-link" id="nav" href="#/login/">Login/out<br/>
              <span className="tooltiptext" id="tooltiptext">You can login or log-out in this tab</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="nav" href="#/deposit/">Deposit<br/>
              <span className="tooltiptext" id="tooltiptext">You can make a deposit to your account in this tab</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="nav" href="#/withdraw/">Withdraw<br/>
              <span className="tooltiptext" id="tooltiptext">You can make an withdraw from your account in this tab</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="nav" href="#/balance/">Balnace<br/>
              <span className="tooltiptext" id="tooltiptext">You can check your balance in this tab</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="nav" href="#/alldata/">AllData<br/>
              <span className="tooltiptext" id="tooltiptext">You can see all users' data in this tab</span>
              </a>
            </li>          
          </ul>
        </div>
      </nav>
      </>
      
    );
  }

