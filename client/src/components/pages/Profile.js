import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Container, Col, Form, Button, Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Profile.css";
import { GET_ME } from "../../utils/queries";
import { REMOVE_CAMPGROUND } from "../../utils/mutations";
import Auth from "../../utils/auth";
import { removeCampId } from "../../utils/localStorage";

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
    margin: 20,
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
  body: {
    display: "flex",
    justifyContent: "center",
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
  const [removeCampground] = useMutation(REMOVE_CAMPGROUND);

  const handleDeleteCamp = async (campgroundId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    console.log(campgroundId);
    if (!token) {
      return false;
    }

    try {
      const { data } = await removeCampground({
        variables: { campgroundId: campgroundId },
      });

      if (!data) {
        throw new Error("something went wrong!");
      }

      // upon success, remove book's id from localStorage
      removeCampId(campgroundId);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }
  return (
    <div>
      <h1 style={styles.body}>Hello, {userData.username}</h1>
      {userData.favCampgrounds ? (
        <h4 style={styles.body}>Favorite Campgrounds</h4>
      ) : null}

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
                  <Button onClick={() => handleDeleteCamp(camp.campgroundId)}>
                    Delete Campground
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
