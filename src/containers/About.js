import React from "react";
import { Col, Row } from "antd";
import developer from "../assets/icons/developer.png";
import hacker from "../assets/icons/hacker.png";
import mentor from "../assets/icons/mentor.png";
import resumeData from "../constants/resumeData";

export const About = () => {
  const iconList = [hacker, developer, mentor];

  return (
    <section id="about" className="mt-5 container">
      <h1>About Me</h1>
      <Row>
        {resumeData['skills'].map((skill, i) => (
          <Col span={8} key={i}>
            <img className="icon" src={iconList[i]} />
            <h4>{skill.title}</h4>
            <p>{skill.listTitle}</p>
            <ul>
              {skill["list"].map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </Col>
        ))}
      </Row>

    </section>
  );
};