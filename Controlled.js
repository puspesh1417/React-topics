import React , {useState} from 'react'

const Controlled = () => {

    // it like a useState only and its preserve the value. NO rerender. DOM
    
    const[show, setShow] = useState();
    const[name ,FullName]=useState();
const inputEvent=(e)=>{
    console.log(e.target.value);
    setShow(e.target.value)
}
    const onSubmit=(e)=>{
        e.preventDefault();
FullName(show)

    }

    return (
        <div>
            <form action="" >
                <div>
                    <h1>hlo{name}</h1>
                    <input type="text" id="luckyName" onChange={inputEvent} value={show}/>
                </div>
                <br/>
                <button onClick={onSubmit} >Submit</button>
            </form>
            <p> hii </p>
        </div>
    )
}

export default Controlled;