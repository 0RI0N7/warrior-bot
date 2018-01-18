const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('NDAzMzM3MzU3NDcxOTA3ODYw.DUJJSQ.1ZuzAwLnvegmzWEnlhcxVwRKIjQ');

bot.on('message', message =>{
    if (message.content.startsWith('!build Rhino')){
        message.channel.send('https://i.imgur.com/w7gBKgS.png');
    }
});
bot.on('message', message =>{
    if (message.content.startsWith('!build Banshee')){
        message.channel.send('https://i.imgur.com/34jZdYF.png');
    }
});
bot.on('message', message =>{
    if (message.content.startsWith('!build Nekros')){
        message.channel.send('https://i.imgur.com/wgG3qki.jpg');
    }
});

bot.on('message', message =>{
    if (message.content.startsWith('!build Trinity')){
        message.channel.send('https://i.imgur.com/x8Pah6r.png https://i.imgur.com/3wjB2M0.png')
    }
});
bot.on('message', message =>{
    if (message.content.startsWith('!build Vauban')){
        message.channel.send('https://i.imgur.com/QoK7R7M.jpg');
    }
});
bot.on('message', message =>{
    if (message.content.startsWith('!build Excalibur')){
        message.channel.send('https://i.imgur.com/1R22z9U.jpg');
    }
});
bot.on('message', message =>{
    if (message.content.startsWith('!build Ash')){
        message.channel.send('https://i.imgur.com/HkRgf7T.png');
    }
});
bot.on('message', message =>{
    if (message.content.startsWith('!build Mesa')){
        message.channel.send('https://i.imgur.com/YV5fRuy.png');
    }
});

bot.on('message', message =>{
    if (message.content.startsWith('!build Galatine')){
        message.channel.send('https://i.imgur.com/bKtCMYg.jpg');
    }
});
bot.on('message', message =>{
    if (message.content.startsWith('!build Corinth')){
        message.channel.send('https://i.imgur.com/puznrvf.png');
    }
});
bot.on('message', message =>{
    if (message.content.startsWith('!build Mirage')){
        message.channel.send('https://i.imgur.com/iaX9JFl.png');
    }
});
bot.on('message', message =>{
    if (message.content.startsWith('!build Nikana')){
        message.channel.send('http://i.imgur.com/l7xDIXg.jpg');
    }
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
