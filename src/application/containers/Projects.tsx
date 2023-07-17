import React, {useState} from 'react'
import Navigation from '../components/Navigation'
import Breadcrumbs from '../components/BreadcrumbsComponent'
import {Container, Card, Button, CardHeader, Grid, TextField, Select, MenuItem, InputLabel, SelectChangeEvent, FormControl } from '@mui/material'
import ApartmentIcon from '@mui/icons-material/Apartment';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Projects : React.FC = () => {
  const [type, setType] = useState('')
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
  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value);
  };
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
          headerAlign : 'center',
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
            id : i,
            projectName : "Tamansari Lagoon",
            documentTitle : "Tamansari Lagoon Image",
            documentCategory : "Building",
            department : "WIKA Realty",
            type : "Realty",
            industry : "Wika"
        })
      }
    return (
        <>
        <Navigation />
        <Container fixed>
            <h1>Projects</h1>
        <Breadcrumbs title='Projects' icon={<ApartmentIcon sx={{ mr: 0.5 }} fontSize="inherit"/>} />
        <Card sx={{height : 'auto'}}>
          <CardHeader title='Filter' />
          <Grid container sx={gridValueStyle} spacing={2}>
            <Grid item sx={gridKeyStyle} xs={3}>
              Project Name
            </Grid>
            <Grid item xs={7}>
              <TextField id="projectName" type="text" size='small' placeholder='Project Name'/>
            </Grid>
          </Grid>
          <Grid container sx={gridValueStyle} spacing={2}>
            <Grid item sx={gridKeyStyle} xs={3}>
              Document Title
            </Grid>
            <Grid item xs={7}>
              <TextField id="projectName" type="text" size='small' placeholder='Document Title'/>
            </Grid>
          </Grid>
          <Grid container sx={gridValueStyle} spacing={2}>
            <Grid item sx={gridKeyStyle} xs={3}>
              Document Category
            </Grid>
            <Grid item xs={7}>
              <TextField id="projectName" type="text" size='small' placeholder='Document Category'/>
            </Grid>
          </Grid>
          <Grid container sx={gridValueStyle} spacing={2}>
            <Grid item sx={gridKeyStyle} xs={3}>
              Department
            </Grid>
            <Grid item xs={7}>
              <TextField id="projectName" type="text" size='small' placeholder='Department'/>
            </Grid>
          </Grid>
          <Grid container sx={gridValueStyle} spacing={2}>
            <Grid item sx={gridKeyStyle} xs={3}>
              Type
            </Grid>
            <Grid item xs={7}>
            <FormControl sx={{minWidth: 220 }}>
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={type}
                onChange={handleChange}
                label="Type"
                size='small'
              >
                <MenuItem value='Project'>Project</MenuItem>
                <MenuItem value='Tender'>Tender</MenuItem>
              </Select>
            </FormControl>
            </Grid>
          </Grid>
          <Grid container sx={gridValueStyle} spacing={2}>
            <Grid item sx={gridKeyStyle} xs={3}>
              Industry
            </Grid>
            <Grid item xs={7}>
              <FormControl sx={{minWidth: 220 }}>
                <InputLabel id="demo-simple-select-label">Industry</InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={type}
                  onChange={handleChange}
                  label="Type"
                  size='small'
                >
                  <MenuItem value='Project'>Building</MenuItem>
                  <MenuItem value='Bridge'>Bridge</MenuItem>
                  <MenuItem value='Roads'>Roads</MenuItem>
                  <MenuItem value='Airport'>Airport</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container sx={gridValueStyle} spacing={2}>
            <Grid sx={gridKeyStyle} item>
              <Button variant="outlined">Reset</Button>
            </Grid>
            <Grid item xs={9}>
              
            </Grid>
            <Grid item>
              <Button variant="contained">Search</Button>
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
        </>
    )
}

export default Projects