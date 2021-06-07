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
/* import TestButton from "../TestButton/TestButton";
 */
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
/*   testClickHandler,
 */}) => {
  return (
    <div>
      <div className="mb-5">
        <div className="mt-5">
          <Container>
            <CurrentBalance movementsTable={movementsTable} />
            <CurrentTime className="mb-1" />
            <Row>
              <Col sm={7}>
                <TableComponent movementsTable={movementsTable} />
              </Col>
              <Col sm={5}>
                <div className="transaction-color">
                  <Withdrawals
                    withdrawalsInputHandler={withdrawalsInputHandler}
                    withdrawalClickHandler={withdrawalClickHandler}
                    className="bg-warning shadow-1-strong"
                  />
                </div>
                <div className="mt-2 loan-color">
                  <Deposits
                    depositInputHandler={depositInputHandler}
                    depositClickHandler={depositClickHandler}
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
          </Container>
          <Container>
            <Row>
              <Col sm={8}>
                <In className="mt-2" addedIn={addedIn} addedOut={addedOut} />
              </Col>
              <Col sm={4}>

              </Col>
            </Row>
{/*             <TestButton testClickHandler={testClickHandler} /> */}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Home;
