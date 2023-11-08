const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
   game_id: {
      type: String,
      required: true
   }, game_name: {
      type: String,
      required: true
   },
   datetime_start: {
      type: Date,
   },
   datetime_end: {
      type: Date,
   }, prize_name: {
      type: String,

   }, prize_image: {
      type: String,

   }, prize_url: {
      type: String,
   },
   game_round: {
      type: Number,
   }
})

const Games = mongoose.model("Games", gameSchema);
module.exports = {
   Games
}