import mongoose from "mongoose";

type MongoConnection = {
  isConnected: mongoose.ConnectionStates;
};
const connection: MongoConnection = { isConnected: 0 };
const connectMongo = async () => {
  try {
    if (connection.isConnected) {
      return;
    }
    if (!process.env.NEXT_MONGO_CONNECTION_STRING) {
      throw new Error(`Missing environment variable MONGO_CONNECTION_STRING`);
    }
    const mongoConnectionString = process.env.NEXT_MONGO_CONNECTION_STRING;

    const db = await mongoose.connect(mongoConnectionString);
    console.log(`connecting to db`);
    connection.isConnected = db.connections[0].readyState;
    console.log(`connection status: ${connection.isConnected}`);
  } catch (error) {
    console.log(error);
  }
};

export default connectMongo;
