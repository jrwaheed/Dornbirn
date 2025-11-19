import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.create({
        data: {
            name: "jamal"
        }
    });
    console.log("User created:", user);
}

main().catch((e) => {
  console.error(e.messsage);
}).finally(async () => {
  await prisma.$disconnect();
});