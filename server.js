const express = require('express');
const mongoose = require('mongoose');
main().catch(err=> console.log(err));

const app = express();

async function main(){
  await mongoose.connect("mongodb://127.0.0.1/storesDB");
  console.log("connected");


  const storesSchema = new mongoose.Schema({
    store_id: String,
    status: String,
    timestamp_utc: String
  });

  const Store = mongoose.model("store", storesSchema);




};


app.listen(3000, function(){
  console.log("server started on port 3000");
});
