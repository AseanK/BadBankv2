const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

function Card(props){
  function classes(){
    const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';

    return 'card mb-3 ' + bg + txt;
  }

  return (
    <div className={classes()} style={{maxWidth: "auto", alignItems:'center'}}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && (<h2 className="card-title" style={{textAlign:'center'}}>{props.title}</h2>)}
        {props.text && (<p className="card-text" style={{textAlign:'center'}}>{props.text}</p>)}
        {props.body}
        {props.status && (<div id='createStatus' style={{alignItems:'center'}}>{props.status}</div>)}
      </div>
    </div>      
  );    
}