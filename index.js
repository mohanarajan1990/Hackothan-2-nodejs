const PORT = 8000
const axios = require('axios').default;
const cheerio = require('cheerio').default;
const express = require('express').default;


const app = express()

const url = `https://www.amazon.in/dp/B09V4FZN1L`


axios(url)

.then(response => {
    const html = response.data
    const $ = cheerio.load(html) 

    const articles = []
    const title = $(this).text()
   const url = $(this).find(`a`).attr(`href`)

   articles.push({

    title,
    url
   })



    
})
console.log(articles)


app.listen(PORT. () => console.log(`server running on PORT ${PORT}`))



