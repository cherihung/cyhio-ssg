import Education from '../data/ed';
import Experience from '../data/exp';

export default function Resume() {

  const educationList = Education.map((item) => 
      <div key={item.id}>
        <h3>{item.school} &mdash; <i>{item.degree}</i></h3>
        <span>{item.dates} | {item.location}</span>
        <p>{item.description}</p>
      </div>
  );

  const experienceList = Experience.map((item) => 
  <div key={item.id}>
    <h3>{item.company} &mdash; <i>{item.title}</i></h3>
    <span>{item.dates} | {item.location}</span>
    <p>{item.description}</p>
  </div>
);

  return (
    <div className="resume">
      <div className="section">
        <h4>Skills</h4>
        <p>Javascript/Typescript, React, NodeJS, GraphQL, Kafka, AWS, Jenkins, Docker, Cassandra, SQL, ElasticSearch, Angular, CSS-in-JS, CSS3, SASS, Selenium, WebdriverIO</p>
      </div>
      <div className="section">
        <h4>Related Experience</h4>
        {experienceList}
      </div>
      <div className="section">
        <h4>Education</h4>
        {educationList}
      </div>
    </div>
  )
}
