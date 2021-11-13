import React, { useRef, useEffect } from "react";
import Parallax from "parallax-js";
import { Card, Col, Row } from "antd";
import { Frame } from "../components/Frame";

import landingImg1 from "../assets/parallax-landing-color.png";
import landingImg2 from "../assets/parallax-landing-lines.png";
import landingImg3 from "../assets/parallax-landing-accents.png";

export const Landing = () => {

  const sceneEl = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
      hoverOnly: true
    })

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, [])

  return (
    <section id="landing">
      <div className="landing-wrapper">
        <div ref={sceneEl} id="scene" className="scene-wrapper">
          <img data-depth="0.40" src={landingImg1} alt="parallax background colors"/>
          <img data-depth="0.20" src={landingImg2} alt="parallax background lines"/>
          <img data-depth="0.80" src={landingImg3} alt="parallax background accents"/>
        </div>
        <div className="banner-wrapper">
          <Row>
            <Col span={12} offset={6}>
            <Card title="Card title" bordered={true}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};