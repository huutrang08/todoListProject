import React from 'react';
import { Divider, Segment } from 'semantic-ui-react';
import Calendar from './Calendar';
import FHeaderSidePane from './FHeaderSidePane';
import FUserPane from './FUserPane';
import FWorkDatePane from './FWorkDatePane';
export default function FSidePane(props) {
  return (
    <Segment>
        <FHeaderSidePane></FHeaderSidePane>
        <Divider></Divider>
        <FUserPane onSignout={props.onSignout}></FUserPane>
        <Divider></Divider>
        <FWorkDatePane></FWorkDatePane>
    </Segment>
  );
}
