import downloadGame from "./download.js";
console.log("Building CNclient");
await downloadGame();
import("./build.js");