import Panel from '../Panel/Panel';
import Table from '../Table/Table';

import { FaRegEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useGetMoviesQuery } from '../../store';

const MoviesList = () => {
  const {
    data: movies,
    error,
    isLoading,
  } = useGetMoviesQuery({ refetchOnMountOrArgChange: true });

  const config = [
    { label: 'Name', render: (movie) => movie.title },
    {
      label: 'Edit',
      render: (movie) => (
        <>
          <Link className="white" to={`/edit-movie/${movie._id}`}>
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
