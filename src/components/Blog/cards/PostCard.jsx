import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const PostCard = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={process.env.PUBLIC_URL + '/assets/image-01.png'}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            How to manage authentication with React App
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link className='link' to='/blog/post/here-you-go'>
            view more ...
          </Link>
        </Button>
      </CardActions>
    </Card>
  )
}

export default PostCard;
