import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { InferModel } from "drizzle-orm";
import { sql } from "@vercel/postgres";

export const userTable = pgTable("user", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: varchar("email").notNull(),
  image: varchar("image"),
});

export type User = InferModel<typeof userTable>;
export type NewUser = InferModel<typeof userTable, "insert">; // insert type

export const db = drizzle(sql);
