import React from 'react';
import './Card.css'; // Ensure to create a separate CSS file for styling if needed

const Card = ({ image, name, jobTitle, description, linkedin, github, blogs }) => {
    return (
        <div className="card">
            <div className="profile-container">
                <img src={image} alt={name} />
            </div>
            <div className="profile-info">
                <h1>{name}</h1>
                <p className="job-title">{jobTitle}</p>
                <p className="desc">{description}</p>
            </div>
            <div className="profile-social">
                <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <div className="card-bottom"></div>
        </div>
    );
};

export default Card;
