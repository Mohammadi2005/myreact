import style from './App.module.css';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {useToggle} from "./customHooks/useToggle";
import {useCat} from "./customHooks/useCat";
import {useCount} from "./customHooks/useCount";


const client = new QueryClient({
    defaultOptions : {
        queries: {
            refetchOnWindowFocus: false,
        }
    }
})

function AppContent() {
    const [state, toggle] = useToggle(true);
    const { data: catData, isLoading, refetchData } = useCat();
    const {count, increaseCount, decreaseCount, resetCount} = useCount();


    return (
        <div className={style.App}>
            <div style={{ background: "#111561" }}>
                <h1>hook 1 (useToggle)</h1>
                <button onClick={toggle}>{state ? "Hidden" : "Show"}</button>
                {state && <h2>this is my hook2</h2>}
            </div>
            <br />
            <div style={{ background: "#155111" }}>
                <h1>hook 2 (useCat)</h1>
                {isLoading && <h2>loading ... </h2>}
                <h2>{catData?.fact}</h2>
                <button onClick={refetchData}>refetch Data</button>
            </div>
            <div style={{ background: "#511111" }}>
                <h1>{count}</h1>
                <button onClick={increaseCount}>increase</button><br/><br/>
                <button onClick={decreaseCount}>decrease</button><br/><br/><button onClick={resetCount}>reset</button>
            </div>
        </div>
    );
}

function App() {
    return (
        <QueryClientProvider client={client}>
            <AppContent />
        </QueryClientProvider>
    );
}


export default App;