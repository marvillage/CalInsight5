import React from "react";
import "./TrainingResources.scss";

const TrainingResources: React.FC = () => {
  // Sample resources data
  const pdfResources = [
    {
      id: 1,
      title: "Effective Communication Skills for Customer Service",
      url: "https://www.otcbahrain.com/wp-content/uploads/2017/12/Effective-Communication-Skills.pdf",
    },
    {
      id: 2,
      title: "Customer Service Training Manual",
      url: "https://www.geog.cam.ac.uk/files/research/projects/insectfarming/StaffCapacityBuilding.pdf",
    },
    {
      id: 3,
      title: "Customer Service Skills Training",
      url: "https://www.k-state.edu/engagement/docs/pdfs/Session%201-%20Option%203%201.pdf",
    },
  ];

  const videoResources = [
    {
      id: 1,
      title: "Dealing with Difficult Customers - YouTube Video",
      url: "https://youtu.be/CMthpgaqQxo?si=HNNfhLrkA1ttztWZ",
    },
    {
      id: 2,
      title: "Customer Service Best Practices - YouTube Video",
      url: "https://youtu.be/Eq7Z2i7m57Y?si=-equvDoMjvsHSv5k",
    },
    {
      id: 3,
      title: "Effective Customer Engagement Strategies - YouTube Video",
      url: "https://youtu.be/nBJQzcljS1s?si=8bwb8VSmq9ROr_uU0",
    },
  ];

  return (
    <div className="trainingResources">
      <h1>Training and Resources</h1>
      
      <section className="pdfResources">
        <h2>PDF Resources</h2>
        <div className="resourceList">
          {pdfResources.map((resource) => (
            <div key={resource.id} className="resourceItem">
              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                {resource.title}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="videoResources">
        <h2>Video Tutorials</h2>
        <div className="resourceList">
          {videoResources.map((resource) => (
            <div key={resource.id} className="resourceItem">
              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                {resource.title}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TrainingResources;
