import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Container,
  Card,
  Grid,
  Button,
  TextField,
  CardHeader
} from '@mui/material'
import Breadcrumbs from '../components/BreadcrumbsComponent'
import Navigation from '../components/Navigation'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import RememberMeIcon from '@mui/icons-material/RememberMe';
import AddIcon from '@mui/icons-material/Add';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ModalMemberProyek from '../components/ModalMemberProyek'

const MemberProyek: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const theme = createTheme({
    typography: {
      fontFamily: 'system-ui',
    },
  });

  const gridKeyStyle = {
    textAlign : 'left',
    marginLeft : '1em'
  }
  const gridValueStyle = {
    marginBottom : '1em'
  }

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'No', width: 50 },
    { field: 'nip', headerName: 'NIP', width: 200 },
    { field: 'role', headerName: 'Role', width: 150 },
    { field: 'namaMember', headerName: 'Nama Member', width: 200 },
    { field: 'namaProyek', headerName: 'Nama Proyek', width: 200 },
    { field: 'pjProyek', headerName: 'PJ Proyek', width: 100 },
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
      nip: "17111117",
      role: "PJ Proyek",
      namaMember: "Reza",
      namaProyek: "WIKA Realty",
      pjProyek: "Tatang",
    })
  }
  return (
    <motion.div>
      <Navigation />
      <Container fixed>
        <h1>Project Member</h1>
        <Breadcrumbs title='Projects' icon={<RememberMeIcon sx={{ mr: 0.5 }} fontSize="inherit" />} />
        <Card sx={{ height: 'auto' }}>
          <CardHeader title='Filter' />
            <Grid container sx={gridValueStyle} spacing={2}>
              <Grid item sx={gridKeyStyle} xs={3}>
                Search
              </Grid>
              <Grid item xs={7}>
                <TextField id="search" value={search} onInput={ (e:any) => setSearch(e.target?.value)} type="text" size='small' placeholder='Search'/>
              </Grid>
            </Grid>
          <Grid container justifyContent="flex-end" >
            <Grid item sx={{ margin: '3em' }}>
              <Button variant="contained" color="success" onClick={handleOpen}>
                <AddIcon />
                Tambah Member Proyek
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
      <ModalMemberProyek open={open} handleClose={handleClose} />
    </motion.div>
  )
}

export default MemberProyek