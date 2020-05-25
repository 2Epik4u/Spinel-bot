const Discord = require('discord.js');
const client = new Discord.Client();

client.on("message", async message => {
  const prefix = ":";

  if (!Message.author.bot) return;
  if (message.guild) return;
  if (message.conent.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd === "ping") {
    const msg = await message.channel.send('🏓 Pinging....');

    msg.edit(`🏓 Pong\nLatency is $(Math.floor(msg.Createdalt - message.Createdalt\nAPI latency $(Math.round(client.ping)]ms`);
  } 
});

if (cmd === "whatisstevenuniverse") {
  const msg = await message.channel.send('Steven universe is a show on cartoon network. The show came out in May 21, 2013, There is also a movie of it called Steven universe the movie. and you can also you could watch steven universe the movie on that website!')


client.login('NjI4NjA3MTkyODA2OTgxNjMy.XZNyCw.cNjUuecSjTtPdMUK76nm1bVLqBc')
