import React from 'react'
import {MdDelete, MdEdit} from 'react-icons/md'
const ExpenseItem = ({expense, singleDelete, edit}) => {
    const {id, charge, amount}= expense
  return (
    <>
        <li className='item'>
            <div className='info'>
                <span className='expense'>{charge}</span>
                <span className='amount'>${amount}</span>
            </div>
            <div>
                <button className='edit-btn' onClick={() => edit(id)} aria-label='edit button'><MdEdit/></button>
                <button className='clear-btn' onClick={() => singleDelete(id)} aria-label='delete button'><MdDelete/></button>
            </div>
        </li> 
    </>
  )
}

export default ExpenseItem
