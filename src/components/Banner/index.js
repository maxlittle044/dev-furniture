import React from 'react'
import './banner.scss'
import SearchBox from '../SearchBox';


const Banner = ({
    className = "",
    bannerTitle,
    bannerDescription,
    BannerImage,
    BannerImageAlt,
}) => {
    return (
        <section className={`block-hero ${className}`}>
            <div className="centered-content">
                <div className="block-hero__content">
                    <div className="block-title">
                        <h1 dangerouslySetInnerHTML={{ __html: bannerTitle }}></h1>
                    </div>

                    <div className='block-hero__description'>
                        <p>{bannerDescription}</p>
                    </div>
                </div>

                <div className="block-hero__media">
                    <div className="search-box">
                        <SearchBox
                            btnText='Search'
                        />
                    </div>

                    <div className="block-hero__img">
                        <img src={BannerImage} alt={BannerImageAlt} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;