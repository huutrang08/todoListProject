import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
export default function FHeaderPane() {
  return (
    <Header>
        <Icon name='tasks'>
        </Icon>
        <Header.Content>WorkList</Header.Content>
    </Header>  
  );
}
