import mongoose from "mongoose"


export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://mytodos:333444@cluster0.4hmo5.mongodb.net/next-todo')
    console.log('Database Connected');
}




