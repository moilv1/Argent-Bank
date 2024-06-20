import React from 'react'
import "../Features/Feature.css"

export default function Features({ image, titre, description }) {
  return (
    <div className='features'>
      <img src={image} alt='featuresImg' />
      <h2> {titre} </h2>
      <p> {description} </p>
    </div>
  );
}