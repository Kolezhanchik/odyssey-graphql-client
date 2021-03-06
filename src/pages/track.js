import {React} from 'react'
import {gql, useQuery} from '@apollo/client'
import {Layout, QueryResult, TrackDetail } from '../components'

export const GET_TRACK = gql`
query Query($trackId: ID!) {
    track(id: $trackId) {
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
      description
      numberOfViews
      modules {
        id
        title
        durationInSeconds
      }
    }
  }
`
const Track = ({trackId}) => {
const {loading, error, data} = useQuery(GET_TRACK , {
    variables: {trackId}
})

    return <Layout>
        <QueryResult loading={loading} error={error} data={data}>
            <TrackDetail track={data?.track}/>
            </QueryResult>
    </Layout>
}

export default Track