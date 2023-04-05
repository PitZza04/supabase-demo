import region from "./address/regionData.json" assert { type: "json" };
import province from "./address/provinceData.json" assert { type: "json" };
import city from "./address/cityData.json" assert { type: "json" };
import barangay from "./address/barangayData.json" assert { type: "json" };

export async function addressSeed(prisma) {
  await prisma.$executeRawUnsafe(
    `TRUNCATE TABLE "region" RESTART IDENTITY CASCADE;`
  );

  await prisma.region.createMany({
    data: region.map((item) => {
      return { ...item };
    }),
  });

  await prisma.province.createMany({
    data: province.map((item) => {
      return { ...item };
    }),
  });

  await prisma.city.createMany({
    data: city.map((item) => {
      return { ...item };
    }),
  });

  await prisma.barangay.createMany({
    data: barangay.map((item) => {
      return { ...item };
    }),
  });
}
