import React, { useEffect, useContext, useState, Fragment } from "react";
import {
  Typography,
  Divider,
  Grid,
  ButtonBase,
  Avatar,
  List,
  ListItem,
  makeStyles,
  createStyles,
  Theme,
  Paper,
} from "@material-ui/core";
import EchoContext from "../../context/EchoContext";
import { User } from "../../type/type";
import { useQuery } from "@apollo/client";
import { GET_ACTIVITIES } from "../../api/graphql";
interface ActivityData {
  type: String;
  data: any;
}

// const useStyles = makeStyles(theme => ({
//   root: {
//     padding: "1rem"
//   },
//   paper: {
//     display: "flex",
//     flexDirection: "column"
//   },
//   fixedHeight: {
//     height: 480,
//     overflow: "scroll",
//     overflowX: "hidden"
//   }
// }));
function Activity() {
  const { EchoClient } = useContext(EchoContext);
  const [activities, setActivities] = useState<ActivityData[]>([]);
  const { loading, data, error } = useQuery(GET_ACTIVITIES, {
    variables: {
      first: 100,
      after: null,
    },
    onCompleted: (data) => {
      const transform = data.activities.edges.map((data: { node: any; }) => {
        return data.node;
      });
      setActivities(activities.concat(transform));
    },
  });
  EchoClient.channel("activity").listen("ActivityEvent", (e: ConcatArray<ActivityData>) => {
    setActivities(activities.concat(e));
  });

  const returnDom = (props: ActivityData) => {
    let value;
    switch (props.type) {
      case "User":
        value = JSON.parse(props.data) as User;
        return ActivityUser(value);
      default:
        value = JSON.parse(props.data) as User;
        return ActivityUser(value);
    }
  };

  if (loading) {
    return <h1>Tests</h1>;
  }

  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Activity
      </Typography>
      <Divider />
      <List>
        {activities.reverse().map((data, index) => {
          return (
            <Fragment key={index}>
              <Paper elevation={2}>{returnDom(data)}</Paper>
            </Fragment>
          );
        })}
      </List>
    </>
  );
}

const ActivityUser = (props: User) => {
  return (
    <ListItem>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <ButtonBase>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            {props.username} Was Just Registered!
          </Typography>
        </Grid>
      </Grid>
    </ListItem>
  );
};
const template = () => {
  return (
    <ListItem>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <ButtonBase>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            Username has added requested to add this.item to shop
          </Typography>
        </Grid>
      </Grid>
      <Divider />
    </ListItem>
  );
};
export default Activity;
