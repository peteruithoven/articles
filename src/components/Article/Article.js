import React from 'react'
import PropTypes from 'prop-types';

const Article = ({title, description}) => {
  return (
    <article>
      <header>
        <h2>{title}</h2>
      </header>
      <section>
        {description}
      </section>
    </article>
  )
}

Article.propTypes =  {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Article;
