const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = "!";
const annoncechannel= "675810010143391804";

bot.on("ready", ()=> {
    console.log("Prêt")
});

bot.on("guildMemberAdd", member => {
    var channel = bot.channels.get(annoncechannel)
    let embed = new Discord.RichEmbed()
    .setTitle(member.user.username+ " Vient de rejoindre le serveur !")
    .setDescription("N'hésitez pas à lui souhaiter la bienvenue !")
    .addField("Il y'a maintenant "+member.guild.members.size+" membres sur le serveur", "merci à vous !")
    .setColor("GREEN")
    .setThumbnail(member.user.displayAvatarURL)
    channel.send(embed)
});

bot.on("guildMemberRemove", member =>{
    var channel = bot.channels.get(annoncechannel)
    let embed = new Discord.RichEmbed()
    .setTitle(member.user.username+ " vient de quitter le serveur.")
    .setDescription('On espère le revoir bientôt')
    .addField("Il y'a maintenant "+member.guild.members.size+ " membres sur le serveur", "merci à vous ! ")
    .setColor("RED")
    .setThumbnail(member.user.displayAvatarURL)
    channel.send(embed)
})

bot.login("Njc1NjY5NTYyMzM0OTA0MzIw.Xj6v5A.hhR9fBPtxmQTF5I1dVJpKZD82mI");