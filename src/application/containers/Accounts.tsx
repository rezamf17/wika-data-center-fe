import React, { useState, useEffect } from 'react'
import Navigation from '../components/Navigation'
import Breadcrumbs from '../components/BreadcrumbsComponent'
import SearchAccount from '../components/SearchAccount'
import { Container, Card, Button, Grid, LinearProgress } from '@mui/material'
import PeopleIcon from '@mui/icons-material/People';
import AddIcon from '@mui/icons-material/Add';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchAccountEntity from '../../domain/entities/SearchAccount'
import UserService from '../../domain/usecase/usecaseUser'
import UserEntity from '../../domain/entities/entityUser'
import ModalUser from '../components/ModalUser'
import { motion } from 'framer-motion'

interface UserEntities {
  id: number;
  nip: string;
  nama_lengkap: string;
  email: string;
  role: string;
  status: string
}

const Accounts: React.FC = () => {
  const [row, setRow] = useState<UserEntities[]>([])
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const theme = createTheme({
    typography: {
      fontFamily: 'system-ui',
    },
  });

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'No',
      width: 50,
    },
    { field: 'nip', headerName: 'NIP', width: 200 },
    { field: 'nama_lengkap', headerName: 'Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'role', headerName: 'Role', width: 100 },
    { field: 'status', headerName: 'Status', width: 100 },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      headerAlign: 'center',
      renderCell: (params: GridRenderCellParams) => {
        const onClickHandler = () => {
          // Aksi yang ingin Anda lakukan ketika tombol ditekan
          console.log('Tombol ditekan untuk baris dengan ID:', params.row.id);
        };

        return (
          <>
            <Button onClick={onClickHandler} color='success'>
              <EditIcon />
            </Button>
            <Button onClick={onClickHandler} color='error'>
              <DeleteIcon />
            </Button>
          </>
        )
      },
    },
  ];
  const fetchUser = async () => {
    try {
      const userService = new UserService();
      const fetchedUser: UserEntity = await userService.getAllUser()
      const users = fetchedUser.data.map((result: any, index: number) => ({
        id: index + 1,
        nama_lengkap: result.nama_lengkap,
        email: result.email,
        role: result.role,
        nip: result.nip,
        status: result.status == 'A' ? 'Active' : 'InActive',
      }));
      setRow(users)
      setIsLoading(false);
    } catch (error) {
      setError('Error Fetching Data')
      setIsLoading(false);
      console.log(error)
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleSearchData = (data: SearchAccountEntity) => {
    console.log(data)
    // fetchNews()
  }
  return (
    <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    transition={{ type: "spring", stiffness: 100, duration: 0.2 }}
    >
      <Navigation />
      <Container fixed>
        <h1>Accounts</h1>
        <Breadcrumbs title='Accounts' icon={<PeopleIcon sx={{ mr: 0.5 }} fontSize="inherit" />} />
        <Card sx={{ height: 'auto' }}>
          <SearchAccount search={handleSearchData} />
          <Grid container justifyContent="flex-end" >
            <Grid item sx={{ margin: '1em' }}>
              <Button variant="contained" color="success" onClick={handleOpen}>
                <AddIcon />
                Add User
              </Button>
            </Grid>
          </Grid>
          {isLoading ? (
            <LinearProgress /> // Show loading indicator
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <ThemeProvider theme={theme}>
              <DataGrid
                rows={row}
                columns={columns}
              />
            </ThemeProvider>
          )}
        </Card>
        <ModalUser open={open} handleClose={handleClose} />
      </Container>
    </motion.div>
  )
}

export default Accounts