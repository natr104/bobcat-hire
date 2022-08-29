import { Typography, Box } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Home() {
    return (
        <div>
            <Typography variant='h4' sx={{mt: 2}}>A&K Troy Bobcat & Tipper Hire</Typography>
            <Typography variant='h5' sx={{mt: 1}}><PhoneIcon /> 0412 000 665</Typography>
            <Typography variant='h6' sx={{mt: 1}}>Adam Troy - The Bobcat Bloke for the Central Coast</Typography>
            <Box sx={{width: ['auto', 'auto', '75vw'], maxWidth: '960px', mx: 'auto', mt: 2}}>
                <img src={require('../assets/bobcat-hire-hero-img.jpg')} alt='A&K Troy Bobcat & Tipper Hire' style={{ height: 'auto', width: '100%' }}/>
            </Box>
        </div>
    )
}