
import React from 'react';
import { connect } from 'react-redux';

export const Fcom = (props) => {
  console.log(props)
  return (<div>
    say hello
  </div>);
};

const mapStateToProps = (state) => ({
  state:state.user
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Fcom);
