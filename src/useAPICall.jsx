import { useState } from "react";

export const useAPICall = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const execute = (url, setData, options = {}) => {
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
      };

    return {
        isLoading,
        error,
        executeAPICall: execute
    };
}