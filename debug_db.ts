import { PrismaClient } from "./src/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

async function main() {
  const connectionString = process.env.DATABASE_URL;
  const pool = new Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  try {
    const rawShipments = await pool.query('SELECT id, "proposedPrice", "approvedPrice" FROM "Shipment"');
    console.log("Prices in DB:");
    console.table(rawShipments.rows);
    
    console.log("Attempting findMany...");
    const shipments = await prisma.shipment.findMany({
      include: {
        sender: { select: { name: true } }
      }
    });
    console.log("findMany success! Found:", shipments.length);
  } catch (e) {
    console.error("Error debugging DB:", e);
  } finally {
    await pool.end();
  }
}

main();
