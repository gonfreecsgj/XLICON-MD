const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "967734394867"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '967734394867' 
global.devs = '967734394867';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0F6Zk1JUGZpRDhVTXJiQmdweGJUQnFPRWQyS2Y2bTBySUc2VExoTzVXVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid3czTmFwUnFva2VWc0M3WUFuRE1pdGxIbXBKeFh3a1Nob3djTUw5Mmh6dz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3SktUelBmekJGTlFMeHBrdEYzZ1Nqa1lnajRZVUtadmtTTEdBRHpQblVrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvZG1QaVM2ckhmSlZIRG1lTzQxYTVXaFR6RmF5TDNONEEvcEVvLzI5UUVFPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBQUjdzazM3R3pjb2JWTnpWRi9XUHNqOFp2N3lzZGlTK05hZjVUY3dabWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNQMWtzK2ZaTnorK2lwWEpkenZvZ1lzTnU2U0kyN1VuSnl2T3FwTXhUWFE9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLZlkzNmwxZGhhK3kwWE1JYnJ0YmNIam5qeWI1VGgweFVzZW5ldzNEZmN4OEtmZm5pQ2lDbklYbFUzL3IzTTZyVlRSQ1FEeGZWT09CbEtJR1pvM09nZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjk4LCJhZHZTZWNyZXRLZXkiOiJCRzY0bmwrR1lobzVPZktyNHJOS3B4S25ZaFI4bVdyWHdZaGFuYjBDSzlnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJTNHFFbmNfeVJkU19UeFVIU2FEazNRIiwicGhvbmVJZCI6IjMxNzY0MGM3LWJkMzQtNGJjZi1hYTUzLTdmMGI5OGYyMzQ4ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIVis0TWpQOHBmSHlzc0hXOThXVTNTRTdFV0E9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InYrcnZoQU1PYjdTNytoenhtNHVrQ2RZalNuRT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09TLy8rWUJFS0dpb01FR0dBb2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlNhem9oSTFGMTF5L2JPMHVWelJiSGtNYVVjclkvVUEwbGZOeUx0bEIvaTQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IldYS2IyVE9tdStrNzJnbVhhUW1CWTJsN3FSS00zcDJrSHRIRVVVdXNKOTcrUlpoYlpsbHNIa0h4eVV4MGJFZDMvNkhsZVB4SVJpQUttYjZuRTZ5SERBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJJb2I1ZnBGOWtHd2Jzc05Ld3RUTk5HMzBBdFVkRmZ4VEQxSjU1S1d5S2MyZWNuN2piczdpRXBTbnVaWU9tRmtXRVlCSy9zRXl5cmh2ZUFDSGhZOWNoZz09In0sIm1lIjp7ImlkIjoiOTY3NzM0Mzk0ODY3OjQ2QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk2NzczNDM5NDg2Nzo0NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVbXM2SVNOUmRkY3YyenRMbGMwV3g1REdsSEsyUDFBTkpYemNpN1pRZjR1In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ3NDU2MjkyfQ== ",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'aץanokugi๒๏t',
  packname:  process.env.PACK_NAME || 'aץanokugi๒๏t',
   
  botname:   process.env.BOT_NAME === undefined ? "aץanokugi-๒๏t" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'aץanokugi-๒๏t' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'Hi i am alive now' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
