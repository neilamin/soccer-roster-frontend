import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default () => {
  const [teams, updateTeams] = useState([])

  console.log(teams)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:5000/teams'
      )
      updateTeams(result.data)
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>Welcome to My Soccer Roster App!</h1>
    </div>
  )
}
