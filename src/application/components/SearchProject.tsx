import React, {useState} from "react";
import {FormControl, CardHeader, Grid, TextField, Select, MenuItem, InputLabel, SelectChangeEvent, Button} from "@mui/material"
import SearchProjectEntity from "../../domain/entities/SearchProject";

interface SearchData {
  search : (data: SearchProjectEntity) => void
}
const SearchProject: React.FC<SearchData> = ({search}) => {
    const [type, setType] = useState('')
    const [projectName, setProjectName] = useState('')
    const [documentTitle, setDocumentTitle] = useState('')
    const [documentCategory, setDocumentCategory] = useState('')
    const [department, setDepartment] = useState('')
    const [industry, setIndustry] = useState('')

    const gridKeyStyle = {
        textAlign : 'left',
        marginLeft : '1em'
      }
      const gridValueStyle = {
        marginBottom : '1em'
      }
      
    const handleChangeType = (event: SelectChangeEvent) => {
        setType(event.target.value);
    };
    const handleChangeIndustry = (event: SelectChangeEvent) => {
        setIndustry(event.target.value);
    };
    const searchData = () => {
      const data:SearchProjectEntity = {
        ProjectName: projectName,
        DocumentTitle: documentTitle,
        DocumentCategory: documentCategory,
        Department: department,
        Type: type,
        Industry: industry,
    }
      search(data)
    }
    return (
        <>
        <CardHeader title='Filter' />
          <Grid container sx={gridValueStyle} spacing={2}>
            <Grid item sx={gridKeyStyle} xs={3}>
              Project Name
            </Grid>
            <Grid item xs={7}>
              <TextField id="projectName" value={projectName} onInput={ (e:any) => setProjectName(e.target?.value)} type="text" size='small' placeholder='Project Name'/>
            </Grid>
          </Grid>
          <Grid container sx={gridValueStyle} spacing={2}>
            <Grid item sx={gridKeyStyle} xs={3}>
              Document Title
            </Grid>
            <Grid item xs={7}>
              <TextField id="documentTitle" value={documentTitle} onInput={ (e:any) => setDocumentTitle(e.target?.value)} type="text" size='small' placeholder='Document Title'/>
            </Grid>
          </Grid>
          <Grid container sx={gridValueStyle} spacing={2}>
            <Grid item sx={gridKeyStyle} xs={3}>
              Document Category
            </Grid>
            <Grid item xs={7}>
              <TextField id="documentCategory" value={documentCategory} onInput={ (e:any) => setDocumentCategory(e.target?.value)} type="text" size='small' placeholder='Document Category'/>
            </Grid>
          </Grid>
          <Grid container sx={gridValueStyle} spacing={2}>
            <Grid item sx={gridKeyStyle} xs={3}>
              Department
            </Grid>
            <Grid item xs={7}>
              <TextField id="projectName" value={department} onInput={ (e:any) => setDepartment(e.target?.value)} type="text" size='small' placeholder='Department'/>
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
                onChange={handleChangeType}
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
                  value={industry}
                  onChange={handleChangeIndustry}
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
              <Button variant="contained" onClick={() => searchData()}>Search</Button>
            </Grid>
          </Grid>
        </>
    )
}

export default SearchProject