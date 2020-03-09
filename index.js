const Discord = require ("discord.js");
const bot = new Discord.Client();

const token = "Njg1OTgxNzg1NjQwNzk2MjM2.XmURnQ.NT_S21IyKam5NyIJbBfP-L2fIQo";
const swearWords = ['fuck', 'Fuck', 'FUCK', 'shit', 'Shit', 'SHIT', 'piss', 'Piss', 'PISS', 'bitch', 'Bitch', 'BITCH', 'crap', 'Crap', 'CRAP', 'dick', 'Dick', 'DICK', 'pussy', 'Pussy',
'PUSSY', 'fag', 'Fag', 'FAG', 'asshole', 'Asshole', 'ASSHOLE', 'goddamn', 'Goddamn', 'GODDAMN', 'cunt', 'Cunt', 'CUNT', 'queer', 'Queer', 'QUEER', 'motherfucker', 'Motherfucker', 'MOTHERFUCKER',
'nigger', 'Nigger', 'NIGGER', 'spic', 'Spic', 'SPIC', 'retard', 'Retard', 'RETARD', 'ass', 'Ass', 'ASS', 'bastard', 'Bastard', 'BASTARD', 'tits', 'Tits', 'TITS', 'gay', 'Gay', 'GAY', 'cock', 'Cock', 'COCK', 'zipperhead', 'Zipperhead', 'ZIPPERHEAD',
 ] ;

const PREFIX = '!';

bot.on('ready', () =>{
    console.log('this bot is online!');
})

bot.on('message', message=>{

    for (let i in swearWords) {
        if (message.content.includes(swearWords[i])) {
            message.reply('Stop swearing.')
            break;
        }
    }
})

bot.login(token);
