const Discord = require('discord.js');
const ms = require('ms');
const bot = new Discord.Client();
const prefix = "!";

bot.on('ready', () =>{
    console.log("Prêt")
});

bot.on('message', message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === "timer"){
        let Timer = args[0];

        if(!args[0]){
            return message.channel.send("Usage: !timer + durée + s|m|h")
        }

        if(args[0] <= 0){
            return message.channel.send("Usage: !timer + durée + s|m|h")
        }

        message.channel.send("Timer lancé pour:"+ ms(ms(Timer), {long: true}))
        setTimeout(function(){
            message.channel.send(message.author.toString()+ `Timer fini, il à durer: ${ms(ms(Timer), {long: true})}`)
        }, ms(Timer));
    }
});

bot.login("Njc1NjY5NTYyMzM0OTA0MzIw.Xj6gVQ.Wc9t3jG6QpD_pBxbwr6MkcfLh5w");