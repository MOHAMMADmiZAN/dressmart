import { Grid, Skeleton } from '@mui/material';
import Container from '@mui/material/Container';
import React from 'react';



function LoadingSkeleton() {

    let times = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

    return (
        <Container>
            <Grid container key={1} justifyContent={'center'} sx={{ margin: '20px' }}>
                {times.map((u, i) => (
                    <Skeleton
                        key={i * Math.random()}
                        variant="rounded" width={210} height={210}
                        sx={{ margin: '10px' }}
                    />
                ))}
            </Grid>
            /</Container>

    );
}

export default LoadingSkeleton;