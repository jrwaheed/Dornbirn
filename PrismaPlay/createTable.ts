import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    const user = await prisma.create
}

main().catch((e) => {
  console.error(e.messsage);
}).finally(async () => {
  await prisma.$disconnect();
});