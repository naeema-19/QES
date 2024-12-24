import React from 'react'
import Link from "next/link";
export default function Banner({header,page}) {
  return (
    <>
  {/* Header Start */}
  <div className="container-fluid bg-breadcrumb mb-5">
    <div className="container text-center py-5" style={{ maxWidth: 900 }}>
      <h4
        className="text-white display-4 mb-4 wow fadeInDown"
        data-wow-delay="0.1s"
      >
       {header}
      </h4>
      <ol
        className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
        data-wow-delay="0.3s"
      >
        <li className="breadcrumb-item">
          <Link href="/">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link href="/about">Pages</Link>
        </li>
        <li className="breadcrumb-item active text-primary">{page}</li>
      </ol>
    </div>
  </div>
  {/* Header End */}
</>

  )
}

 