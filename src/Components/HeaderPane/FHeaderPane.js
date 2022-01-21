import React, { Fragment } from 'react';
import { Button, Form, Grid, Header, Icon, Modal, Segment,Input } from 'semantic-ui-react';
import {useState} from 'react'
import { connect } from 'react-redux';
import firebase from '../../firebase'
import { refresh, setDate, setWorkDateData } from '../../redux/WorkDate/workDateAction';
function FHeaderPane(props) {
    const [open,setOpen] = useState(false)
    const [work,setWork] = useState('')
    const [link,setLink] = useState({
        WorkDateRef: firebase.database().ref('workdates')
      })
    const handleSubmit = ()=>{
        saveWorkDate();
    }
    function saveWorkDate(){
        console.log('bat dau')
        if(validate(work)){
            console.log('vao if')
            const key = link.WorkDateRef.push().key
            const newDate = {
                id:key,
                date:props.state.workDate,
                uid:props.user.users.uid
            }
            link.WorkDateRef.child(key).update(newDate).then(()=>{
                console.log('success')
            }).catch(err=>{
                console.log(err)
            })
        }
    }
    function saveWorkData(key,workName,workRef){
       const newWork = {
           timestamp: firebase.database.ServerValue.TIMESTAMP,
           name: workName,
           status: 'TODO'
       }
       workRef.child(key).push().set(newWork).then(()=>{
           console.log('save work')
           setOpen(false)
           props.state.refresh()
       }).catch(err=>{
           console.log(err)
       })
    }
    function validate(work){
       return work
    }
    return (
        <Fragment>
            <Grid.Row>
                <Segment clearing>
                    <Header>
                        <Icon name='calendar'></Icon>
                        <Header.Content>
                            <h1>Date: {props.state.workDate} </h1>
                        </Header.Content>
                        <Button floated='right' onClick={()=>setOpen(true)}>+</Button>
                    </Header>
                </Segment>
            </Grid.Row>
            <Modal open={open} onClose={()=>setOpen(false)}>
               <Modal.Header>Add work</Modal.Header>
               <Modal.Content style={{padding:50}}>
                   <Form onSubmit={handleSubmit}>
                      <Form.Field>
                          <Input fluid label='Work Name: ' value={work} name='WorkName' onChange={(e)=>setWork(e.target.value)}/>
                      </Form.Field>
                   </Form>
                   <Modal.Actions style={{margin:30}}>
                       <Button color='red' floated='right' inverted onClick={()=>setOpen(false)}>
                       <Icon name='remove' /> Cancel
                       </Button>
                       <Button color='green' floated='right' inverted onClick={handleSubmit}>
                       <Icon name='checkmark' /> Add
                       </Button>
                   </Modal.Actions>
               </Modal.Content>
            </Modal>
        </Fragment>

    );
}
const mapStateToProps = (state) => ({
    state:state.work,
    user:state.user
  });
  
  const mapDispatchToProps = (dispatch)=>({
    setDate:(workDate) =>dispatch(setDate(workDate)),
    setWorkData: (workData) =>dispatch(setWorkDateData(workData)),
    refresh: (data)=>dispatch(refresh(data))
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(FHeaderPane);
