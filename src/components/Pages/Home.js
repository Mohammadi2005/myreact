import {ProfileContent} from "../../App";
import {useContext} from "react";

function Home(){
    const {username} = useContext(ProfileContent)
    return (
        <div style={{color:"#622444", textAlign:"center"}}>
            <h1>this id home page - {username}</h1>
        </div>
    )
}
export default Home