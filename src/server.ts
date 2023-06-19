import { PlayersData } from "./Interfaces/types";
import { Client } from "@notionhq/client"

// require("dotenv").config();
// https://api.notion.com/v1/pages 
// const fetch = require("node-fetch");
const notion = new Client({ auth: import.meta.env.NOTION_SECRET_KEY });
const pageId = "93b4f7278bb045e0bc6c013bac584c18";
const url = `https://api.notion.com/v1/pages/${pageId}`;

const playersData = JSON.parse(
  localStorage.getItem("playersData")
) as PlayersData;

export const serverLeaderboard = async () => {
  
  const response = await notion.pages
    .create({
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.NOTION_SECRET_KEY}`,
        "Content-Type": "application/json",
        "Notion-Version": "2021-05-13",
      },
      body: saveGlobalLeaderboard({
        databaseID: pageId,
        playerName: playersData.player1?.name as string,
        playerScore: playersData.player1?.score as number,
      }),
    })
    .then((response) => response.json())
    .then((data) => console.log("Datos enviados a Notion:", data))
    .catch((error) => console.error("Error al enviar los datos:", error));

  console.log(response);
};

export interface GlobalLeaderboardDB {
  databaseID?: string;
  playerName: string;
  playerScore: number;
}

export const saveGlobalLeaderboard = ({
  databaseID,
  playerName,
  playerScore,
}: GlobalLeaderboardDB) => {
  return {
    parent: {
      database_id: databaseID,
    },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: playerName,
            },
          },
        ],
      },
      player_score: {
        number: playerScore,
      },
    },
  };
};
