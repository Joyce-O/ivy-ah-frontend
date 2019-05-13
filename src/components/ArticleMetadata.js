import React from 'react';
import PropTypes from 'prop-types';
import hypeIcon from '../assets/sass/components/assets/hype-icon.svg';

const ArticleMetadata = ({
  data: {
    title, user, readTime, isPremium, createdAt, ratings,
  }
}) => (
  <div className="article-metadata">
    <h1 className="article-title">{title}</h1>
    {user.firstname
      ? (
        <span className="author-name">
          {user.firstname}
          {' '}
          {user.lastname}
        </span>
      )
      : <span className="author-name">{user.username}</span>}
    <div className="time-date">
      <span className="read-time dot">
        {`${Math.floor(parseInt(readTime, 10) / 60) || '< 1'} min read`}
      </span>
      <span className="published-date dot">{new Date(createdAt).toDateString()}</span>
    </div>
    <div className="ui horizontal link list hype-premium">
      <span className="item">
        <img src={hypeIcon} alt="hype-icon" className="hype article-icon" />
        <span className="hype-text">
          {ratings >= 1000 ? (ratings / 1000).toFixed(1) : ratings}
          {' Hypes'}
        </span>
      </span>
      {isPremium
          && (
            <span className="item">
              <i className="star icon article-icon yellow" />
            </span>
          )}
    </div>
  </div>
);

ArticleMetadata.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    user: PropTypes.shape({
      firstname: PropTypes.string,
      lastname: PropTypes.string,
      username: PropTypes.string
    }),
    readTime: PropTypes.string,
    isPremium: PropTypes.bool,
    createdAt: PropTypes.string,
    ratings: PropTypes.number
  })
};

ArticleMetadata.defaultProps = {
  data: {
    title: '',
    user: {},
    readTime: '',
    isPremium: false,
    ratings: 0,
    createdAt: ''
  }
};


export default ArticleMetadata;
