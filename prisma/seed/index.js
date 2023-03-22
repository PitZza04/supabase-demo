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
        name: brand.name,
        img_url: brand.img_url,
        model: {
          createMany: {
            data: brand.Model.map((model) => ({
              name: model.name,
              img_url: model.img_url,
            })),
          },
        },
      },
    });
  }
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
