import React, { useMemo } from 'react';
import { Box, Stack } from '@mui/material';
import MaterialReactTable from 'material-react-table';
import data from './data.json';

const Example = () => {
  const columns = useMemo(
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
        header: 'Scores',
        accessorKey: 'scores',
        aggregationFn: 'max', //show the max age in the group (lots of pre-built aggregationFns to choose from)
      },
      {
        header: 'Status',
        accessorKey: 'status',
      },
      {
        header: 'Scores',
        accessorKey: 'scores',
      },
      {
        header: 'Name',
        accessorKey: 'taskName',
      },
    ],
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
        pagination: { pageIndex: 0, pageSize: 20 },
        //sorting: [{ id: 'state', desc: false }], //sort by state by default
      }}
      muiToolbarAlertBannerChipProps={{ color: 'primary' }}
      muiTableContainerProps={{ sx: { maxHeight: 700 } }}
    />
  );
};

export default Example;
