import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [isPending, setIsPending] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        console.log('effect ran');
        const abort = new AbortController();
        fetch(url, {signal: abort.signal}).then(response => {
            // console.log(response);
            if(!response.ok) throw Error('could not fetch the data for that resource.');
            return response.json();
        }).then(data => {
            // console.log(data);
            setData(data.data);
            setIsPending(false);
        }).catch(err => {
            if(err.name === "AbortError") {
                console.log('fetch aborted');
            } else{
                setError(err.message);
                setIsPending(false);
            }            
        })    
        return () => abort.abort(); 
    }, [url])

    return {data, isPending, error};
}

export default useFetch;

