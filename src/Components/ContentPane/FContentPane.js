import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid, Item } from 'semantic-ui-react';
import FDonePane from './FDonePane';
import FTodoPane from './FTodoPane';
import { useState } from 'react'
import firebase from '../../firebase'
import Spinner from '../UI/Spinner';
import { refresh } from '../../redux/WorkDate/workDateAction';
import FEmtyContentMessage from './FEmtyContentMessage';
const FContentPane = (props) => {
    const [state, setState] = useState({
        workRef: firebase.database().ref('works'),
        workDateref:firebase.database().ref('workdates'),
        workDateId: props.workDateId,
        loading: true,
        todoWorks: [],
        doneWorks: [],
        hasworking: true
    })
    useEffect(() => {
        if (state.workDateId) {
            const todoWorks = []
            const doneWorks = []
            state.workRef.child(state.workDateId).on('child_added', (snap) => {
                console.log(snap.val())
                if (snap.val().status === 'TODO' ) {
                    todoWorks.push({ id: snap.key, ...snap.val() })
                } else {
                    doneWorks.push({ id: snap.key, ...snap.val() })
                }
                 setState({
                    ...state,
                    loading: false,
                    todoWorks,
                    doneWorks,
                })
            })
           
        }
        return removeListener()
    }, []);
    function removeListener() {
        console.log('clear')
        state.workRef.off()
    }
    console.log(state.todoWorks.length, state.doneWorks.length)
    return (
        <Fragment>
            {state.todoWorks.length === 0 && state.doneWorks.length === 0 ? <FEmtyContentMessage date={props.work.workDate}></FEmtyContentMessage> : (<Grid.Row>
                <Grid >
                    <FTodoPane key={Math.random()} todoWorks={state.todoWorks} workDateId={state.workDateId}></FTodoPane>
                    <FDonePane key={Math.random()} doneWorks={state.doneWorks} workDateId={state.workDateId}></FDonePane>
                </Grid>
            </Grid.Row>)}
        </Fragment>

    );
};

const mapStateToProps = (state) => ({
    work: state.work,
    user: state.user
});

const mapDispatchToProps = (dispatch) => ({
    refresh: (data) => dispatch(refresh(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(FContentPane);
