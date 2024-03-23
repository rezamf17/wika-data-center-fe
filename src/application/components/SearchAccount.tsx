import React, {useState} from "react";
import {FormControl, CardHeader, Grid, TextField, Select, MenuItem, InputLabel, SelectChangeEvent, Button} from "@mui/material"
import SearchAccountEntity from '../../domain/entities/SearchAccount'
interface SearchData {
  search : (data : SearchAccountEntity) => void
  reset : () => void;
}
const SearchAccount: React.FC<SearchData> = ({search, reset}) => {
    const [searching, setSearch] = useState('')
    const [status, setStatus] = useState('')
    const gridKeyStyle = {
        textAlign : 'left',
        marginLeft : '1em'
      }
      const gridValueStyle = {
        marginBottom : '1em'
      }
      
    // const handleChangeRole = (event: SelectChangeEvent) => {
    //     setRole(event.target.value);
    // };

    const handleChangeStatus = (event: SelectChangeEvent) => {
        setStatus(event.target.value);
    };

    const searchData = () => {
      const data:SearchAccountEntity = {
        search: searching,
        status: status,
    }
      search(data)
    }

    const resetData = () => {
      setSearch('')
      setStatus('')
      reset()
    }
    return (
        <>
        <CardHeader title='Filter' />
          <Grid container sx={gridValueStyle} spacing={2}>
            <Grid item sx={gridKeyStyle} xs={3}>
              Search
            </Grid>
            <Grid item xs={7}>
              <TextField id="searching" value={searching} onInput={ (e:any) => setSearch(e.target?.value)} type="text" size='small' placeholder='Search'/>
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
                  value={status}
                  onChange={handleChangeStatus}
                  label="Type"
                  size='small'
                >
                  <MenuItem value='A'>Active</MenuItem>
                  <MenuItem value='I'>InActive</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container sx={gridValueStyle} spacing={2}>
            <Grid sx={gridKeyStyle} item>
              <Button variant="outlined" onClick={() => resetData()}>Reset</Button>
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

export default SearchAccount