import React from 'react'
import { Descriptions } from 'antd';

function MovieInfo(props) {

  const { movie } = props;

  return (
    <Descriptions title="Movie details" bordered size='default'>
      <Descriptions.Item style={{ padding: '400px' }} label="Title">{movie.original_title}</Descriptions.Item>
      <Descriptions.Item label="Release date">{movie.release_date}</Descriptions.Item>
      <Descriptions.Item label="Revenue">{movie.revenue} USD</Descriptions.Item>
      <Descriptions.Item label="Runtime">{movie.runtime} minutes</Descriptions.Item>
      <Descriptions.Item label="Vote count">{movie.vote_count}</Descriptions.Item>
      {/* <Descriptions.Item label="Status">{movie.status}</Descriptions.Item> */}
      <Descriptions.Item label="Homepage">{movie.homepage}</Descriptions.Item>
      <Descriptions.Item label="Popularity">{movie.popularity}</Descriptions.Item>
      <Descriptions.Item label="Average vote" span={2}>{movie.vote_average}</Descriptions.Item>
    </Descriptions>
  )
}

export default MovieInfo