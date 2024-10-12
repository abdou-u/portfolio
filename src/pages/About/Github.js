import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { Tooltip as ReactTooltip } from "react-tooltip"; // Named import

function Github() {
  const [calendarLoaded, setCalendarLoaded] = useState(false);

  useEffect(() => {
    if (calendarLoaded) {
      ReactTooltip.rebuild();
    }
  }, [calendarLoaded]);

  // Custom function to adjust time zones if necessary
  const adjustTimeZone = (contributions) => {
    // Modify the contributions data according to the timezone difference if required
    return contributions.map(contribution => {
      // Example: shift contribution by a day if time zone difference is significant
      const adjustedContribution = {
        ...contribution,
        date: new Date(contribution.date).toLocaleDateString('en-US', { timeZone: 'UTC' })
      };
      return adjustedContribution;
    });
  };

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
        transformData={adjustTimeZone} // Adjusting time zone if needed
        onLoad={() => setCalendarLoaded(true)}
      />
      <ReactTooltip delayShow={50} html />
    </Row>
  );
}

export default Github;