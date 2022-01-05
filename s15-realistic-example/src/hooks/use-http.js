import { useState, useCallback } from "react";

let useHttp = () => {
    let [isLoading, setIsLoading] = useState(false);
    let [error, setError] = useState(null);

    

    const sendRequest =  useCallback(async (requestConfig, applyData) => {
        setIsLoading(true);
        setError(null);
        // console.log(requestConfig);

        try {
            const response = await fetch(requestConfig.url, {
                method: requestConfig.method ? requestConfig.method : 'GET',
                headers: requestConfig.headers ? requestConfig.headers : {},
                body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
              });
           

            if (!response.ok) {
                throw new Error("Request failed!");
            }

            let data = await response.json();
            // console.log(data);

            applyData(data);

        } catch (error) {
            setError(error.message || "Something went wrong!");
        }

        setIsLoading(false);
    }, []);

    return {
        isLoading: isLoading,
        error: error,
        sendRequest: sendRequest,
    };
};

export default useHttp;
