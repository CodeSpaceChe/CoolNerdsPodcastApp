import { useState, useEffect } from "react";

export const useAPICall = (url, options = {}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    
    useEffect(() => {
        try {
            setIsLoading(true);
            fetch(url, options)
            .then(response => response.json())
            .then(json => setData(json))
        }   catch (e) {
            setError(e);
            setIsLoading(false);
            throw e;
        }
      }, [])

    return {
        isLoading,
        error,
        data,
    };
}