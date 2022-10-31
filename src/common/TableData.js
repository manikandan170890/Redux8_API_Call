import React from 'react';
 import {deleteFetchUsers} from '../features/userSlice'
import { useSelector, useDispatch } from 'react-redux';

const TableData = (props) => {

    const tab = useSelector((state) => state.userDetails.users)
    const dispatch = useDispatch()    
    const editItem = (item) => {       
       props.editItem(item)
     }
 
     const deleteItem = (id) => {       
       dispatch(deleteFetchUsers(id))
     }

    const tableView = () => {
        return tab && tab.map((item) => {           
             return <tr key = {item.id}>
                 <td>{item.id}</td>
                 <td>{item.userName}</td>
                 <td>{item.firstName}</td>
                 <td>{item.lastName}</td>
                 <td>{item.gender}</td>
                 <td>{item.emailId}</td>
                 <td>{item.mobileNo}</td>
                 <td>
                 <button type = 'button' className='btn btn-success' onClick= {()=>editItem(item)}>Edit</button> &nbsp; 
                 <button type='button' className='btn btn-danger' onClick= {()=>deleteItem(item.id)}>Delete</button>
                 </td>
                 </tr>
         })
     }   
    return (
        <>
         <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>UserID</th>
                            <th>UserName</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Gender</th>
                            <th>Email ID</th>
                            <th>Mobile No</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableView()}
                    </tbody>
                </table>
        </>
    )
}


export default TableData