import React from "react";
import Banner from "./components/Banner";
import Head from "next/head";

export default function blog_detail() {
  return (
    <>
      <style>
        {`
a:hover{
    text-decoration: none;
    
}
    .author-social {
    padding-right: 10px;
    font-size: 14px;
    color:#000;
}
    .sidebar-widget.about .about-author img {
    border-radius: 100%;
    width: 180px;
    height: 180px;
    border: 5px solid #eee;
}
    .follow-socials a {
    width: 50px;
    height: 50px;
    display: inline-block;
    text-align: center;
    color: #000;
    padding-top: 12px;
    margin-bottom: 5px;
    background: #eee;
}
    .list-unstyled {
    padding-left: 0;
    list-style: none;
} 
    .sidebar-widget.category li {
    padding: 10px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
    .sidebar-widget.category li span {
    display: inline-block;
    background: var(--button-color);
    color: #fff;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 2px;
    line-height: 30px;
}
    .sidebar-widget.subscribe {
    border: 2px solid #000;
    padding: 30px;
}
      `}
      </style>
      <Banner page="Blog Detail" header="Our Blog Detail" />
      <section className="single-block-wrapper section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
              <div className="single-post">
                <div className="post-header mb-5 text-center">
                  <div className="meta-cat">
                    <a
                      className="post-category font-extra text-color text-uppercase theme-text font-sm letter-spacing-1"
                      href="#"
                    >
                      Health ,
                    </a>
                    <a
                      className="post-category font-extra text-color text-uppercase theme-text font-sm letter-spacing-1"
                      href="#"
                    >
                      lifestyle
                    </a>
                  </div>
                  <h2 className="post-title mt-2">
                  Life Insurance Makes You Happy
                  </h2>
                  <div className="post-meta">
                    <span className="text-uppercase font-sm letter-spacing-1 mr-3">
                      by Liam
                    </span>
                    <span className="text-uppercase font-sm letter-spacing-1">
                      January 17,2019
                    </span>
                  </div>
                  <div className="post-featured-image mt-5">
                    <img
                      src="assets/img/about-1.png"
                      className="img-fluid w-100"
                      alt="featured-image"
                    />
                  </div>
                </div>
                <div className="post-body">
                  <div className="entry-content">
                    <p>
                      {" "}
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Tenetur adipisci facilis cupiditate recusandae aperiam
                      temporibus corporis itaque quis facere, numquam, ad culpa
                      deserunt sint dolorem autem obcaecati, ipsam mollitia
                      hic.Lorem ipsum dolor, sit amet consectetur adipisicing
                      elit. Tenetur adipisci facilis cupiditate recusandae
                      aperiam temporibus corporis itaque quis facere, numquam,
                      ad culpa deserunt sint dolorem autem obcaecati, ipsam
                      mollitia hic.
                    </p>
                    <h2 className="mt-4 mb-3">
                      Insurance Provide you a Better Future
                    </h2>
                    <p>
                      {" "}
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Tenetur adipisci facilis cupiditate recusandae aperiam
                      temporibus corporis itaque quis facere, numquam, ad culpa
                      deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                    </p>
                    <blockquote>
                      <i className="ti-quote-left mr-2" />
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Tenetur adipisci facilis cupiditate recusandae aperiam
                      temporibus corporis itaque quis ipsam mollitia hic.
                      <i className="ti-quote-right ml-2" />
                    </blockquote>
                    <div className="row">
                      <div
                        className="col-md-6 wow fadeInUp"
                        data-wow-delay="0.2s"
                      >
                        <div className="blog-item">
                          <div className="blog-img">
                            <img
                              src="assets/img/blog-1.png"
                              className="img-fluid rounded-top w-100"
                              alt=""
                            />
                            <div className="blog-categiry py-2 px-4">
                              <span>Business</span>
                            </div>
                          </div>
                          <div className="blog-content p-4">
                            <div className="blog-comment d-flex justify-content-between mb-3">
                              <div className="small">
                                <span className="fa fa-user text-primary" />{" "}
                                Martin.C
                              </div>
                              <div className="small">
                                <span className="fa fa-calendar text-primary" />{" "}
                                30 Dec 2025
                              </div>
                              <div className="small">
                                <span className="fa fa-comment-alt text-primary" />{" "}
                                6 Comments
                              </div>
                            </div>
                            <a href="#" className="h4 d-inline-block mb-3">
                              Which allows you to pay down insurance bills
                            </a>
                            <p className="mb-3">
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Eius libero soluta impedit
                              eligendi? Quibusdam, laudantium.
                            </p>
                            <a href="#" className="btn p-0">
                              Read More <i className="fa fa-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-md-6 wow fadeInUp"
                        data-wow-delay="0.4s"
                      >
                        <div className="blog-item">
                          <div className="blog-img">
                            <img
                              src="assets/img/blog-2.png"
                              className="img-fluid rounded-top w-100"
                              alt=""
                            />
                            <div className="blog-categiry py-2 px-4">
                              <span>Business</span>
                            </div>
                          </div>
                          <div className="blog-content p-4">
                            <div className="blog-comment d-flex justify-content-between mb-3">
                              <div className="small">
                                <span className="fa fa-user text-primary" />{" "}
                                Martin.C
                              </div>
                              <div className="small">
                                <span className="fa fa-calendar text-primary" />{" "}
                                30 Dec 2025
                              </div>
                              <div className="small">
                                <span className="fa fa-comment-alt text-primary" />{" "}
                                6 Comments
                              </div>
                            </div>
                            <a href="#" className="h4 d-inline-block mb-3">
                              Leverage agile frameworks to provide
                            </a>
                            <p className="mb-3">
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Eius libero soluta impedit
                              eligendi? Quibusdam, laudantium.
                            </p>
                            <a href="#" className="btn p-0">
                              Read More <i className="fa fa-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 className="mt-5 mb-3">
                      Which allows you to pay down insurance bills
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde cum delectus exercitationem natus quidem enim error
                      suscipit. Iure cupiditate nobis quaerat consectetur! Vero
                      aliquam, amet ipsum ullam reiciendis nostrum voluptate
                      accusantium provident ut blanditiis incidunt.{" "}
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates ab ratione animi nobis in et consequatur earum
                      modi repellendus, qui, non debitis pariatur tempora
                      consequuntur!
                    </p>
                  </div>
                  <div className="post-tags py-4">
                    <a href="#" className="ps-2 theme-text">
                      #Health
                    </a>
                    <a href="#" className="ps-2 theme-text">
                      #Car
                    </a>
                    <a href="#" className="ps-2 theme-text">
                      #Femily
                    </a>
                  </div>
                  <div className="tags-share-box center-box d-flex text-center justify-content-between border-top border-bottom py-3">
                    <span className="single-comment-o">
                      <i className="fa fa-comment-o" />0 comment
                    </span>
                    <div className="post-share">
                      <span className="count-number-like">2</span>
                      <a className="penci-post-like single-like-button ps-2  text-primary">
                        <i className="fa fa-heart" />
                      </a>
                    </div>
                    <div className="list-posts-share">
                      <a
                        target="_blank"
                        rel="nofollow"
                        href="#"
                        className="ps-3 text-primary"
                      >
                        <i className="fab fa-facebook" />
                      </a>
                      <a
                        target="_blank"
                        rel="nofollow"
                        href="#"
                        className="ps-3 text-primary"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        target="_blank"
                        rel="nofollow"
                        href="#"
                        className="ps-3 text-primary"
                      >
                        <i className="fab fa-pinterest" />
                      </a>
                      <a
                        target="_blank"
                        rel="nofollow"
                        href="#"
                        className="ps-3 text-primary"
                      >
                        <i className="fab fa-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="post-author d-flex my-5">
                <div className="author-img">
                  <img
                    alt=""
                    src="./assets/img/avatar3.webp"
                    className="avatar avatar-100 photo mt-1 me-3"
                    style={{ width: "80px" }}
                  />
                </div>
                <div className="author-content pl-4">
                  <h4 className="mb-3">
                    <a
                      href="#"
                      title=""
                      rel="author"
                      className="text-capitalize text-primary"
                    >
                      Themefisher
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aut libero sapiente magni illo consequatur. Eligendi quaerat
                    incidunt, harum non eum soluta nam earum consequuntur
                    sunt...
                  </p>
                  <a
                    target="_blank"
                    className="author-social  text-primary"
                    href="#"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    target="_blank"
                    className="author-social  text-primary"
                    href="#"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    target="_blank"
                    className="author-social  text-primary"
                    href="#"
                  >
                    <i className="fab fa-google-plus" />
                  </a>
                  <a
                    target="_blank"
                    className="author-social  text-primary"
                    href="#"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                  <a
                    target="_blank"
                    className="author-social  text-primary"
                    href="#"
                  >
                    <i className="fab fa-tumblr" />
                  </a>
                </div>
              </div>
              <nav className="post-pagination clearfix border-top border-bottom py-4 row">
                <div className="prev-post col-6 ">
                  <a href="#!" className="text-start">
                    <span className="text-uppercase font-sm letter-spacing text-primary">
                      Next
                    </span>
                    <h4 className="mt-3">
                      {" "}
                      Which allows you to pay down insurance bills
                    </h4>
                  </a>
                </div>
                <div className="next-post col-6">
                  <a href="#!">
                    <span className="text-uppercase font-sm letter-spacing text-primary text-end d-flex justify-content-end">
                      Previous
                    </span>
                    <h4 className="mt-3 text-end">
                      Leverage agile frameworks to provide
                    </h4>
                  </a>
                </div>
              </nav>
              <div className="related-posts-block mt-5">
                <h3 className="news-title mb-4 text-center text-primary">
                  You May Also Like
                </h3>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="post-block-wrapper mb-4 mb-lg-0">
                      <a href="#!">
                        <img
                          className="img-fluid"
                          src="assets/img/blog-1.png"
                          alt="post-thumbnail"
                        />
                      </a>
                      <div className="post-content mt-3">
                        <h5>
                          <a href="#!" className="text-dark">
                            Which allows you to pay down insurance bills
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="post-block-wrapper mb-4 mb-lg-0">
                      <a href="#!">
                        <img
                          className="img-fluid"
                          src="assets/img/blog-2.png"
                          alt="post-thumbnail"
                        />
                      </a>
                      <div className="post-content mt-3">
                        <h5>
                          <a href="#!" className="text-dark">
                            Leverage agile frameworks to provide
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="post-block-wrapper">
                      <a href="#!">
                        <img
                          className="img-fluid"
                          src="assets/img/blog-3.png"
                          alt="post-thumbnail"
                        />
                      </a>
                      <div className="post-content mt-3">
                        <h5>
                          <a href="#!" className="text-dark">
                            Leverage agile frameworks to provide
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="comment-area my-5 ">
                <h3 className="mb-4 text-center text-primary">2 Comments</h3>
                <div className="comment-area-box media row">
                  <div className="col-2">
                    <img
                      alt=""
                      src="./assets/img/avatar5.webp"
                      className="img-fluid float-left mr-3 mt-2"
                      style={{ width: "110px" }}
                    />
                  </div>
                  <div className="media-body ml-4 col-10">
                    <h4 className="mb-0">Micle harison </h4>
                    <span className="date-comm font-sm text-capitalize text-color">
                      <i className="ti-time mr-2" />
                      June 7, 2019{" "}
                    </span>
                    <div className="comment-content mt-3">
                      <p>
                        Lorem ipsum dolor sit amet, usu ut perfecto postulant
                        deterruisset, libris causae volutpat at est, ius id
                        modus laoreet urbanitas. Mel ei delenit dolores.
                      </p>
                    </div>
                    <div className="comment-meta mt-4 mt-lg-0 mt-md-0">
                      <a href="#" className="text-underline text-primary">
                        Reply
                      </a>
                    </div>
                  </div>
                </div>
                <div className="comment-area-box media mt-5 row">
                  <div className="col-2">
                    <img
                      alt=""
                      src="./assets/img/avatar4.webp"
                      className="img-fluid float-left mr-3 mt-2"
                      style={{ width: "110px" }}
                    />
                  </div>
                  <div className="media-body ml-4 col-10">
                    <h4 className="mb-0 ">John Doe </h4>
                    <span className="date-comm font-sm text-capitalize text-color">
                      <i className="ti-time mr-2" />
                      June 7, 2019{" "}
                    </span>
                    <div className="comment-content mt-3">
                      <p>
                        Some consultants are employed indirectly by the client
                        via a consultancy staffing company.{" "}
                      </p>
                    </div>
                    <div className="comment-meta mt-4 mt-lg-0 mt-md-0">
                      <a href="#" className="text-underline text-primary">
                        Reply
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <form
                className="comment-form mb-5 theme-bg p-5"
                id="comment-form"
              >
                <h3 className="mb-4 text-center">Leave a comment</h3>
                <div className="row">
                  <div className="col-lg-12">
                    <textarea
                      className="form-control "
                      name="comment"
                      id="comment"
                      cols={30}
                      rows={5}
                      placeholder="Comment"
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-md-6 mt-3">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name:"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mt-3">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name="mail"
                        id="mail"
                        placeholder="Email:"
                      />
                    </div>
                  </div>
                </div>
                <input
                  className="btn btn-primary mt-3"
                  type="submit"
                  name="submit-contact"
                  id="submit_contact"
                  defaultValue="Submit Message"
                />
              </form>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="sidebar sidebar-right">
                <div className="sidebar-wrap mt-5 mt-lg-0">
                  <div className="sidebar-widget about mb-5 text-center p-3">
                    <div className="about-author">
                      <img
                       src="assets/img/user.jpg"
                        alt="user"
                        className="img-fluid"
                      />
                    </div>
                    <h4 className="mb-0 mt-4">User</h4>
                    <p>Insurance Name</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos maxime quia, id molestias unde reiciendis quasi earum a consectetur placeat?
                    </p>
                    <img
                      src="assets/img/liammason.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="sidebar-widget follow mb-5 text-center">
                    <h4 className="text-center widget-title" style={{borderBottom:'2px solid black' , width:'max-content' , margin:'auto'}}>Follow Me</h4>
                    <div className="follow-socials mt-3">
                      <a href="#" className="ms-2">
                        <i className="fab fa-facebook" />
                      </a>
                      <a href="#" className="ms-2">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#" className="ms-2">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#" className="ms-2">
                        <i className="fab fa-youtube" />
                      </a>
                      <a href="#" className="ms-2">
                        <i className="fab fa-pinterest" />
                      </a>
                    </div>
                  </div>
                  <div className="sidebar-widget mb-5 ">
                    <h4 className="text-center widget-title" style={{borderBottom:'2px solid black' , width:'max-content' , margin:'auto'}}>Trending Posts</h4>
                    <div className="sidebar-post-item-big">
                      <a href="#!">
                        <img
                          src="assets/img/blog-2.png"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                      <div className="mt-3 media-body">
                        <span className="text-muted letter-spacing text-uppercase font-sm">
                          September 10, 2019
                        </span>
                        <h4>
                          <a href="#!" className="theme-text">
                          Leverage agile frameworks to provide
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div className="media border-bottom py-3 sidebar-post-item row">
                      <div className="col-3">
                      <a href="#">
                        <img
                          className="mr-4"
                          src="assets/img/blog-1.png"
                          alt=""
                          style={{width:"100px"}}
                        />
                      </a>
                      </div>
                      <div className="col-9">
                      <div className="media-body">
                        <span className="text-muted letter-spacing text-uppercase font-sm">
                          September 10, 2019
                        </span>
                        <h4>
                          <a href="#!" className="theme-text">Lorem ipsum dolor sit amet.</a>
                        </h4>
                      </div>
                      </div>
                    </div>

                    <div className="media py-3 sidebar-post-item row">
                    <div className="col-3">
                      <a href="#">
                        <img
                          className="mr-4"
                          src="assets/img/blog-3.png"
                          alt=""
                          style={{width:"100px"}}
                        />
                      </a>
                      </div>
                      <div className="col-9">

                      <div className="media-body">
                        <span className="text-muted letter-spacing text-uppercase font-sm">
                          September 10, 2019
                        </span>
                        <h4>
                          <a href="#!" className="theme-text">Lorem ipsum dolor sit amet.</a>
                        </h4>
                      </div>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-widget category mb-5">
                    <h4 className="text-center widget-title">Catgeories</h4>
                    <ul className="list-unstyled">
                      <li className="align-items-center d-flex justify-content-between">
                        <a href="#" className="text-dark">Innovation</a>
                        <span>14</span>
                      </li>
                      <li className="align-items-center d-flex justify-content-between">
                        <a href="#" className="text-dark">Software</a>
                        <span>2</span>
                      </li>
                      <li className="align-items-center d-flex justify-content-between">
                        <a href="#" className="text-dark">Social</a>
                        <span>10</span>
                      </li>
                      <li className="align-items-center d-flex justify-content-between">
                        <a href="#" className="text-dark">Trends</a>
                        <span>5</span>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar-widget subscribe mb-5">
                    <h4 className="text-center widget-title" style={{borderBottom:'2px solid black' , width:'max-content' , margin:'auto'}}>Newsletter</h4>
                    <input
                      type="text"
                      className="form-control mt-4"
                      placeholder="Email Address"
                    />
                    <a href="#" className="btn btn-primary d-block mt-3">
                      Sign Up
                    </a>
                  </div>
                  <div className="sidebar-widget sidebar-adv mb-5">
                    <a href="#">
                      <img
                        src="images/sidebar-banner3.png"
                        alt=""
                        className="img-fluid w-100"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
