import React from "react";
import "./card-testimonials.scss";

const TestimonialsCard = ({ customerReview, authorName, reviewRating, authorImg, authorImgAlt }) => {
  return (
    <div className="card-testimonial">
      <div className="card-testimonial__quote">
        <div className="show-mobile">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.7865 15.5065H4.53317C4.63984 9.27988 5.8665 8.25321 9.69317 5.98655C10.1332 5.71988 10.2798 5.15988 10.0132 4.70655C9.75984 4.26655 9.1865 4.11988 8.7465 4.38655C4.23984 7.05321 2.6665 8.67988 2.6665 16.4265V23.6132C2.6665 25.8932 4.51984 27.7332 6.7865 27.7332H10.7865C13.1332 27.7332 14.9065 25.9599 14.9065 23.6132V19.6132C14.9065 17.2799 13.1332 15.5065 10.7865 15.5065Z" fill="url(#paint0_linear_29_1088)" />
            <path d="M25.2129 15.5065H18.9596C19.0663 9.27988 20.2929 8.25321 24.1196 5.98655C24.5596 5.71988 24.7063 5.15988 24.4396 4.70655C24.1729 4.26655 23.6129 4.11988 23.1596 4.38655C18.6529 7.05321 17.0796 8.67988 17.0796 16.4399V23.6265C17.0796 25.9065 18.9329 27.7465 21.1996 27.7465H25.1996C27.5463 27.7465 29.3196 25.9732 29.3196 23.6265V19.6265C29.3329 17.2799 27.5596 15.5065 25.2129 15.5065Z" fill="url(#paint1_linear_29_1088)" />
            <defs>
              <linearGradient id="paint0_linear_29_1088" x1="16.7647" y1="174.701" x2="-14.8267" y2="173.396" gradientUnits="userSpaceOnUse">
                <stop offset="0.25249" stopColor="#40B4A6" />
                <stop offset="0.637527" stopColor="#A6D8D2" />
              </linearGradient>
              <linearGradient id="paint1_linear_29_1088" x1="31.1779" y1="174.798" x2="-0.413784" y2="173.494" gradientUnits="userSpaceOnUse">
                <stop offset="0.25249" stopColor="#40B4A6" />
                <stop offset="0.637527" stopColor="#A6D8D2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="show-desktop">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.483 19.3831H5.66634C5.79967 11.5998 7.33301 10.3165 12.1163 7.48312C12.6663 7.14979 12.8497 6.44979 12.5163 5.88312C12.1997 5.33312 11.483 5.14979 10.933 5.48312C5.29967 8.81646 3.33301 10.8498 3.33301 20.5331V29.5165C3.33301 32.3665 5.64967 34.6665 8.48301 34.6665H13.483C16.4163 34.6665 18.633 32.4498 18.633 29.5165V24.5165C18.633 21.5998 16.4163 19.3831 13.483 19.3831Z" fill="url(#paint0_linear_2_5543)" />
            <path d="M31.5163 19.3831H23.6996C23.8329 11.5998 25.3663 10.3165 30.1496 7.48312C30.6996 7.14979 30.8829 6.44979 30.5496 5.88312C30.2163 5.33312 29.5163 5.14979 28.9496 5.48312C23.3163 8.81646 21.3496 10.8498 21.3496 20.5498V29.5331C21.3496 32.3831 23.6663 34.6831 26.4996 34.6831H31.4996C34.4329 34.6831 36.6496 32.4665 36.6496 29.5331V24.5331C36.6663 21.5998 34.4496 19.3831 31.5163 19.3831Z" fill="url(#paint1_linear_2_5543)" />
            <defs>
              <linearGradient id="paint0_linear_2_5543" x1="20.9558" y1="218.376" x2="-18.5335" y2="216.745" gradientUnits="userSpaceOnUse">
                <stop offset="0.25249" stopColor="#40B4A6" />
                <stop offset="0.637527" stopColor="#A6D8D2" />
              </linearGradient>
              <linearGradient id="paint1_linear_2_5543" x1="38.9725" y1="218.497" x2="-0.517108" y2="216.867" gradientUnits="userSpaceOnUse">
                <stop offset="0.25249" stopColor="#40B4A6" />
                <stop offset="0.637527" stopColor="#A6D8D2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

      </div>

      <div className="card-testimonial__content">
        <p>{customerReview}</p>
      </div>

      <div className="card-testimonial__author">
        <div className="avatar">
          <img src={authorImg} alt={authorImgAlt} />

          <div className="author-info">
            <h3>{authorName}</h3>
          </div>
        </div>

        <div className="rating">
          <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z" fill="#FFB23F" stroke="#FFB23F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h3>{reviewRating}</h3>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
