import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";

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
        <Image
          className={classes.media}
          src={"/img/item/" + item.minecraft_item_shorthand + ".png"}
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
