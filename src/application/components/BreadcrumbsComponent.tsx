import {ReactNode} from 'react'
import { Breadcrumbs,
         Link,
         Typography
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import GrainIcon from '@mui/icons-material/Grain';

interface BreadcrumbsProps {
  icon: ReactNode;
  title : string;
}

const BreadcrumbsComponent: React.FC<BreadcrumbsProps> = ({title, icon}) => {
  console.log(title)
    return (  
        <>
        <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Wika Data Center
        </Link>
        <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
        >
          {icon}
          {title}
        </Typography>

      </Breadcrumbs>
        </>
    );
}

export default BreadcrumbsComponent;