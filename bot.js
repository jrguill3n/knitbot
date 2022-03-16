// Posting GIFs
// Discord Bots

console.log('Beep beep! 🤖');

require('dotenv').config();

const fetch = require("cross-fetch");

const Discord = require('discord.js');

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES] });

client.login(process.env.DISCORD_BOT_TOKEN);

client.on('ready', readyDiscord);

function readyDiscord() {
  console.log('💖');
}

const replies = [
  '🧶',
  'wen moon',
  'jabroni',
  'Anti Discord Discord Club'
]

const boo = [
  'boo/1.jpeg',
  'boo/2.jpeg',
  'boo/3.jpeg',
  'boo/4.jpeg',
  'boo/5.jpeg',
  'boo/6.jpeg',
  'boo/7.jpeg',
  'boo/8.jpeg',
  'boo/9.jpeg',
  'boo/10.jpeg',
  'boo/11.jpeg',
  'boo/12.gif',
  'boo/13.jpeg',
  'boo/14.jpeg',
  'boo/15.jpeg'
]

client.on('message', gotMessage);

async function gotMessage(msg) {

  // use cleanContent instead of content to remove tagging
  let tokens = msg.cleanContent.split(" ");

  if (tokens[0] === "!knit") {
    const index = Math.floor(Math.random() * replies.length);
    msg.channel.send(replies[index]);
  } else if (tokens[0] == "!gif") {

    if (tokens.length > 1) {
      keywords = tokens.slice(1, tokens.length).join(" ");
    }
    let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENOR_KEY}`;
    let response = await fetch(url);
    let json = await response.json();
    const index = Math.floor(Math.random() * json.results.length);
    let knitembed = new Discord.MessageEmbed()
    .attachFiles(json.results[index].url)
    msg.channel.send(knitembed);

  } else if (tokens[0] == "!bellend") {

    if (tokens.length > 1) {
     // keywords = tokens.slice(1, tokens.length).join(" ");
    }
    let url = `https://api.tenor.com/v1/search?q=bellend&key=${process.env.TENOR_KEY}`;
    let response = await fetch(url);
    let json = await response.json();
    const index = Math.floor(Math.random() * json.results.length);
    msg.channel.send(json.results[index].url);

  } else if (tokens[0] == "!jabroni") {

    if (tokens.length > 1) {
     // keywords = tokens.slice(1, tokens.length).join(" ");
    }
    let url = `https://api.tenor.com/v1/search?q=jabroni&key=${process.env.TENOR_KEY}`;
    let response = await fetch(url);
    let json = await response.json();
    const index = Math.floor(Math.random() * json.results.length);
    msg.channel.send(json.results[index].url);

  } else if (tokens[0] === "!boogang") {
    const index = Math.floor(Math.random() * replies.length);
    msg.channel.send({ files: [ boo[index]] });
    
  } else if (tokens[0] === "!vern") {
    msg.channel.send({ files: ['img/vern.gif'] });
  }

}