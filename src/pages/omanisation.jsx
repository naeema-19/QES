import React from "react";
import Banner from "./components/Banner";

export default function Blog() {
  return (
    <>
    <Banner page="Omanization" header="Omanization" />
    <div className="container-fluid blog py-5">
      <div className="container py-5">
        <div
          className="text-center mx-auto pb-5"
          style={{ maxWidth: 800 }}
        >
          <h4 className="text-primary">Our People</h4>
          <h1 className="display-4 mb-4">QES People and Omanisation</h1>
          <p className="mb-20">
            QES targeted Omanisation on start of more than 95% of local with
            100% Omani owned company. QES team consists of a range of top Omani
            expertise. QES only hired an expat lab manager which has an objective
            of training Omani lab technicians. Below shows QES Omanization Plan
            for the next 5 years:
          </p>
          <div className="table-wrapper">
            <table className="omanization-table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Y1</th>
                  <th>Y2</th>
                  <th>Y3</th>
                  <th>Y4</th>
                  <th>Y5</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Management", "100%", "100%", "100%", "100%", "100%"],
                  ["Engineers", "100%", "100%", "100%", "100%", "100%"],
                  ["Cementers", "100%", "100%", "100%", "100%", "100%"],
                  ["Helpers", "100%", "100%", "100%", "100%", "100%"],
                  ["Drivers", "100%", "100%", "100%", "100%", "100%"],
                  ["Lab", "100%", "100%", "100%", "100%", "100%"],
                ].map((row, index) => (
                  <tr key={index}>
                    <td data-label="Category">{row[0]}</td>
                    {row.slice(1).map((value, subIndex) => (
                      <td key={subIndex} data-label={`Y${subIndex + 1}`}>
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
