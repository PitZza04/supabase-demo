import fs from "fs";
import csv from "csv-parser";
const csvParser = (url) => {
  const data = fs.createReadStream(`./address/${url}.csv`).pipe(
    csv({
      separator: ",", // Set the separator used in your CSV file
      mapHeaders: ({ header }) => header.toLowerCase(), // Lowercase all headers
      mapValues: ({ header, index, value }) => {
        // Convert string values to numbers if possible
        const numberValue = parseFloat(value);
        return isNaN(numberValue) ? value : numberValue;
      },
    })
  );
  return data;
};
const provinceStream = csvParser("province");
const regionStream = csvParser("region");
const cityStream = csvParser("city");
const barangayStream = csvParser("barangay");
const regionData = [];
const provinceData = [];
const cityData = [];
const barangayData = [];
for await (const row of regionStream) {
  regionData.push(row);
}
for await (const row of provinceStream) {
  provinceData.push(row);
}
for await (const row of cityStream) {
  cityData.push(row);
}
for await (const row of barangayStream) {
  barangayData.push(row);
}
// const provinceIds = [];
// for await (const row of provinceStream) {
//   if (row.region_id === 6) {
//     provinceData.push(row);
//     provinceIds.push(row.id);
//   }
// }
// //console.log(provinceData);
// const cityData = [];
// const cityIds = [];
// for await (const cityRow of cityStream) {
//   if (provinceIds.includes(cityRow.province_id)) {
//     cityData.push(cityRow);
//     cityIds.push(cityRow.id);
//   }
// }
// const barangayData = [];
// const barangayIds = [];
// for await (const barangayRow of barangayStream) {
//   if (cityIds.includes(barangayRow.city_id)) {
//     barangayData.push(barangayRow);
//     barangayIds.push(barangayRow.id);
//   }
//}

fs.writeFile("regionJSON.json", JSON.stringify(regionData), (err) => {
  if (err) {
    console.error(`Error writing to file: ${err}`);
  } else {
    console.log("Data written to file successfully!");
  }
});
fs.writeFile("provinceJSON.json", JSON.stringify(provinceData), (err) => {
  if (err) {
    console.error(`Error writing to file: ${err}`);
  } else {
    console.log("Data written to file successfully!");
  }
});
fs.writeFile("cityJSON.json", JSON.stringify(cityData), (err) => {
  if (err) {
    console.error(`Error writing to file: ${err}`);
  } else {
    console.log("Data written to file successfully!");
  }
});
fs.writeFile("barangayJSON.json", JSON.stringify(barangayData), (err) => {
  if (err) {
    console.error(`Error writing to file: ${err}`);
  } else {
    console.log("Data written to file successfully!");
  }
});
