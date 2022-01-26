import React from 'react';
import { Message } from 'semantic-ui-react';

function FEmtyContentMessage(props) 

{console.log()
  return (
      <Message success>
         <Message.Header>
               No work in the date {props.date}
         </Message.Header>
      </Message>
  );
}
export default FEmtyContentMessage
