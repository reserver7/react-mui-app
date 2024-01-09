import { Favorite, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

const Item = () => {
  return (
    <Card sx={{ margin: 3 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: "red" }}>R</Avatar>}
        action={
          <IconButton>
            <MoreVert />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2023"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fmedia.licdn.com%2Fdms%2Fimage%2FD4D10AQE-RIfdzcTrfA%2Fimage-shrink_1280%2F0%2F1700494213816%3Fe%3D2147483647%26v%3Dbeta%26t%3DMMujE2ydATI6VryDwTepu7CeOuNaD5Xxd0npwKa6jt0&type=sc960_832"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          React lets you build user interfaces out of individual pieces called
          components. Create your own React components like Thumbnail,
          LikeButton, and Video. Then combine them into entire screens, pages,
          and apps.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <Favorite />
        </IconButton>

        <IconButton>
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Item;
