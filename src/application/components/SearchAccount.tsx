import React, {useState} from "react";
import {FormControl, CardHeader, Grid, TextField, Select, MenuItem, InputLabel, SelectChangeEvent, Button} from "@mui/material"
import SearchAccountEntity from '../../domain/entities/SearchAccount'
interface SearchData {
  search : (data : SearchAccountEntity) => void
}
const SearchAccount: React.FC<SearchData> = ({search}) => {
    const [nip, setNip] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [nomorHP, setNomorHP] = useState('')
    const [role, setRole] = useState('')
    const [status, setStatus] = useState('')
    const gridKeyStyle = {
        textAlign : 'left',
        marginLeft : '1em'
      }
      const gridValueStyle = {
        marginBottom : '1em'
      }
      
    const handleChangeRole = (event: SelectChangeEvent) => {
        setRole(event.target.value);
    };

    const handleChangeStatus = (event: SelectChangeEvent) => {
        setStatus(event.target.value);
    };

    const searchData = () => {
      const data:SearchAccountEntity = {
        nip: nip,
        name: name,
        email: email,
        nomorHP: nomorHP,
        status: status,
        role: role,
    }
      search(data)
    }
    return (
        <>
        <CardHeader title='Filter' />
          <Grid container sx={gridValueStyle} spacing={2}>
            <Grid item sx={gridKeyStyle} xs={3}>
              NIP
            </Grid>
            <Grid item xs={7}>
              <TextField id="nip" value={nip} onInput={ (e:any) => setNip(e.target?.value)} type="text" size='small' placeholder='NIP'/>
            </Grid>
          </Grid>
          <Grid container sx={gridValueStyle} spacing={2}>
            <Grid item sx={gridKeyStyle} xs={3}>
              Name
            </Grid>
            <Grid item xs={7}>
              <TextField id="name" value={name} onInput={ (e:any) => setName(e.target?.value)} type="text" size='small' placeholder='Name'/>
            </Grid>
          </Grid>
          <Grid container sx={gridValueStyle} spacing={2}>
            <Grid item sx={gridKeyStyle} xs={3}>
              Email
            </Grid>
            <Grid item xs={7}>
              <TextField id="email" value={email} onInput={ (e:any) => setEmail(e.target?.value)} type="text" size='small' placeholder='Email'/>
            </Grid>
          </Grid>
          <Grid container sx={gridValueStyle} spacing={2}>
            <Grid item sx={gridKeyStyle} xs={3}>
              Nomor HP
            </Grid>
            <Grid item xs={7}>
              <TextField id="nomorHP" value={nomorHP} onInput={ (e:any) => setNomorHP(e.target?.value)} type="text" size='small' placeholder='Nomor HP'/>
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
                value={role}
                onChange={handleChangeRole}
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

export default SearchAccount