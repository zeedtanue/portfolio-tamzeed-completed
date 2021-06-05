import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import CopyText from '../components/CopyText';

import { Row, Col } from 'reactstrap';

class About extends React.Component {

  render() {
    return (
      <BaseLayout title="Tamzeed Hossain- Learn More About Me" {...this.props.auth}>
        <BasePage className="about-page">
          <Row className="mt-5">
            <Col md="6">
              <div className="left-side">
                <h1 className="title fadein">Hello, Welcome</h1>
                <h4 className="subtitle fadein">To About Page</h4>
                <p className="subsubTitle fadein">Feel free to read short description about me.</p>
                <div className="subsubTitle fadein">
                    <p className="bold">Shoot me an email:</p>
                  <div className="row">

                    <p>hossaintamzeed012@gmail.com</p>
                    <CopyText text="hossaintamzeed012@gmail.com"/>


                  </div>
                   </div>

                   

              </div>
            </Col>
            <Col md="6">
              <div className="fadein">
                <p>My name is Tamzeed Hossain and I am an experienced software engineer and freelance developer. </p>
                <p>
                 I have a Bachelor's degree in Software Engineering with Multimedia, an MBA in Project Management and several years of experience working on a wide range of technologies and projects in web and mobile applications in React, React Native, Vue.js and several backend frameworks based on Node.js.
                </p>
                <p>
                Throughout my career, I have acquired advanced technical knowledge and the ability to manage and lead complex project to success. Hire me for any projects you need help with.
                </p>
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default About;
