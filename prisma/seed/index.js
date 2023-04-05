import { PrismaClient } from "@prisma/client";
import { seed as brandSeed } from "./brand.js";
import { addressSeed } from "./address.js";
const prisma = new PrismaClient();
async function main() {
  let exitStatus = 0;
  try {
    //await Promise.all(addressSeed(prisma));
    await addressSeed(prisma);
    await brandSeed(prisma);
  } catch (error) {
    console.error(error);
    exitStatus = 1;
  } finally {
    await prisma.$disconnect();
    process.exit(exitStatus);
  }
}

main();

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
