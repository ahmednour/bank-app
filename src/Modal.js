import "./modalStyles.css";
export default function Modal({isVisible , errorMessage= null}) {
  if(isVisible){
    return (
      <div className="modal" style={{ color: errorMessage ? "red" : "green"  }}>
          <div className="modal-content">              
              <h2> {errorMessage != null ? errorMessage : "Successfully: your loan is sunbmitted"}</h2>
          </div>
      </div>
    )
  } else{
   return ( <></>)
  }
 
}
