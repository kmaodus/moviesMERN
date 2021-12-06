import React, { useEffect, useState, useRef } from 'react'
import { Typography, Row } from 'antd';
import { API_URL, API_KEY, IMAGE_BASE_URL, IMAGE_SIZE, POSTER_SIZE } from '../../Config'
import MainImage from './Sections/MainImage'
import GridCard from '../../commons/GridCards'
import "./Sections/LandingPage.css"
const { Title } = Typography;


function LandingPage() {
    const buttonRef = useRef(null);

    const [Movies1, setMovies1] = useState([])
    const [MainMovie1Image, setMainMovie1Image] = useState(null)

    const [Movies2, setMovies2] = useState([])
    const [MainMovie2Image, setMainMovie2Image] = useState(null)

    const [Movies22, setMovies22] = useState([])
    const [MainMovie22Image, setMainMovie22Image] = useState(null)

    const [Movies23, setMovies23] = useState([])
    const [MainMovie23Image, setMainMovie23Image] = useState(null)

    const [Movies3, setMovies3] = useState([])
    const [MainMovie3Image, setMainMovie3Image] = useState(null)

    const [Movies4, setMovies4] = useState([])
    const [MainMovie4Image, setMainMovie4Image] = useState(null)

    const [Loading, setLoading] = useState(true)
    const [CurrentPage, setCurrentPage] = useState(0)



    useEffect(() => { //dès que le rendu du composant s'est terminé
        const movieTopRated = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=fr-FR&page=1`;
        const movieUpcoming1 = `${API_URL}movie/upcoming?api_key=${API_KEY}&language=fr-FR&page=1`;
        const movieUpcoming2 = `${API_URL}movie/upcoming?api_key=${API_KEY}&language=fr-FR&page=2`;
        const movieUpcoming3 = `${API_URL}movie/upcoming?api_key=${API_KEY}&language=fr-FR&page=3`;
        const movieNow_Playing = `${API_URL}movie/now_playing?api_key=${API_KEY}&language=fr-FR&page=1`;
        const tvPopular = `${API_URL}tv/popular?api_key=${API_KEY}&language=fr-FR&page=1`;
        fetchMovies(movieTopRated, Movies1, setMovies1, MainMovie1Image, setMainMovie1Image)
        fetchMovies(movieUpcoming1, Movies2, setMovies2, MainMovie2Image, setMainMovie2Image)
        fetchMovies(movieUpcoming2, Movies22, setMovies22, MainMovie22Image, setMainMovie22Image)
        fetchMovies(movieUpcoming3, Movies23, setMovies23, MainMovie23Image, setMainMovie23Image)
        fetchMovies(movieNow_Playing, Movies3, setMovies3, MainMovie3Image, setMainMovie3Image)
        fetchMovies(tvPopular, Movies4, setMovies4, MainMovie4Image, setMainMovie4Image)
    }, [])

    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);
    // }, [])



    const fetchMovies = (endpoint, Movies22, setMovies22, MainMovie22Image, setMainMovie22Image) => {
        fetch(endpoint)
            .then(result => result.json())
            .then(result => {
                console.log(endpoint, result.results)
                // console.log('result',...result.results)
                setMovies22([...Movies22, ...result.results])
                setMainMovie22Image(MainMovie22Image || result.results[0])
                setCurrentPage(result.page)
                var date = new Date();
                var date1 = new Date(result.results[0].release_date + " 00:00:00");
                var date2 = new Date(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " 00:00:00")
            }, setLoading(false))
            .catch(error => console.error('Error:', error)
            )
    }





    const results = (movie, index) => {
        return (
            <React.Fragment key={index} >
                <GridCard
                    image={movie.poster_path ?
                        `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                        : null}
                    movieId={movie.id}
                    movieName={movie.original_title}
                    movieDate={movie.release_date}
                />
            </React.Fragment>
        )
    }

    const result = (movie, index) => {
        return index <= 7;
    }

    const age = (movie, index) => {  //Cette fonction est déstiné au films de la section Upcoming
        var release_date = movie.props.children.props.movieDate
        var date = new Date();
        var date1 = new Date(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " 00:00:00")
        var date2 = new Date(release_date + " 00:00:00") //La majorité des films de la section que nous donne l'API est déja sortie 
        return date1 < date2 && index <= 7  //Donc on filtre uniquement ceux dont la date est supérieure à la date d'aujourd'hui (c'est pour ça aussi qu'on prend 3 pages sinon on a pas assez de films)
    }






    return (
        <div className="AllMoviesSections" style={{ width: '100%', margin: '0' }}>
            {/* /////////////////////////////////////////////IMAGE PRINCIPAL/// */}
            {MainMovie2Image &&
                <MainImage
                    image={`${IMAGE_BASE_URL}${IMAGE_SIZE}${MainMovie2Image.backdrop_path}`}
                    title={MainMovie2Image.original_title}
                    text={MainMovie2Image.overview}
                />
            }
            {/* /////////////////////////////////////////////ACTUELLEMENT AU CINEMA/// */}
            <div className="MoviesSection" style={{ width: '85%', margin: '1rem auto' }}>
                <Title> In theater </Title>
                <hr />
                {Movies3 && Movies3.map(results).filter(result)}
            </div>
            {/* /////////////////////////////////////////////A VENIR/// */}
            <div className="MoviesSection" style={{ width: '85%', margin: '1rem auto' }}>
                <Title> Upcoming </Title>
                <hr />
                <Row gutter={[16, 16]}>
                    {Movies2 && Movies2.map(results).filter(age)}
                    {Movies22 && Movies22.map(results).filter(age)}
                    {Movies23 && Movies23.map(results).filter(age)}
                </Row>
            </div>
            {/* /////////////////////////////////////////////LES MIEUX NOTES/// */}
            <div className="MoviesSection" style={{ width: '85%', margin: '1rem auto' }}>
                <Title> Top rated </Title>
                <hr />
                <Row gutter={[16, 16]}>
                    {Movies1 && Movies1.map(results).filter(result)}
                </Row>
            </div>
            {/* /////////////////////////////////////////////SERIE LES PLUS POPULAIRES/// */}
            <div className="MoviesSection" style={{ width: '85%', margin: '1rem auto' }}>
                <Title> TV's popular </Title>
                <hr />
                <Row gutter={[16, 16]}>
                    {Movies4 && Movies4.map(results).filter(result)}
                </Row>
            </div>

        </div>
    )
}

export default LandingPage




{/* <div onload={fetchMovies} style={{ width: '85%', margin: '1rem auto' }}>
                <h2  > Latest movies </h2>
                <hr />
                <Row gutter={[16, 16]}>
                    {Movies && Movies.map((movie, index) => (
                        <React.Fragment key={index}>
                            <GridCard
                                image={movie.poster_path ?
                                    `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                                    : null}
                                movieId={movie.id}
                                movieName={movie.original_title}
                            />
                        </React.Fragment>
                    ))}
                </Row> */}
{/* <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button ref={buttonRef} className="loadMore" onClick={loadMoreItems}>Load More</button>
                </div> */}

// const fetchMovies1 = (endpoint) => {
//     fetch(endpoint)
//         .then(result => result.json())
//         .then(result => {
//             console.log('popular', result)
//             // console.log('result',...result.results)
//             setMovies1([...Movies1, ...result.results])
//             setMainMovie1Image(MainMovie1Image || result.results[0])
//             setCurrentPage(result.page)
//         }, setLoading(false))
//         .catch(error => console.error('Error:', error)
//         )
// }
// const fetchMovies2 = (endpoint) => {
//     fetch(endpoint)
//         .then(result => result.json())
//         .then(result => {
//             console.log('upcoming', result.results)
//             // console.log('result',...result.results)
//             setMovies2([...Movies2, ...result.results])
//             setMainMovie2Image(MainMovie2Image || result.results[0])
//             setCurrentPage(result.page)
//         }, setLoading(false))
//         .catch(error => console.error('Error:', error)
//         )
// }

// const fetchMovies3 = (endpoint) => {
//     fetch(endpoint)
//         .then(result => result.json())
//         .then(result => {
//             console.log('nom playing', result)
//             // console.log('result',...result.results)
//             setMovies3([...Movies3, ...result.results])
//             setMainMovie3Image(MainMovie3Image || result.results[0])
//             setCurrentPage(result.page)
//         }, setLoading(false))
//         .catch(error => console.error('Error:', error)
//         )
// }
// const fetchMovies4 = (endpoint) => {
//     fetch(endpoint)
//         .then(result => result.json())
//         .then(result => {
//             console.log('nom playing', result)
//             // console.log('result',...result.results)
//             setMovies4([...Movies4, ...result.results])
//             setMainMovie4Image(MainMovie4Image || result.results[0])
//             setCurrentPage(result.page)
//         }, setLoading(false))
//         .catch(error => console.error('Error:', error)
//         )
// }