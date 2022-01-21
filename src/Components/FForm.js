import React from 'react';
import { connect } from 'react-redux';
import { addUser, deleUser } from '../redux/user/userAction';
import {useState} from 'react'
export const FForm = (props) => {
   const [user,setUser] = useState({
       name:'',
       age:''
   })
   function handleChange(e){
      const {name,value} = e.target
      setUser({...user,[name]:value})
   }
   function handleClick(){
         props.addUser(user)
   }
   function handleDele(){
       props.dele()
   }
   console.log(props.state)
    return (<div>
        <label>Tên</label>
        <input type="text" name='name' placeholder='Tên' value={user.name} onChange={handleChange} />
        <label>Tuổi</label>
        <input type="text" name='age' placeholder='Tuổi' value={user.age} onChange={handleChange} />
        <button onClick={handleClick}>Submit</button>
        <button onClick={handleDele}>Dele</button>
    </div>);
};

const mapStateToProps = (state) => ({
    state:state.user
});

const mapDispatchToProps = (dispatch)=>({
    addUser: (user)=>dispatch(addUser(user)),
    dele: (user)=>dispatch(deleUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(FForm);


