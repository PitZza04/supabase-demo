export async function() {
    await prisma.$executeRawUnsafe(
        `TRUNCATE TABLE "region" RESTART IDENTITY CASCADE;`
    );
}