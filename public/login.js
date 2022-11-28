function Login(){
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');    
    const ctx = React.useContext(UserContext);
    if (ctx.users == ''){
    return (
        <div>
            <div className="card-footer text-muted" style={{textAlign:'center'}}>
                login/out page
            </div>
      <Card
        bgcolor="secondary"
        header="Login"
        status={status}
        body={show ? 
          <LoginForm setShow={setShow} setStatus={setStatus}/> :
          <LoginMsg setShow={setShow} setStatus={setStatus}/>}
      />
      </div>
    ) 
  } else {
    return (
        <div>
            <div className="card-footer text-muted" style={{textAlign:'center'}}>
                logged in as {ctx.users}
            </div>
        <Card
        bgcolor="secondary"
        header="Login"
        status={status}
        body={<LoginMsg setShow={setShow} setStatus={setStatus}/>}
      />
      </div>
    )
  }
}
  function LoginMsg(props){
    const ctx = React.useContext(UserContext);
    return(<>
      <h5>Successfully logged in <br/></h5>
      <h5 style={{textAlign:'center'}}>{ctx.users}</h5>
      <div className="text-center">
      <button type="submit" 
        className="btn btn-light" 
        onClick={() => {props.setShow(true); ctx.users.pop()}}>
          log out
      </button>
      </div>
    </>);
  }
  
  function LoginForm(props){
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);
  
    function handle(){
      fetch(`/account/login/${email}/${password}`)
      .then(response => response.text())
      .then(text => {
          try {
              const data = JSON.parse(text);
              props.setStatus('');
              props.setShow(false);
              console.log('JSON:', data);
              
              console.log(data.email);
              ctx.users.push(data.email);
              console.log(ctx.users);

          } catch(err) {
              props.setStatus(text)
              console.log('err:', text);
              console.log(data[0])
          }
      });
    }
    return (<>
  
      Email<br/>
      <input type="input" 
        className="form-control" 
        placeholder="Enter email" 
        value={email} 
        onChange={e => setEmail(e.currentTarget.value)}/><br/>
  
      Password<br/>
      <input type="password" 
        className="form-control" 
        placeholder="Enter password" 
        value={password} 
        onChange={e => setPassword(e.currentTarget.value)}/><br/>
        
      <button type="submit" className="btn btn-light" onClick={handle}>Login</button>
    </>);
  }