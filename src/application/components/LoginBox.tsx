import React from 'react'
import '../../assets/css/HomeCss.css'
import {TextField} from '@mui/material';

const LoginBox: React.FC = () => {
    return (
        <>
            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <div className="user-box">
                        <TextField id="outlined-basic" label="Username" variant="outlined" size='small' fullWidth  />
                    </div>
                    <div className="user-box">
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        fullWidth
                        size='small'
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    )
}

export default LoginBox