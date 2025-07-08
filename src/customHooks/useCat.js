import {useQuery} from "@tanstack/react-query";
import axios from "axios";

export const useCat = () => {
    const {data, isLoading, refetch} = useQuery({
        queryKey: ["cat"],
        queryFn: () => {
            return axios.get("https://catfact.ninja/fact").then(res => res.data);
        },
    })

    const refetchData = () => {
        alert("data refetched");
        refetch();
    }
    return {data, isLoading, refetchData};
}




