import React from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>This is Home Page</title>
        <link rel="canonical" href="https://www.plazmacloud.com/" />
      </Helmet>

      <div className="container py-3">
        <h3 className="text-center">Basic React-Redux Template</h3>
        <div className="px-5 my-4">
          <h4>Basic Features</h4>
          <ul className="list-group list-group-flush">
            <li class="list-group-item">Bootstrap</li>
            <li class="list-group-item">React-Router-Dom</li>
            <li class="list-group-item">Redux-Toolkit</li>
            <li class="list-group-item">React Icons</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
