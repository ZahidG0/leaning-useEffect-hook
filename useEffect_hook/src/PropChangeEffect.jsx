import {useEffect, useState} from 'react'

const PropChangeEffect = ({userId}) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(data => setUser(data))
    },[userId]);
  return (
    <div>
        <h3> User Details.</h3>
        {
            user ? <p>{user?.name}</p> : <p>Loading...</p>
        }
    </div>
  )
}

export default PropChangeEffect;