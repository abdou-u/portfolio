// server.js

const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors()); // Allow cross-origin requests from your frontend

const PORT = process.env.PORT || 5000;
const GITHUB_GRAPHQL_API_URL = "https://api.github.com/graphql";
const GITHUB_API_TOKEN = process.env.GITHUB_API_TOKEN; // Vercel provides this environment variable

app.get("/api/contributions", async (req, res) => {
  const query = `
    query {
      user(login: "abdou-u") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await axios.post(
      GITHUB_GRAPHQL_API_URL,
      { query },
      {
        headers: {
          Authorization: `Bearer ${GITHUB_API_TOKEN}`, // Use the token from Vercel environment
        },
      }
    );

    res.json(response.data.data.user.contributionsCollection.contributionCalendar);
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error);
    res.status(500).json({ error: "Error fetching GitHub contributions" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});