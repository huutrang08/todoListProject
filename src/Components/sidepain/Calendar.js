import React, { useEffect } from 'react';
import {useState} from 'react'
import { connect } from 'react-redux';
import { DateInput } from 'semantic-ui-calendar-react-17';
import {setDate,setWorkDateData} from '../../redux/WorkDate/workDateAction'

function Calendar(props) {
    function handleChangeDate(e,data){
        console.log(data.value)
        props.setDate(data.value)
    }
    return (
        <DateInput name='date' inline placehuder='Date'  onChange={handleChangeDate}>      
        </DateInput>
      );
}
const mapStateToProps = (state) => ({
    state:state.work
  });
  
  const mapDispatchToProps = (dispatch)=>({
    setDate:(workDate) =>dispatch(setDate(workDate)),
    setWorkData: (workData) =>dispatch(setWorkDateData(workData))
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
