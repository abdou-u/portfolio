import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import axios from "axios"; // We'll use axios to fetch data from GitHub API
import GitHubCalendar from "react-github-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";

const GITHUB_GRAPHQL_API_URL = "https://api.github.com/graphql";
const GITHUB_API_TOKEN = "your_github_api_token"; // Replace with your personal GitHub API token

function Github() {
  const [contributions, setContributions] = useState([]);
  const [calendarLoaded, setCalendarLoaded] = useState(false);

  // Function to fetch contribution data from GitHub's API
  const fetchGitHubContributions = async () => {
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
            Authorization: `Bearer ${GITHUB_API_TOKEN}`,
          },
        }
      );

      const contributionData =
        response.data.data.user.contributionsCollection.contributionCalendar;
      setContributions(contributionData);
      setCalendarLoaded(true);
    } catch (error) {
      console.error("Error fetching GitHub contributions:", error);
    }
  };

  useEffect(() => {
    fetchGitHubContributions();
  }, []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      {calendarLoaded ? (
        <>
          <p>Total contributions: {contributions.totalContributions}</p>
          {/* You can now use the contributions data to build a custom calendar */}
          <GitHubCalendar
            username="abdou-u"
            blockSize={15}
            blockMargin={5}
            color="#c084f5"
            fontSize={16}
            data={contributions}
            showTotalCount={true}
          />
          <ReactTooltip delayShow={50} html />
        </>
      ) : (
        <p>Loading contributions...</p>
      )}
    </Row>
  );
}

export default Github;