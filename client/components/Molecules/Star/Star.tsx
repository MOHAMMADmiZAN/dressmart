import React, {useState} from 'react';
import GradeIcon from '@mui/icons-material/Grade';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import {Box} from "@mui/material";

interface StarProps {
    rating: number,
}

interface StarState {
    rating: number,
    starArray: Array<React.ReactNode>,
}

function Star(starProps: StarProps): JSX.Element {
    const [StarState] = useState<StarState>({rating: starProps.rating, starArray: []});
    const {rating, starArray} = StarState;

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starArray.push(<GradeIcon style={{color: '#D4AF11'}}/>)
        } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            starArray.push(<StarHalfIcon style={{color: '#D4AF11'}}/>)
        } else {
            starArray.push(<StarOutlineIcon style={{color: '#D4AF11'}}/>)
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

export default Star;