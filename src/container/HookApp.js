import React, {useState, useEffect} from 'react';
import TableData from '../common/TableData';
import FormData from '../common/FormData';
// import { dataAdd, dataEdit } from '../features/userSlice'
import { useDispatch } from 'react-redux';
import { getFetchUsers, postFetchUsers, putFetchUsers } from '../features/userSlice'

const HookApp = () => {
    
  
  const dispatch = useDispatch()
    const [state, setState] = useState([{
        id:'',
        firstName:'',
         userName:'',
        emailId:'',
        gender:'',
        mobileNo:'',
       
        fieldEdit: false
        
    }])
    
    useEffect(() => {
        dispatch(getFetchUsers())
      }, [dispatch])

    const onChangeHandler = (name, value) => {       
        let sat = state
             setState({...sat, [name] : value })
    }
    const editItem = (item) => {
       setState({fieldEdit:true, ...item})
    }
    const resetHandler = () => {       
        valueEmpty()   
    }

    const valueEmpty = () => {
        setState({
            id:'',
            firstName:'',
            lastName:'',
            userName:'',
            emailId:'',
            gender:'',
            mobileNo:'',
            fieldEdit:false,
            editId:''
    }) 
    }

    const submitHandler = () => {                 
        let newList = {
            id: 1 + Math.random(),
            firstName:state.firstName,
            lastName:state.lastName,
            userName:state.userName,
            emailId:state.emailId,
            gender:state.gender,
            mobileNo:state.mobileNo,
        } 
      dispatch(postFetchUsers(newList))
        valueEmpty()
    }

    const editHandler = () => {       
        let editList = {
            id: state.id,
            firstName:state.firstName,
            lastName:state.lastName,
            userName:state.userName,
            emailId:state.emailId,
            gender:state.gender,
            mobileNo:state.mobileNo,
        } 
        dispatch(putFetchUsers(editList))
       valueEmpty()
    } 
   
       
        return (
           
            <>
            <div style={{margin:'5%'}} >
                <FormData 
                state = {state}
                onChangeHandler = {onChangeHandler}
                resetHandler = {resetHandler}
                submitHandler = {submitHandler}
                editHandler = {editHandler}
                 />
                <TableData   editItem = {editItem}  />
               
                </div>
            </>
        )
   
}


export default HookApp;