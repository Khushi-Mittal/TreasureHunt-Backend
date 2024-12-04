// // const mongoose=require("mongoose");
// // const mongoDB=(URL)=>{
// //     mongoose.connect(URL);
// //     mongoose.connection.on("connected", async() => {
// //         console.log("CONNECTED DB");
// //         const fetch_data=await mongoose.connection.test.collection("users");
// //         fetch_data.find({}).toArray(function(err,data){
// //             if(err){
// //                 console.log(err);
// //             }
// //             else{
// //                 global.users=data;
// //                 console.log("done");
// //             }
// //         })
// //     });
// //     // mongoose.connection.on("error", () => {
// //     //     console.log(error)
// //     //     console.log("CONNECTION ERROR DB");
// //     // });
// // }

// // module.exports=mongoDB;




// const mongoose = require("mongoose");

// const mongoDB = (URL) => {
//   mongoose.connect(URL);

//   mongoose.connection.on("connected", async () => {
//     console.log("CONNECTED DB");

//     // Define a model for the "users" collection
//     const User = mongoose.model("User", new mongoose.Schema({}));

//     // Find all users
//     const users = await User.find({});
//     global.users = users;
//     console.log("done"); 
//   });

//   // (Optional) Error handling
//   mongoose.connection.on("error", (error) => {
//     console.log(error);
//     console.log("CONNECTION ERROR DB");
//   });
// };

// module.exports = mongoDB;

const mongoose = require("mongoose");

const mongoDB = (URL) => {
  mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });

  mongoose.connection.on("connected", async () => {
    console.log("CONNECTED DB");

    // Check if the model is already defined
    const User = mongoose.models.User || mongoose.model("User", new mongoose.Schema({}, { strict: false }));

    // Find all users
    const users = await User.find({});
    global.users = users;
    console.log("done");
  });

  // (Optional) Error handling
  mongoose.connection.on("error", (error) => {
    console.log(error);
    console.log("CONNECTION ERROR DB");
  });
};

module.exports = mongoDB;
