import React from 'react'
import { Col } from 'antd';
import { IMAGE_BASE_URL } from '../Config';
import "../views/LandingPage/Sections/LandingPage.css"

function GridCards(props) {

    let { actor, key, image, movieId, movieName, characterName, characterId } = props
    const POSTER_SIZE = "w154";

    if (actor) { //Affichage des acteurs + création d'un lien vers les informations 
        console.log("/person/", characterId)
        return (
            <Col key={key} lg={6} md={8} xs={24}>
                <div style={{ position: 'relative' }} >
                    <a href={`/person/${characterId}`}>
                        <img className="ActorProfile" style={{ width: '80%', height: '50%' }} alt={characterName} src={`${IMAGE_BASE_URL}${POSTER_SIZE}${image}`} />
                    </a>
                </div>
            </Col>
        )
    } else {
        return ( //Affichage des films + création d'un lien vers les informations 
            <Col key={key} lg={6} md={8} xs={24}>
                <div style={{ position: 'relative' }} className="MoviesSections">
                    <a href={`/movie/${movieId}`} >
                        <img className="moviePoster" style={{ width: '80%', height: '50%', }} alt={movieName} src={image} />
                    </a>
                </div>
            </Col>
        )
    }

}

export default GridCards