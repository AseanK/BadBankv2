function Balance(){
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');  
    const ctx = React.useContext(UserContext);

    if (ctx.users == '') {
        return (
            <div>
            <div className="card-footer text-muted" style={{textAlign:'center'}}>
                Please login to continue
            </div>
            <Card
            bgcolor="secondary"
            header="Balance"
            status={status}
            body={<>
                <h5 style={{textAlign:'center'}}>You're not logged in yet</h5><br/>
                <h5>Please login to check balance</h5><br/>
                <h5 style={{textAlign:'center'}}>Click <a href="#/login/">here</a> to login</h5>
                </>}
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
        header="Balance"
        status={status}
        body={show ?
          <BalanceForm setShow={setShow} setStatus={setStatus}/> :
          <BalanceMsg setShow={setShow} setStatus={setStatus}/>}
      />
      </div>
    )
    }
  }
  
  function BalanceMsg(props){
    return(<>
      <h5>Success</h5>
      <button type="submit" 
        className="btn btn-light" 
        onClick={() => {
          props.setShow(true);
          props.setStatus('');
        }}>
          Check balance again
      </button>
      <p>Current balance</p>
    </>);
  }
  
  function BalanceForm(props){
    const ctx = React.useContext(UserContext); 
  
    function handle(){
      fetch(`/account/findOne/${ctx.users}`)
      .then(response => response.text())
      .then(text => {
          try {
              const data = JSON.parse(text);
              props.setStatus(JSON.stringify(data.balance));
              console.log(data.balance)
              props.setShow(false);
              console.log('JSON:', data);
          } catch(err) {
              props.setStatus(text)
              console.log('err:', text);
          }
      });
    }
  
    return (<>
  
      <button type="submit" 
        className="btn btn-light" 
        onClick={handle}>
          Check Balance
      </button>
  
    </>);
  }