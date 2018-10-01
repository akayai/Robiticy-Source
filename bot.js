const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
let PREFIX = "r!";

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(`Bot is ready! ${bot.user.username}`);
    console.log("hello 2");
    console.log("hello");
});

bot.on("message", function(message) {
if (!message.content.startsWith(PREFIX)) return;
if (message.author.bot) return;
if (message.channel.type == "dm") return;
var args = message.content.substring(PREFIX.length).split(" ");

switch (args[0]) {
case "botowner":
message.channel.send("My bot owner Akayai is very gay.");
break;
case "myname":
message.channel.send("Your name is " + message.author.username + "!")
break;
case "mention":
message.channel.send("<@" + message.author.id + ">")
break;
case "testcmd":
message.channel.send("ok")
break;
case "helppls":
message.channel.send("```This bot is a testing bot at this moment made by Akayai And Solar, The commands Will be told very soon```")
break;
case "avatar":
let myEmbed = new Discord.RichEmbed()
.setTitle("avatar")
.setDescription("")
.setImage(message.author.displayAvatarURL)
.setAuthor(message.author.displayAvatarURL)
.setColor("RANDOM")
message.channel.send(myEmbed)
break;
case "remindme":
const ms = require("ms");
let reminderTime = args[1];
    if (!reminderTime) return message.channel.send("**Specify a time for me to remind you. Usage: !remind 15min any text or code**");

    let reminder = args.slice(1).join(" ");

    let remindEmbed = new Discord.RichEmbed()
        .setColor('#ffffff')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
        .addField("Reminder", `\`\`\`${reminder}\`\`\``)
        .addField("Time", `\`\`\`${reminderTime}\`\`\``)
        .setTimestamp();

    message.channel.send(remindEmbed);


    setTimeout(function() {
        let remindEmbed = new Discord.RichEmbed()
            .setColor('#ffffff')
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
            .addField("Reminder", `\`\`\`${reminder}\`\`\``)
            .setTimestamp()

        message.channel.send(remindEmbed);
    }, ms(reminderTime));
break;
case "Credits":
let myEmbed1 = new Discord.RichEmbed()
.setTitle("Credits")
.setDescription("Made By Akayai#0832 And Solar#6173")
.setColor("RANDOM")
message.channel.send(myEmbed1)
break;
case "help":
let myEmbed2 = new Discord.RichEmbed()
.setDescription("Commands Are r!Avatar, r!credits r!gay r!remindme r!token More are to come! This bot is made by Akayai And Solar!")
.setColor("RANDOM")
message.channel.send(myEmbed2)
break;
case "gay":
let Gay = new Discord.RichEmbed()
.setDescription("You Are 0% Gay Man!.")
.setColor("RANDOM")
message.channel.send(Gay)
break;
case "token":
let token = new Discord.RichEmbed()
.setDescription("SIKE NIGGA YOU THOUGHT")
.setColor("RANDOM")
message.channel.send(token)
break;
case "twitter":
let twitter = new Discord.RichEmbed()
.setDescription("https://twitter.com/akayaiCPI")
.setColor("RANDOM")
message.channel.send(twitter)
break;
}
});

bot.login(botSettings.token);