import db, { DbClient } from "./client";

// Import all your schema definitions
import * as schema from "./schema";

// Export the db client
export default db;

// Export all schemas
export { type DbClient, schema };

// Export any other database-related utilities
export function getTableNames() {
  return Object.keys(schema);
}
