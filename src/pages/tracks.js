import React from 'react';
import { Layout } from '../components';
import { gql, useQuery } from '@apollo/client';
import TrackCard from '../containers/track-card'
import QueryResult from '../components/query-result';
export const TRACKS = gql`
query Query {
  tracksForHome {
    id
    title
    author {
      id
      name
      photo
    }
    thumbnail
    durationInSeconds
    modulesCount
  }
}
`
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS)
  return <Layout grid>
    <QueryResult loading ={loading} error={error} data={data}>
    {data?.tracksForHome?.map(track =>
      <TrackCard key={track.id} track={track} />
    )}   
  </QueryResult>
   </Layout>;
};

export default Tracks;
