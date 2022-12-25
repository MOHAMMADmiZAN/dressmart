import React from 'react';
import {Paper,IconButton,InputBase} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {searchForm} from "./Search.style";

function Search() {
    return (
        <>
            <Paper component={`form`} sx={{ ...searchForm }}>
                <InputBase sx={{ ml: 1, flex: 1,}} placeholder="Search Product" inputProps={{ 'aria-label': 'Search Product' }} autoFocus={true}/>
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon sx={{color:'#D4AF37'}} />
                </IconButton>
            </Paper>
        </>
    );
}

export default Search;