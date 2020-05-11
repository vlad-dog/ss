const db = require('quick.db')
const discord = require('discord.js')
const { getInfo } = require("../../handlers/xp.js")
module.exports = {
  name: "help",
  description: "help command",
  usage: "help",
  category: "info",
  run: (client, message, args) => {
    const user = message.mentions.users.first() || message.author;
    let embed = new discord.MessageEmbed()
    .setAuthor(user.username, message.guild.iconURL())
    .setColor("#ff2050")
    .addField("Moderation", "ban , kick , mute , prefix , setwelcome , unmute")
    .addField("Info", "help , level")
    .setThumbnail(user.avatarURL())
    .setDescription()
    
 message.channel.send(embed)   
  }
}