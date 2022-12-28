import React, {useState} from 'react';
import GradeIcon from '@mui/icons-material/Grade';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import {Box} from "@mui/material";
import {memo} from "react";

interface StarProps {
    rating: number,
}

function Star(starProps: StarProps): JSX.Element {
    const {rating} = starProps;
    const starArray: Array<React.ReactNode> = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starArray.push(<GradeIcon sx={{color: 'primary.main',fontSize:'16px'}}/>)
        } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            starArray.push(<StarHalfIcon sx={{color:'primary.main',fontSize:'16px'}}/>)
        } else {
            starArray.push(<StarOutlineIcon sx={{color: 'primary.main',fontSize:'16px'}}/>)
        }
    }


    return (

        <>
            <Box component={`div`} sx={{display: `flex`, alignItems: `center`}}>
                {
                    starArray.map((item, index) => {
                        return (
                            <Box component={`div`} key={index}>
                                {item}
                            </Box>
                        )
                    })

                }
            </Box>

        </>
    );
}

export default memo(Star);