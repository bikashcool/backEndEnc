const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    })
    .then(() => console.log("DB connection successfull"))
    .catch((err) =>{
        console.log(`DB connection issues`);
        console.error(err.message);
        process.exit(1);
    });
};

// exporting the dbConnect function for use in other files
module.exports = dbConnect;