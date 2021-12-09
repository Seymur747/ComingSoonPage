import ComingSoon from "./ComingSoon";
import React, { useState } from 'react';
import Dashboard from './Dashboard'


let ComingSoonContainer=()=>{
    const [logged, setLog] = useState(2);
    let makeRequest=async(e)=>{ 
        e.preventDefault()
          let code=e.target.code.value
          let response=await fetch('http://localhost:3001/',{
           method:'post',
           headers:{
            'Content-Type': 'application/json'
           },
           body:JSON.stringify({
               code:code
           })
       })
       let result=await response.json();
        if(result){
                setLog(true);
        }
        else{
            setLog(false)
        }
    }

    if(localStorage.getItem('key')){
        return <Dashboard  changeLog={setLog} state={logged}/>
    }

    if (logged==2 || logged==false) {
        return(
            <ComingSoon state={logged} check={makeRequest}/>
            )
    }
    else{
        return <Dashboard changeLog={setLog} state={logged}/>
    }
}
export default ComingSoonContainer;