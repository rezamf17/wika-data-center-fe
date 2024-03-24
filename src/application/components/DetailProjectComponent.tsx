import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Grid, Card } from '@mui/material';

// interface DashboardCard {
//     title: string;
//     count: number;
//     icon: React.ReactNode;
// }

const DetailProject: React.FC = () => {
    const gridStyle = {
        marginLeft: '1em',
        textAlign: 'left',
        padding: '0.5em'
    }


    return (
        <>
            <Grid container spacing={7} sx={gridStyle}>
                <Grid item xs={5}>
                    Nama Proyek
                </Grid>
                <Grid item xs={5}>
                    test
                </Grid>
            </Grid>
            <Grid container spacing={7} sx={gridStyle}>
                <Grid item xs={5}>
                    Status Proyek
                </Grid>
                <Grid item xs={5}>
                    test
                </Grid>
            </Grid>
            <Grid container spacing={7} sx={gridStyle}>
                <Grid item xs={5}>
                    Departemen
                </Grid>
                <Grid item xs={5}>
                    test
                </Grid>
            </Grid>
            <Grid container spacing={7} sx={gridStyle}>
                <Grid item xs={5}>
                    Tempat Proyek
                </Grid>
                <Grid item xs={5}>
                    test
                </Grid>
            </Grid>
            <Grid container spacing={7} sx={gridStyle}>
                <Grid item xs={5}>
                    Tanggal Mulai Proyek
                </Grid>
                <Grid item xs={5}>
                    test
                </Grid>
            </Grid>
            <Grid container spacing={7} sx={gridStyle}>
                <Grid item xs={5}>
                    Tanggal Berakhir Proyek
                </Grid>
                <Grid item xs={5}>
                    test
                </Grid>
            </Grid>
            <Grid container spacing={7} sx={gridStyle}>
                <Grid item xs={5}>
                    Description
                </Grid>
                <Grid item xs={5}>
                    <h1>HTML Ipsum Presents</h1>

                    <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>

                    <h2>Header Level 2</h2>

                    <ol>
                        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                        <li>Aliquam tincidunt mauris eu risus.</li>
                    </ol>
                </Grid>
            </Grid>
        </>
    );
}

export default DetailProject