import React, {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import Alert,{AlertColor} from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import AlertEntities from '../../domain/entities/AlertEntities'

const AlertComponent: React.FC<AlertEntities> = ({code, message, show}) => {
  const [open, setOpen] = useState<boolean>(false);
	const [severity, setSeverity] = useState<AlertColor | undefined>();
	
	useEffect(() => {
    if (code == true) {
			setSeverity('success')
		}else{
			setSeverity('error')
		}
		setOpen(show)
  }, [show]);
  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
          severity={severity}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {message}
        </Alert>
      </Collapse>
    </Box>
  );
}

export default AlertComponent