import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import logo from "../assets/irons1.jpg";
import cobra from "../assets/bag.jpeg";
import driver from "../assets/taylormade-driver.jpg";
import accessories from "../assets/ball.jpg";

export default function ImgMediaCard() {
  return (
    <>
      <Card sx={{ maxWidth: 290, maxHeight: 300 }} className="irons-card">
        <CardMedia component="img" alt="irons" height="120" image={logo} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Irons
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The latest to join the callaway army in taylormade
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 290, maxHeight: 300 }} className="golf-card">
        <CardMedia component="img" alt="irons" height="120" image={driver} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Drivers
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The latest to join the callaway army in taylormade
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 290, maxHeight: 300 }} className="bag-card">
        <CardMedia component="img" alt="irons" height="120" image={cobra} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Bags
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The latest to join the callaway army in taylormade
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 290, maxHeight: 300 }} className="accessories-card">
        <CardMedia
          component="img"
          alt="irons"
          height="120"
          image={accessories}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Accessories
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The latest to join the callaway army in taylormade
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}
