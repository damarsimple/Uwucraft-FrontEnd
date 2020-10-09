/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react'
import { Container, createStyles, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Iteminformation from './ItemInformation'
import Itemdescription from './ItemDescription'
import { GET_ITEM } from '../../api/graphql'
import { useQuery } from '@apollo/client'
import { Item } from '../../type/type'
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
const useStyles = makeStyles(() =>
  createStyles({
    link: {
      textDecoration: 'none',
      color: 'black'
    }
  })
)
const ItemLookup = (props: any) => {
  const classes = useStyles()
  const { loading, error, data } = useQuery(GET_ITEM, {
    variables: { item_id: props.match.params.itemid }
  })
  const breadcrumbs = useBreadcrumbs()
  useEffect(() => {}, [props.match.params.itemid])
  if (loading) return <p>Loading</p>
  if (error) return <p>Error! ${error.message}</p>
  const item: Item = data.item
  return (
    <Container maxWidth="lg">
      <Breadcrumbs aria-label="breadcrumb">
        <Link className={classes.link} to={'/'}>
          Uwucraft
        </Link>
        {breadcrumbs[breadcrumbs.length - 2].key
          .substr(1, breadcrumbs[breadcrumbs.length - 2].key.length)
          .split('/')
          .map((e, index) => {
            return (
              <Link className={classes.link} key={index} to={'/' + e}>
                {e.charAt(0).toUpperCase() + e.slice(1)}
              </Link>
            )
          })}
        <Link className={classes.link} to="#">
          {item.item_name}
        </Link>
      </Breadcrumbs>

      <Iteminformation {...item} />
      <Itemdescription description={item.description} review={item.review} />
    </Container>
  )
}
export default ItemLookup
