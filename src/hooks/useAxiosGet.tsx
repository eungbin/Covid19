import { useState, useEffect } from 'react';
import axios from 'axios';

interface StateInterface<T> {
    loading: boolean;
    error: Error | null;
    data: T | null;
}

function useAxiosGet<T>(url: string) {
    const [state, setState] = useState<StateInterface<T>>({
        loading: true,
        error: null,
        data: null,
    });

    useEffect(() => {
        axios.get(url)
        .then((data) => {
            setState((prev) => ({
                ...prev,
                data: data.data,
                loading: false,
            }));
        })
        .catch((error) => {
            setState((prev) => ({
                ...prev,
                loading: false,
                data: null,
                error: error,
            }));
        })
    }, [url]);

    return state;
}

export default useAxiosGet;