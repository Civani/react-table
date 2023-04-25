import React, { useMemo } from 'react';
import { useTable, useSortBy, useFilters, usePagination } from 'react-table';

//searching for each column
const DefaultColumnFilter = ({ column: { filterValue, setFilter } }) => {
  return (
    <input
      className="form-control"
      value={filterValue || ''}
      onChange={(e) => setFilter(e.target.value)}
      placeholder={`Search`}
    />
  );
};

const Tables = ({ columns, data, updateMyData }) => {
  const defaultColumn = useMemo(() => ({ Filter: DefaultColumnFilter }), []);


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    pageOptions,
    state,
    setGlobalFilter,
    gotoPage,
    pageCount,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: { pageIndex: 0, pageSize: 5 },
    },

    useFilters,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <div className="">
   {/*} <div className='-my-5'>
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          value={globalFilter || ''}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
  </div>*/}
      <table className="table min-w-full divide-y divide-gray-200" {...getTableProps()}>
        <thead className="">
          {headerGroups.map((headerGroup) => (
            <tr className='' {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th className='px-6 py-3 bg-gray-50 text-left text-base leading-6 font-semibold text-gray-500 tracking-wider' {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' ▼'
                        : ' ▲'
                      : ''}
                  </span>
                  {/* <div>{column.canFilter ? column.render('Filter') : null}</div>*/}
                </th>
              ))}
            {/*}  <th className='px-6 py-3 bg-gray-50 text-left text-base leading-6 font-medium text-gray-500  tracking-wider'>Edit</th>*/}
            </tr>
          ))}
        </thead>
        <tbody className='bg-white divide-y divide-gray-200' {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr className='p-10 relative ml-96' {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td className='px-6 py-4 whitespace-nowrap text-sm leading-5 font-medium text-gray-500'{...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
               {/*} <td>
                  <button className='text-sm leading-5 font-medium text-gray-500 ml-7' onClick={() => editRow(i)}>Edit</button>
                </td>*/}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button className='text-gray-400 absolute ml-24 my-4' onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>
        <button className='text-gray-400 absolute ml-32 my-4' onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>
        <button className='text-gray-400 absolute ml-36 my-4' onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>
        <button className='text-gray-400 absolute ml-40 my-4' onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>
        {/*<span className='text-gray-400 absolute ml-48 my-4'>
          Page{' '}
          <strong className='text-gray-400'>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>*/}
        <span className='text-gray-400 absolute flex text-sm leading-4 font-medium my-5'>
          Show{' '}
          <input
            type="number"
            className='ml-3'
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            min={1}
            max={pageOptions.length}
          />
        </span>
      </div>
    </div>
  );
};

export default Tables;
