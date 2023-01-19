import React, {useState} from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Alert from './components/Alert';
// import uuid from 'uuid/v4'
// import { v4 as uuidv4 } from 'uuid';
// const { v4: uuidv4 } = require('uuid');
const intialExpenses = [
  { id: 1, charge: "rent", amount: 1600},
  { id: 2, charge: "car payment", amount: 600},
  { id: 3, charge: "food", amount: 1400},
]

function App() {
  // this is for all
  const [id, setId] = useState('')
  const [expenses, setExpenses] = useState(intialExpenses)
  /////////////////////// this is for a single charge
  const [charge, setCharge] = useState("");
  ////////////////this is for the single amount
  const [amount, setAmount] = useState("")
  //////alert
  const [alert , setAlert] = useState({show:false})
  //////functionalty
  const handleCharge = e => {
    setCharge(e.target.value);
  };

  const handleAmount = e => {
    setAmount(e.target.value)
  };

  const handleAlert =({type,text}) => {
    setAlert({show:true,type,text})
    setTimeout(() =>{
      setAlert({show:false})
    },3000)
  }

  const handleSubmit = e=> {
    e.preventDefault();
    if(charge !== "" && amount > 0){
      const data = {id:id, charge, amount}
      setExpenses([...expenses,data])
      handleAlert({ type:"success", text:"item Added"})
      setAmount("")
      setCharge("")
    }
    else{
      handleAlert({type:"danger", text:"Charge con't be an empty and amount must be grater than 0"})
    }
  };
  

  ////////////////////////////////////////////////////////
  const allDelete = () =>{
    setExpenses([]);
    console.log("all delte")
  }

  const singleDelete = (id) =>{
    console.log("single item delete")
  } 

  const edit= (id) =>{
    console.log(`edit ${id}`)
  }

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <Alert/>
      <h1>budget calculator</h1>
      <main className='App'>
      <ExpenseForm           
          handleSubmit={handleSubmit}
          charge={charge}
          handleCharge={handleCharge}
          amount={amount}
          handleAmount={handleAmount}
          
          />
      <ExpenseList allDelete={allDelete} singleDelete={singleDelete}
          edit={edit} expenses={expenses}/>
      </main>
      <h1>
        total spending :{" "}
        <span className='total'>
          ${expenses.reduce((acc, curr)=>{
            return (acc +=parseInt(curr.amount))
          }, 0)}
        </span>
      </h1>
      
    </>
  );
}

export default App;
