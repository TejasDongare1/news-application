import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NewsArticle from '../../components/NewsArticle/NewsArticle'
import "./Home.css"

function Home() {
   
        useEffect(()=>{
            loadNews()
        },[searchQuery])

    


  return (
   <div className=''>
    <h1 className='heading'>News App</h1>
    <input type="text" placeholder='click here to search' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} className='search'/>
    <div className='container'>
    {
        news.map((newsArticle, index)=>{
            const {author, title, description, url, urlToImage, publishedAt, content} = newsArticle

            return(
                <NewsArticle author={author} title={title} description={description} url={url} urlToImage={urlToImage} publishedAt={publishedAt} content={content}/>
            )
        })
    }  
    </div>  
   </div>
  )
}

export default Home