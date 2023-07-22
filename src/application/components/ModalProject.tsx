import React, {useState} from 'react'
import { Grid, Modal, Box, Typography, TextField } from '@mui/material'

interface ModalProps {
    open: boolean;
    handleClose: () => void;
  }

const ModalProject: React.FC<ModalProps> = ({open, handleClose}) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90vw',
        backgroundColor: 'white',
        border: '2px solid #000',
        boxShadow: '0px 0px 24px rgba(0, 0, 0, 0.2)',
        padding: 3,
      };
      const headerBox = {
        backgroundColor: '#f2f2f2',
        padding: 2,
        border: '2px solid #000',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      }
      const bodyBox = {
        marginTop: '2em',
        width: '50vw'
      }
    return (
        <>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box sx={headerBox}>
              <Typography id="modal-modal-title" align='center' variant="h6" component="h2" gutterBottom>
                Register Proyek
              </Typography>
            </Box>
            <Box sx={bodyBox}>
              <Grid container direction="column">
                <Grid item xs={9}>
                  <Grid container spacing={2}>
                    <Grid item xs={5}>
                      Project Name
                    </Grid>
                    <Grid item xs={5}>
                      <TextField size='small'></TextField>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={5}>
                      Document Title
                    </Grid>
                    <Grid item xs={5}>
                      <TextField size='small'></TextField>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={5}>
                      Document Category
                    </Grid>
                    <Grid item xs={5}>
                      <TextField size='small'></TextField>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={5}>
                      Department
                    </Grid>
                    <Grid item xs={5}>
                      <TextField size='small'></TextField>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={5}>
                      Type
                    </Grid>
                    <Grid item xs={5}>
                      <TextField size='small'></TextField>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={5}>
                      Industry
                    </Grid>
                    <Grid item xs={5}>
                      <TextField size='small'></TextField>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={5}>
                  Project Photos
                </Grid>
                <Grid item xs={2}>
                  Project Photos
                </Grid>
                <Grid item xs={2}>
                  Project Photos
                </Grid>
              </Grid>

            </Box>
          </Box>
        </Modal>
        </>
    )
}

export default ModalProject