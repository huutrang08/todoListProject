import React from 'react';
import { Icon, Menu } from 'semantic-ui-react';
export default function FUserPane(props) {
  return (
    <Menu vertical style={{width: '100%'}}>
    <Menu.Item name='user'>
      <Icon name="user circle"></Icon> User
    </Menu.Item>
    <Menu.Item name='key'>
      <Icon name="user"></Icon> Change Passwork
    </Menu.Item>
    <Menu.Item name='signout' onClick={props.onSignout}>
      <Icon name="sign in alternate"></Icon> sign out
    </Menu.Item>
 </Menu>
  );
}
