import React, {useState} from "react";
import {FormControl, CardHeader, Grid, TextField, Select, MenuItem, InputLabel, SelectChangeEvent, Button} from "@mui/material"

const SearchAccount: React.FC = () => {
    const [type, setType] = useState('')
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
    return (
        <>
        <CardHeader title='Filter' />
          <Grid container sx={gridValueStyle} spacing={2}>
            <Grid item sx={gridKeyStyle} xs={3}>
              NIP
            </Grid>
            <Grid item xs={7}>
              <TextField id="projectName" type="text" size='small' placeholder='NIP'/>
            </Grid>
          </Grid>
          <Grid container sx={gridValueStyle} spacing={2}>
            <Grid item sx={gridKeyStyle} xs={3}>
              Name
            </Grid>
            <Grid item xs={7}>
              <TextField id="projectName" type="text" size='small' placeholder='Name'/>
            </Grid>
          </Grid>
          <Grid container sx={gridValueStyle} spacing={2}>
            <Grid item sx={gridKeyStyle} xs={3}>
              Email
            </Grid>
            <Grid item xs={7}>
              <TextField id="projectName" type="text" size='small' placeholder='Email'/>
            </Grid>
          </Grid>
          <Grid container sx={gridValueStyle} spacing={2}>
            <Grid item sx={gridKeyStyle} xs={3}>
              Nomor HP
            </Grid>
            <Grid item xs={7}>
              <TextField id="projectName" type="text" size='small' placeholder='Nomor HP'/>
            </Grid>
          </Grid>
          <Grid container sx={gridValueStyle} spacing={2}>
            <Grid item sx={gridKeyStyle} xs={3}>
              Role
            </Grid>
            <Grid item xs={7}>
            <FormControl sx={{minWidth: 220 }}>
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={type}
                onChange={handleChange}
                label="Type"
                size='small'
              >
                <MenuItem value='Admin'>Admin</MenuItem>
                <MenuItem value='PJ Proyek'>PJ Proyek</MenuItem>
                <MenuItem value='Karyawan'>Karyawan</MenuItem>
              </Select>
            </FormControl>
            </Grid>
          </Grid>
          <Grid container sx={gridValueStyle} spacing={2}>
            <Grid item sx={gridKeyStyle} xs={3}>
              Status
            </Grid>
            <Grid item xs={7}>
              <FormControl sx={{minWidth: 220 }}>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
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
        </>
    )
}

export default SearchAccount