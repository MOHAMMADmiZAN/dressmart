import React, { useState } from 'react';
import { Box, Container, Grid, Paper } from "@mui/material";
import { navBarStyle } from './NavBar.style'
import Logo from "../../../Molecules/Logo/Logo";
import Search from "../../../Molecules/Form/Search/Search"
import LinkIcon from "../../../Molecules/Shared/LinkIcon/LinkIcon";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CartBadge from "../../../Molecules/Shared/CartBadge/CartBadge";
import { useRouter } from 'next/router';



function NavBar() {

    const router = useRouter()

    const [filterValue, setfilterValue] = useState('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        console.log(value)
        setfilterValue(value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        event.preventDefault()
        console.log(filterValue)
        if (filterValue !== '') {
            const words = filterValue.split(' ');
            const joined = words.join('-')
            router.push(`/filter/${joined}`)
        } else {
            alert('Set a value to filter')
        }
    }

    return (
        <>
            <Paper component={`div`} sx={{ ...navBarStyle }}>
                <Grid container={true} justifyContent={`space-between`} alignItems={`center`} >
                    <Grid item={true} md={2} ml={5}>
                        <Logo />
                    </Grid>
                    <Grid item={true} md={6} >
                        <Search handleChange={handleChange} handleSubmit={handleSubmit} />
                    </Grid>
                    <Grid item={true} sm={2} textAlign={`right`} mr={5}>
                        <LinkIcon href={`/`} icon={<FavoriteBorderIcon />} />
                        <CartBadge />
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
}

export default NavBar;