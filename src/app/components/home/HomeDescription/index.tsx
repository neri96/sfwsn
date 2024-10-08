"use client";

import { useState } from "react";

import { v4 as uuid } from "uuid";

import PageSection from "../../ui/PageSection";
import HomeDescrContent from "./HomeDescrContent";
import HomeDescrLink from "./HomeDescrLink";

import style from "./style.module.scss";

const tabData = [
  {
    id: uuid(),
    link: "who we are",
    content:
      "We’ve been serving the San Francisco Bay Area with an installation of new Windows, Window Replacement, & Doors as an experienced and caring dealer since 1995. We always provide free estimates and great service with every job. Please call us today with your home improvement or commercial window installation needs. Call us at 415-295-4502 or email for more information on windows & services provided.",
  },
  {
    id: uuid(),
    link: "energy efficiency",
    content:
      "Installing new energy efficient replacement windows and doors on your home or business in the San Francisco area can save you up to 40% on energy costs. The hot or cool air is kept where you want it, either inside or outside depending on the season. With new multi-pane glass technology and coatings, efficiency ratings only dreamed of a few years back are now a reality. Call 415-295-4502 or email us today for more information on saving on your heating & cooling costs.",
  },
  {
    id: uuid(),
    link: "door offerings",
    content:
      "The Window Station of San Francisco also carries a complete line of replacement doors from our all of our trusted manufacturers. Installing energy efficient doors on your home or business can bring similar savings to your window installation and increase the beauty and security of your home. Call 415-295-4502 or email us today for more information on saving on heating & cooling costs on your installation.",
  },
  {
    id: uuid(),
    link: "security",
    content:
      "The security of your family or place of business in San Francisco is important. Please ask us about new security features on replacement windows and doors from our trusted manufacturers. There are new options and offerings that can help to increase the security of your home or business along with aesthetics and heating & cooling savings. Call 415-295-4502 or email us today for more information.",
  },
  {
    id: uuid(),
    link: "craftsmanship",
    content:
      "Our customers always tell us how much they notice our craftsmanship on an installation of replacement windows or doors in their homes around San Francisco. We take great pride in our work & only use quality products from trusted manufacturers on each installation. Please phone us if you are interested in having our craftsmen transform your property. We can be reached at 415-295-4502. You can also email the Window Station of San Francisco for more information.",
  },
  {
    id: uuid(),
    link: "customer service",
    content:
      "People always tells that our customer service stands out, they appreciate that. There are many contractors out there who can install replacement windows for you in the San Francisco Bay Area, but not many provide the service and assistance you need both during and after the project. We strive to serve you because we know you’ll be happy and therefore a repeat customer down the road. Call 415-295-4502 or email us for all of your window needs.",
  },
];

const HomeDescription = () => {
  const [currentTab, setCurrentTab] = useState<string>(tabData[0].id);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleTabData = (id: string, index: number) => {
    setCurrentTab(id);
    setCurrentIndex(index);
  };

  return (
    <PageSection>
      <div className={style.homeDescrTab}>
        <HomeDescrLink
          currentTab={currentTab}
          data={tabData}
          handleTabData={handleTabData}
        />
        <HomeDescrContent currentIndex={currentIndex} data={tabData} />
      </div>
    </PageSection>
  );
};

export default HomeDescription;
