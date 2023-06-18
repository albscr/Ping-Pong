import { Client } from "@notionhq/client";

export async function getDatabase() {
  const notion = new Client({
    auth: "secret_ImYLbuCfUNPOOa65l4xZG9wdL6Y8gQ59raqjP1PXfjG",
  });

  const database = await notion.databases.retrieve({
    database_id: "be715ebbd361487fb3c6353fc06f599d",
  });

  console.log("database", database);
  
  return database;
}

getDatabase()

