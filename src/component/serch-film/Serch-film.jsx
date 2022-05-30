import { useState } from "react"
import { Link } from "react-router-dom";


export const SerchFilm = () => {
    const [value, setValue] = useState("");
    const changeValue = (event) => {
        
        const letter=event.target.value
        setValue(letter);

    }
    const submit=(event)=>{
        setValue('');
    }
    
    return <form >
        <label><input type="text" name="query" value={value} onChange={changeValue} /></label>
        <Link to={`?query=${value}`} onClick={submit}><button >Submit</button></Link>
        
    </form>
}