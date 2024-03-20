const connection = require('../config/connection');
const { Thought, User, Reaction } = require('../models');
const mongoose = require("mongoose");

connection.on('error', (err) => err);

// Seed data
const users = [
    {
      username: "AquilaTheAkita",
      email: "akitasarethebest@akita.com",
      thought: [],
    },
  ];
  
  connection.once("open", async () => {
    console.log("connected");
  
    await User.collection.insertMany(users);
  
    console.table(users);
    process.exit(0);
  });

