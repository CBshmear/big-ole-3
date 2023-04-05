import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

const Home = () => {
  //For Reference

  // const { loading, data } = useQuery(QUERY_MATCHUPS, {
  //   fetchPolicy: "no-cache",
  // });

  //const matchupList = data?.matchups || [];

  return (
    <div>
      <h1>Hello World! </h1>
      <h4>Lets talk about campgrounds</h4>
    </div>
  );
};

export default Home;
