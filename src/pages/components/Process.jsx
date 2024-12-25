import React from "react";

export default function Process() {
  return (
    <>
      {/* Cementing Process Methodology Start */}
      <div className="container-fluid bg- py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: 800 }}
          >
            <h4 className="display-4 ">Cement Process Methodology</h4>
            <h5 className="text-primary mb-4">
            The cementing process at QES consists of four major steps:
            </h5>
          </div>

          <div className="flowchart-container">
            {/* Step 1 */}
            <div className="step neumorphic-card">
              <h4 className="step-title">1. Slurry Design</h4>
              <p className="step-description">
                The cement unit is designed to mix light and heavy-weight
                cement slurries in big volumes up to 24 M<sup>3</sup> (150 bbl)
                and maintain constant weight. Specifications include:
              </p>
              <ul>
                <li>Conventional Slurries (15-17 ppg)</li>
                <li>Water Extended Slurries (12-15 ppg)</li>
                <li>Anti-Gas Migration Slurries</li>
                <li>Heavy Weight Slurries (17-19 ppg)</li>
                <li>Foam Cementing</li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="step neumorphic-card">
              <h4 className="step-title">2. Pumping</h4>
              <p className="step-description">
                The Batch Mixer unit consists of Twin Pumping Units and Dual
                Mixing Pumps, capable of high-rate and high-pressure pumping,
                operating in temperatures from -10℃ to +60℃.
              </p>
            </div>

            {/* Step 3 */}
            <div className="step neumorphic-card">
              <h4 className="step-title">3. Field Mixing Trial</h4>
              <p className="step-description">
                Tanks with Micromotion technology allow mixing of two different
                slurries independently in every batch mixer. The unit generates
                job charts for detailed analysis.
              </p>
            </div>

            {/* Step 4 */}
            <div className="step neumorphic-card">
              <h4 className="step-title">4. Lab Testing</h4>
              <p className="step-description">
                A state-of-the-art cementing lab runs advanced tests such as:
              </p>
              <ul>
                <li>Rheology</li>
                <li>Free Fluid</li>
                <li>Fluid Loss</li>
                <li>Density</li>
                <li>Thickening Time</li>
                <li>Compressive Strength</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Neumorphic CSS Styling */}
      <style jsx>{`
        .flowchart-container {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
          align-items: center;
        }

        .step {
          width: 300px;
          padding: 20px;
          text-align: center;
          border-radius: 15px;
          box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1), -5px -5px 15px #ffffff;
          background: #f0f0f3;
        }

        .neumorphic-title {
          font-size: 2.5rem;
          color: #333;
          text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
        }

        .neumorphic-card {
          transition: all 0.3s ease-in-out;
        }

        .neumorphic-card:hover {
          box-shadow: inset 3px 3px 8px rgba(0, 0, 0, 0.1),
            inset -3px -3px 8px #ffffff;
          transform: scale(1.05);
        }

        .step-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #007bff;
          margin-bottom: 10px;
        }

        .step-description {
          font-size: 1rem;
          color: #555;
          margin-bottom: 15px;
        }

        ul {
          list-style: none;
          padding: 0;
          font-size: 0.9rem;
          color: #666;
          text-align: left;
        }

        ul li {
          margin-bottom: 5px;
          position: relative;
        }

        ul li::before {
          content: "•";
          color: #007bff;
          font-weight: bold;
          margin-right: 8px;
        }

        @media (max-width: 768px) {
          .step {
            width: 100%;
          }
        }

        @media (min-width: 769px) {
          .step {
            width: 300px;
          }
        }
      `}</style>
    </>
  );
}
