const mongoose=require("mongoose");

const connectDB=async()=>{
    try {
    await  mongoose.connect(process.env.DB_URI, {  
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true} );
    console.log("Database is connected");
    } catch (error) {
        console.log("Database is not connected");
        
    }

    if(process.env.NODE_ENV === 'production'){
        app.use(express.static('client/build'))
        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
        })
    }
    
};
module.exports = connectDB;