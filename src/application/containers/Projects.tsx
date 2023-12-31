import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Breadcrumbs from '../components/BreadcrumbsComponent'
import SearchProject from '../components/SearchProject'
import ModalProject from '../components/ModalProject'
import SearchProjectEntity from '../../domain/entities/SearchProject'
import { Container, Card, Button, Grid } from '@mui/material'
import ApartmentIcon from '@mui/icons-material/Apartment';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';

const Projects: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const theme = createTheme({
    typography: {
      fontFamily: 'system-ui',
    },
  });

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'No', width: 50 },
    { field: 'projectName', headerName: 'Project Name', width: 200 },
    { field: 'documentTitle', headerName: 'Document Title', width: 200 },
    { field: 'documentCategory', headerName: 'Document Category', width: 150 },
    { field: 'department', headerName: 'Department', width: 150 },
    { field: 'type', headerName: 'Type', width: 100 },
    { field: 'industry', headerName: 'Industry', width: 100 },
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

        return <Button onClick={onClickHandler}>Detail</Button>;
      },
    },
  ];

  const rows = [];
  for (let i = 1; i < 10; i++) {
    rows.push({
      id: i,
      projectName: "Tamansari Lagoon",
      documentTitle: "Tamansari Lagoon Image",
      documentCategory: "Building",
      department: "WIKA Realty",
      type: "Realty",
      industry: "Wika"
    })
  }

  const handleSearchData = (data: SearchProjectEntity) => {
    console.log(data)
    // fetchNews()
  }
  return (
    <>
      <Navigation />
      <Container fixed>
        <h1>Projects</h1>
        <Breadcrumbs title='Projects' icon={<ApartmentIcon sx={{ mr: 0.5 }} fontSize="inherit" />} />
        <Card sx={{ height: 'auto' }}>
          <SearchProject search={handleSearchData} />
          <Grid container justifyContent="flex-end" >
            <Grid item sx={{ margin: '1em' }}>
              <Button variant="contained" color="success" onClick={handleOpen}>
                <AddIcon />
                Register Proyek
              </Button>
            </Grid>
          </Grid>
          <ThemeProvider theme={theme}>
            <DataGrid
              rows={rows}
              columns={columns}
            />
          </ThemeProvider>
        </Card>
        <ModalProject open={open} handleClose={handleClose} />
      </Container>
    </>
  )
}

export default Projects