import Modal from "./Modal";
import "./formStyles.css";
import { useState } from "react";
export default function LoanForm() {
  const [loanInputs , setLoanInputs] = useState({
    name:'',
    phone:'',
    age:'',
    isEmployee:false,
    rangeSalary:'',   
  });
  function handelClick(event){
    event.preventDefault();
    alert("done");
  }
  const isBtnDisabled = loanInputs.name == "" || loanInputs.phone == "" || loanInputs.age == "";
  return (
    <div className="Form-box flex">
        <form className="flex">
            <h1>Requesting a Loan </h1>
            <hr/>

            <label>Name:</label>
            <input value={loanInputs.name} onChange={(event) => setLoanInputs({...loanInputs , name:event.target.value})}/>

            <label>Phone Number:</label>
            <input value={loanInputs.phone} onChange={(event) => setLoanInputs({...loanInputs , phone:event.target.value})}/>

            <label>Age:</label>
            <input value={loanInputs.age} onChange={(event) => setLoanInputs({...loanInputs , age:event.target.value})}/>

            <div className="flex" style={{flexDirection: 'row'}}>
            <label>Are You an employee?</label>
            <input type="checkbox" checked={loanInputs.isEmployee} onChange={(event) => setLoanInputs({...loanInputs , isEmployee:event.target.checked})}/>
            </div>

            <label>Salary:</label>
            <select value={loanInputs.rangeSalary} onChange={(event) => setLoanInputs({...loanInputs , rangeSalary:event.target.value})}>
                <option >between 50$ to 200$ </option>
                <option >between 200$ to 400$</option>
                <option >between 400$ to 1000$</option>
            </select>

            <button className={isBtnDisabled == true ? "disabled" : ""} disabled={isBtnDisabled} onClick={handelClick}>Submit</button>
        </form>
        <Modal />
    </div>
  )
}
