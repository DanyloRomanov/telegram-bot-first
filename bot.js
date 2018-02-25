"use strict";

const Telegram = require('node-telegram-bot-api');
const parser = require('./parser');
const tg = new Telegram('AAHNevhUwQmF-4stsfbGGUmA_yqQjKnACro');

parser((url) => {
    console.log(`Sending ${url} to @FuckYouGeneratorChannel`);
    tg.sendPhoto('@' + 'FuckYouGeneratorChannel', url);
})