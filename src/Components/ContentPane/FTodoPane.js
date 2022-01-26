import React from 'react';
import {useState} from 'react'
import { connect } from 'react-redux';
import firebase from '../../firebase'
import { Button, Divider, Grid, Header, Icon, Segment } from 'semantic-ui-react';
import { refresh } from '../../redux/WorkDate/workDateAction';
const FTodoPane = (props) => {
    const [state,setState] = useState({
        workRef: firebase.database().ref('works')
    })
    function handleDele(item){
        state.workRef.child(props.workDateId).child(item.id).remove().then(()=>{
            props.refreshId(Math.random())
        })
    }
    function handleUpdate(item){
         state.workRef.child(props.workDateId).child(item.id).update({
             name:item.name,
             status: 'DONE',
             timestamp: firebase.database.ServerValue.TIMESTAMP
         }).then((update)=>{
             console.log(update)
             props.refreshId(Math.random())
         }).catch((err)=>{
             console.log(err)
         })
    }
  return (
    <Grid.Column width='8'>
    <Segment stacked>
        <Header>
            <Icon name='bell' color='red'></Icon>
            <Header.Content>To do</Header.Content>
        </Header>
        <Divider></Divider>
        {props.todoWorks && props.todoWorks && props.todoWorks.map( (item,index) =><Segment key={index}  attached clearing>
             {item.name}
            <Button onClick={()=>handleDele(item)} icon='trash alternate' inverted color='red' floated='right' size='tiny'></Button>
            <Button onClick={()=>handleUpdate(item)} icon='checkmark' inverted color='green' floated='right' size='tiny'></Button>
        </Segment>)}
    </Segment>
</Grid.Column>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch)=>{
    return{
        refreshId: (id)=>dispatch(refresh(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FTodoPane);
