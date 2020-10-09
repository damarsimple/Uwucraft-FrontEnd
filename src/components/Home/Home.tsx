/* eslint-disable no-use-before-define */
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useQuery } from '@apollo/client'
import { GET_POSTS } from '../../api/graphql'
import { Container } from '@material-ui/core'
import PostCard from './PostCard'
import PostCardLoading from './PostCardLoading'
import { Post } from '../../type/type'
const Home = () => {
  const { loading, error, data, fetchMore } = useQuery(GET_POSTS, {
    variables: { after: null }
  })
  if (loading) {
    return (
      <Container maxWidth="lg">
        <PostCardLoading />
      </Container>
    )
  }
  if (error) return <p>Error! ${error.message}</p>
  const { posts } = data
  const fetchMoreData = () => {
    const { endCursor } = posts.pageInfo
    fetchMore({
      variables: { after: endCursor },
      updateQuery: (prev: any, { fetchMoreResult }) => {
        fetchMoreResult.posts.edges = [
          ...prev.posts.edges,
          ...fetchMoreResult.posts.edges
        ]
        return fetchMoreResult
      }
    })
  }
  return (
    <Container maxWidth="lg">
      <InfiniteScroll
        dataLength={posts.edges.length}
        next={fetchMoreData}
        hasMore={posts.pageInfo.hasNextPage}
        loader={<PostCardLoading />}
      >

        {posts.edges.map((post: { node: Post }, index: number) => {
          return <PostCard key={index} post={post.node} />
        })}
      </InfiniteScroll>
    </Container>
  )
}
export default Home
