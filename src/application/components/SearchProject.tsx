import React, { useState } from "react";
import {
  FormControl,
  CardHeader,
  Grid,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  SelectChangeEvent,

  Button
} from "@mui/material"
import SearchProjectEntity from "../../domain/entities/SearchProject";

interface SearchData {
  search: (data: SearchProjectEntity) => void
}
const SearchProject: React.FC<SearchData> = ({ search }) => {
  const [type, setType] = useState('')
  const [projectName, setProjectName] = useState('')
  const [status, setStatus] = useState('');
  const [departemen, setDepartemen] = useState('');
  const [industry, setIndustry] = useState('')

  const gridKeyStyle = {
    textAlign: 'left',
    marginLeft: '1em'
  }
  const gridValueStyle = {
    marginBottom: '1em'
  }

  const handleChangeType = (event: SelectChangeEvent) => {
    setType(event.target.value);
  };
  const handleChangeIndustry = (event: SelectChangeEvent) => {
    setIndustry(event.target.value);
  };
  const handleChangeStatus = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  };
  const handleChangeDepartemen = (event: SelectChangeEvent) => {
    setDepartemen(event.target.value);
  };
  const searchData = () => {
    const data: SearchProjectEntity = {
      ProjectName: projectName,
      Status: type,
      Departement: industry,
    }
    search(data)
  }
  return (
    <>
      <CardHeader title='Filter' />
      <Grid container sx={gridValueStyle} spacing={2}>
        <Grid item sx={gridKeyStyle} xs={3}>
          Nama Proyek
        </Grid>
        <Grid item xs={7}>
          <TextField id="projectName" value={projectName} onInput={(e: any) => setProjectName(e.target?.value)} type="text" size='small' placeholder='Project Name' />
        </Grid>
      </Grid>
      <Grid container sx={gridValueStyle} spacing={2}>
        <Grid item sx={gridKeyStyle} xs={3}>
          Status
        </Grid>
        <Grid item xs={7}>
          <FormControl size="small" sx={{minWidth : 220}}>
            <InputLabel id="demo-select-small-label">Status</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={status}
              label="Status"
              onChange={handleChangeStatus}
            >
              <MenuItem value={10}>On-Going</MenuItem>
              <MenuItem value={20}>Hold</MenuItem>
              <MenuItem value={30}>Finish</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container sx={gridValueStyle} spacing={2}>
        <Grid item sx={gridKeyStyle} xs={3}>
          Departement
        </Grid>
        <Grid item xs={7}>
          <FormControl size="small" sx={{minWidth : 220}}>
            <InputLabel id="demo-select-small-label">Departemen</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={departemen}
              label="Departemen"
              onChange={handleChangeDepartemen}
            >
              <MenuItem value={10}>Building</MenuItem>
              <MenuItem value={20}>Bim dan Riset</MenuItem>
              <MenuItem value={30}>Infrastruktur</MenuItem>
              <MenuItem value={30}>EPCC</MenuItem>
              <MenuItem value={30}>Knowledge Management</MenuItem>
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
          <Button variant="contained" onClick={() => searchData()}>Search</Button>
        </Grid>
      </Grid>
    </>
  )
}

export default SearchProject