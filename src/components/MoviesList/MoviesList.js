import { useEffect, useState } from 'react';
import useHttp from '../../hooks/useHttp';
import Panel from '../Panel/Panel';
import Table from '../Table/Table';

import { FaRegEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  const { isLoading, error, sendRequest } = useHttp(setMovies,movies);

  useEffect(() => {
    sendRequest({
      endpoint: '/movies',
    });
  }, [sendRequest]);

  const config = [
    { label: 'Name', render: (movie) => movie.title },
    {
      label: 'Edit',
      render: (movie) => (
        <>
          <Link className="white" to={`/edit/${movie._id}`}>
            <FaRegEdit />
          </Link>
        </>
      ),
    },
  ];
  return (
    <Panel>
      <Table data={movies} config={config} />
    </Panel>
  );
};

export default MoviesList;
