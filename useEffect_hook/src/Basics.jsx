import React, { useEffect, useState } from 'react'

const Basics = () => {
    const [data,  setData] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then((data) => setData(data))
    }, []);
    return (
        <div>
            <h2>Fetch Data</h2>
            {
                data? <p>{data?.title}</p>: <p>Loading...</p>
            }
        </div>
    )
}

export default Basics