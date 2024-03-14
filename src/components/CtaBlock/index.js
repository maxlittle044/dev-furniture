import React from 'react'
import Button from '../button';
import './cta-block.scss'

const CtaBlock = ({
    className = "",
    ctaTitle,
    btnLink,
    btnText,
    btnClass = "",
}) => {
    return (
        <section className={`cta-block ${className}`}>
            <div className="centered-content">
                <div className="cta-block__content">
                    <h2>{ctaTitle}</h2>
                    <div className="btn-wrap">
                        <Button
                            linkTo={btnLink}
                            btnText={btnText}
                            className={`btn-primary ${btnClass}`}
                        >
                            <svg
                                width="28"
                                height="12"
                                viewBox="0 0 28 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M21.459 0.94165L26.5004 5.99998L21.459 11.0583" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1.5 6L26.4166 6" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>


                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CtaBlock;