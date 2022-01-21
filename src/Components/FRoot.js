import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Route, Routes, useNavigate } from "react-router";
import App from "../Components/App";
import FLogin from "../Components/Auth/FLogin";
import FRegiste from "../Components/Auth/FRegister";
import firebase from "../firebase";
import { addUser, deleUser } from "../redux/user/userAction";
import {} from 'semantic-ui-react';
import Spinner from "./UI/Spinner";
function FRoot(props) {
    const navi = useNavigate();
    useEffect(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            props.addUser(user)
          navi("/home");
        } else {
            props.dele()
          navi("/login");
        }
      });
    }, []);
    return (
      <Fragment> 
        <Routes>
          <Route exact path="/home" element={<App />}></Route>
          <Route exact path="/register" element={<FRegiste />}></Route>
          <Route exact path="/login" element={<FLogin />}></Route>
        </Routes>
      </Fragment>
    );
  }
  const mapStateToProps = (state) => ({
    state:state.user
});

const mapDispatchToProps = (dispatch)=>({
    addUser: (user)=>dispatch(addUser(user)),
    dele: (user)=>dispatch(deleUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(FRoot);