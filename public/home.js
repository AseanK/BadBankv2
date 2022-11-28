function Home(){
    const ctx = React.useContext(UserContext);
    console.log(ctx.users)
    if (ctx.users == '') {
        return (
            <div>
            <div className="card-footer text-muted" style={{textAlign:'center'}}>
                Please login to continue
            </div>
          <Card
            bgcolor="secondary"
            txtcolor="black"
            header="Bad Bank"
            title="Welcome to the Bad bank"
            text="You can move around using the navigation bar."
            body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
          />    
          <div className="card-footer text-muted" style={{textAlign:'center'}}>
          Warning: No Security. Do not use real informations.
          </div>
          </div>
        );  
    } else {

        return (
            <div>
            <div className="card-footer text-muted" style={{textAlign:'center'}}>
                logged in as {ctx.users}
            </div>
          <Card
            bgcolor="secondary"
            txtcolor="black"
            header="Bad Bank"
            title="Welcome to the Bad bank"
            text="You can move around using the navigation bar."
            body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
          />    
          <div className="card-footer text-muted" style={{textAlign:'center'}}>
          Warning: No Security. Do not use real informations.
          </div>
          </div>
        );  
  }
}