import React, { useEffect } from 'react';
import { deleteFDC } from '../../actions/profile';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  popTypography: {
    padding: theme.spacing(2),
  },
}));

const CollectionItem = ({
  key,
  id,
  scottNum,
  collinsNum,
  title,
  issueDate,
  year,
  description,
  location,
  price,
  value,
  quantity,
  group,
  chachetmaker,
  series,
  denomination,
  format,
  variety,
  deleteFDC,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  // popover
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    console.log(id);
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDelete = () => {
    deleteFDC(id);
    console.log('delete');
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label='recipe' className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <>
            <IconButton
              aria-label='settings'
              aria-controls='simple-menu'
              aria-haspopup='true'
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id='simple-menu'
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Edit</MenuItem>
              <MenuItem onClick={handleDelete}>Delete</MenuItem>
              {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
            </Menu>
          </>
        }
        title={title}
        subheader={scottNum}
      />
      <CardMedia
        className={classes.media}
        image='/static/images/cards/paella.jpg'
        title='Paella dish'
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography>Scott #: {scottNum}</Typography>
          <Typography>Collin's #: {collinsNum}</Typography>
          <Typography>Issue Date: {issueDate}</Typography>
          <Typography> Year: {year}</Typography>
          <Typography>Location: {location}</Typography>
          <Typography>Price: {price}</Typography>
          <Typography>Value: {value}</Typography>
          <Typography>Quantity: {quantity}</Typography>
          <Typography>Chachet Maker: {chachetmaker}</Typography>
          <Typography>Series: {series}</Typography>
          <Typography>Denomination: {denomination}</Typography>
          <Typography>Format: {format}</Typography>
          <Typography>Variety: {variety}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

CollectionItem.propTypes = {
  key: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  scottNum: PropTypes.string.isRequired,
  collinsNum: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  issueDate: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  chachetmaker: PropTypes.string.isRequired,
  denomination: PropTypes.string.isRequired,
  series: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
  variety: PropTypes.string.isRequired,
  deleteFDC: PropTypes.func.isRequired,
};

export default connect(null, { deleteFDC })(withRouter(CollectionItem));
