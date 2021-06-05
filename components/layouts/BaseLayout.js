import React from 'react';
import Header from '../shared/Header';
import Head from 'next/head';

const BaseLayout = (props) => {
  const { className, children, isAuthenticated, user, isSiteOwner, cannonical } = props;
  const headerType = props.headerType || 'default';
  const title = props.title || 'Tamzeed Hossain Portfolio';
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content="My name is Tamzeed Hossain and I am an experienced software engineer and freelance developer. I have a Bachelor's degree in Software Engineering with Multimedia, an MBA in Project Management and several years of experience working on a wide range of technologies and projects in web and mobile applications in React, React Native, Vue.js and several backend frameworks. Throughout my career, I have acquired advanced technical knowledge and the ability to manage and lead complex project to success. Hire me for any projects you need help with." />
        <meta name="keywords" content="Tamzeed Hossain, web developer, app developer, hire tamzeed, tamzeed hossain, tamzeed developer, tamzeed freelancig, tamzeed programming"/>
        <meta property="og:title" content="Tamzeed Hossain - programmer, developer, bloger" />
        <meta property="og:locale" content="en_EU" />
        <meta property="og:url" content={`${process.env.BASE_URL}`}/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="My name is Tamzeed Hossain and I am an experienced software engineer and freelance developer."/>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet"/>
        {cannonical && <link rel="cannonical" href={`${process.env.BASE_URL}${cannonical}`}/>}
        <link rel="icon" type="image/ico" href="/static/favicon.ico"/>
      </Head>
      <div className="layout-container" >
        <Header className={`port-nav-${headerType}`}
                isAuthenticated={isAuthenticated}
                user={user}
                isSiteOwner={isSiteOwner}/>
        <main className={`cover ${className}`}>
          <div className="wrapper">
            {children}
          </div>
        </main>
      </div>
    </React.Fragment>
  )
}

export default BaseLayout;

