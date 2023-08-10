import 'dotenv/config'


// Require the necessary discord.js classes
// const { Client, Events, GatewayIntentBits } = require('discord.js');

// make the discord js require an import
import { Client, Events, GatewayIntentBits } from 'discord.js'

const token = process.env.DISCORD_TOKEN

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Log messages to the console
client.on(Events.MessageCreate, message => {
    console.log(message.content);
    if (message.author.bot) return;
    if (message.content.toLowerCase() == "f" || message.content.toLowerCase() == "f.") {
        // Random option from the array
        message.channel.send(replyOptions[Math.floor(Math.random() * replyOptions.length)]);
    }
});


const replyOptions = [
    "F",
    "F.",
    "F...",
    "https://media.giphy.com/media/hStvd5LiWCFzYNyxR4/giphy.gif",
    "https://media.giphy.com/media/l0Ex15F9pc1LNeGT6/giphy.gif",
    "https://media.giphy.com/media/FfYKE27ZTC6iaGZgOa/giphy.gif",
    "https://media.giphy.com/media/3ohs4yOUb0okzIhqEg/giphy.gif",
    "https://media.giphy.com/media/Y7lSvRrJhDRE4/giphy.gif",
    "https://media.giphy.com/media/qBuv2h1se3GAz4lRVu/giphy.gif",
    "https://media.giphy.com/media/khtqbl6MtcBAXJfMF9/giphy.gif",
    "https://media.giphy.com/media/urkzhSHVOrMjw71tcS/giphy.gif",
    "https://media.giphy.com/media/MY6MpD4YDuigatKNGh/giphy.gif",
    "https://media.giphy.com/media/5hifhyh1FwjYp6grtw/giphy.gif",
    "https://media.giphy.com/media/s7mUXYgxY6NPEukfTW/giphy.gif",
    "𝐅",
    "𝐹",
    "𝑭",
    "𝖥",
    "𝗙",
    "𝘍",
    "𝙁",
    "𝙵",
    "𝔉",
    "𝕱",
    "𝖡",
    "𝓕",
    "𝒻",
    "𝔽",
    "𝕱",
    "𝖥",
    "𝗙",
    "𝘍",
    "𝙁",
    "𝙵",
    "𝓕"
]

// Log in to Discord with your client's token
client.login(token);