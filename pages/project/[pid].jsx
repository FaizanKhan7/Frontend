import Router from 'next/router';
import React, { useEffect, useState } from 'react';

import Discussion from '../../src/components/Feed/Discussion';
import Issues from '../../src/components/Feed/Issues';
import PullRequests from '../../src/components/Feed/Pull-requests';
import Header from '../../src/components/Header';
import Spinner from '../../src/components/Spinner';
import styles from '../../src/scss/project.module.scss';

const project = () => {
  const [repoUrl, setRepoUrl] = useState(null);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    if (Router.query.pid) {
      setRepoUrl(
        `https://github.com/${Router.query.pid.split(' ')[0]}/${
          Router.query.pid.split(' ')[1]
        }`
      );
      setPageLoading(false);
    }
  }, []);

  const [Tab, setTab] = useState('issues');

  const changeTab = (tab) => {
    setTab(tab);
  };

  if (pageLoading) return <Spinner />;

  return (
    <div>
      <Header />
      <div className={styles.projectProfile}>
        <div className={styles['card-left-column']}>
          <h1>Open Source Code</h1>
          <div className={styles['card-left-info']}>
            <div className={styles['org-languages']}>
              <p>By Organisation | 08 May 2020</p>
              <span className={styles['org-lang-1']}>Javascript</span>
              <span className={styles['org-lang-2']}>CSS</span>
            </div>
            <p>
              There should be some content her. So I am filling this with random
              content inorder to fill this space. Feel free to add on.We can add
              more and more content here so that we can see what this is gonna
              look like on the real website page
            </p>
            <div className={styles['git-dev-icons']}>
              <div className={styles['github-icon']}>
                <img src="/icons/github-icon.png" alt="Github-icon" />
                <p>Github</p>
              </div>
              <div className={styles['gitpod-icon']}>
                <img src="/icons/gitPod-icon.png" alt="Gitpod-icon" />
                <p>Gitpod</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['card-right-column']}>
          <div className={styles['forks-and-star']}>
            <img src="/icons/star-icon.png" alt="Star" />
            <p>Star</p>
            <div className={styles['total-forks-and-stars']}>
              <p>148k</p>
            </div>
          </div>
          <div className={styles['forks-and-star']}>
            <img src="/icons/fork-icon.png" alt="Fork" />
            <p>Fork</p>
            <div className={styles['total-forks-and-stars']}>
              <p>148k</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles['left-col']}>
          <div className={styles.sidenav}>
            <div className={styles.tabs}>
              <div
                tabIndex={0}
                role="button"
                onKeyDown={() => {
                  changeTab('issues');
                }}
                className={Tab === 'issues' ? styles['active-tab'] : styles.tab}
                onClick={() => changeTab('issues')}>
                ISSUES
              </div>
              <div
                tabIndex={0}
                role="button"
                onKeyDown={() => {
                  changeTab('pull-requests');
                }}
                className={
                  Tab === 'pull-requests' ? styles['active-tab'] : styles.tab
                }
                onClick={() => changeTab('pull-requests')}>
                PULL REQUESTS
              </div>
              {/* <div
                tabIndex={0}
                role="button"
                onKeyDown={() => {
                  changeTab('discussion');
                }}
                className={
                  Tab === 'discussion' ? styles['active-tab'] : styles.tab
                }
                onClick={() => changeTab('discussion')}>
                DISCUSSION
              </div> */}
            </div>
          </div>
          <div className={styles.content}>
            {Tab === 'issues' && <Issues url={repoUrl} />}
            {Tab === 'pull-requests' && <PullRequests url={repoUrl} />}
            {Tab === 'discussion' && (
              <Discussion className={styles['right-col']} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default project;
