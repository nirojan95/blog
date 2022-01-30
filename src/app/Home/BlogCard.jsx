import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: '100%',
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: 'flex',
    margin: '0 10px',
    justifyContent: 'space-between',
  },
  author: {
    display: 'flex',
  },
}));

function BlogCard(props) {
  const classes = useStyles();
  const { post } = props;
  console.log(post);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardActionArea>
            <Link
              className="level-item button is-small is-link is-outlined"
              to={{
                pathname: `/blog${post.path}`,
                theprops: { post },
              }}
            >
              <CardMedia
                className={classes.media}
                image={post.hero.fields.file.url}
                title="Hello World."
              />
            </Link>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {post.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {post.content}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.cardActions}>
            <Box className={classes.author}>
              <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              <Box ml={2}>
                <Typography variant="subtitle2" component="p">
                  Guy Clemons
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" component="p">
                  May 14, 2020
                </Typography>
              </Box>
            </Box>
            <Box>
              <BookmarkBorderIcon />
            </Box>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

BlogCard.propTypes = {
  // hero: PropTypes.objectOf(PropTypes.any).isRequired,
  // title: PropTypes.string.isRequired,
  // content: PropTypes.string.isRequired,
  post: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default BlogCard;
