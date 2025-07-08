import {useQuery} from "@tanstack/react-query"
import axios from "axios"

function Home(){
    const {data, isLoading, isError, error, refetch} = useQuery({
        queryKey: "cat",
        queryFn: () => {
            return axios.get("https://catfact.ninja/fact").then(res => res.data)
        }
    })
    if (isLoading){
        return <h3>Loading...</h3>
    }
    if (isError){
        return <h3>Error : {error.message}</h3>
    }
    return (
        <div>
            <h1>{data?.fact}</h1>
            <button onClick={() => refetch()}>Refresh</button>
        </div>
    )
}
export default Home