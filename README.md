# Lendsqr FrontEnd Engineering Assessment

This project was built using React(Typescript) and SASS as part of the assessment for the role of FrontEnd Engineer at Lendsqr

The project implements [the design](https://www.google.com/url?q=https://www.figma.com/file/ZKILoCoIoy1IESdBpq3GNC/Frontend&sa=D&source=editors&ust=1672752882877881&usg=AOvVaw3GMhLu28szMjeMuGFhY6p4) given by Lendsqr to prospective FrontEnd Engineers.

## About Lendsqr

Our Lending-as-a-Service solution powers lenders to launch in the shortest possible time, and scale their digital lending business across multiple channels, at the lowest cost.

We provide our lenders from various industries with a cloud lending platform to make the activities of your LaaS business run smoothly by implementing novel solutions and superior domain expertise. We’re passionate about making lenders succeed.

With powerful, automated features on Lendsqr, you can easily provide streamlined loan experiences for your borrowers; and access to bank data to enable your lenders to make informed loan decisions.

To learn more about Lendsqr's products, pricing or the awesome blog, check out [the website](https://www.lendsqr.com/)!

## Project Components

There are two major global components in this project which appear in most of the major pages: the top navigation component and the sidebar component

### Top Navigation

This component was implemented per the design and also made mobile responsive. It features the company logo, a searchbar, a link to the documentation, a clickable notification element and a clickable element for viewing user details.

### Sidebar

This component was implemented per the design and also made mobile responsive. It features links to various pages on the site (the vast majority of which were not implemented as they fall outside the purview of the assessment), as well as a clickable element for changing organization.

## Project Pages

This project implemented three pages, per the given design file, and made use of a mock API to simulate requests for user data.

### Login Page

This page was implemented per the design but is yet to be given functionality. It is mobile-responsive and features a login form with input for username and email.

### Users

This page features the following:
- Information cards providing basic but relevant statistics about users in the organization.
- A table displaying the organizations users, their active status as well as other relevant information.
- A filter dropdown to streamline search within the table.
- A dropdown to set a user's active status or view thier details

### User Details

This page features the following:
- Two cards to display more detailed information on a user than is displayed in the general users table.
- A button to blacklist the user.
- A button to activate the user.


## Installation

To install the relevant dependencies, simply run `npm install`. It is assumed you have node (version 16 or higher) installed on your local machine.

### Available Scripts

You can find the scripts for running the project in development server, building the app for production and more [here](https://github.com/theAvocadoCoder/lendsqr-fe-test/blob/main/REACT_SCRIPTS.md).

## Prerequisite
- Node version ^16.0.0

## Deployed Site

If you simply wish to view the deployed site, you can check it out [here](https://kelechi-nwauwa-lendsqr-fe-test.netlify.com).
