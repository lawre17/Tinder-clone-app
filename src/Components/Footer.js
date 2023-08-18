import '../Css/Footer.css'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';
function Footer() {
    return ( 
        <div className="footer-container">
            <div className='footer-items'>
                <IconButton>
                    <ReplayIcon fontSize='large' className='footer-replay'/>
                </IconButton>
                <IconButton>
                    <CloseIcon fontSize='large' className='footer-close'/>
                </IconButton>
                <IconButton>
                    <StarRateIcon fontSize='large' className='footer-star'/>
                </IconButton>
                <IconButton>
                    <FavoriteIcon fontSize='large' className='footer-fav'/>
                </IconButton>
                <IconButton>
                    <FlashOnIcon fontSize='large' className='footer-flash'/>
                </IconButton>
            </div>
        </div>
     );
}

export default Footer;