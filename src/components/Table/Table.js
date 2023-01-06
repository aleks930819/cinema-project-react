import styles from './Table.module.css';

const Table = ({ data, config }) => {
  const renderedHeaders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  const redneredRows = data.map((row) => {
    const renderedCells = config.map((column) => {
      return <td key={column.label}>{column.render(row)}</td>;
    });

    return <tr key={row.name}>{renderedCells}</tr>;
  });

  return (
    <table className={styles.table}>
      <thead>
        <tr>{renderedHeaders}</tr>
      </thead>
      <tbody>{redneredRows}</tbody>
    </table>
  );
};

export default Table;
