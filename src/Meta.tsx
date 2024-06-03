import React from "react";
import { Helmet } from "react-helmet-async";

const Meta = () => {
  return (
    <Helmet>
      <title>캐치시큐 - 개인정보 보호 솔루션</title>

      <meta
        name="description"
        content="캐치시큐로 개인정보를 안전하게 관리하세요. 최고의 보안 솔루션을 제공합니다."
      />
      <meta name="keywords" content="개인정보, 보안, 보호, 캐치시큐, 솔루션" />

      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="캐치시큐로 개인정보를 안전하게 관리하세요."
      />
      <meta property="og:site_name" content="캐치시큐" />
      <meta
        property="og:description"
        content="캐치시큐로 개인정보를 안전하게 관리하세요. 최고의 보안 솔루션을 제공합니다."
      />
      <meta property="og:image" content="/public/logo.webp" />
      <meta property="og:url" content="http://localhost:3000/" />

      <meta name="twitter:title" content="캐치시큐 - 개인정보 보호 솔루션" />
      <meta
        name="twitter:description"
        content="캐치시큐로 개인정보를 안전하게 관리하세요. 최고의 보안 솔루션을 제공합니다."
      />
      <meta name="twitter:image" content="/public/logo.webp" />

      <link rel="canonical" href="http://localhost:3000/" />
    </Helmet>
  );
};

export default Meta;
