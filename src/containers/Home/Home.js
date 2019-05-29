import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Query } from 'react-apollo';
import { getUser, getRepos } from 'graphqls';
import { Loading, User, RepositoryList } from 'components';
import { StyledHome } from './home.style';

const Home = ({ searchString, type }) => {
  const [page, setPage] = useState({ first: 10 });
  const query = type === 'user' ? getUser : getRepos;
  if(type === 'language') searchString = `language:${searchString}`
  // Workaround bug https://github.com/apollographql/react-apollo/issues/1931 
  const key = JSON.stringify(`${searchString}${page}${type}`);

  // Reset page info when searchString changes
  useEffect(
    () =>
      setPage({
        first: 10,
        last: null,
        before: null,
        after: null
      }),
    [searchString]
  );
  return (
    <Query query={query} variables={{ searchString, ...page }} skip={!searchString} key={key}>
      {({ loading, error, data }) => {        
        if (loading) return <Loading />;
        if (error) return <p>{error.message}</p>;

        return (
          <StyledHome>
            {type === 'user' ? (
              <User data={data} setPage={setPage} />
            ) : (
              <RepositoryList data={data} setPage={setPage} />
            )}
          </StyledHome>
        );
      }}
    </Query>
  );
};

const mapStateToProps = ({ searchString, type }) => ({
  searchString,
  type
});

export default connect(mapStateToProps)(Home);
