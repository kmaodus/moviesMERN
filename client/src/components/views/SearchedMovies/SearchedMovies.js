import React, { useEffect, useState, useRef } from 'react'
import { Typography, Row, Input } from 'antd';
import { API_URL, API_KEY, IMAGE_BASE_URL, IMAGE_SIZE, POSTER_SIZE } from '../../Config'
import MainImage from '../../views/LandingPage/Sections/MainImage'
import GridCard from '../../commons/GridCards'
const { Title } = Typography;
const { Search } = Input;


function SearchedMovies() {
    const [text, setText] = useState('');
    const [query, setQuery] = useState('');

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }


    const buttonRef = useRef(null);
    // const query = "avengers"
    const url = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false
    `;

    const [Movies, setMovies] = useState([])
    const [MainMovieImage, setMainMovieImage] = useState(null)
    const [Loading, setLoading] = useState(true)
    const [CurrentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        const endpoint = url;
        fetchMovies(endpoint)
    }, [])




    const fetchMovies = (endpoint) => {

        fetch(endpoint)
            .then(result => result.json())
            .then(result => {
                // console.log(result)
                // console.log('Movies',...Movies)
                // console.log('result',...result.results)
                setMovies([...Movies, ...result.results])
                setMainMovieImage(MainMovieImage || result.results[0])
                setCurrentPage(result.page)
            }, setLoading(false))
            .catch(error => console.error('Error:', error)
            ), [query]
    }

    const loadMoreItems = () => {
        let endpoint = '';
        setLoading(true)
        console.log('CurrentPage', CurrentPage)
        // endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${CurrentPage + 1}`;
        endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false
        `;
        fetchMovies(endpoint);
    }


    return (
        <div style={{ width: '100%', margin: '0' }}>
            <div style={{ width: '85%', margin: '1rem auto' }}>
                <Title level={2} > Search result </Title>
                <hr />
                <Search
                    getQuery={(q) => setQuery(q)}
                    placeholder="Search for a movie.."
                    enterButton="Search"
                    size="large"
                    value={text}
                    onSearch={(e) => onChange(e.target.value)}
                    onChange={(e) => onChange(e.target.value)}
                />
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
                </Row>

                {Loading &&
                    <div>Loading...</div>}

                <br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button ref={buttonRef} className="loadMore" onClick={loadMoreItems}>Load More</button>
                </div>
            </div>

        </div>
    )
}

export default SearchedMovies