import React from 'react'
import '../../assets/css/HomeCss.css'
import {TextField} from '@mui/material';
import {useNavigate } from 'react-router-dom'

const LoginBox: React.FC = () => {
    // const []
    
    const navigate = useNavigate ()

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault() 
        navigate('/dashboard')
    }
    return (
        <>
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="user-box">
                        <TextField id="outlined-basic" label="Username" variant="outlined" size='small' fullWidth  required/>
                    </div>
                    <div className="user-box">
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        fullWidth
                        size='small'
                        required
                        />
                    </div>
                    <button type="submit" >Login</button>
                </form>
            </div>
        </>
    )
}

export default LoginBox