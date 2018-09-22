const Discord = require('discord.js');
const client = new Discord.Client();


const { prefix, token } = require('./config.json');

//Real Codes start here
client.on("ready",()=>{
//console.log("client started");
console.log(`client has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the client's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

/*client.on("message", (message) => {
if(message.content == "?cd"){
    message.reply("this command is still in construction");
}
});*/

client.on("msg", function (msg){
  if(msg.content === 'smokecreen'){
    msg.delete().catch(O_o=>{});
      msg.reply(`${member.user.tag} has been kicked by ${msg.author.tag} because of spamming`);
  }
}
);

client.on("message", async message => {
    // This event will run on every single message received, from any channel or DM.
    
    // It's good practice to ignore other bots. This also makes your bot ignore itself
    // and not get into a spam loop (we call that "botception").
    if(message.author.bot) return;
    
    // Also good practice to ignore any message that does not start with our prefix, 
    // which is set in the configuration file.
    if(message.content.indexOf(prefix) !== 0) return;
    
    // Here we separate our "command" name, and our "arguments" for the command. 
    // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
    // command = say
    // args = ["Is", "this", "the", "real", "life?"]
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    //const args = arg.content.slice(',').trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    // Let's go with a few common example commands! Feel free to delete or change those.
    
    if(command === "ping") {
      // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
      // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
      const m = await message.channel.send("Ping?");
      m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    }
  //Sending message to candy hunt channel
  if(command === "candy"){
      //sending message to specific channel
      const sayMessage = args.join(" ");
      message.delete().catch(O_o=>{});
      client.channels.get("387692816999907328").send(sayMessage + '\n by: '+ message.author);
      //const channelm = client.channels.find('candy_hunt_rare_pokemon', channelName);
      //channelm.send(sayMessage + ' by: ' + message.author);
  }
    
  //Sending message to candy hunt channel
  if(command === "80"){
      //sending message to specific channel
      const sayMessage = args.join(" ");
      message.delete().catch(O_o=>{});
      client.channels.get("387660291879469059").send(sayMessage + '\n by: '+ message.author);
  }
  
  //Sending message to candy hunt channel
  if(command === "smokescreen" && const sayMessage = args.join(" ").lenght == 0){
      //sending message to specific channel
      //const sayMessage = args.join(" ");
      message.delete().catch(command);
      message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because of spamming`);
  }
    
  
    if(command === "cd") {
      // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
      // To get the "message" itself we join the `args` back into a string with spaces: 
      /*const sayMessage = args.join(" ");
      // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
      message.delete().catch(O_o=>{}); 
      // And we get the bot to say the thing: 
      message.channel.send(sayMessage);*/

      const d = getDistanceFromLatLonInKm(args[0],args[1],args[2],args[3]);
      const mod = Math.round(d*100)/100;
      /*const bug = cdTimer(mod);
      if(Math.round(d)<1500){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is '+ Math.round(bug*100)/100 + ' minutes.');
    }
    if(Math.round(d)>=1500){
        message.channel.send('Your provided coordinates distance is ' + mod + 'km . Cooldown is 120 minutes.');
    }*/
      //if(mod)
      //message.channel.send(Math.round(d)+'km');
      if(mod<1){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 0 minutes.');
    }
    else if(mod==1){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 30 seconds.');
    }
    else if(mod>1 && mod<=2){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 1 minutes.');
    }
    else if(mod>2 && mod<=5){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 3 minutes.');
    }
    else if(mod>5 && mod<=8){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 4 minutes.');
    }
    else if(mod>8 && mod<=11){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 6 minutes.');
    }
    else if(mod>11 && mod<=15){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 8 minutes.');
    }
    if(mod>15 && mod<=18){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 9 minutes.');
    }
    else if(mod>18 && mod<=20){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 11 minutes.');
    }
    else if(mod>21 && mod<=25){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 14 minutes.');
    }
    else if(mod>25 && mod<=30){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 15 minutes.');
    }
    else if(mod>30 && mod<=35){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 16 minutes.');
    }
    else if(mod>35 && mod<=40){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 18 minutes.');
    }
    else if(mod>40 && mod<=45){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 19 minutes.');
    }
    else if(mod>45 && mod<=50){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 20 minutes.');
    }
    else if(mod>50 && mod<=58){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 21 minutes.');
    }
    else if(mod>59 && mod<=70){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 22 minutes.');
    }
    else if(mod>71 && mod<=75){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 23 minutes.');
    }
    else if(mod>75 && mod<=82){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 24 minutes.');
    }
    else if(mod>82 && mod<=90){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 25 minutes.');
    }
    else if(mod>90 && mod<=100){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 26 minutes.');
    }
    else if(mod>100 && mod<=110){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 28 minutes.');
    }
    else if(mod>110 && mod<=120){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 30 minutes.');
    }
    else if(mod>120 && mod<=130){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 32 minutes.');
    }
    else if(mod>130 && mod<=140){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 33 minutes.');
    }
    else if(mod>140 && mod<=150){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 34 minutes.');
    }
    else if(mod>150 && mod<=160){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 35 minutes.');
    }
    else if(mod>160 && mod<=170){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 36 minutes.');
    }
    else if(mod>170 && mod<=180){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 37 minutes.');
    }
    else if(mod>180 && mod<=190){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 38 minutes.');
    }
    else if(mod>190 && mod<=200){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 39 minutes.');
    }
    else if(mod>200 && mod<=210){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 40 minutes.');
    }
    else if(mod>210 && mod<=220){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 41 minutes.');
    }
    else if(mod>220 && mod<=230){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 42 minutes.');
    }
    else if(mod>230 && mod<=240){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 43 minutes.');
    }
    else if(mod>240 && mod<=250){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 44 minutes.');
    }
    else if(mod>250 && mod<=260){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 45 minutes.');
    }
    else if(mod>260 && mod<=270){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 46 minutes.');
    }
    else if(mod>270 && mod<=280){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 47 minutes.');
    }
    else if(mod>280 && mod<=290){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 48 minutes.');
    }
    else if(mod>290 && mod<=300){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 49 minutes.');
    }
    else if(mod>300 && mod<=310){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 49 minutes.');
    }
    else if(mod>310 && mod<=340){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 51 minutes.');
    }
    else if(mod>340 && mod<=380){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 53 minutes.');
    }
    else if(mod>380 && mod<=420){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 55 minutes.');
    }
    else if(mod>420 && mod<=460){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 57 minutes.');
    }
    else if(mod>460 && mod<=500){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 1 hour 0 minutes.');
    }
    else if(mod>500 && mod<=550){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 1 hour 5 minutes.');
    }
    else if(mod>550 && mod<=590){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 1 hour 9 minutes.');
    }
    else if(mod>590 && mod<=640){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 1 hour 13 minutes.');
    }
    else if(mod>640 && mod<=700){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 1 hour 15 minutes.');
    }
    else if(mod>700 && mod<=750){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 1 hour 17 minutes.');
    }
    else if(mod>750 && mod<=800){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 1 hour 18 minutes.');
    }
    else if(mod>800 && mod<=830){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 1 hour 20 minutes.');
    }
    else if(mod>830 && mod<=870){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 1 hour 21 minutes.');
    }
    else if(mod>870 && mod<=900){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 1 hour 22 minutes.');
    }
    else if(mod>900 && mod<=950){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 1 hour 25 minutes.');
    }
    else if(mod>950 && mod<=980){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 1 hour 27 minutes.');
    }
    else if(mod>980 && mod<=1000){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 1 hour 30 minutes.');
    }
    else if(mod>1000 && mod<=1030){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 1 hour 35 minutes.');
    }
    else if(mod>1030 && mod<=1070){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 1 hour 38 minutes.');
    }
    else if(mod>1070 && mod<=1100){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 1 hour 40 minutes.');
    }
    else if(mod>1100 && mod<=1130){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 1 hour 42 minutes.');
    }
    else if(mod>1130 && mod<=1170){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 1 hour 45 minutes.');
    }
    else if(mod>1170 && mod<=1200){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 1 hour 48 minutes.');
    }
    else if(mod>1200 && mod<=1250){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 1 hour 51 minutes.');
    }
    else if(mod>1250 && mod<=1300){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 1 hour 53 minutes.');
    }
    else if(mod>1350 && mod<=1400){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 1 hour 56 minutes.');
    }
    else if(mod>1400 && mod<=1450){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 1 hour 58 minutes.');
    }
    else if(mod>1450 && mod<1500){
      message.reply('Your provided coordinates distance is ' + mod + 'km . Cooldown is 1 hour 59 minutes.');
    }
    else if(mod>=1500){
        message.channel.send('Your provided coordinates distance is ' + mod + 'km . Cooldown is 120 minutes(2 hours).');
    }
    }
    
    if(command === "kick") {
      // This command must be limited to mods and admins. In this example we just hardcode the role names.
      // Please read on Array.some() to understand this bit: 
      // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
      if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
        return message.reply("Sorry, you don't have permissions to use this!");
      
      // Let's first check if we have a member and if we can kick them!
      // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
      // We can also support getting the member by ID, which would be args[0]
      let member = message.mentions.members.first() || message.guild.members.get(args[0]);
      if(!member)
        return message.reply("Please mention a valid member of this server");
      if(!member.kickable) 
        return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
      
      // slice(1) removes the first part, which here should be the user mention or ID
      // join(' ') takes all the various parts to make it a single string.
      let reason = args.slice(1).join(' ');
      if(!reason) reason = "No reason provided";
      
      // Now, time for a swift kick in the nuts!
      await member.kick(reason)
        .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
      message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
  
    }
    
    if(command === "ban") {
      // Most of this command is identical to kick, except that here we'll only let admins do it.
      // In the real world mods could ban too, but this is just an example, right? ;)
      if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
        return message.reply("Sorry, you don't have permissions to use this!");
      
      let member = message.mentions.members.first();
      if(!member)
        return message.reply("Please mention a valid member of this server");
      if(!member.bannable) 
        return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");
  
      let reason = args.slice(1).join(' ');
      if(!reason) reason = "No reason provided";
      
      await member.ban(reason)
        .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
      message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
    }
    
    if(command === "purge") {
      // This command removes all messages from all users in the channel, up to 100.
      
      // get the delete count, as an actual number.
      const deleteCount = parseInt(args[0], 10);
      
      // Ooooh nice, combined conditions. <3
      if(!deleteCount || deleteCount < 2 || deleteCount > 100)
        return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
      
      // So we get our messages, and delete them. Simple enough, right?
      const fetched = await message.channel.fetchMessages({limit: deleteCount});
      message.channel.bulkDelete(fetched)
        .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
    }
  });

//Distance from coordinates using 'Haversine' formula
function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }
  //Cooldown timer 
  function cdTimer(dist){
      return (dist*30)/60;
  }

client.login(token);
