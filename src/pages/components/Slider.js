import Head from "next/head";

const StaticContent = () => {
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
      </Head>
      <style>
        {`


.static-item {
  margin-bottom: 4rem;
  text-align: center;
}

.static-item h1 {
  font-size: 4rem;
}

.static-item p {
  font-size: 1.25rem;
}

.static-item .btn {
  margin-top: 2rem;
}
        `}
      </style>
      <div
        className="container-fluid slider pt-5 pb-5"
        style={{ background: "var(--main-bg)" }}
      >
        <div className="container d-block pt-5 mt-3">
          {/* Static Section 1 */}
          <div className="static-item">
            <h4 className="text-uppercase text-white fw-bold mb-4">
              Welcome To QES
            </h4>
            <h1 className="display-1 text-white mb-4">
              Qurum Enterprise Oil & Gas Services L.L.C.
            </h1>
            <p className="mb-5 text-white fs-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy...
            </p>
            <div className="d-flex justify-content-center flex-shrink-0 mb-4">
              <a
                className="btn btn-primary rounded py-3 px-4 px-md-5 ms-2"
                href="#"
              >
                Watch Video
              </a>
              <a
                className="btn btn-primary rounded py-3 px-4 px-md-5 ms-2"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaticContent;
