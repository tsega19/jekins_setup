
import { useCallback, useState } from 'react';

export const Api = () => {

    const [dataFetched, setDateFetched] = useState()
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState()


    const sendRequist = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        try {
            const data = await fetch(url, { method, body, headers });
            if (!data.ok) {
                throw new Error(`API request failed with status ${data.status}`);
            }
            const res = await data.json();
            setDateFetched(res);
            console.log(res)
            return res;
        } catch (e) {
            console.error(e)
            setError(e.message)
        } finally {
            setIsLoading(false);
        }
    }

    )


    return { isLoading, error, sendRequist, dataFetched }
}

