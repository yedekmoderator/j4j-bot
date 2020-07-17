const express = require("express");
const ayarlar = require("./ayarlar.json");
const { Client, RichEmbed } = require("discord.js");
const app = express();
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;}}}
const http = require("http");
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get("http://PROJE_İSMİ.glitch.me/");
}, 3000);

const Discord = require("discord.js");
const client = new Discord.Client();
const data = new Map();

client.on("ready", ()=> {
  console.log(client.user.tag + " | İsmi İle Giriş Yapıldı.")        
  client.user.setActivity(ayarlar.oynuyor)
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
          await msg.channel.send(ayarlar.dm1)  
          await sleep(15000)      
          await msg.channel.send(ayarlar.dm2)  
          await sleep(1000)      
          await msg.channel.send(ayarlar.dm3)  
      }
      }
    }
  }
})

setInterval(async () => {
 let kanal = client.channels.find(a => a.name === ayarlar.k)
      kanal.send(ayarlar.m1)

setInterval(async () => {
 let kanal = client.channels.find(a => a.name === ayarlar.k)
      kanal.send(ayarlar.m2)
}, ayarlar.s * 1000)

setInterval(async () => {
 let kanal = client.channels.find(a => a.name === ayarlar.k)
      kanal.send(ayarlar.m3)
}, ayarlar.s * 1000)

setInterval(async () => {
 let kanal = client.channels.find(a => a.name === ayarlar.k)
      kanal.send(ayarlar.m4)
}, ayarlar.s * 1000)

setInterval(async () => {
 let kanal = client.channels.find(a => a.name === ayarlar.k)
      kanal.send(ayarlar.m5)
}, ayarlar.s * 1000)
});
client.login(ayarlar.token)
