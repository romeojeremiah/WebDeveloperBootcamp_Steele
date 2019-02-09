var express = require('express')
var app = express()

app.get('/', function(req, res){
    res.send('Hi there, welcome to my assignment')
})

app.get('/speak/:animal', function(req, res){
    var sounds = {
        pig: 'Oink',
        dog: 'Woof Woof!',
        cow: 'Moo',
        cat: 'I hate you human',
        goldfish: '...'
    }
    var animal = req.params.animal.toLowerCase()
    var sound = sounds[animal]

    console.log(sounds.pig)
    res.send('The ' + animal + ' says "' + sound + '"')
})

app.get('/repeat/:word/:number', function(req, res){
    var word = req.params.word
    var number = parseInt(req.params.number)
    var message = ''

    for(var i = 0; i < number; i++){
       message = message + word + ' ' 
    }

    res.send(message)
    
})

app.get('*', function(req, res){
    res.send('Sorry, page not found...What are you doing with your life?')
})

app.listen(3000, function(req, res){
    console.log('Server started on port 3000')
})
