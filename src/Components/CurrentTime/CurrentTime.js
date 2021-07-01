import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const CurrentTime = () => {
  const Now = new Date();
  const Day = `${Now.getDate()}`.padStart(2, 0);
  const Month = `${Now.getMonth() + 1}`.padStart(2, 0);
  const Year = Now.getFullYear();
  const Hour = Now.getHours();
  const Minutes = `${Now.getMinutes()}`.padStart(2, 0);
  return (
    <div>
      <Container>
        <Row>
          <Col
            className="time-color"
            lg={{ span: 3, offset: 1 }}
            xs={{ span: 3, offset: 1 }}
          >
            <div>{`As of ${Month}/${Day}/${Year}, ${Hour}:${Minutes}`}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CurrentTime;
