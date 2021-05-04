import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const SingleClub = (props) => {
    const { strSport, strTeam, strTeamBadge,idTeam } = props.club;
    return (
        <div className="col-sm-12 col-md-6 col-lg-4">
            <Card style={{ width: '20rem', height:'30rem', marginBottom:'20px' }}>
                <Card.Img variant="top" src={strTeamBadge} style={{ padding:'15px' }} />
                <Card.Body>
                    <Card.Title>{strTeam}</Card.Title>
                    <Card.Text>
                        Sports type: {strSport}
                    </Card.Text>
                    <Link to={`/club/${idTeam}`}>
                        <Button variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                    </Link>
                    
                </Card.Body>
            </Card>
        </div>

    );
};

export default SingleClub;