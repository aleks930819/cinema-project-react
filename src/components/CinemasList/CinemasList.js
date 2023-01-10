import Panel from '../Panel/Panel';
import Table from '../Table/Table';

import { FaRegEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useGetCinemasQuery } from '../../store';

const CinemasList = () => {
  const {
    data: cinemas,
    error,
    isLoading,
  } = useGetCinemasQuery({ refetchOnMountOrArgChange: true });

  const config = [
    { label: 'Name', render: (cinema) => cinema.name },
    {
      label: 'Edit',
      render: (cinema) => (
        <>
          <Link className="white" to={`/edit-cinema/${cinema._id}`}>
            <FaRegEdit />
          </Link>
        </>
      ),
    },
  ];
  return (
    <Panel>
      <Table data={cinemas} config={config} />
    </Panel>
  );
};

export default CinemasList;
