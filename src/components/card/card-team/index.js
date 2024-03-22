import React from 'react';
import "./card-team.scss";

const TeamCard = ({ memberImage, memberImageAlt, memberName, memberPosition }) => {
  return (
    <section className="block-member">
      <img src={memberImage} alt={memberImageAlt} />
      <p className='block-member__name'><strong>{memberName}</strong></p>
      <p>{memberPosition}</p>
    </section>
  )
}

export default TeamCard