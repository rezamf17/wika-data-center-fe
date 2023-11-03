import React, {useState} from 'react'
import '../../assets/css/HomeCss.css'
import {TextField, FormHelperText} from '@mui/material';
import {useNavigate } from 'react-router-dom'

const LoginBox: React.FC = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    
    const navigate = useNavigate ()

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(username == "" || password == ""){
            return setMessage("Silahkan lengkapi username dan password!")
        }
        navigate('/dashboard')
    }
    return (
        <>
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="user-box">
                        <TextField id="outlined-basic" label="Username" onInput={(e: any) => setUsername(e.target?.value)} value={username} variant="outlined" size='small' fullWidth />
                    </div>
                    <div className="user-box">
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        fullWidth
                        size='small'
                        onInput={(e: any) => setPassword(e.target?.value)}
                        value={password}
                        />
                    </div>
                    <button type="submit" >Login</button>
                    <FormHelperText sx={{color : '#b30000'}}>{message}</FormHelperText>
                </form>
            </div>
        </>
    )
}

export default LoginBox