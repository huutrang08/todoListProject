import { Divider, Grid } from "semantic-ui-react";
import FSidePane from "./sidepain/FSidePane";
import firebase from "../firebase";
import { connect } from "react-redux";
import { addUser, deleUser } from "../redux/user/userAction";
import Spinner from "./UI/Spinner";
import { Fragment } from "react";
import FHeaderPane from "./HeaderPane/FHeaderPane";
import FContentPane from "./ContentPane/FContentPane";
import FEmtyContentMessage from "./ContentPane/FEmtyContentMessage";
function App(props) {
  function handleSignout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        props.dele();
      });
  }
  
  return (
    <Fragment>
      {props.state.loading ? <Spinner></Spinner> : (<Grid stretched style={{ background: "#eee" }} stackable>
        <Grid.Column width="5">
          <FSidePane onSignout={handleSignout}></FSidePane>
        </Grid.Column>
        <Grid.Column width='11'>
          <Grid>
            <Grid.Column width='16' >
               <FHeaderPane></FHeaderPane>
               <Divider></Divider>

               { props.work.workDateData ? <FContentPane key={`${props.work.workDateData.id}${props.work.refresh}`}
               workDateId={props.work.workDateData.id}
               ></FContentPane> : <FEmtyContentMessage key={props.work.workDate} date={props.work.workDate}></FEmtyContentMessage>}
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>)}
    </Fragment>

  );
}
const mapStateToProps = (state) => ({
  state: state.user,
  work: state.work
});

const mapDispatchToProps = (dispatch) => ({
  addUser: (user) => dispatch(addUser(user)),
  dele: (user) => dispatch(deleUser()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
