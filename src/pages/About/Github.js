import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { request, gql } from "graphql-request";
import GitHubCalendar from "react-github-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";

// GitHub API URL
const GITHUB_API_URL = "https://api.github.com/graphql";

// Use the GitHub API token from the environment variable
const GITHUB_API_TOKEN = process.env.NEXT_PUBLIC_GITHUB_API_TOKEN; // This token should be set in Vercel

function Github() {
  const [contributions, setContributions] = useState(null);
  const [calendarLoaded, setCalendarLoaded] = useState(false);

  const fetchContributions = async () => {
    const query = gql`
      {
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
      // Make the request to GitHub API
      const data = await request(GITHUB_API_URL, query, null, {
        Authorization: `Bearer ${GITHUB_API_TOKEN}`,
      });

      console.log("Raw contributions data:", data);

      // Process the data into the format that GitHubCalendar expects
      const contributionDays = data.user.contributionsCollection.contributionCalendar.weeks.flatMap(week =>
        week.contributionDays.map(day => ({
          date: day.date,
          count: day.contributionCount,
        }))
      );

      console.log("Processed contributions data:", contributionDays);

      setContributions(contributionDays);
      setCalendarLoaded(true);
    } catch (error) {
      console.error("Error fetching contributions:", error);
    }
  };

  useEffect(() => {
    fetchContributions();
  }, []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      {calendarLoaded && contributions ? (
        <>
          <p>Total contributions: {contributions.length}</p>
          <GitHubCalendar
            username="abdou-u"
            blockSize={15}
            blockMargin={5}
            color="#c084f5"
            fontSize={16}
            data={contributions}
            showTotalCount={true}
          />
          <ReactTooltip render={({ content }) => <span>{content}</span>} delayShow={50} />
        </>
      ) : (
        <p>Loading contributions...</p>
      )}
    </Row>
  );
}

export default Github;