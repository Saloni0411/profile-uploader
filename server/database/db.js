import mongoose from 'mongoose'

const connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.tovfx.mongodb.net/web-app?retryWrites=true&w=majority
    `;
    try {

        await mongoose.connect(URL, { useUnifiedTopology: true, useNewURLParser: true})
        console.log("MongoDB connected successfully...");

    } catch(error) {
        console.log("Error while connecting to the database", error);
    }
}

export default connection