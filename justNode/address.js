import address from "./address.json" assert { type: "json" };
import * as fs from "fs";
//console.log(JSON.stringify(address.module));
const data = address.module.map((data) => ({
  id: data.id,
  province_name: data.name,
}));

fs.writeFile("addressReal.json", JSON.stringify(data), (err) => {
  if (err) {
    console.error(`Error writing to file: ${err}`);
  } else {
    console.log("Data written to file successfully!");
  }
});
