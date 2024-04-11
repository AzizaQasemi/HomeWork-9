import { useEffect, useState } from 'react';
import React from 'react';
import User from './User';

const Adid = () => {
    const [users,setUsers] = useState([])

    useEffect(() => {
      fetchData()
    }, [])
   
    const fetchData = async () => {
     await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
     .then((res) => res.json())
     .then((data) => setUsers(data))
     .catch((err) => {
       console.log(err);
     })
    }
   
    console.log(users);
    return (
        <div>
            <h3>React Crud Using Jsonplaceholder</h3>
            <div>
                {
                    users.map((photo) => (
                      <User
                        key={photo.id}
                        title={photo.title}
                        id={photo.id}
                        thumbnailUrl={photo.thumbnailUrl}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Adid;