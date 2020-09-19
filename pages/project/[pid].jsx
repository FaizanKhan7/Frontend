import Router from 'next/router';
import React, { useEffect, useState } from 'react';
// import { toast } from 'react-toastify';

import Discussion from '../../src/components/Feed/Discussion';
import Issues from '../../src/components/Feed/Issues';
import PullRequests from '../../src/components/Feed/Pull-requests';
import Header from '../../src/components/Header';
// import Spinner from '../../src/components/Spinner';
import styles from '../../src/scss/project.module.scss';
// import * as feedService from '../../src/services/feed';

const project = () => {
  const [repoUrl, setRepoUrl] = useState(null);
  const [pageLoading, setPageLoading] = useState(true);
  // const [pageNo, setPageNo] = useState(1); // Node id to start after
  // const [repoList, setRepoList] = useState([]); // All Repositories List
  // const [reachedEnd, setReachedEnd] = useState(false); // Infinite Scrolling : End Reached
  // const [reposLoading, setReposLoading] = useState(false);

  // async function getRepoInfo() {
  //   try {
  //     const res = feedService.getRepo(owner, name);
  //     if (res.status === 200)
  //       res.data &&
  //         res.data.data &&
  //         res.data.data.items &&
  //         setRepoList([...repoList, res.data.data.items].flat());
  //     if (res.data.hasNextPage === false) {
  //       setReachedEnd(true);
  //     }
  //     setPageNo(pageNo + 1);
  //   } catch (res) {
  //     toast.error(`${res.status} : ${res.message}`);
  //     setReachedEnd(true);
  //   }
  //   setPageLoading(false);
  //   setReposLoading(false);
  // }
  //   useEffect(() => {
  //   if (paramsChanged !== null) getNextRepos();
  //   if (firstResult.current) {
  //     window.scrollTo({
  //       top: firstResult.current.offsetTop,
  //       behavior: 'smooth'
  //     });
  //   }
  // }, [paramsChanged]);

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

  // if (pageLoading) {
  //   return <Spinner />;
  // }

  return (
    <div>
      <Header />
      <div className={styles.projectProfile}>
        <div className={styles['card-left-column']}>
          {/* <h1></h1> */}
          <div className={styles['card-left-info']}>
            <div className={styles['org-languages']}>
              <p>
                By{' '}
                <em style={{ color: 'green' }}>
                  {/* {Router.query.pid.split(' ')[0]} */}
                </em>{' '}
                | Updated:{' '}
                {/* {repoNames.updated_at && repoNames.updated_at.slice(0, 10)} */}
              </p>
              <span className={styles['org-lang-1']}>
                {/* {Router.query.pid.language} */}
              </span>
              <span className={styles['org-lang-2']}>
                {/* {Router.query.pid.language} */}
              </span>
            </div>
            <p>{Router.query.pid.description}</p>
            <div className={styles['git-dev-icons']}>
              {/* <a href={Router.query.pid.html_url} target="_blank"> */}
              <button className={styles['github-icon']}>
                <img src="/icons/github-icon.png" alt="Github-icon" />
                <p>Github</p>
              </button>
              {/* </a> */}
              {/* <a href={Router.query.pid.html_url} target="_blank"> */}
              <button className={styles['gitpod-icon']}>
                <img src="/icons/gitPod-icon.png" alt="Gitpod-icon" />
                <p>Gitpod</p>
              </button>
              {/* </a> */}
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
