import React from 'react'
import Item from './ExpenseItem';
import {MdDelete} from "react-icons/md"
const ExpenseList = ({expenses, allDelete, singleDelete, edit}) => {
  return (
    <>
      <ul className='list'>
        {expenses.map((expense)=>{
            return <Item key={expense.id} expense={expense} singleDelete={singleDelete}
            edit={edit}/>
        })}
      </ul>
      {expenses.length > 0 && (
        <button className='btn' onClick={allDelete}>
            clear expense
        <MdDelete className='btn-icon'/>
        </button>
      )}
    </>
  )
}

export default ExpenseList
