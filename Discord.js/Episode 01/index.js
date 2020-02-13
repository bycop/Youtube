const Discord = require('discord.js');
const shorten = require("isgd");
const bot = new Discord.Client();
const prefix = "!";

bot.on('ready', () => {
    console.log("Prêt")
})

bot.on("message", message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === "shorturl"){
        if(!args[0]) return message.reply("Usage : !shorturl + Url + Nom");

        if(!args[1]){
            shorten.shorten(args[0], function(res){
                if(res.startsWith('Error')) return message.reply('Url introuvable');
                message.channel.send("Nouveau lien : "+ res)
            })
        }else { 
            shorten.custom(args[0], args[1], function(res){
                if(res.startsWith('Error')) return message.reply('Url introuvable');
                message.channel.send('Nouveau lien : '+ res);
            })
        }
    }
})

bot.login("");