export const GlobalCartStyle =
    {
        backgroundColor: 'primary.main',
        borderRadius: '10px 0px 0px 10px',
        position: 'fixed',
        top: '50%',
        right: 0,
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '50px',
        height: '50px',
        padding: '30px auto',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            backgroundColor: 'primary.dark',
        }

    }