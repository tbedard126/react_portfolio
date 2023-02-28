// import React from "react";

// const Home = () => {
//   return (
//     <section className="text-center">
//       Hello wassup this is where i will talk about me{" "}
//     </section>
//   );
// };

// export default Home;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image from "./images/me.jpg";
import myGIF from "./images/penguin_gif.gif";
const Home = () => {
  return (
    <div className="d-flex justify-content-center">
      <img src={image} alt="of tyler" className="img-fluid me" />
      <Container className="welcome">
        <Row>
          <Col>
            <div className="my-5">
              <h1 className="text-center">About Me</h1>
              <p className="lead bio">
                Hello! My name is Tyler Bedard, I'm a full stack developer who
                has been learning at the UNHCoding Bootcamp for the past 6
                months. During my time there, I have gained experience in a
                variety of programming languages and tools, including HTML, CSS,
                JavaScript, React, Node.js, and MongoDB. My focus is on creating
                user-friendly, responsive, and accessible web applications that
                solve real-world problems. I have a keen eye for detail and am
                always striving to improve my skills and stay up-to-date with
                the latest industry trends. In my free time, I enjoy tinkering
                with new technologies, contributing to open-source projects, and
                attending tech meetups and conferences.
                <img
                  src={myGIF}
                  alt="penguin coding"
                  className="img-fluid penguin zoom"
                />
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
