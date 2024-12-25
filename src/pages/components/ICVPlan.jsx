import React from "react";

export default function Achievements() {
  return (
    <div className="container-fluid py-5" style={{ background: "#f8f9fa" }}>
      <div className="container">
        <h2 className="text-center mb-5 text-uppercase text-primary">
          QES Achievements
        </h2>
        <h4 className="text-center text-2xl mb-20">
          QES focus on improving ICV plans, and below are some future projects for QES:
        </h4>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Provide cementing technical training:</strong> To customers and Omani universities free of charge.
          </li>
          <li className="list-group-item">
            <strong>Collaboration with SQU (Sultan Qaboos University):</strong> Work with SQU and other labs to develop new designs and technology.
          </li>
          <li className="list-group-item">
            <strong>Support for local universities:</strong> Provide internships for students and support final-year projects.
          </li>
          <li className="list-group-item">
            <strong>Investment in Fixed Assets:</strong> Expanding infrastructure to enhance operational efficiency.
          </li>
          <li className="list-group-item">
            <strong>Local Sourcing of Goods:</strong> Prioritizing procurement from local suppliers.
          </li>
          <li className="list-group-item">
            <strong>Local Sourcing of Subcontracted Services:</strong> Engaging local subcontractors for services.
          </li>
          <li className="list-group-item">
            <strong>Development of National Suppliers:</strong> Supporting and enabling the growth of local businesses.
          </li>
          <li className="list-group-item">
            <strong>National Training and R&D Institution:</strong> Investing in training and research to support Omani talent development.
          </li>
        </ul>
      </div>
    </div>
  );
}
