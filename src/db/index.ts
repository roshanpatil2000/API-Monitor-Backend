import { Pool } from "pg";

export const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "api_monitor",
  password: "api_monitor_password",
  database: "api_monitor_db",
});

export const query = (text: string, params?: any[]) => {
  return pool.query(text, params);
};