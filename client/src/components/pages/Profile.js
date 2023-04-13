import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Container, Col, Form, Button, Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Profile.css";
import { GET_ME } from "../../utils/queries";
import Auth from "../../utils/auth";

const styles = {
  image: {
    display: "flex",
    width: "60%",
    height: "30%",
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
    margin: 10,

    //background: "rgba(0,0,0,0.2)",
  },
  select: {
    width: "fit-content",
  },
};
//wishlist:
//user profile has a campground wishlist and a places i've been
//as it stands now, in the model, it has a favCampgrounds property. we can change this later.

//query me to get favCampgrounds
//delete campground

export default function Profile() {
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || {};
  console.log(userData);

  if (loading) {
    return <h2>LOADING...</h2>;
  }
  return (
    <div>
      <h1>Profile Page</h1>
      <h1>Hello, {userData.username}</h1>
      {userData.favCampgrounds ? <h4>Favorited campgrounds</h4> : null}

      <Row>
        {userData.favCampgrounds.map((camp) => {
          return (
            <Col md="4" key={camp.campgroundId}>
              <Card style={styles.card} key={camp.campgroundId} border="dark">
                {camp.image ? (
                  <Card.Img
                    src={camp.image}
                    alt={`The cover for ${camp.name}`}
                    variant="top"
                    style={styles.image}
                  />
                ) : null}
                <Card.Body>
                  <Card.Title style={styles.title}>{camp.name}</Card.Title>

                  <Card.Text>{camp.description}</Card.Text>
                  <Card.Text>{camp.toilets}</Card.Text>
                  {camp.firewood ? (
                    <Card.Text>Firewood on-site: {camp.firewood}</Card.Text>
                  ) : null}
                  {camp.reservation ? (
                    <Button style={styles.button}>
                      <Link to={camp.reservation}>Reserve a site!</Link>
                    </Button>
                  ) : null}
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>

      {/* <div id="campgrounds">
        <h3>Favorite Campgrounds</h3>
        {userData.favCampgrounds.map((camp) => {
          return (
            <div>
              <h1>{camp.name}</h1>
              <h1>{camp.state}</h1>
              <h1>{camp.description}</h1>
              <img src={camp.image}></img>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}
