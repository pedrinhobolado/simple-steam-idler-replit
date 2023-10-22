const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js')

var username = '';
var password = '';
var shared_secret = '';

var games = [730,440,570,601510,1407200,230410,236390,438100,1920960,304930,1222670,1286830,386360,700330,1128810,578080,238960,444090,1869590,1625450,1599340,1353300,1049590,1085660,459820,1201240,1172470,714010,2357570,291550,363970];  // Enter here AppIDs of the needed games
var status = 1;  // 1 - online, 7 - invisible


user = new steamUser();
user.logOn({"accountName": username, "password": password, "twoFactorCode": steamTotp.generateAuthCode(shared_secret)});
user.on('loggedOn', () => {
	if (user.steamID != null) console.log(user.steamID + ' - Successfully logged on');
	user.setPersona(status);               
	user.gamesPlayed(games);
});
