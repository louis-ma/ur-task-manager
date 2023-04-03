import React, { useMemo } from 'react';
import { Box, Stack } from '@mui/material';
import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table';
import { data, type Person } from './makeData';

const Example = (factory: () => T, deps: React.DependencyList | undefined) => {
    /*
  const averageSalary = useMemo(
    () => data.reduce((acc, curr) => acc + curr.salary, 0) / data.length,
    [],
  );

  const maxAge = useMemo(
    () => data.reduce((acc, curr) => Math.max(acc, curr.age), 0),
    [],
  );
  */


  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        header: 'ID',
        accessorKey: 'id',
        enableGrouping: false, //do not let this column be grouped
      },
      {
        header: 'Sub ID',
        accessorKey: 'subID',
      },
      {
        header: 'Name',
        accessorKey: 'taskName',
        aggregationFn: 'max', //show the max age in the group (lots of pre-built aggregationFns to choose from)
      },
      {
        header: 'Status',
        accessorKey: 'status',
        //optionally, customize the cell render when this column is grouped. Make the text blue and pluralize the word
      },
      {
        header: 'Scores',
        accessorKey: 'scores',
      },
    ],
      "export const deps: string[];"
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableColumnResizing
      enableGrouping
      enableStickyHeader
      enableStickyFooter
      initialState={{
        density: 'compact',
        expanded: true, //expand all groups by default
        //grouping: ['state'], //an array of columns to group by by default (can be multiple)
        //pagination: { pageIndex: 0, pageSize: 20 },
        //sorting: [{ id: 'state', desc: false }], //sort by state by default
      }}
      muiToolbarAlertBannerChipProps={{ color: 'primary' }}
      //muiTableContainerProps={{ sx: { maxHeight: 700 } }}
    />
  );
};

export default Example;
