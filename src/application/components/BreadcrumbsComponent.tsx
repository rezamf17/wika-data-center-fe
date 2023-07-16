import {ReactNode} from 'react'
import { Breadcrumbs,
         Link,
         Typography
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';

interface BreadcrumbsProps {
  icon: ReactNode;
  title : string;
}

const BreadcrumbsComponent: React.FC<BreadcrumbsProps> = ({title, icon}) => {
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