import { styled } from '@mui/system';
export const CardOrderOverLayContent= styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)'
 }));

export const productCardStyle = {
    cursor: 'pointer',
    width: '90%',
    position: 'relative',
    transition: 'all 0.3s ease-in-out',
    margin: '20px auto',
    '&:hover': {
        boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',
        transform: 'scale(1.1)',

        '& .MuiBox-root': {
            transform: 'scale(1)',
        }


    }

}

export const cardOrderOverLay = {
    position: 'absolute',
    bgcolor: 'rgba(0,0,0,0.6)',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    transform: 'scale(0)',
    transition: 'all 0.3s ease-in-out'


}




