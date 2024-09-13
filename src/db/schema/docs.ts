// import { sql } from "drizzle-orm";
import { table } from "console";
import { sqliteTable, text, integer, index } from "drizzle-orm/sqlite-core";
import { DocTypeValues } from "../../constants/DocType";

const docs = sqliteTable(
  "docs",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    type: text("type", {
      enum: DocTypeValues,
    }).notNull(),

    // Just for reference, you can add these fields if needed
    // createdAt: integer("created_at", { mode: "timestamp" })
    //   .notNull()
    //   .default(sql`(current_timestamp)`),
    // updatedAt: integer("updated_at", { mode: "timestamp" })
    //   .notNull()
    //   .default(sql`(current_timestamp)`),
  },
  (table) => ({
    typeIdx: index("type_idx").on(table.type),
  })
);

export default docs;

export type DocsTable = typeof docs;
