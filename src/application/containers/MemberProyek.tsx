import React, {useState} from 'react'
import { motion } from 'framer-motion'
import {
  Container,
  Card,
  Grid,
  Button
} from '@mui/material'
import Breadcrumbs from '../components/BreadcrumbsComponent'
import Navigation from '../components/Navigation'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import RememberMeIcon from '@mui/icons-material/RememberMe';
import AddIcon from '@mui/icons-material/Add';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const MemberProyek: React.FC = () => {
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
  return (
    <motion.div>
      <Navigation />
      <Container fixed>
        <h1>Projects</h1>
        <Breadcrumbs title='Projects' icon={<RememberMeIcon sx={{ mr: 0.5 }} fontSize="inherit" />} />
        <Card sx={{ height: 'auto' }}>
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
      </Container>
    </motion.div>
  )
}

export default MemberProyek