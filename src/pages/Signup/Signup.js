import React, { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import './style.css'
import TextField from '@mui/material/TextField';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import Appbar from '../../components/Appbar/Appbar';
import { Link } from 'react-router-dom'


export default function Signup(props) {


  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [isLogged, setLogged] = useState(false)


  useEffect(() => {
    getData()
  }, [isLogged])



  const getData = () => {
    const user = localStorage.getItem('user')
    if (user) {
      setLogged(true)
    } else {
      setLogged(false)
    }
    //    console.log(JSON.parse(user))
  }




  const HandleLogin = () => {
    const data = {
      email: email,
      password: password
    }

    fetch('https://portal.darearqamsgd.edu.pk/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(data => {
        if (data.metadata.success) {
          alert('loged in')
          localStorage.setItem('user', JSON.stringify(data.payload))
          setLogged(true)

        }
      })
      .catch(err => {
        console.log(err)
      })



  }


  const HandleLogout = () => {
    localStorage.clear()
    setLogged(false)

  }




  return (
    <div style={{ backgroundColor: '#DFDDD9', height: '100vh' }}>
      <Appbar />

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',

          '& > :not(style)': {
            m: 5,
            width: 400,
            height: 510,
          },
        }}
      >

        <Paper

          square={true}
          elevation={0}>

          {
            isLogged == true ?
              <>

                <h1>You are logged in</h1>
                <Button
                  onClick={HandleLogout}
                  type="button" color="primary" className="form__custom-button">
                  Log out
                </Button>
              </>
              :

              <>

                <h1 style={{ marginLeft: 30 }}>Create your account</h1>
                <form className='form'>
                  <TextField

                    onChange={(e) => setemail(e.target.value)}
                    style={{ margin: 10 }} id="standard-basic" label="Name" type={'text'} variant="outlined" />
                  <TextField

                    onChange={(e) => setemail(e.target.value)}
                    style={{ margin: 10 }} id="standard-basic" label="Email" type={'email'} variant="outlined" />
                  <TextField

                    onChange={(e) => setpassword(e.target.value)}
                    style={{ margin: 10 }} id="standard-basic" label="Password" type={'password'} variant="outlined" />
                  <Button
                    onClick={HandleLogin}
                    type="button" color="primary" className="form__custom-button">
                      Sign up
                  </Button>
                  <Link to={'/'}>
                    <Button sx={{ m: 1 }}>Already have an account? Sign In</Button>
                  </Link>
                </form>
              </>


          }

        </Paper>


      </Box>
    </div>
  )
}
