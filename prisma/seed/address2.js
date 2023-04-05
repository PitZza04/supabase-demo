import smallJSON from "./data/SmallJSON.json" assert { type: "json" };
import bigData from "./data/BigJSON.json" assert { type: "json" };
import fs from "fs";
import csv from "csv-parser";
export async function addressSeed(prisma) {
  await prisma.$executeRawUnsafe(
    `TRUNCATE TABLE "region" RESTART IDENTITY CASCADE;`
  );
  // const regionStream = fs.createReadStream("./prisma/seed/address/region.csv").pipe(
  //   csv({
  //     separator: ",", // Set the separator used in your CSV file
  //     mapHeaders: ({ header }) => header.toLowerCase(), // Lowercase all headers
  //   })
  // );
  const csvParser = (url) => {
    const data = fs.createReadStream(`./prisma/seed/address/${url}.csv`).pipe(
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
  const regionStream = csvParser("region");
  for await (const row of regionStream) {
    await prisma.region.create({
      data: { ...row },
    });
  }
}
