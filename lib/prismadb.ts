// import { PrismaClient } from "@prisma/client";

// declare global {
//   var prisma: PrismaClient | undefined;
// }

// const prismadb = globalThis.prisma || new PrismaClient();
// if (process.env.NODE_EN !== "production") globalThis.prisma = prismadb;

// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClient | undefined;
// };

// const prismadb = globalForPrisma.prisma ?? new PrismaClient();

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prismadb;

import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}
// const globalForPrisma = globalThis as unknown as {
//   prismadb: PrismaClient | undefined;
// };

const prismadb = globalThis.prisma || new PrismaClient();
if (process.env.NODE_EN !== "production") globalThis.prisma = prismadb;
export default prismadb;
// export const prismadb = globalForPrisma.prisma ?? new PrismaClient();

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prismadb;
