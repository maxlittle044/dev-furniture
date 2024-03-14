import React from 'react'
import './blocktitle.scss'

const BlockTitle = ({className, blockTitle, blockSubtitle}) => {
  return (
    <div className={`${className}`}>
    <p>{blockTitle}</p>
        <h2>{blockSubtitle}</h2>
    </div>
  )
}

export default BlockTitle;