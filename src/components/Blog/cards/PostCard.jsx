import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import { reduceText } from '../../../utils/utils'; 
import ReactLoading from "react-loading";

const PostCard = ({content}) => {
  return (
    <Card sx={{ maxWidth: 400, height: 400, display: "flex", flexDirection: "column"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={content.image}
          alt={content.image ? "green iguana" : ""}
        />
        <CardContent>
          <Link className='card-title' to={`/blog/post/${content.slug}`}>    
            <Typography gutterBottom variant="h5" component="div">
              {reduceText(content.title, 45)}
            </Typography>
          </Link>
          <Typography variant="body2" color="text.secondary">
            {reduceText(content.content , 70)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing sx={{ mt: "auto" }}>  
          <Link className='card-link' to={`/blog/post/${content.slug}`}>
            view more ...
          </Link>
      </CardActions>
    </Card>
  )
}

export default PostCard;
