import { useState, useEffect } from 'react';

export default function Projects() {

  useEffect(() => {
    const accordion = document.getElementsByClassName('projectcard');
    for (let i = 0; i < accordion.length; i++) {
      accordion[i].addEventListener('click', (event) => {
        event.currentTarget.classList.toggle('active');
        event.currentTarget.scrollIntoView({behavior: 'smooth'});
      })
    }
  }, [])

  return (
    <div>
      <h1 className="projectheadline">Projects</h1>
      <div className="projectcontent">
        <div id="projectcard" className="projectcard">
          <h3 className="projecttitle">ViceRoy</h3>
          <img className="projectimage" alt="ViceRoy login page" src="/ViceRoy Login.png"/>
          <div className="projecttext">
            <p>Full stack application of a mock cryptocurrency trading application that allows authorized users the ability to practice buying and selling without the risk of losing actual money; Focused on the Login/Register/Guest functionalities</p>
            <p> - Collaborated in an agile team with 6 other engineers to design and configure UX/UI on Figma</p>
            <p> - Achieved Google Lighthouse scores of 49, 100, 92, and 92 for performance, accessibility, best practices, and SEO respectively</p>
            <p> - Implemented Firebase Authentication to check registered users for accessibility</p>
            <p> - Managed and stored user login data in Firestore Database while securing and hiding user information</p>
          </div>
        </div>
        <div id="projectcard" className="projectcard">
          <h3 className="projecttitle">KeeBeeBuilds</h3>
          <img className="projectimage" alt="KeeBeeBuilds display page" src="/KeeBeeBuilds.png" />
          <div className="projecttext">
            <p>Full stack application that allows authorized users to share custom mechanical keyboard builds</p>
            <p> - Achieved Google Lighthouse scores of 65, 91, 100, and 90 for performance, accessibility, best practices, and SEO respectively</p>
            <p> - Built and styled a fully functional web application with CRUD capabilities using React.js and raw CSS</p>
            <p> - Utilized MongoDB, Cloudinary API, and Express.js to query and store data efficiently</p>
            <p> - Configured Auth0 to implement a sign-in feature for authenticated users to give access for full web functionalities</p>
          </div>
        </div>
        <div id="projectcard" className="projectcard">
          <h3 className="projecttitle">Atelier</h3>
          <div className="projecttext">
            <p>Implementation of front-end and back-end solutions for an E-Commerce web application; Focused on Product Overview Section</p>
            <p> - Utilized React.js to build dynamic and interactive user interfaces, allowing clients to browse and filter products</p>
            <p> - Achieved Google Lighthouse scores of 74, 59, 75, and 80 for performance, accessibility, best practices, and SEO</p>
            <p> - Implemented lazy loading for images and content to optimize Largest Contentful Paint by 3 seconds</p>
            <p> - Optimized latency by configuring NGINX Load Balancer and Caching, reducing CPU bottleneck from 90% to 16%, increasing successful client requests per second from 1000 to 3500, improving average response times from 300ms to 62ms, while maintaining 0% error rate.</p>
            <p> - Deployed the entire application to Amazon AWS (EC2) and utilized Imaging from AWS to mimic identical instances for accurate reproduction of a server</p>
          </div>
        </div>
      </div>
    </div>
  )
}