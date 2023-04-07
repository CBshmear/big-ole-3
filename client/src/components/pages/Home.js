import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { searchNationalParks } from "../../utils/API";
import { Container, Col, Form, Button, Card, Row } from "react-bootstrap";

import '../styles/Header.css';

import "./Styles.css";
const Home = () => {
  const [searchedCamps, setSearchedCamps] = useState([]);

  const tester = async () => {
    const response = await searchNationalParks();

    if (!response.ok) {
      throw new Error("something went wrong!");
    }

    const items = await response.json();

    const campData = items.data.map((camp) => ({
      campId: camp.id,
      campUrl: camp.url,
      campName: camp.name,
      campDescription: camp.description,
      image: camp.images[0] || "",
    }));

    console.log("campData", items.data);

    setSearchedCamps(campData);
  };

  const styles = {
    image: {
      display: "flex",
      maxWidth: "60%",
      height: "80px",
      margin: 5,
      borderRadius: 10,
    },
    card: {
      borderRadius: 10,
      justifyContent: "center",
      background: "rgba(0,0,0,0.2)",
      backgroundImage: "url(",
    },
    title: {
      fontSize: "25px",
    },
    button: {
      height: "fit-content",
      width: "fit-content",
      borderRadius: 10,
      //background: "rgba(0,0,0,0.2)",
    },
  };
  return (
   
    <div>
      <div className="header">
        <h1>HappyCamper </h1>
        <h4>Find your happy place</h4>
      </div>
      <div className="search-button">
        <Button className={Button} style={styles.button} onClick={() => tester()}>
          Randomize Campgrounds
        </Button>
      </div>
      <Container>
        <h2 className="pt-5">
          {searchedCamps.length
            ? `Viewing ${searchedCamps.length} results:`
            : "Search for a campground to begin"}
        </h2>
        <Row>
          {searchedCamps.map((camp) => {
            return (
              <Col md="4" key={camp.campId}>
                <Card style={styles.card} key={camp.campId} border="dark">
                  {camp.image.url ? (
                    <Card.Img
                      src={camp.image.url}
                      alt={`The cover for ${camp.campName}`}
                      variant="top"
                      style={styles.image}
                    />
                  ) : null}
                  <Card.Body>
                    <Card.Title style={styles.title}>
                      {camp.campName}
                    </Card.Title>

                    <Card.Text>{camp.campDescription}</Card.Text>
                    {/* {Auth.loggedIn() && (
                      <Button
                        disabled={savedBookIds?.some(
                          (savedBookId) => savedBookId === book.bookId
                        )}
                        className="btn-block btn-info"
                        onClick={() => handleSaveBook(book.bookId)}
                      >
                        {savedBookIds?.some(
                          (savedBookId) => savedBookId === book.bookId
                        )
                          ? "This book has already been saved!"
                          : "Save this Book!"}
                      </Button>
                    )} */}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  
  );
};

export default Home;
