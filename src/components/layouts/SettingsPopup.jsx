import React, { useState, useEffect } from "react";

const themes = {
  default: {
    mainbg: "#FFD1E3",
    buttonColor: "#392467",
    iconColor: "#A367B1",
  },

  lightweight: {
    mainbg: "#E2E2B6",
    buttonColor: "#021526",
    iconColor: "#6EACDA",
  },
  twilight_Spark: {
    mainbg: "#EEEEEE",
    buttonColor: "#201E43",
    iconColor: "#508C9B",
  },
  jellyfish: {
    mainbg: "#C8ACD6",
    buttonColor: "#17153B",
    iconColor: "#433D8B",
  },
};

const SettingsPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Apply default theme on component load
  useEffect(() => {
    const defaultTheme = themes.default; // Set your default theme here
    document.documentElement.style.setProperty(
      "--main-bg",
      defaultTheme.mainbg
    );
    document.documentElement.style.setProperty(
      "--button-color",
      defaultTheme.buttonColor
    );
    document.documentElement.style.setProperty(
      "--icon-color",
      defaultTheme.iconColor
    );
  }, []);

  const toggleSettings = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeChange = (newTheme) => {
    const selectedTheme = themes[newTheme];
    if (selectedTheme) {
      document.documentElement.style.setProperty(
        "--main-bg",
        selectedTheme.mainbg
      );
      document.documentElement.style.setProperty(
        "--button-color",
        selectedTheme.buttonColor
      );
      document.documentElement.style.setProperty(
        "--icon-color",


        
        selectedTheme.iconColor
      );
    }
    console.log(`Theme changed to: ${newTheme}`);
    setIsOpen(false); // Close popup after theme selection
  };
  const settingsButtonStyle = {
    position: "fixed",
    bottom: "50%",
    right: "0px",
    backgroundColor: "var(--button-color)",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    zIndex:"9999",
  };

  return (
    <div>
      <style>
        {` 
                .spin {
                    animation: spin 2s linear infinite;
                }

                @keyframes spin {
                    0% {
                        transform: rotate(0deg);
                    }

                    100% {
                        transform: rotate(360deg);
                    }
                }
                    .palette {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    padding-bottom: 40%;
        padding-left: 15px;
           cursor: pointer;
}

.place {
    position: absolute;
    width: 100%;
    text-align: left;
}

.c3 {
    padding-bottom: 100%;
    border-radius: 20px 20px 0 0;
}

.c2 {
    padding-bottom: 61%;
}

.c1 {
    padding-bottom: 41%;
}

.c0 {
       padding-bottom: 18%;
    width: 50px;
    border-radius: 10px;
}

            `}
      </style>
      <div
        style={{
          position: "fixed",
          top: "50%",
          right: isOpen ? "0" : "-315px", // Slide-in effect
          transform: "translateY(-50%)",
          width: "350px",
          // height: "75%",
          // backgroundColor: "#fff",
          // boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          transition: "right 0.3s ease",
          zIndex: 10000,
        }}
      >
        <div className="row">
          <div
            className="col-2  d-flex align-items-center justify-content-end p-0 w-auto"
            style={{ background: "transparent" }}
          >
            <div
              style={{
                backgroundColor: "var(--button-color)",
                borderRadius: "50% 0% 0% 50%",
                width: "50px",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              {" "}
              <i
                className="fas fa-cog spin"
                style={{ color: "white", fontSize: "24px" }}
                onClick={toggleSettings}
              ></i>
            </div>
          </div>
          <div className="col-10" style={{background:'var(--button-color)'}}>
            <div style={{ padding: "20px" }}>
              <h4 style={{marginBottom:'20px',borderBottom:'2px solid White' , width:'max-content', paddingBottom:'5px',color:'#fff'}}>Settings</h4>

              <div className="row">

              <div className="col-6 mb-3">
               
                <div className="palette" onClick={() => handleThemeChange("default")}>
                  {/* <div className="place c3" style={{background:" #FFD1E3"}}>
                    <span className="text-white p-2"></span>
                  </div>
                  <div className="place c2" style={{background:"#A367B1"}}>
                    <span className="text-white p-2"></span>
                  </div>
                  <div className="place c1" style={{background:"#5D3587"}}>
                    <span className="text-white p-2"></span>
                  </div>
     */}
                  <div className="place c0" style={{background:"#ffd1e3"}}>
                    <span className="text-white p-2"></span>
                  </div>
                </div>
                <button
                  className="btn btn-link text-light fw-normal"
                  onClick={() => handleThemeChange("default")}
                >
                  Default
                </button>
              </div>

              <div className="col-6 mb-3">
             
                <div className="palette" onClick={() => handleThemeChange("twilight_Spark")}>
                  {/* <div className="place c3" style={{background:"#EEEEEE"}}>
                    <span className="text-white p-2"></span>
                  </div>
                  <div className="place c2" style={{background:"#508C9B"}}>
                    <span className="text-white p-2"></span>
                  </div>
                  <div className="place c1" style={{background:"#134B70"}}>
                    <span className="text-white p-2"></span>
                  </div> */}
                  <div className="place c0" style={{background:"#eeeeee"}}>
                    <span className="text-white p-2"></span>
                  </div>
                </div>
                <button className="btn btn-link px-0 text-light fw-normal" onClick={() => handleThemeChange("twilight_Spark")}>
                Twilight Spark
              </button>
              </div>

              <div className="col-6 mb-3">
             
                <div className="palette" onClick={() => handleThemeChange("lightweight")}>
                  {/* <div className="place c3" style={{background:"#E2E2B6"}}>
                    <span className="text-white p-2"></span>
                  </div>
                  <div className="place c2" style={{background:"#6EACDA"}}>
                    <span className="text-white p-2"></span>
                  </div>
                  <div className="place c1" style={{background:"#03346E"}}>
                    <span className="text-white p-2"></span>
                  </div> */}
                  <div className="place c0" style={{background:"#e2e2b6"}}>
                    <span className="text-white p-2"></span>
                  </div>
                </div>
                <button className="btn btn-link text-light fw-normal" onClick={() => handleThemeChange("lightweight")}>
                Lightweight
              </button>
              </div>

              <div className="col-6 mb-3">
             
                <div className="palette" onClick={() => handleThemeChange("jellyfish")}>
                {/* <div className="place c3" style={{background:" #C8ACD6"}}>
                    <span className="text-white p-2"></span>
                  </div>
                  <div className="place c2" style={{background:"#433D8B"}}>
                    <span className="text-white p-2"></span>
                  </div>
                  <div className="place c1" style={{background:"#2E236C"}}>
                    <span className="text-white p-2"></span>
                  </div> */}
    
                  <div className="place c0" style={{background:"#c8acd6"}}>
                    <span className="text-white p-2"></span>
                  </div>
                </div>
                <button className="btn btn-link text-light fw-normal" onClick={() => handleThemeChange("jellyfish")}>
                Jellyfish
              </button>
              </div>
              </div>
             
            
            
              {/* Add more theme buttons here */}
              {/* <button onClick={toggleSettings}>Close</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPopup;
