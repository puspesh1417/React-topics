import React , {useState, useRef} from 'react'

const Uncontrolled = () => {

    // it like a useState only and its preserve the value. NO rerender. DOM
    const luckyName = useRef();
    console.log(luckyName);
    const[show, setShow] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();
         const name = luckyName.current.value;
        luckyName.current.style.backgroundColor="#82E0AA";
        console.log(name)
        // name === "" ? alert("plz fill the data") :
         setShow(name);
    }

    return (
        <div>
            <form action="" onSubmit={submitForm}>
                <div>
                    <label>enter your luckyName</label>
                    <input type="text"  ref={ luckyName }/>
                </div>
                <br/>
                <button>Submit</button>
            </form>
            <p> { show ? `your lucky name is ${luckyName.current.value}` : ""} </p>
        </div>
    )
}

export default Uncontrolled;