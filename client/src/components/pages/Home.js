import { Link } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import {
  searchNationalParks,
  searchNationalParksStateCode,
} from "../../utils/API";
import { Container, Col, Form, Button, Card, Row } from "react-bootstrap";

import "../styles/Header.css";
import Header from "../Header";
import Auth from "../../utils/auth";
import { SAVE_CAMPGROUND } from "../../utils/mutations";
import "../styles/Styles.css";
//import campgroundSchema from "../../../../server/models/Campground";

const Home = () => {
  const [searchedCamps, setSearchedCamps] = useState([]); //
  const [saveCampground] = useMutation(SAVE_CAMPGROUND);
  const tester = async () => {
    //randomize, may eventually become a search for all parks. in API call, it is limited to 20. will eventually be increased.
    const response = await searchNationalParks();

    if (!response.ok) {
      throw new Error("something went wrong!");
    }

    const items = await response.json();

    const campData = items.data.map((camp) => ({
      campgroundId: camp.id,
      reservation: camp.url,
      name: camp.name,
      description: camp.description,
      image: camp.images[0] || "",
      latlong: camp.latlong,
      firewood: camp.amenities.firewoodForSale,
      potablewater: camp.amenities.potableWater[0],
      toilets: camp.amenities.toilets[0],
    }));

    console.log("campData", items.data);

    setSearchedCamps(campData);
  };

  //search by State code (MN, IA... etc)
  const [selectedOption, setSelectedOption] = useState("MN"); //initialize selected option

  const handleOptionChange = (event) => {
    //track the selected option
    console.log("handled option change to: " + event.target.value);
    setSelectedOption(event.target.value);
  };

  const handleFetchData = async () => {
    //use the selection option in the API call

    const response = await searchNationalParksStateCode(selectedOption); //API call is an imported function

    const items = await response.json();

    if (!response.ok) {
      throw new Error("something went wrong!");
    }
    console.log(items);

    const campData = items.data.map((camp) => ({
      campgroundId: camp.id,
      reservation: camp.url,
      name: camp.name,
      description: camp.description,
      image: camp.images[0] || "",
      latlong: camp.latlong,
      firewood: camp.amenities.firewoodForSale,
      potablewater: camp.amenities.potableWater[0],
      toilets: camp.amenities.toilets[0],
    }));

    setSearchedCamps(campData);
  };

  const handleCampgroundSave = async (campgroundId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    // console.log(campgroundId);
    // console.log("HERE!!", searchedCamps);
    if (!token) {
      return false;
    }
    try {
      const campToSave = searchedCamps.find(
        (camp) => camp.campgroundId === campgroundId
      );
      console.log("camptosave", campToSave);
      const { data } = await saveCampground({
        variables: { campgroundInput: { ...campToSave } },
      });
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

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
  return (
    <div>
      <Header></Header>
      <div className="search-button">
        <div>
          <h3>Search By State</h3>
          <select
            style={styles.select}
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="MN">MN</option>
            <option value="NY">NY</option>
            <option value="IA">IA</option>
            <option value="AZ">AZ</option>
            <option value="WA">WA</option>
            <option value="NY">NY</option>
            <option value="ME">ME</option>
            <option value="ND">ND</option>
            <option value="SD">SD</option>
            <option value="AK">AK</option>
            <option value="AR">AR</option>
            <option value="CA">CA</option>
            <option value="CT">CT</option>
            <option value="CO">CO</option>
            <option value="DE">DE</option>
            <option value="FL">FL</option>
            <option value="GA">GA</option>
            <option value="HI">HI</option>
            <option value="DE">DE</option>
            <option value="ID">ID</option>
            <option value="IL">IL</option>
            <option value="IN">IN</option>
            <option value="KS">KS</option>
            <option value="LA">LA</option>
            <option value="MD">MD</option>
            <option value="MA">MA</option>
            <option value="MI">MI</option>
            <option value="MS">MS</option>
            <option value="MO">MO</option>
            <option value="MT">MT</option>
            <option value="NE">NE</option>
            <option value="NV">NV</option>
            <option value="NH">NH</option>
            <option value="NJ">NJ</option>
            <option value="NM">NM</option>
            <option value="NC">NC</option>
            <option value="OH">OH</option>
            <option value="OK">OK</option>
            <option value="OR">OR</option>
            <option value="WI">WI</option>
          </select>
          <Button style={styles.button} onClick={handleFetchData}>
            Search
          </Button>
          <h3>Go Exploring!</h3>
          <Button
            className={Button}
            style={styles.button}
            onClick={() => tester()}
          >
            Randomize Campgrounds
          </Button>
        </div>
      </div>
      <Container>
        <h2 style={styles.h2} className="pt-5">
          {searchedCamps.length
            ? `Viewing ${searchedCamps.length} results:`
            : ""}
        </h2>
        <Row>
          {searchedCamps.map((camp) => {
            return (
              <Col md="4" key={camp.campgroundId}>
                <Card style={styles.card} key={camp.campgroundId} border="dark">
                  {camp.image.url ? (
                    <Card.Img
                      src={camp.image.url}
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

                    {Auth.loggedIn() ? (
                      <Button
                        onClick={() => handleCampgroundSave(camp.campgroundId)}
                      >
                        Stick a pin in it!
                      </Button>
                    ) : (
                      <Button>
                        <Link to="/signin"> Login to save a campground </Link>
                      </Button>
                    )}
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
