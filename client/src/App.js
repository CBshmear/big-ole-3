import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useContext } from "react";
import Badjob from "./components/pages/Badjob";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/Signup";
import NotFound from "./components/pages/NotFound";
import SignIn from "./components/pages/SignIn";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Profile from "./components/pages/Profile";
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const styles = {
  body: {
    backgroundImage: "linear-gradient(rgb(108,147,92),rgb(233, 230, 211)",
  },
};

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <ScrollToTop />
        <NavBar />
        <div
          style={styles.body}
          className="flex-column justify-center align-center min-100-vh"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/badjob" element={<Badjob />} />
            {/* <Route path="campground/:campid" element={<SingleCampground />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer></Footer>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
