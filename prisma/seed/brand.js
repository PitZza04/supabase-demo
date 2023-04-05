import data from "./data/brands.json" assert { type: "json" };
import brand from "./data/brandJSON.json" assert { type: "json" };
import model from "./data/modelJSON.json" assert { type: "json" };
import fs from "fs";
console.log(JSON.stringify(data));
export async function seed(prisma) {
  await prisma.$executeRawUnsafe(
    `TRUNCATE TABLE "brand" RESTART IDENTITY CASCADE;`
  );

  await prisma.brand.createMany({
    data: brand.map((item) => {
      return { ...item };
    }),
  });
  await prisma.model.createMany({
    data: model.map((item) => {
      return { ...item };
    }),
  });
}
