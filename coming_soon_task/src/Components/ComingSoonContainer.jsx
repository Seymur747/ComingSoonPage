import ComingSoon from "./ComingSoon";
let ComingSoonContainer=()=>{
    let makeRequest=async(e)=>{
        console.log('isledi')
        e.preventDefault()
          var code=e.target.code.value
            fetch('http://localhost:3001/',{
           method:'post',
           headers:{
            'Content-Type': 'application/json'
           },
           body:JSON.stringify({
               code:code
           })
       })
    }
    return(
        <ComingSoon check={makeRequest}/>
        )
}
export default ComingSoonContainer;