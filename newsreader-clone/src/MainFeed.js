import React, { useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'

export default function MainFeed() {
  const { REACT_APP_BASE_URL, REACT_APP_AIRTABLE_API_KEY } = process.env
  const [articles, setArticles] = useState({})


  useEffect(() => {
    const apiCall = async () => {
      const res = await axios(`${REACT_APP_BASE_URL}Content/?view=Grid%20view`, {
        headers: {
          Authorization: `Bearer ${REACT_APP_AIRTABLE_API_KEY}`
        }
      })
      setArticles(res.data.records)
    }
    apiCall()
  }, [])
  console.log(Object.keys(process.env))
  console.log(articles)
  
  return <>
    Yes Yes YA DONT STOP
     </>
     
    }
