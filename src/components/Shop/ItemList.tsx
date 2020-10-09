/* eslint-disable no-use-before-define */
import React from 'react'
import Grid from '@material-ui/core/Grid/'
import Itemcard from './ItemCard'
import { Link } from 'react-router-dom'
import { Item } from '../../type/type'
const ItemList = (props: { data: [] }) => {
  return (
    <>
      <Grid container spacing={1}>
        {props.data.map((item: { node: Item }, index: number) => (
          <Grid key={index} item xs={6} sm={2}>
            <Link
              style={{ textDecoration: 'none' }}
              to={'/shop/item/' + item.node.id}
            >
              <Itemcard item={item.node} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
export default ItemList
