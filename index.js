const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'help') {
    msg.reply('I am Spinels bot, she made me if people dont know about something about steven universe you can ask spinel! Here are a list of commands :stevengem steven gem shows you what stevens gem is! :whodiamondleader tells you who the diamond leader is. If you dont know about steven universe is type :whatisstevenuinverse in the chat!')
  } else if (msg.content === ':stevengem' ) {
    msg.reply('Stevens gem is a Pink diamond gem, This is confirmed in Change your mind in season 5 Episode 29-32 when white diamond took stevens gem')
} else if (msg.content === ':whodiamondleader' ) {
    msg.reply('The leader of the Diamond Authority is White Diamond because she is every color of the light')
 } else if (msg.content === ':whatisstevenuinverse' ) {
    msg.reply('Steven universe is a show on cartoon network. The show came out in May 21, 2013, There is also a movie of it called Steven universe the movie. If you want too watch steven universe but dont want to watch it on your tv go to https://worldofsteven.com and you can also you could watch steven universe the movie on that website!')
  } else if (msg.content === 'steven universe sucks' ) {
     msg.reply('https://tenor.com/view/steven-universe-steven-universe-movie-spinel-angry-cartoon-network-gif-14955865')
   } else if (msg.content === 'SU sucks' ) {
      msg.reply('https://tenor.com/view/steven-universe-steven-universe-movie-spinel-angry-cartoon-network-gif-14955865')
    } else if (msg.content === 'Steven Universe sucks' ) {
       msg.reply('https://tenor.com/view/steven-universe-steven-universe-movie-spinel-angry-cartoon-network-gif-14955865')
     } else if (msg.content === 'Spinel is awesome' ) {
        msg.reply('https://tenor.com/view/spinel-steven-universe-dance-steven-universe-the-movie-gif-14974036')
      } else if (msg.content === 'Spinel is awesome!' ) {
         msg.reply('https://tenor.com/view/spinel-steven-universe-dance-steven-universe-the-movie-gif-14974036')
       } else if (msg.content === 'Spinel is the best!' ) {
          msg.reply('https://tenor.com/view/spinel-steven-universe-dance-steven-universe-the-movie-gif-14974036')
        } else if (msg.content === 'Spinel is the best' ) {
           msg.reply('https://tenor.com/view/spinel-steven-universe-dance-steven-universe-the-movie-gif-14974036')
         } else if (msg.content === 'Spinel is the worst!' ) {
            msg.reply('https://tenor.com/view/spinel-steven-universe-crying-sad-gif-15032493')
          } else if (msg.content === 'Spinel is the worst Steven Universe character!' ) {
             msg.reply('https://tenor.com/view/spinel-steven-universe-crying-sad-gif-15032493')
           } else if (msg.content === 'Spinel is the worst Steven Universe character' ) {
              msg.reply('https://tenor.com/view/spinel-steven-universe-crying-sad-gif-15032493')
            } else if (msg.content === 'Spinels song sucks' ) {
               msg.reply('https://tenor.com/view/spinel-steven-universe-crying-sad-gif-15032493')
             } else if (msg.content === 'Spinel is shit' ) {
                msg.reply('https://tenor.com/view/spinel-steven-universe-crying-sad-gif-15032493')



}
});

client.login('NjI4NjA3MTkyODA2OTgxNjMy.XZNyCw.cNjUuecSjTtPdMUK76nm1bVLqBc');
