
import Model from "./Model"
function Develop({onClick}) {
  return (
    <Model  onClick={onClick}>
      <div className="w-full h-full flex flex-col items-center  overflow-scroll pt-4">
  <pre className="whitespace-pre-wrap text-left text-gray-800  bg-white rounded-lg shadow-md max-w-3xl w-full">
  <h1 className="mb-6 mt-6 text-2xl font-bold">
  Developer Expertise & Technical Skills
  </h1>
  
  <strong className="mb-4 block">Developing Area</strong>

  <div className="mb-4">
    <span className="font-semibold">1.Frontend Development</span>
    <ul className="mt-2 list-disc pl-6">
      <li>Proficient in HTML, CSS, and JavaScript, ensuring responsive and dynamic user interfaces
    </li>
      <li> Skilled in modern frameworks such as ReactJS, Tailwind CSS, and Bootstrap to enhance UI/UX design and efficiency
    </li>
    </ul>
  </div>

  <div className="mb-4">
    <span className="font-semibold">2. Backend Development</span>
   
    <ul className="mt-2 list-disc pl-6">
      <li> Experienced in Node.js, Python, and Express, building scalable and high-performance backend services
</li>
      <li>Strong understanding of server-side logic, API development, and database integration
</li>
    </ul>
  </div>
   <div className="mb-4">
    <span className="font-semibold">3. Containerization & Deployment</span>
   
    <ul className="mt-2 list-disc pl-6">
      <li>Well-versed in Docker and Kubernetes for containerized applications, enabling smooth deployment and management in a work environment

</li>
      <li>Skilled in server installation and system setup to facilitate development and hosting processes

</li>
    </ul>
  </div>
   <div className="mb-4">
    <span className="font-semibold">4. Microservices & API Integration</span>
   
    <ul className="mt-2 list-disc pl-6">
      <li>Expertise in Microservices Architecture, ensuring modular and scalable application development

</li>
      <li> Deep understanding of API configurations, integration across multiple projects, and system communication

</li>
<li>
 Proficient in RESTful and GraphQL APIs, enabling efficient data exchange and service interaction
</li>
<li>
  Familiar with monitoring tools such as Prometheus and Grafana to track application performance and system health
</li>
<li>
 Experienced in using CI/CD pipelines for automated testing and deployment, ensuring code quality and reliability
</li>
<li>
   Familiar with monitoring tools such as Prometheus and Grafana to track application performance and system health

</li>
    </ul>
  </div>
  <div className="mb-4">
    <span className="font-semibold">5. Database Management</span>
   
    <ul className="mt-2 list-disc pl-6">
      <li>Proficient in SQL and NoSQL databases, including MySQL, PostgreSQL, and MongoDB, for efficient data storage and retrieval</li>
      <li>Experienced in database design, optimization, and management to ensure data integrity and performance</li>
    </ul>
  </div>
  <div className="mb-4">
    <span className="font-semibold">6. Version Control & Collaboration</span>
   
    <ul className="mt-2 list-disc pl-6">
      <li>Proficient in Git and GitHub for version control, ensuring collaborative development and code management</li>
      <li>Experienced in Agile methodologies, including Scrum and Kanban, to enhance team collaboration and project delivery</li>
      <li>Strong communication skills, facilitating effective collaboration with cross-functional teams and stakeholders</li>
    </ul>
  </div>
  <div>
    <span className="font-semibold">7.Security & Third-Party Integrations</span>
    <ul className="mt-2 list-disc pl-6">
      <li>Knowledgeable in security best practices, including data encryption, authentication, and authorization mechanisms</li>
      <li>Familiar with OAuth and JWT for secure user authentication and authorization in web applications</li>
      <li> Implementing security configurations to protect systems from vulnerabilities and unauthorized access</li>
      <li> Experienced in integrating third-party services and APIs, enhancing application functionality and user experience</li>
    </ul>
  </div>
</pre>

      </div>
    </Model>
  )
}
export default Develop
