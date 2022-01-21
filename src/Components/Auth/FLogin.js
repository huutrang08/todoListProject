import React from 'react'
import {useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { Button, Form, Grid, GridColumn, Header, Message, Segment } from 'semantic-ui-react'
import './login.css'
import firebase from '../../firebase'
export default function Flogin() {
    const [state,setState] = useState({
        email:'',
        password:'',
        loading:false,
        errors:[]
    })
    function handleChange(e){
            const {name,value} = e.target
            setState({...state,[name]:value})
    }
    let navi = useNavigate()
    function handleSubmit(e){
        e.preventDefault()
        if(validate()){
            setState({...state,errors: [],loading:true})
            firebase.auth()
            .signInWithEmailAndPassword(state.email,state.password)
            .then((signedInUser)=>{
                console.log(signedInUser)
                setState({...state,loading:false})
                navi('/home')
            })
            .catch(err=>{
                setState({...state,errors:[...state.errors,err]})
            })
        }

    }
    function validate(){
        console.log(state.email.length)
        return true
    }
    return (
        <Grid textAlign='center' verticalAlign='middle' className='app' >
           <GridColumn style={{maxWidth:450}}>
                 <Header>
                     Login
                 </Header>
                 <Form size='large' onSubmit={handleSubmit}>
                     <Segment atacked="true">
                          <Form.Input onChange={handleChange} value={state.email} fluid name='email' icon='mail' iconPosition='left' placeholder='Email' type='email' ></Form.Input>
                          <Form.Input onChange={handleChange} value={state.password} fluid name='password' icon='lock' iconPosition='left' placeholder='PassWord' type='password' ></Form.Input>
                          <Button className={state.loading?"loading":''} color='violet' fluid size='large' >login</Button>
                     </Segment>
                 </Form>
                <Message error>
                    <h3>Error</h3>
                    Error message
                </Message>
                <Message>
                    Don't have account? <Link to='/register'>Register</Link>
                </Message>
           </GridColumn>
        </Grid>
    //     <div>
    //         sayhello
    //     </div>
    )
}
