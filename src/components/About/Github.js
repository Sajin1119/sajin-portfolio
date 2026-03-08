import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  // 1. Create state to track font and block size
  const [calendarSettings, setCalendarSettings] = useState({
    fontSize: 20,
    blockSize: 15,
  });

  // 2. Listen for window resize to toggle sizes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCalendarSettings({ fontSize: 10, blockSize: 12 });
      } else {
        setCalendarSettings({ fontSize: 20, blockSize: 15 });
      }
    };

    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>

      {/* 3. Wrap in a div to ensure horizontal scrolling on tiny screens */}
      <div className="d-flex justify-content-center w-100 overflow-auto">
        <GitHubCalendar
          username="Sajin1119"
          blockSize={calendarSettings.blockSize}
          blockMargin={5}
          color="#c084f5"
          fontSize={calendarSettings.fontSize}
        />
      </div>
    </Row>
  );
}

export default Github;