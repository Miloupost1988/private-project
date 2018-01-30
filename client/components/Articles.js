import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

export const ArticleWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ArticleHeader = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 25px;
  word-spacing: 0;
  letter-spacing: 5px;
`;

const PublishedAt = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  background: #ffdb43;
  font-size: 10px;
  letter-spacing: 2px;
  padding: 5px;
  margin: 5px 0 5px 0;
  width: 115px;
`;

const ArticleDescription = styled.div`
  font-size: 15px;
  line-height: 25px;
  letter-spacing: 3px;
  font-family: 'Gentium Basic', serif;
  line-height: 30px;
  letter-spacing: 2px;
  font-size: 15px;
  color: #888;
`;

const openArticle = (url) => {
  window.open(url);
}

const Article = ({ description, publishedAt, title, url }) => {
  return (
    <ArticleWrapper>
      <ArticleHeader>
        {title}
      </ArticleHeader>
      <PublishedAt>{publishedAt}</PublishedAt>
      <ArticleDescription
        onClick={() => openArticle(url)}>
        {description}
      </ArticleDescription>
    </ArticleWrapper>
  );
};

Article.propTypes = {
  description: propTypes.string.isRequired,
  publishedAt: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
};

export default Article;
