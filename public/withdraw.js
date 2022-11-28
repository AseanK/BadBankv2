function Withdraw(){
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
        header="Withdraw"
        status={status}
        body={<>
            <h5 style={{textAlign:'center'}}>You're not logged in yet</h5><br/>
            <h5>Please login to make withdrawal</h5><br/>
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
          header="Withdraw"
          status={status}
          body={show ? 
            <WithdrawForm setShow={setShow} setStatus={setStatus}/> :
            <WithdrawMsg setShow={setShow} setStatus={setStatus}/>}
        />
        </div>
    )
  }
}
  
  function WithdrawMsg(props){
    return(<>
      <h5>Success</h5>
      <button type="submit" 
        className="btn btn-light" 
        onClick={() => {
          props.setShow(true);
          props.setStatus('');
        }}>
          Withdraw again
      </button>
      <br/><p>Available Balance</p>
    </>);
  }
  
  function WithdrawForm(props){
    const [amount, setAmount] = React.useState('');
    const [enable, setEnable] = React.useState('');
    const ctx = React.useContext(UserContext);
  
    function validateInput() {
        var enabled = true;
        if (!document.getElementById("field")) {
          enabled = false;
        }
        if (enabled) {
          setEnable("enable");
        } else {
          setEnable("");
        }
      }

    function handle(){
      fetch(`/account/update/${ctx.users}/-${amount}`)
      .then(response => response.text())
      .then(text => {
          try {
              const data = JSON.parse(text);
              props.setStatus(JSON.stringify(parseInt(data.value.balance) - parseInt(amount)));
              props.setShow(false);
              console.log('JSON:', data);
          } catch(err) {
              props.setStatus('Deposit failed')
              console.log('err:', text);
          }
      });
    }
  
  
    return(<>

      Amount<br/>
      <input type="number" 
        id="field"
        className="form-control" 
        placeholder="Enter amount" 
        value={amount} 
        onChange={e => {setAmount(e.currentTarget.value); validateInput()}}/><br/>
  
      <button type="submit" 
        className="btn btn-light" 
        disabled = {enable === ""}
        onClick={handle}>
          Withdraw
      </button>
  
    </>);
  }