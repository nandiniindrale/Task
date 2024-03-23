import React, { useState } from 'react'
import Header from '../../components/common/header/header'
import Taboptions from '../../components/common/taboptions/taboptions'
import Footer from '../../components/common/footer/footer'
import Restaurant from '../../components/Restaurant/restaurant';
import Cooking from '../../components/Cooking/cooking';

const Homepage = () => {
  const [activeTab, setActiveTab] = useState("Restaurant");

  const getCorrectScreen = () => {
    switch (activeTab) {
      case "Restaurant":
        return <Restaurant />;
      case "Cooking":
        return <Cooking />;
      default:
        return <Restaurant />;
    }
  };

  return (
    <div>
      <Header />
      <Taboptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen()}
      {/* <Footer /> */}
    </div>
  );
};

export default Homepage;
