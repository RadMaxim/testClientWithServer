const exp = require('express');
const Telebot = require('telebot')
const bot = new Telebot('6567440090:AAGC0oKTz-R9jKOxQUDmevEmvKc7r_RT8m0')
const app = exp();
bot.on('text',(msg)=>{
    
    let id = msg.chat.id
    bot.sendMessage(id, "hello")
})

const PORT = process.env.PORT || 8080;

app.use(exp.json());

app.get('/', (req, res) => {
    res.send('Hello my first app');
});

app.get('/ping', (req, res) => {
    res.send("<h1>hello</h1>")
});
// /products

// /users


app.listen(8080, () => {
    console.log('Server is listenin on PORT :' + PORT);
})
bot.start();