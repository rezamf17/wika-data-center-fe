import React,{useState, useEffect} from 'react'
import Navigation from '../components/Navigation'
import Breadcrumbs from '../components/BreadcrumbsComponent'
import SearchAccount from '../components/SearchAccount'
import {Container, Card, Button, Grid} from '@mui/material'
import PeopleIcon from '@mui/icons-material/People';
import AddIcon from '@mui/icons-material/Add';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchAccountEntity from '../../domain/entities/SearchAccount'
import UserService from '../../domain/usecase/usecaseUser'
import UserEntity from '../../domain/entities/entityUser'

interface EntityUser {
  id: number;
  nip: string;
  nama_lengkap: string;
  email: string;
  role: string;
  status: string;
}

interface ApiResponse {
  code: number;
  message: string;
  data: EntityUser[];
}


const Accounts : React.FC = () => {
  const [row, setRow] = useState<UserEntity[]>([])
    const theme = createTheme({
        typography: {
          fontFamily: 'system-ui', 
        },
      });

      const columns: GridColDef[] = [
        { field: 'id', headerName: 'No', width: 50 },
        { field: 'nip', headerName: 'NIP', width: 200 },
        { field: 'nama_lengkap', headerName: 'Name', width: 200 },
        { field: 'email', headerName: 'Email', width: 150 },
        { field: 'role', headerName: 'Role', width: 100 },
        { field: 'status', headerName: 'Status', width: 100 },
        {
          field: 'action',
          headerName: 'Action',
          width: 200,
          headerAlign : 'center',
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
          const fetchedUser:UserEntity[] = await userService.getAllUser()
          setRow(fetchedUser)
        } catch (error) {
          console.log(error)
        }
      };

      useEffect(() => {
        fetchUser();
        console.log('twice')
      }, []);
      const rows = [];
      for (let i = 1; i < 10; i++) {
        rows.push({
            id : i,
            nip : "1510000022",
            name : "Amelia Suci Nurul",
            email : "nurul@gmail.com",
            nomor_hp : "08573234234",
            role : "Admin",
            status : "Active"
        })
      }

      const handleSearchData = (data: SearchAccountEntity) => {
        console.log(data)
        // fetchNews()
      }
    return (
        <>
        <Navigation />
        <Container fixed>
            <h1>Accounts</h1>
            <Breadcrumbs title='Accounts' icon={<PeopleIcon sx={{ mr: 0.5 }} fontSize="inherit"/>} />
        <Card sx={{height : 'auto'}}>
            <SearchAccount search={handleSearchData} />
          <Grid container justifyContent="flex-end" >
            <Grid item  sx={{margin : '1em'}}>
              <Button variant="contained" color="success">
              <AddIcon />
                Add User
              </Button>
            </Grid>
          </Grid>
          <ThemeProvider theme={theme}>
              <DataGrid
              rows={row}
              columns={columns}
            />
          </ThemeProvider>
        </Card>
        </Container>
        </>
    )
}

export default Accounts