import React from "react";
import "./Home.css";
import Withdrawals from "../Withdrawals/Withdrawals";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Deposits from "../Deposits/Deposits";
import DeleteComponent from "../DeleteComponent/DeleteComponent";
import CurrentBalance from "../CurrentBalance/CurrentBalance";
import TableComponent from "../Table/TableComponent";
import CurrentTime from "../CurrentTime/CurrentTime";
import In from "../In/In";

const Home = ({
  movementsTable,
  deleteInputHandler,
  deleteClickHandler,
  withdrawalClickHandler,
  depositClickHandler,
  withdrawalsInputHandler,
  depositInputHandler,
  addedIn,
  addedOut,
}) => {
  return (
    <div>
      <Container fluid className="bg-home">
        <CurrentBalance movementsTable={movementsTable} />
        <CurrentTime className="mb-1" />
        <Row>
          <Col lg={{ span: 5, offset: 2 }}>
            <TableComponent movementsTable={movementsTable} />
          </Col>
          <Col lg={{ span: 3, offset: 0 }} md={{ span: 8, offset: 2 }}>
            <div className="loan-color">
              <Deposits
                depositInputHandler={depositInputHandler}
                depositClickHandler={depositClickHandler}
              />
            </div>
            <div className="mt-2 transaction-color">
              <Withdrawals
                withdrawalsInputHandler={withdrawalsInputHandler}
                withdrawalClickHandler={withdrawalClickHandler}
                className="bg-warning shadow-1-strong"
              />
            </div>
            <div className="mt-2 close-color">
              <DeleteComponent
                deleteInputHandler={deleteInputHandler}
                deleteClickHandler={deleteClickHandler}
              />
            </div>
          </Col>
        </Row>
        <Row className='pb-5'>
          <In addedIn={addedIn} addedOut={addedOut} />
        </Row>
      </Container>
    </div>
  );
};

export default Home;
