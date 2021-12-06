import React, { useEffect, useState } from 'react'
import { Row, Button } from 'antd';
import axios from 'axios';
import ActorInfo from "./Sections/ActorInfo"
import { API_URL, API_KEY, IMAGE_BASE_URL, IMAGE_SIZE } from '../../Config'

function ActorDetailPage(props) {

    const actorId = props.match.params.actorId
    const [Actor, setActor] = useState([])


    useEffect(() => {
        let endpointForActorInfo = `${API_URL}person/${actorId}?api_key=${API_KEY}&language=fr-FR` //on cherche le lien
        fetchDetailInfo(endpointForActorInfo)                                                      //puis on les utilises
    }, [])


    const fetchDetailInfo = (endpoint) => {

        fetch(endpoint)
            .then(result => result.json())
            .then(result => {
                setActor(result)
            })
            .catch(error => console.error('Error:', error)
            )
    }

    return (
        <div className="ActorDetail">
            <ActorInfo actor={Actor} />
        </div>
    )

}

export default ActorDetailPage;