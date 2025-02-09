import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { request, gql } from "graphql-request";
import GitHubCalendar from "react-github-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";

// GitHub API URL
const GITHUB_API_URL = "https://api.github.com/graphql";
const GITHUB_API_TOKEN = process.env.NEXT_PUBLIC_GITHUB_API_TOKEN;

// Function to map the count to a level (0 to 4)
const calculateLevel = (count) => {
  if (count === 0) return 0;
  else if (count <= 5) return 1;
  else if (count <= 10) return 2;
  else if (count <= 20) return 3;
  else return 4; // More than 20 contributions
};

const fetchContributions = async (setContributions, setCalendarLoaded) => {
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
    // Fetch data from GitHub GraphQL API
    const data = await request(GITHUB_API_URL, query, null, {
      Authorization: `Bearer ${GITHUB_API_TOKEN}`,
    });

    console.log("Raw contributions data:", data);

    // Process the data into the format that GitHubCalendar expects
    const contributionDays = data.user.contributionsCollection.contributionCalendar.weeks.flatMap(week =>
      week.contributionDays.map(day => ({
        date: day.date,  // The date should be in ISO format
        count: day.contributionCount, // The contribution count for that date
        level: calculateLevel(day.contributionCount) // Map the contribution count to a level (0 to 4)
      }))
    );

    console.log("Processed contributions data with levels:", contributionDays);

    // Sort the data by date in ascending order
    contributionDays.sort((a, b) => new Date(a.date) - new Date(b.date));

    setContributions(contributionDays); // Update state with formatted data
    setCalendarLoaded(true);
  } catch (error) {
    console.error("Error fetching contributions:", error);
  }
};

function Github() {
  const [contributions, setContributions] = useState(null);
  const [calendarLoaded, setCalendarLoaded] = useState(false);

  useEffect(() => {
    fetchContributions(setContributions, setCalendarLoaded);
  }, []); // Empty array ensures the effect only runs once

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      {calendarLoaded && contributions ? (
        <>
          <p>Total contributions: {contributions.reduce((total, day) => total + day.count, 0)}</p>
          <GitHubCalendar
            username="abdou-u"
            blockSize={15}
            blockMargin={5}
            fontSize={16}
            data={contributions}  // Pass the processed data with levels to GitHubCalendar
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