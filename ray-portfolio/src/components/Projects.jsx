export default function Projects() {
  return (
    <div>
      <h1 className="projectheadline">Projects</h1>
      <div className="projectcard">
        <h3>ViceRoy</h3>
        <img className="projectimage" alt="ViceRoy login page" src="/ViceRoy Login.png"/>
        <div className="projecttext">
          <div>Full stack application of a mock cryptocurrency trading application that allows authorized users the ability to practice buying and selling without the risk of losing actual money; Focused on the Login/Register/Guest functionalities</div>
          <div> - Collaborated in an agile team with 6 other engineers to design and configure UX/UI on Figma</div>
          <div> - Achieved Google Lighthouse scores of 49, 100, 92, and 92 for performance, accessibility, best practices, and SEO respectively</div>
          <div> - Implemented Firebase Authentication to check registered users for accessibility</div>
          <div> - Managed and stored user login data in Firestore Database while securing and hiding user information</div>
        </div>
      </div>
      <div className="projectcard">
        <h3>KeeBeeBuilds</h3>
        <img className="projectimage" alt="KeeBeeBuilds display page" src="/KeeBeeBuilds.png" />
        <div className="projecttext">
          <div>Full stack application that allows authorized users to share custom mechanical keyboard builds</div>
          <div> - Achieved Google Lighthouse scores of 65, 91, 100, and 90 for performance, accessibility, best practices, and SEO respectively</div>
          <div> - Built and styled a fully functional web application with CRUD capabilities using React.js and raw CSS</div>
          <div> - Utilized MongoDB, Cloudinary API, and Express.js to query and store data efficiently</div>
          <div> - Configured Auth0 to implement a sign-in feature for authenticated users to give access for full web functionalities</div>
        </div>
      </div>
      <div className="projectcard">
        <h3>Atelier</h3>
        <div className="projecttext">
          <div>Implementation of front-end and back-end solutions for an E-Commerce web application; Focused on Product Overview Section</div>
          <div> - Utilized React.js to build dynamic and interactive user interfaces, allowing clients to browse and filter products</div>
          <div> - Achieved Google Lighthouse scores of 74, 59, 75, and 80 for performance, accessibility, best practices, and SEO</div>
          <div> - Implemented lazy loading for images and content to optimize Largest Contentful Paint by 3 seconds</div>
          <div> - Optimized latency by configuring NGINX Load Balancer and Caching, reducing CPU bottleneck from 90% to 16%, increasing successful client requests per second from 1000 to 3500, improving average response times from 300ms to 62ms, while maintaining 0% error rate.</div>
          <div> - Deployed the entire application to Amazon AWS (EC2) and utilized Imaging from AWS to mimic identical instances for accurate reproduction of a server</div>
        </div>
      </div>
    </div>
  )
}