import mongoose from "mongoose";
import chalk from "chalk";

mongoose.set("returnOriginal", false);

mongoose.connect("mongodb://127.0.0.1:27017/my-api").catch((err) => {
  console.log(`Can not connect to mongoDb:${err.message}`);
});

mongoose.connection.on("disconnected", () => {
  console.log(chalk.bold("Disconnected from mongodb"));
});

mongoose.connection.on("error", () => {
  console.log(chalk.red(`Error with mongoDb ${err}`));
});

export default mongoose.connection;
