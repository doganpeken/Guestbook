import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const host = "";

function EntrieList({ view, setView }) {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch(`${host}/guestbook/entries`)
      .then((response) => response.json())
      .then((response) => setEntries(response.entries));
  }, []);

  return (
    <>
      <Row>
        <Col>
          <h2>Entries</h2>
        </Col>
        <Col>
          <Button
            variant="success"
            style={{ float: "right" }}
            onClick={() => {
              setView("entrie");
            }}
          >
            add
          </Button>
        </Col>
      </Row>
      <Row>
        {entries.length > 0 &&
          entries.map((entrie) => {
            return (
              <Col
                key={entrie.id}
                className="col-12 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 pb-4"
              >
                <Card style={{ width: "18rem" }} className="mb-2">
                  <Card.Body>
                    <Card.Title>{entrie.visitor}</Card.Title>
                    <Card.Text>
                      <p>ID: {entrie.id}</p>
                      <p>Title: {entrie.title}</p>
                      <p>Text: {entrie.text}</p>
                      <p>Created: {entrie.created}</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </>
  );
}

export default EntrieList;
