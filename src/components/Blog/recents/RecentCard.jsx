import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {formatTime, reduceText } from '../../../utils/utils'
import { Link } from 'react-router-dom';

export default function RecentCard({post}) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Link className='link' to={`/blog/post/${post.slug}`}>
        <Card variant="outlined" key={post.id}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {formatTime(post.timestamp)}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {post.title}
            </Typography>
            <Typography variant="body2">
              {reduceText(post.content, 50)}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Box>
  );
}
