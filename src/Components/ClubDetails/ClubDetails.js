import React, { useEffect, useState } from 'react';
import facebookIcon from '../../Icon/Facebook.png'
import youTubeIcon from '../../Icon/YouTube.png'
import twitterIcon from '../../Icon/Twitter.png'

import { useParams } from 'react-router';
import './ClubDetails.css'
import imageUrlMale from '../../Photo/male.jpg';
import imageUrlFemale from '../../Photo/female2.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faFutbol, faMars, faMapMarkerAlt, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'


import Image from 'react-bootstrap/Image'

const ClubDetails = () => {

    const { id } = useParams();
    const [club, setClub] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setClub(data.teams[0]))
    }, [id])
    console.log(club);
    const { strGender, strFacebook, strTwitter, strYoutube, strDescriptionEN, strCountry, strStadium, strStadiumLocation,
        strWebsite, strTeam, intFormedYear, strSport, strTeamBanner} = club;

    const imgUrl = strGender === "Female" ? imageUrlFemale : imageUrlMale;
    
    
    return (
        // <div>

        <div>
<div className="body-bg-color">
            {/* <div className="club-details-background">
                <img className="badgeImage text-center" src={strBadge} alt="" />
            </div> */}
            <div className="club-detail-container">
                <div>
                <Image src={strTeamBanner} fluid style={{width:'100rem', height:'13rem', opacity:'80%'}}/>
                </div>
                <div className="card mb-3 bg-color-card detail-card club-detail-container" >
                    <div className="row g-0 bg-color-card">
                        <div className="col-md-6 card-body club-details-about bg-color-card">
                            <h3 className="club-name">{strTeam}</h3>
                            <br/>
                            <p><FontAwesomeIcon icon={faMapMarkedAlt} /> Stadium: {strStadium}, {strStadiumLocation}</p>
                            <h5> <FontAwesomeIcon icon={faMapMarkerAlt} />    Founded: {intFormedYear}</h5>
                            <br/>
                            <h5> <FontAwesomeIcon icon={faFlag} />   Country: {strCountry}</h5>
                            <br/>
                            <h5> <FontAwesomeIcon icon={faFutbol} />   Sport Type: {strSport}</h5>
                            <br/>
                            <h5> <FontAwesomeIcon icon={faMars} />   Gender: {strGender}</h5>
                            <p>Visit: <a href ={`https://${strWebsite}` } target="_blank" rel="noreferrer">Official website...</a></p>
                        </div>
                        <div className="col-md-6">
                            <img className="male-female-img" src={imgUrl} alt=""></img>
                        </div>
                    </div>
                </div>
                <div className="description">
                    <h2 style={{textAlign:'center', }}>History: </h2>
                    <br/>
                    <p>{strDescriptionEN}</p>
                </div>
                <div className="footer-img">
                    <a href={`https://${strFacebook}` } target="_blank" rel="noreferrer"><img src={ facebookIcon } alt=""/></a>
                    <a href={`https://${strTwitter}`} target="_blank" rel="noreferrer"><img src={ twitterIcon } alt=""/></a>
                    <a href={`https://${strYoutube}`} target="_blank" rel="noreferrer"><img src={ youTubeIcon } alt=""/></a>
                </div>
            </div>
        </div>
        </div>
        
        
    );
};

export default ClubDetails;