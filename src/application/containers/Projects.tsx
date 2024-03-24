import React, { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'
import Breadcrumbs from '../components/BreadcrumbsComponent'
import SearchProject from '../components/SearchProject'
import ModalProject from '../components/ModalProject'
import SearchProjectEntity from '../../domain/entities/SearchProject'
import { Container, Card, Button, Grid } from '@mui/material'
import ApartmentIcon from '@mui/icons-material/Apartment';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ProjectService from '../../domain/usecase/usecaseProject'
import {Response, Project} from '../../domain/entities/entityProject'
import AddIcon from '@mui/icons-material/Add';
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import {IsoFormatDate} from '../../infra/Tools'

const Projects: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [row, setRow] = useState<Project[]>([])
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const theme = createTheme({
    typography: {
      fontFamily: 'system-ui',
    },
  });

  const navigate = useNavigate()
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'No', width: 50 },
    { field: 'projectName', headerName: 'Nama Proyek', width: 250 },
    { field: 'status', headerName: 'Status Project', width:200 },
    // { field: 'departemen', headerName: 'Departemen', width: 150 },
    // { field: 'location', headerName: 'Tempat Proyek', width: 150 },
    { field: 'startProject', headerName: 'Tanggal Berakhir Proyek', width: 220 },
    { field: 'endProject', headerName: 'Tanggal Berakhir Proyek', width: 220 },
    // { field: 'description', headerName: 'Deskripsi', width: 100 },
    {
      field: 'action',
      headerName: 'Action',
      width: 140,
      headerAlign: 'center',
      renderCell: (params: GridRenderCellParams) => {
        const onClickHandler = () => {
          navigate('/projects/detail')
          // console.log('Tombol ditekan untuk baris dengan ID:', params.row.id);
        };

        return <Button onClick={onClickHandler}>Detail</Button>;
      },
    },
  ];

    const fetchProject = async () => {
    try {
      const projectService = new ProjectService();
      const fetchedProject: Response = await projectService.getAllProject()
      console.log('fetch project', fetchedProject.data);
      const projects = fetchedProject.data.map((result:any, index:number) => ({
        id: index + 1,
        projectName: result.projectName,
        status: result.status,
        departemen: result.departemen,
        location: result.location,
        endProject: IsoFormatDate(result.endProject, "YYYY-MM-DD HH:mm:ss"),
        startProject: IsoFormatDate(result.startProject, "YYYY-MM-DD HH:mm:ss"),
        description: result.description,
        pj_proyek : result.pj_proyek
      }))
      setRow(projects) 
    } catch (error) {
      console.log(error);
      
    }
  }



  useEffect(() => {
    fetchProject();
  }, []);
  

  const handleSearchData = (data: SearchProjectEntity) => {
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
              rows={row}
              columns={columns}
            />
          </ThemeProvider>
        </Card>
        <ModalProject open={open} handleClose={handleClose} />
      </Container>
    </motion.div>
  )
}

export default Projects