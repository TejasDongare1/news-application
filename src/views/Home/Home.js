import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NewsArticle from '../../components/NewsArticle/NewsArticle'
import "./Home.css"

function Home() {
    const [news , setNews] = useState([])
    const [searchQuery, setSearchQuery] = useState()

    const loadNews = async ()=>{
        try{
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&from=2024-07-15&to=2024-07-15&sortBy=popularity&apiKey=a12ad439c4264bc196fe1f504f7e8250`);

            setNews(response.data.articles)
        }
        catch(error){
            console.log(error)
        }
        }

        useEffect(()=>{
            loadNews()
        },[])

        useEffect(()=>{
            loadNews()
        },[searchQuery])

    


  return (
   
  )
}

export default Home