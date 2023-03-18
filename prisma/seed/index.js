const data = require("./data/brands.json");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// data.map((brand) => {
//   console.log(brand.make);
// });

const main = async () => {
  await prisma.$executeRawUnsafe(`TRUNCATE TABLE "Brand" CASCADE;`);
  for (const brand of data) {
    await prisma.Brand.create({
      data: {
        name: brand.make,
        model: {
          createMany: {
            data: brand.models.map((model) => ({
              name: model.name,
            })),
          },
        },
      },
    });
  }
};
// createMany: brand.models.map((model) => ({
//   name: model.name,
// })),
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
