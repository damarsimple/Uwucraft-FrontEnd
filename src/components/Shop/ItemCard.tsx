import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";
import Image from "material-ui-image";
import { Item } from "../../type/type";
const useStyles = makeStyles({
  media: {
    height: 200,
  },
  card: {
    maxHeight: 340,
    overflow: "hidden",
  },
  title: {
    maxHeight: 30,
  },
});
const ItemCard = (props: { item: Item }) => {
  const classes = useStyles();
  const item = props.item;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        {/* <CardMedia
                    className={classes.media}
                    image={"/api/image/item/" + item.minecraft_item_shorthand}
                    title={item.item_name}
                /> */}
        <Image
          className={classes.media}
          src={"/api/image/item/" + item.minecraft_item_shorthand}
        />
      </CardActionArea>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.title}
          noWrap
        >
          {item.item_name}
        </Typography>
        <Typography gutterBottom variant="h5" component="h3">
          ${item.price}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Seller : {item.author.username}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default ItemCard;
