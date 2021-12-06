import React from 'react'
import { Col } from 'antd';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../../Config.js'
import "./ActorDetail.css"
import { Typography } from 'antd';
const { Title } = Typography;

function ActorInfo(props) {
    const { actor } = props;

    var gender = "";          //Le genre de l'acteur
    if (actor.gender === 2) {
        gender = "Homme"
    } if (actor.gender === 1) {
        gender = "Femme"
    }
    const description = () => {         ///Si la description est vide
        if (actor.biography != "") {
            return (
                <div id="description" className='Info'>
                    <h2>Description :</h2>
                    <h3>{actor.biography}</h3>
                </div>
            )
        }
    }

    return (

        <div className='ActorInformations'>
            <div className='ActorInformationsPoster'>
                <Title>Informations</Title>
                <Col lg={6} md={8} xs={24}>
                    <div style={{ position: 'relative' }} className="MoviesSections">
                        <img className="moviePosterInfo" style={{ border: 'radius 50px;' }} alt={actor.name} src={actor.profile_path ?
                            `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                            : null} />
                    </div>
                </Col>
            </div>
            <div className='ActorInformationsKeys'>
                <div id="name" className='Info'>
                    <h2>Nom :</h2>
                    <h3>{actor.name}</h3>
                </div>
                <div id="gender" className='Info'>
                    <h2>Genre :</h2>
                    <h3>{gender}</h3>
                </div>
                <div id="birthday" className='Info'>
                    <h2>Année de naissance :</h2>
                    <h3>{actor.birthday}</h3>
                </div>
                <div id="birthdayPlace" className='Info'>
                    <h2>Lieu de naissance :</h2>
                    <h3>{actor.place_of_birth}</h3>
                </div>
                <div id="actorPopularity" className='Info'>
                    <h2>Popularité :</h2>
                    <h3>{actor.popularity}</h3>
                </div>
                {description()}
            </div>


        </div>

    )
}

export default ActorInfo;
