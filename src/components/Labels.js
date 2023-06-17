import React from 'react'
import { useEffect, useState } from 'react'
function Labels() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [label, setLabels] = useState([]);

    useEffect(() => {
        fetch("http://localhost:1337/api/categories-models")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setLabels(result.data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div><span className="loading loading-spinner loading-lg"></span></div>;
    } else {
        return (
            <>
             {label.map(label => (
                <div className="alert w-full " key={label.id}>
               
                 <>
                 <span>0%</span>
                 <span className='capitalize text-justify'>{label.attributes.type}</span>
                 </>
                
                </div>
                ))}
            </>
        );
    }


}

export default Labels