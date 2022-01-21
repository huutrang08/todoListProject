import React, { useEffect } from 'react';
import {useState} from 'react'
import { connect } from 'react-redux';
import { DateInput } from 'semantic-ui-calendar-react-17';
import {setDate,setWorkDateData} from '../../redux/WorkDate/workDateAction'
import firebase from '../../firebase'
function FWorkDatePane(props) {
  const [link,setLink] = useState({
    WorkDateRef: firebase.database().ref('workdates')
  })
  useEffect(() => {
    
   const now = new Date()
   const day = ('' + (now.getDate()+100)).substr(1,2)
   const month = ('' + (now.getMonth()+101)).substr(1,2)
   const st = '' + day + '-' + month + '-' +now.getFullYear()
  
   console.log(now.getMonth()+101)
   handleChangeDate(null,{name:'', value:st})
  }, []);
    function handleChangeDate(e,{name,value}){
       props.setDate(value)
       link.WorkDateRef.orderByChild('date').equalTo(value).once('value').then(snapshot=>{
         if(snapshot.val()){
           const data = snapshot.val()
           const key = Object.keys(data)[0]
           props.setWorkData(data[key])
         }else{
           props.setWorkData(null)
         }
       })
    }
  return (
    <DateInput name='date' inline placehuder='Date' value={props.state.workDate} onChange={handleChangeDate}>      
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

export default connect(mapStateToProps, mapDispatchToProps)(FWorkDatePane);
