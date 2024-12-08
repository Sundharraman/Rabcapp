import {
  Box,
  Chip,
  Link,
  Paper,
  Stack,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { DataGrid, GridColDef, useGridApiRef } from '@mui/x-data-grid';
import { useState } from 'react';
import { rows } from 'data/product-performance';
// import { currencyFormat } from 'helpers/utils';
import CustomPagination from 'components/common/CustomPagination';
import SearchFilter from 'components/common/SearchFilter';
import { useNavigate } from 'react-router-dom';

type RowType = (typeof rows)[number];

const ProductPerformance = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedRow, setSelectedRow] = useState<RowType | null>(null);
  const apiRef = useGridApiRef();
  const naviage = useNavigate();

  const handleView = (row: RowType) => {
    console.log('View action triggered for:', row);
    // Navigate to the view page or perform a relevant action.
  };

  const handleModify = (row: RowType) => {
    console.log('Modify action triggered for:', row);
    // Open a modification dialog or perform the edit operation.
  };

  const handleRemove = (row: RowType) => {
    setSelectedRow(row);
    setOpenDialog(true);
  };

  const handleConfirmDelete = () => {
    console.log('Remove action confirmed for:', selectedRow);
    setOpenDialog(false);
    // Remove the row from the data source.
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleUserCreation = () => {
    naviage('/user');
  };
  const columns: GridColDef<RowType>[] = [
    {
      field: 'assigned',
      headerName: 'UserName',
      flex: 1.5,
      minWidth: 200,
      valueGetter: ({ name }: { name: string }) => name,
      renderCell: (params) => {
        return (
          <Stack justifyContent="center" height={1}>
            <Typography
              variant="h6"
              component={Link}
              href="#!"
              color="text.primary"
              sx={{ width: 'max-content' }}
            >
              {params.row.assigned.name}
            </Typography>
            <Typography variant="subtitle2">{params.row.assigned.role}</Typography>
          </Stack>
        );
      },
    },
    {
      field: 'name',
      headerName: 'Roles',
      flex: 1.5,
      minWidth: 200,
      renderCell: (params) => {
        return (
          <Stack justifyContent="center" height={1}>
            <Typography variant="subtitle2">{params.row.assigned.role}</Typography>
          </Stack>
        );
      },
    },
    {
      field: 'permission',
      headerName: 'Permission',
      flex: 1.5,
      minWidth: 200,
      renderCell: (params) => {
        return (
          <Stack justifyContent="center" height={1}>
            <Typography variant="subtitle2">{params.row.assigned.permission}</Typography>
          </Stack>
        );
      },
    },
    {
      field: 'priority',
      headerName: 'Status',
      flex: 1,
      minWidth: 150,
      renderCell: (params) => {
        let color: string = '';
        switch (params.value) {
          case 'Low':
            color = 'success.lighter';
            break;
          case 'Medium':
            color = 'info.lighter';
            break;
          case 'High':
            color = 'error.lighter';
            break;
          case 'Critical':
            color = 'warning.lighter';
            break;
        }
        return <Chip label={params.value} sx={{ bgcolor: color }} />;
      },
    },
    {
      field: 'Action',
      headerName: 'Action',
      flex: 1,
      minWidth: 250,
      renderCell: (params) => {
        return (
          <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => handleView(params.row)}
            >
              View
            </Button>
            <Button
              variant="outlined"
              color="warning"
              size="small"
              onClick={() => handleModify(params.row)}
            >
              Modify
            </Button>
            <Button
              variant="outlined"
              color="error"
              size="small"
              onClick={() => handleRemove(params.row)}
            >
              Remove
            </Button>
          </Stack>
        );
      },
    },
  ];

  return (
    <Paper sx={{ p: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
        <Typography variant="h4" color="primary.dark">
          Product Performance
        </Typography>

        <Stack direction="row" spacing={2}>
          <SearchFilter apiRef={apiRef} sx={{ maxWidth: 350 }} />
          <Button
            variant="contained"
            onClick={() => handleUserCreation()}
            color="secondary"
            sx={{ minWidth: 120 }}
          >
            {' '}
            Add User
          </Button>
        </Stack>
      </Stack>

      <Box
        sx={{
          height: 400,
          width: 1,
          mt: 3,
        }}
      >
        <DataGrid
          apiRef={apiRef}
          columns={columns}
          rows={rows}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          checkboxSelection={true}
        />
      </Box>
      <CustomPagination apiRef={apiRef} />

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to delete this item?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default ProductPerformance;
