import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { Tooltip as ReactTooltip } from "react-tooltip"; // Named import for ReactTooltip

function Github() {
  const [calendarLoaded, setCalendarLoaded] = useState(false);
  
  useEffect(() => {
    // Tooltip initialization for hover details
    if (calendarLoaded) {
      ReactTooltip.rebuild();
    }
  }, [calendarLoaded]);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="abdou-u"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
        showTotalCount={true}
        onLoad={() => setCalendarLoaded(true)} // Trigger the tooltip setup when the calendar loads
      />
      <ReactTooltip delayShow={50} html />
    </Row>
  );
}

export default Github;