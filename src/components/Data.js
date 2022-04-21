import React from 'react'
import DatePicker from "react-horizontal-datepicker";

export  default function Data() {
   
    const selectedDay = (val) =>{

        console.log(val)
    };
 
  return (
    <div>
         <h6 id='yearh6'>2022</h6>
      <DatePicker getSelectedDay={selectedDay}
    
 
                  endDate={100}
                  
                  selectDate={new Date("2022-04-21")}
                  selectedDay={new Date('thu')}
                 
                  labelFormat={"MMMM"}
                  
                  color={"#141414"}          
/>

</div>
  );
}
