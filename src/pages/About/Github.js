import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import axios from "axios";
import GitHubCalendar from "react-github-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";

function Github() {
  const [contributions, setContributions] = useState(null);
  const [calendarLoaded, setCalendarLoaded] = useState(false);

  const fetchContributions = async () => {
    try {
      const response = await axios.get("https://ahmed-abdelmalek-portfolio.vercel.app/api/contributions");
      setContributions(response.data);
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
      {calendarLoaded ? (
        <>
          <p>Total contributions: {contributions.totalContributions}</p>
          <GitHubCalendar
            username="abdou-u"
            blockSize={15}
            blockMargin={5}
            color="#c084f5"
            fontSize={16}
            data={contributions} // Ensure the data is in the correct format
            showTotalCount={true}
          />
          {/* Updated to use the `render` prop instead of the deprecated `html` */}
          <ReactTooltip render={({ content }) => <span>{content}</span>} delayShow={50} />
        </>
      ) : (
        <p>Loading contributions...</p>
      )}
    </Row>
  );
}

export default Github;