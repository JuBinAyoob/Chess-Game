const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//To chess schema
let chessSchema = new Schema({
    player1: {
        type: String
    },
    player2: {
        type: String
    },
    numOfMoves: {
        type: Number
    },
    timeTaken: {
        type: String
    },
    win: {
        type: Number
    }
});

let Chess = module.exports = mongoose.model('Chess', chessSchema);
