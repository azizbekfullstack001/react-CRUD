import React,{useState} from 'react';
import Rodal from 'rodal';
import {useForm} from 'react-hook-form'
import 'rodal/lib/rodal.css';
import './app.css'
function App(props) {
    const [modalVisible,setModalVisible] = useState(false)
    const [product,setProduct] = useState([])
const [currentIndex,setCurrentIndex] = useState("")
    
    const {handleSubmit,register,reset} = useForm()
    function addUser(){
        setModalVisible(true)
    }
    function mySubmit(data){
        if(currentIndex===""){
            product.push(data)
        }else{
            product[currentIndex]= data
            setModalVisible(false)
            setCurrentIndex("")
         
        }
        setModalVisible(false)
        reset()
    }
    function deleteItem(id){
        product.splice(id,1)
        setProduct([...product])
    }
    function editItem(id){
        setModalVisible(true)
        let currentUser = product[id]
        reset(currentUser)
        setCurrentIndex(id)
 
      
    }
    return (
        <div className='container'>
          <h1 className='h1-tag'>User Detals</h1>
          <button onClick={addUser} className='btn btn-info mx-3'>add User</button>
          <Rodal height={350} visible={modalVisible} onClose={()=>setModalVisible(false)}>
<form onSubmit={handleSubmit(mySubmit)}>
    <input type="text" {...register("firstname")}  className='form-control my-2' placeholder='Firstname'/>
    <input type="text" {...register("lastname")}  className='form-control my-2' placeholder='Lastname'/>
    <input type="text" {...register("username")}  className='form-control my-2' placeholder='Username'/>
    <input type="number" {...register("age")}  className='form-control my-2' placeholder='age'/>
    <input type="text" {...register("salary")}  className='form-control my-2' placeholder='salary'/>
    <button className='btn btn-success'>save</button>
</form>
          </Rodal>
          <table className='table'>
            <thead className='table-primary'>
                <tr>
                    <th>id</th>
                    <th>firstname</th>
                    <th>lastname</th>
                    <th>username</th>
                    <th>age</th>
                    <th>salary</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                {
                    product.map((item,index)=>{
                        return <tr key={item.id}>
<td>{index+1}</td>
<td>{item.firstname}</td>
<td>{item.lastname}</td>
<td>{item.username}</td>
<td>{item.age}</td>
<td>{item.salary}</td>
<td><button onClick={()=>deleteItem(index)} className='btn btn-danger'>delete</button> <button onClick={()=>editItem(index)} className='btn btn-warning mx-2'>edit</button></td>
                        </tr>
                    })
                }
            </tbody>
          </table>
        </div>
    );
}

export default App;