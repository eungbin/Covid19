import { useState, useEffect } from 'react';
import axios from 'axios';

interface StateInterface<T> {
    loading: boolean;
    error: Error | null;
    data: T | null;
}

function useAxiosGet<T>(url: string, keyword: string) {
    const [state, setState] = useState<StateInterface<T>>({
        loading: true,
        error: null,
        data: null,
    });
    const encoded_query = encodeURI(keyword);
    url = url + encoded_query + "&display=100"

    useEffect(() => {
        axios.get(url, {
            headers: {
                'X-Naver-Client-Id': "MdaPh3BOQw5HlyQomoa1",
                'X-Naver-Client-Secret': "g1sTFbdzA_",
            }
        })
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