import React, { useState, useEffect } from "react"
import axios from "axios"

const Contact = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users/1/posts")
        setUsers(res.data)
      } 
      catch (error) {
        console.log("Error:", error)
      }
    }

    fetchData()

  }, [])

  return (
    <div>
      <h1>Users</h1>

      {users.map((user) => (
        <div key={user.id}>
          <h4>Name: {user.name}</h4>
          <h4>Email: {user.email}</h4>
          <h4>Title:{user.title}</h4>
          <h4>Body:{user.body}</h4>
        </div>
      ))}

    </div>
  )
}

export default Contact