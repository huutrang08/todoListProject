import React from 'react';
import { Grid, Segment,Header, Icon, Divider, Menu, Button } from 'semantic-ui-react';
import {useState} from 'react'
import { DateInput } from 'semantic-ui-calendar-react-17';
export default function FHome() {
    const [date, setDate] = useState('');
    function handleChangeDate(e,{name,value}){
       setDate(value)
    }
  return (
    <Grid stretched style={{background: '#eee'}} stackable>
        <Grid.Column width='5'>
           <Segment>
               <Header>
                   <Icon name='tasks'>
                   </Icon>
                   <Header.Content>WorkList</Header.Content>
                   <Divider></Divider>
                   <Menu vertical style={{width: '100%'}}>
                      <Menu.Item name='user'>
                        <Icon name="user circle"></Icon> User
                      </Menu.Item>
                      <Menu.Item name='key'>
                        <Icon name="user"></Icon> Change Passwork
                      </Menu.Item>
                      <Menu.Item name='signout'>
                        <Icon name="sign in alternate"></Icon> sign out
                      </Menu.Item>
                   </Menu>
                   <Divider></Divider>
                   <DateInput name='date' inline placehuder='Date' value={date} onChange={handleChangeDate}>
                        
                   </DateInput>
               </Header>
           </Segment>
        </Grid.Column>
        <Grid.Column width='11'>
           <Grid>
               <Grid.Column width='16'>
                 <Grid.Row>
                     <Segment clearing>
                           <Header>
                               <Icon name='calendar'></Icon>
                               <Header.Content>
                                   <h1>Date: {date}</h1>
                               </Header.Content>
                               <Button floated='right'>+</Button>
                           </Header>
                     </Segment>
                 </Grid.Row>
                 <Divider></Divider>
                 <Grid.Row>
                     <Grid>
                         <Grid.Column width='8'>
                               <Segment stacked>
                                   <Header>
                                       <Icon name='bell' color='red'></Icon>
                                       <Header.Content>To do</Header.Content>
                                   </Header>
                                   <Divider></Divider>
                                   <Segment attached clearing>
                                       Do homework
                                       <Button icon='trash alternate' inverted color='red' floated='right' size='tiny'></Button>
                                       <Button icon='checkmark' inverted color='green' floated='right' size='tiny'></Button>
                                   </Segment>
                               </Segment>
                         </Grid.Column>
                         <Grid.Column width='8'>
                               <Segment stacked>
                                   <Header>
                                       <Icon name='calendar check ouline' color='green'></Icon>
                                       <Header.Content>Done</Header.Content>
                                   </Header>
                                   <Divider></Divider>
                                   <Segment attached clearing>
                                       Do homework
                                       <Button icon='trash alternate' inverted color='red' floated='right' size='tiny'></Button>
                                       <Button icon='checkmark' inverted color='green' floated='right' size='tiny'></Button>
                                   </Segment>
                               </Segment>
                         </Grid.Column>
                     </Grid>
                 </Grid.Row>
               </Grid.Column>
           </Grid>
        </Grid.Column>
    </Grid>
  )
}
