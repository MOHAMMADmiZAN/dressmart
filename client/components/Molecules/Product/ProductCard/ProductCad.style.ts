export const productCardStyle = {
    cursor: 'pointer',
    width: '90%',
    position: 'relative',
    transition: 'all 0.3s ease-in-out',
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
    bgcolor: 'rgba(0,0,0,0.4)',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    transform: 'scale(0)',
    transition: 'all 0.3s ease-in-out'

}