import React from 'react'
import Navigation from '../components/Navigation'
import Breadcrumbs from '../components/BreadcrumbsComponent'
import {Container, Card, Button} from '@mui/material'
import ApartmentIcon from '@mui/icons-material/Apartment';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

const Projects : React.FC = () => {
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'firstName', headerName: 'First Name', width: 150 },
        { field: 'lastName', headerName: 'Last Name', width: 150 },
        { field: 'age', headerName: 'Age', type: 'number', width: 100 },
        {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell: (params: GridRenderCellParams) => {
            const onClickHandler = () => {
              // Aksi yang ingin Anda lakukan ketika tombol ditekan
              console.log('Tombol ditekan untuk baris dengan ID:', params.row.id);
            };
      
            return <Button onClick={onClickHandler}>Action</Button>;
          },
        },
      ];
      
      const rows = [
        { id: 1, firstName: 'John', lastName: 'Doe', age: 30 },
        { id: 2, firstName: 'Jane', lastName: 'Smith', age: 25 },
        { id: 3, firstName: 'Bob', lastName: 'Johnson', age: 40 },
      ];
      for (let i = 1; i < 10; i++) {
        rows.push({
            id : i+4,
            firstName : "asd",
            lastName : "Asd",
            age : 23
        })
      }
    return (
        <>
        <Navigation />
        <Container fixed>
            <h1>Projects</h1>
        <Breadcrumbs title='Projects' icon={<ApartmentIcon sx={{ mr: 0.5 }} fontSize="inherit"/>} />
        <Card sx={{height : 'auto'}}>
            <DataGrid
            rows={rows}
            columns={columns}
        />
        </Card>
        </Container>
        </>
    )
}

export default Projects