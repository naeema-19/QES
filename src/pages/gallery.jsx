import React from 'react';
import Banner from './components/Banner';
// Gallery Component
const Gallery = () => {
  // Array of images with separate hover text for each
  const images = [
    { src: 'assets/img/gallery/g (1).jpg', text: 'Honouring the employees' },
    { src: 'assets/img/gallery/g (2).jpg', text: 'Honouring the employees' },
    { src: 'assets/img/gallery/g (3).jpg', text: 'Honouring the employees' },
    { src: 'assets/img/gallery/g (4).jpg', text: 'Honouring the employees' },
  ];
  const sites = [
    { src: 'assets/img/gallery/one.jpg', text: 'Machineries' },
    { src: 'assets/img/gallery/two.jpg', text: 'Machineries' },
    { src: 'assets/img/gallery/three.jpg', text: 'Teamwork' },
    { src: 'assets/img/gallery/four.jpg', text: 'Machineries' },
    { src: 'assets/img/gallery/five.jpg', text: 'Visit at Lab' },
    { src: 'assets/img/gallery/six.jpg', text: 'Crew' },
    { src: 'assets/img/gallery/seven.jpg', text: 'Crew' },
    { src: 'assets/img/gallery/eight.jpg', text: 'Machineries' },
    { src: 'assets/img/gallery/nine.jpg', text: 'Machineries' },
    { src: 'assets/img/gallery/ten.jpg', text: 'Machineries' },
    { src: 'assets/img/gallery/eleven.jpg', text: 'Crew' },
    { src: 'assets/img/gallery/twelve.jpg', text: 'Total View' },
    { src: 'assets/img/gallery/thirteen.jpg', text: 'Crew' }
  ];

  return (
    <>
    <Banner page="Gallery"/>
    <div>
      <h1 className='display-4 mb-4' style={{ textAlign: 'center', margin: '20px 0' }}>Capturing Moments at QES</h1>
      <div className="gallery-container">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <div className="image-container">
              <img src={image.src} alt={`Gallery ${index + 1}`} />
              <div className="overlay">
                <div className="text">{image.text}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div>
      <h1 className='display-4 mb-4' style={{ textAlign: 'center', margin: '20px 0' }}>Views From Site</h1>
      <div className="gallery-container">
        {sites.map((sites, index) => (
          <div className="gallery-item" key={index}>
            <div className="image-container">
              <img src={sites.src} alt={`Gallery ${index + 1}`} />
              <div className="overlay">
                <div className="text">{sites.text}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    
    <style jsx>{`
        /* Gallery Container */
        .gallery-container {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: center;
          padding: 16px;
        }

        /* Individual Gallery Item */
        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          flex: 1 1 calc(25% - 16px); /* Default to 4 columns on large screens */
          max-width: calc(25% - 16px); /* Ensure items don't overflow */
        }

        /* Image Container */
        .image-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        /* Image Styling */
        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        /* Hover Effect */
        .gallery-item:hover .image-container img {
          transform: scale(1.1);
        }

        /* Overlay Text */
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6); /* Black transparent background */
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .text {
          font-size: 24px;
          text-align: center;
          font-weight: bold;
        }

        /* Show Overlay Text on Hover */
        .gallery-item:hover .overlay {
          opacity: 1;
        }

        /* Media Queries for Responsiveness */
        @media (max-width: 1200px) {
          .gallery-item {
            flex: 1 1 calc(50% - 16px); /* 2 columns on medium screens */
            max-width: calc(50% - 16px);
          }
        }

        @media (max-width: 768px) {
          .gallery-item {
            flex: 1 1 calc(100% - 16px); /* 1 column on smaller screens */
            max-width: calc(100% - 16px);
          }
        }
      `}</style>
    </>
  );
};

export default Gallery;
