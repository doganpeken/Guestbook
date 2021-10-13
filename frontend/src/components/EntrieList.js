import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const host = "";

function EntrieList({ setView }) {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("start", entries);

  const getData = () => {
    fetch("/guestbook/entries", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        if (data === undefined) return;
        setEntries(data);
        setLoading(false);
        console.log("after fetch", data);
      })
      .catch((err) => console.log("my error:", err));
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) return <h1>LOADING...</h1>;

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
        {entries &&
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
