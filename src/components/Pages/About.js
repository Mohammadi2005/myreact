import {useNavigate} from "react-router-dom";

export const About = () => {

    let navigate = useNavigate();
    return (
        <div style={{color:"#A99444", textAlign:"center"}}>
            <h1>this id about page</h1>
            <button onClick={()=>{navigate("/")}}>go to home page</button>
        </div>
    )
}
