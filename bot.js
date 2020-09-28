const Discord = require("discord.js");
const client = new Discord.Client();
const data = new Map();
const express = require("express");
const settings = require("./settings.json");
const { Client, RichEmbed } = require("discord.js");
const app = express();
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;}}}


client.on("ready", ()=> {
  console.log(client.user.tag + " | Bot Online.")        
  client.user.setActivity(settings.status)
})

client.on("message", async msg => {
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let hyperzone = await data.get(msg.author.id)
        
        if (hyperzone === 1) {
        } else {
          await data.set(msg.author.id, 1)
          await sleep(5000)
          await msg.channel.send(settings.dm1)  
          await sleep(15000)      
          await msg.channel.send(settings.dm2)  
          await sleep(1000)      
          await msg.channel.send(settings.dm3)  
      }
      }
    }
  }
})

setInterval(async () => {
 let channel = client.channels.find(a => a.name === settings.channel)
      channel.send(settings.m1)

setInterval(async () => {
 let channel = client.channels.find(a => a.name === settings.channel)
      channel.send(settings.m2)
}, settings.second * 1000)

setInterval(async () => {
 let channel = client.channels.find(a => a.name === settings.channel)
      channel.send(settings.m3)
}, settings.second * 1000)

setInterval(async () => {
 let channel = client.channels.find(a => a.name === settings.channel)
      channel.send(settings.m4)
}, settings.second * 1000)

setInterval(async () => {
 let channel = client.channels.find(a => a.name === settings.channel)
      channel.send(settings.m5)
}, settings.second * 1000)
});
client.login(settings.token)
