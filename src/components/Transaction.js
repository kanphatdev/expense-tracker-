import React from 'react'
import { useEffect, useState } from 'react'
function Transaction() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [label, setLabels] = useState([]);

    useEffect(() => {
        fetch("http://localhost:1337/api/transaction-models/")
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
                    <div className="alert w-full label" key={label.id}>

                        <>

                            <span className='capitalize text-justify'>{label.attributes.name}</span>
                            <div>
                                
                                <button className="btn btn-sm btn-error"><i className="ri-delete-bin-6-line"></i></button>
                            </div>
                        </>

                    </div>
                ))}
            </>
        );
    }
}

export default Transaction