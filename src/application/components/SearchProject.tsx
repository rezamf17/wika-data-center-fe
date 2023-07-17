import React, {useState} from "react";
import {FormControl, CardHeader, Grid, TextField, Select, MenuItem, InputLabel, SelectChangeEvent, Button} from "@mui/material"

const SearchProject: React.FC = () => {
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
        </>
    )
}

export default SearchProject