const mongoose = require("mongoose");
// mongoose.set('useNewUrlParser',true);

// mongoose.set('useUnifiedTopology',true);
// mongoose.set('useFindAndModify',false);

//this above code is used to get rid of depreciation error
//by default in new mongo db it is true by default
class Database {
  constructor() {
    this.connect();
  }
  connect() {
    mongoose
      .connect(
        "mongodb+srv://Suthesh:icecream@cluster0.njlrnsv.mongodb.net/TwitterCloneDb?retryWrites=true&w=majority"
      )
      // mongoose.connect("mongodb+srv://Suthesh:icecream@twitterclonebysuthesh.ykv1i59.mongodb.net/?retryWrites=true&w=majority")
      //be careful when you add this link you want a password without any special characters;
      .then(() => {
        console.log("database connection successful");
      })
      .catch((err) => {
        console.log("database connection error" + err);
      });
  }
}
module.exports = new Database();

//its is a good habit to store in seperate class
