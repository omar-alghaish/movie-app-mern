import mongoose from "mongoose";

const dbConnection = () => {
    mongoose.set("strictQuery", true);
    mongoose.connect(process.env.MONGODB_URL).then((conn) => {
        console.log(`connected to database: ${conn.connection.name}`)
    }).catch((err) => {
        console.log({ err });
        process.exit(1)
    })
}

export default dbConnection