import PropTypes from 'prop-types';
import React from 'react';

import styles from '../../scss/organisations.module.scss';

const organisation = ({ org, tech, showModal }) => {
  return (
    <div className={styles['card-outer']}>
      <div className={styles['top-row']}>
        <h1 className={styles.heading}>{org.name}</h1>
        <button
          type="button"
          onKeyDown={() => showModal(org)}
          onClick={() => showModal(org)}
          className={styles['show-modal-button']}>
          <img src="/SVG/org-view.svg" alt="view" style={{ width: '30px' }} />
        </button>
      </div>
      <div className={styles['card-inner']}>
        <p>{org.short_description}</p>
        <h4>Technologies</h4>
        <div className={styles.tags}>
          {tech.map((tag) => (
            <div className={styles.tag} key={tag}>
              {tag.toUpperCase()}
            </div>
          ))}
        </div>
        <div className={styles.urls}>
          <a href={org.website} target="_blank" rel="noopener noreferrer">
            <img src="/icons/website.svg" alt="Website" />
          </a>

          <a href={org.idea_list_url} target="_blank" rel="noopener noreferrer">
            <img src="/icons/idea.svg" alt="Ideas" />
          </a>

          <a
            href={org.irc_channel_url}
            target="_blank"
            rel="noopener noreferrer">
            <img src="/icons/chat.svg" alt="Chat" />
          </a>
        </div>
      </div>
    </div>
  );
};

organisation.propTypes = {
  org: PropTypes.shape({
    name: PropTypes.string,
    website: PropTypes.string,
    idea_list_url: PropTypes.string,
    irc_channel_url: PropTypes.string,
    short_description: PropTypes.string,
    long_description: PropTypes.string,
    topicTags: PropTypes.arrayOf(PropTypes.string),
    github: PropTypes.string,
    slack: PropTypes.string,
    bgurl: PropTypes.string
  }).isRequired,
  tech: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default organisation;
