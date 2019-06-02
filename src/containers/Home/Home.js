import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Query } from 'react-apollo';
import { getUser } from 'queries';
import { Loading, User } from 'components';
import { StyledHome } from './home.style';

const Home = ({ searchString }) => {
  const [page, setPage] = useState({ first: 10 });

  // Workaround bug https://github.com/apollographql/react-apollo/issues/1931
  const key = JSON.stringify(`${searchString}${page}`);

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
    <Query query={getUser} variables={{ searchString, ...page }} skip={!searchString} key={key}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <p>{error.message}</p>;

        return (
          <StyledHome>
            <User data={data} setPage={setPage} />
          </StyledHome>
        );
      }}
    </Query>
  );
};

const mapStateToProps = ({ searchString }) => ({
  searchString
});

export default connect(mapStateToProps)(Home);
