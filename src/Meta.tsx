import React from "react";
import { Helmet } from "react-helmet-async";

const Meta = () => {
  return (
    <Helmet>
      <title>thform</title>

      <meta name="description" content="thform 으로 폼을 만들어보세요." />

      <link rel="canonical" href="http://localhost:3000/" />
    </Helmet>
  );
};

export default Meta;
