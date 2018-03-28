import React from 'react'
import PropTypes from 'prop-types';
import injectSheet from 'react-jss'
import styles from './style.js';

const Article = ({ title, description, publishedAt, footerLink, classes, style }) => {
  return (
    <article className={classes.article} style={style}>
      <header className={classes.header}>
        <h2 className={classes.title}>{title}</h2>
        <div className={classes.date}>{formatDate(new Date(publishedAt))}</div>
      </header>
      <section className={classes.description}>
        <p>{description}</p>
      </section>
      <footer className={classes.footer}>
        {footerLink}
      </footer>
    </article>
  )
}

Article.propTypes =  {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  footerLink: PropTypes.node.isRequired,
}

function formatDate(date) {
  return date.toLocaleDateString(undefined, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}

export default injectSheet(styles)(Article);
