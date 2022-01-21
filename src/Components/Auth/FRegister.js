import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Button, Form, Grid, GridColumn, Header, Item, Message, Segment } from 'semantic-ui-react'
import firebase from '../../firebase'
import md5 from 'md5'
export default function Fregister(props) {
    const [state, setstate] = useState({
        username:'',
        email:'',
        password:'',
        comfirm:'',
        loading:false,
        errors:[],
        userRef: firebase.database().ref('users'),
    })
     const handleError = (errors,input)=>{
        return errors.some(error=>error.message.toLowerCase().includes(input)?'error':'')
     }
    function handleChange(e){
        const {name,value} = e.target
        setstate({...state,[name]:value}) 
    }
    let navi = useNavigate()
    function submit(e){
        
         e.preventDefault()
         if(validate()){
            setstate({...state,errors:[],loading:true})
            firebase.auth().createUserWithEmailAndPassword(state.email,state.password)
            .then((createUser)=>{
                createUser.user.updateProfile({
                    displayName:state.username,
                    photoURL:`http://gravatar.com/avatar/${md5(createUser.user.email)}?d=identicon`
                }).then(()=>{
                      saveUser(createUser)
                      console.log('saved')
                      setstate({...state,loading:false,login:true})
                      e.target.reset()
                      navi('/login')
                      
                      
                })
            }).catch(err=>{
                setstate({...state,errors:[...state.errors,err],loading:false})
            })
         }
    }
    const validate = ()=>{
        return true
    }
    const saveUser = (createUser)=>{
        state.userRef.child(createUser.user.uid).set(
            {
                name:createUser.user.displayName,
                avatar:createUser.user.photoURL
            }
        )
    }
    return (
        <Grid textAlign='center' verticalAlign='middle' className='app' >
        <GridColumn style={{maxWidth:450}}>
              <Header>
                  Register
              </Header>
              <Form size='large' onSubmit={submit}>
                  <Segment atacked="true">
                       <Form.Input onChange={handleChange} className={handleError(state.errors,'username')} value={state.username} fluid name='username' icon='user' iconPosition='left' placeholder='Username' type='text' ></Form.Input>
                       <Form.Input onChange={handleChange} className={handleError(state.errors,'password')} value={state.password} fluid name='password' icon='lock' iconPosition='left' placeholder='PassWord' type='password' ></Form.Input>
                       <Form.Input onChange={handleChange} className={handleError(state.errors,'confirm')} value={state.confirm} fluid name='confirm' icon='lock' iconPosition='left' placeholder='Confirm' type='password' ></Form.Input>
                       <Form.Input onChange={handleChange} className={handleError(state.errors,'email')} value={state.email} fluid name='email' icon='mail' iconPosition='left' placeholder='Email' type='email' ></Form.Input>
                       <Button className={state.loading ? 'loading' : ''} color='violet' fluid size='large' >Register</Button>
                  </Segment>
              </Form>
             {
                 state.errors.length>0 && (
                     <Message>
                        <h3>Errors</h3>
                         {state.errors.map((item,index)=><div key={index} >{item.message}</div>)}
                     </Message>
                 )
             }
             <Message>Do you already have an account? <Link to='/login'>Login</Link></Message>
        </GridColumn>
     </Grid>
    )
}
