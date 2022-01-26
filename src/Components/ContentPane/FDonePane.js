import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Divider, Grid, Header, Icon, Segment } from 'semantic-ui-react';
import firebase from '../../firebase';
import { refresh } from '../../redux/WorkDate/workDateAction';
const FDonePane = (props) => {
  const [state,setState] = useState({
    workRef: firebase.database().ref('works')
})
function handleDele(item){
    state.workRef.child(props.workDateId).child(item.id).remove().then(()=>{
        props.refreshId(Math.random())
    })
}
  return (
    <Grid.Column width='8'>
    <Segment stacked>
        <Header>
            <Icon name='calendar check outline' color='green'></Icon>
            <Header.Content>Done</Header.Content>
        </Header>
        <Divider></Divider>
        { props.doneWorks && props.doneWorks.length>0 && props.doneWorks.map((item,index)=><Segment key={index} attached clearing>
            {item.name}
            <Button onClick={()=>handleDele(item)} icon='trash alternate' inverted color='red' floated='right' size='tiny'></Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(FDonePane);
