import React from 'react';
import TableData from '../common/TableData';
import FormData from '../common/FormData';
import { connect } from "react-redux";
// import { dataList, dataAdd, dataEdit, dataDelete} from '../features/userSlice'
import { getFetchUsers, postFetchUsers, putFetchUsers } from '../features/userSlice'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            id:'',
            firstName:'',
            lastName:'',
            userName:'',
            emailId:'',
            gender:'',
            mobileNo:'',           
            fieldEdit: false
            
        }
    }

     componentDidMount(){
        // this.props.dataList()
        this.props.getFetchUsers()
 }
    

     onChangeHandler = (name, value) => {
       // const { name, value } = e.target       
             this.setState({ [name] : value })
    }
    editItem = (item) => {
        this.setState({fieldEdit:true, ...item})
    }

   /* deleteItem = (id) => {
        this.props.dataDelete(id)
    } */
    resetHandler = () => {
       // e.preventDefault();
        this.valueEmpty()   
    }

    valueEmpty = () => {
        this.setState({
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

    submitHandler = () => {
       // e.preventDefault();     
        let newList = {
            id: 1 + Math.random(),
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            userName:this.state.userName,
            emailId:this.state.emailId,
            gender:this.state.gender,
            mobileNo:this.state.mobileNo,
        }
     // this.props.dataAdd(newList)  
     this.props.postFetchUsers(newList)
   this.valueEmpty()
    }

    editHandler = () => {       
       let editList = {
        id: this.state.id,
        firstName:this.state.firstName,
        lastName:this.state.lastName,
        userName:this.state.userName,
        emailId:this.state.emailId,
        gender:this.state.gender,
        mobileNo:this.state.mobileNo,
    }
   // this.props.dataEdit(editList)
    this.props.putFetchUsers(editList)
    
       this.valueEmpty()
    }

    tableView = () => {
      
       return this.props.actdata && this.props.actdata.map((item) => {           
            return <tr key = {item.id}>
                <td>{Math.round(item.id)}</td>
                <td>{item.userName}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.gender}</td>
                <td>{item.emailId}</td>
                <td>{item.mobileNo}</td>
                <td>
                <button type = 'button' className={'btn btn-success'} onClick= {()=>this.editItem(item)}>Edit</button> &nbsp; 
                <button type='button' className={'btn btn-danger'} onClick= {()=>this.deleteItem(item.id)}>Delete</button>
                </td>
                </tr>
        })
    }
   

    
    render() { 
        return (
            <>
            <div style={{margin:'5%'}} >
            <FormData 
                state = {this.state}
                onChangeHandler = {this.onChangeHandler}
                resetHandler = {this.resetHandler}
                submitHandler = {this.submitHandler}
                editHandler = {this.editHandler}
                 />
                <TableData editItem = {this.editItem}  />
                </div>
            </>
        )
    }
}
function mapStateToProps(state) {
    return {actdata : state}
  }

// export default App;

// export default connect(mapStateToProps,{ dataList, dataAdd, dataEdit, dataDelete})(App);


export default connect(mapStateToProps,{ getFetchUsers, postFetchUsers, putFetchUsers})(App);
