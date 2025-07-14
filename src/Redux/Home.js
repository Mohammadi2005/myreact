import {useSelector} from "react-redux";

export const Home = () => {
    const selectUsername = useSelector(state => state.user);
    return (
        <div>
            <h2>Home {selectUsername.username}</h2>
        </div>
    )
}