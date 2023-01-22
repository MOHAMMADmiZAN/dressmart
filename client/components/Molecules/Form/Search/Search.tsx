import React, {memo} from 'react';
import {Paper,IconButton,InputBase} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {searchForm} from "./Search.style";



interface SEARCH_PROPS {
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => void;

}

const Search: React.FC<SEARCH_PROPS> = ({handleSearch,handleSubmit}) => {
    return (
        <>
            <Paper component={`form`} sx={{ ...searchForm }} onSubmit={handleSubmit}>
                <InputBase sx={{ ml: 1, flex: 1,}} placeholder="Search Product" inputProps={{ 'aria-label': 'Search Product' }} autoFocus={true} onChange={handleSearch}/>
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onSubmit={handleSubmit} >
                    <SearchIcon sx={{color:'#D4AF37'}} />
                </IconButton>
            </Paper>

        </>
    );
};

export default memo(Search);