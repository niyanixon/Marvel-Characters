const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const heros = {
    'scarlet witch': {
        'birthName': 'Wanda Maximoff',
        'superPower': 'Force-field generation, Telepathy, Time manipulation',
         'url': 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*9XQlc5ayl-KL7l4Ox7aSrg.jpeg'
    },
    'spider man':{
        'birthName': 'Peter Parker',
        'superPower': 'Wall Crawling, Spider Sense, Super Strength',
        'url': 'https://sm.ign.com/ign_pk/review/s/spider-man/spider-man-no-way-home-review_yrtk.jpg' 
    },  
    'black panther':{
        'birthName': "T'Challa",
        'superPower': 'Night Vision, Superhuman Strength',
        'url': 'https://static01.nyt.com/images/2018/02/11/arts/11PANTHER-ANTICIPATION/11PANTHER-ANTICIPATION-videoSixteenByNineJumbo1600.jpg' 
    },
    'thor': {
        'birthName': 'Thor Odinson',
        'superPower': 'Flight, Weather Manipulation',
        'url': 'https://images.squarespace-cdn.com/content/v1/5fbc4a62c2150e62cfcb09aa/1621312752468-LNQ5D4XJNMZ0UOCDGEH1/Thor.png'
    },
    'iron man':{
        'birthName': 'Tony Stark',
        'superPower': 'Flight, Superhuman Strength, High IQ',
        'url': 'https://static1.srcdn.com/wordpress/wp-content/uploads/Iron-Man-in-Avengers.jpg' 
    },  
    'doctor strange':{
        'birthName': 'Stephen Strange',
        'superPower': 'Telekinesis, Telepathy, Time Manipulation',
        'url': 'https://www.hollywoodreporter.com/wp-content/uploads/2020/09/Doctor-Strange-Photofest-H-2020-1601504268.jpg?w=1296&h=730&crop=1' 
    },
    'unknown':{
        'birthName': 'unknown',
        'superPower': 'unknown',
        'url': 'unknown'
    }
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/style.css', (request, response)=>{
    response.sendFile(__dirname + '/style.css')
})

app.get('/main.js', (request, response)=>{
    response.sendFile(__dirname + '/main.js')
})

app.get('/api/:name',(request,response)=>{
    const heroName = request.params.name.toLowerCase()

    if( heros[heroName] ){
        response.json(heros[heroName])
    }else{
        response.json(heros['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})

