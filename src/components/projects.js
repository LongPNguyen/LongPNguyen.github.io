import React, { useState } from "react";
import { Row, Col } from "antd";

const clickableStyles = { cursor: "pointer", userSelect: "none" };

const projectsData = [
  {
    title: "SPS PoolCare",
    link: "http://www.spspoolcare.com/",
    image: require("../images/spspoolcare.webp"),
    description:
      "Built using Wordpress, flaunting layers upon layers for a Hero element that POP in a block-based system. SPS PoolCare is the fastest-growing swimming pool services company in the United States.",
  },
  {
    title: "Personal Mini Storage",
    link: "https://www.personalministorage.com/",
    image: require("../images/pms.webp"),
    description:
      "Built using Wordpress and a proprietary theme. Personal Mini Storage, based in Orlando, FL, operates 45 self-storage locations in the Central Florida area.",
  },
  {
    title: "Aberdeen Storage Management",
    link: "https://www.selfstoragesolutions.com/",
    image: require("../images/aberdeen.webp"),
    description:
      "Built using Wordpress and a proprietary theme. Small business locally owned and operated in Arizona, committed to being the premier source for self-storage, RV storage, and Penske Truck rental services.",
  },
];

const freelanceProjectsData = [
  {
    title: "AznBuzz",
    link: "https://azn-buzz.now.sh/",
    image: require("../images/aznbuzz.webp"),
    description:
      "Built using React & NextJS, the AznBuzz website is a simple no-shenanigans landing page.",
  },
  {
    title: "Rubber Duck Tech Solutions",
    link: "https://rubberducktech.com/",
    image: require("../images/rdts.webp"),
    description:
      "Built using Wordpress, the Rubber Duck Tech Solutions website gives the user a full small marketing agency experience",
  },
];

const Showcase = () => {
  const [hoverState, setHoverState] = useState({});

  const handleMouseOver = (index) => {
    setHoverState((prevState) => ({ ...prevState, [index]: true }));
  };

  const handleMouseOut = (index) => {
    setHoverState((prevState) => ({ ...prevState, [index]: false }));
  };

  const renderProject = (project, index) => (
    <Col
      xs={24}
      sm={12}
      key={index}
      style={{alignSelf:"flex-start"}}
    >
      <a
        href={project.link}
        onMouseOver={() => handleMouseOver(index)}
        onMouseOut={() => handleMouseOut(index)}
      >
        <h4
          style={{
            ...clickableStyles,
            opacity: hoverState[index] ? 1.5 : 1,
            color: hoverState[index] ? "#40A9FF" : "black",
            transition: ".5s",
          }}
        >
          {project.title}
        </h4>
        <img
          src={project.image}
          style={{
            ...clickableStyles,
            opacity: hoverState[index] ? 1.5 : 1,
            boxShadow: hoverState[index]
              ? `1px 1px 2px white, 0 0 25px #40A9FF, 0 0 5px lightblue`
              : `0 0 0 0`,
            transform: hoverState[index] ? `scale(1.015)` : `scale(1.0)`,
            borderRadius: "10px",
            width: "75%",
            height: "15rem",
            objectFit: "cover",
            objectPosition: "top left",
            marginBottom: "1em",
            transition: ".5s",
            border: "1px dashed silver",
          }}
        />
        <Row>
          <Col span={4}></Col>
          <Col span={16}>
            <p>{project.description}</p>
          </Col>
          <Col span={4}></Col>
        </Row>
      </a>
    </Col>
  );

  return (
    <div>
      <h1 className="projectsTitle">Professional Experience</h1>
      <Row align="middle" style={{ width:"100%",display: "flex", flexDirection: "row" }}>
        {projectsData.map((project, index) => renderProject(project, index))}
      </Row>
      <h1 style={{ marginTop: "1em" }} className="projectsTitle">
        Freelance Projects
      </h1>
      <Row align="middle" style={{ width:"100%",display: "flex", flexDirection: "row" }}>
        {freelanceProjectsData.map((project, index) =>
          renderProject(project, index)
        )}
      </Row>
    </div>
  );
};

export default Showcase;
