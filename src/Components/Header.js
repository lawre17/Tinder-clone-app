import '../Css/Header.css'
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { IconButton } from '@mui/material';
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';

function Header({ backButton }) {
    const history = useNavigate();
    return (  
        <div className='header-container'>
            <div className='header'>
                {backButton ? (
                   
                    <IconButton onClick={()=> history(backButton)}>
                        <ArrowBackIosNewIcon className='header-icon' fontSize='large'/>
                    </IconButton>

                ): (
                        
                <Link to='/profile'>
                    <IconButton>
                        <PersonIcon className='header-icon' fontSize='large'/>
                    </IconButton>
                </Link>
                )}
                <Link to='/'>
                    <IconButton>
                    <img className='header-logo' src={logo} alt='logo' />
                    </IconButton>
                </Link>
                <Link to='/chats'>
                    <IconButton>
                        <ForumIcon className='header-icon' fontSize='large'/>
                    </IconButton>
                </Link>
            </div>
        </div>
    );
}

export default Header;