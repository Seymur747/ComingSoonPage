let Dashboard=(props)=>{
    localStorage.setItem('key','value')

    let clearStorage=()=>{
        localStorage.clear();
        props.changeLog(false)
        console.log(localStorage)
    }
    return <>
        <h1>Dashboard</h1>
        <button className="btn btn-danger" onClick={clearStorage}>Выйти</button>
        <h6>Так как вы не сказали каким должна быть эта страница я ее так и оставил</h6>
    </>
}
export default Dashboard;