import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import BoltIcon from "@mui/icons-material/Bolt";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import { Grid } from "@mui/material";
import LinkBtn from "../../../Molecules/Shared/LinkBtn/LinkBtn";
import Popup from './Popup';


function HeaderTopBar(): JSX.Element {


    return (
        <>
            <Grid container={true} justifyContent={`space-between`} sx={{ ...HeaderTopBar }}>
                <Grid item xs={4}>
                    <LinkBtn href={`/`} label={`Exclusive Party Wear Dresses`} leftIcon={<BoltIcon />} rightIcon={<ArrowCircleRightRoundedIcon />} styles={{ justifyContent: 'flex-start' }} />
                </Grid>
                <Grid item xs={4}>
                    <LinkBtn href={`/`} label={`Order Bulk & Get 10% Discount`} leftIcon={<DeliveryDiningIcon />} />
                </Grid>
                <Grid item xs={2}>
                    <LinkBtn href={`/`} label={`Help`} leftIcon={<ContactSupportIcon />} />
                </Grid>
                <Grid item xs={2}>
                    <Popup />
                </Grid>

            </Grid>
        </>
    );
}

export default HeaderTopBar;