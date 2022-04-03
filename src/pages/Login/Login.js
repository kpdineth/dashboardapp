import React, { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import './style.css'
import TextField from '@mui/material/TextField';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import Appbar from '../../components/Appbar/Appbar';
import { Link, useHistory } from 'react-router-dom'

export default function Login(props) {


  const history = useHistory()
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [isLogged, setLogged] = useState(false)


  useEffect(() => {
    getData()
  }, [isLogged])



  const getData = () => {
    const user = localStorage.getItem('userToken')
    if (user) {
      history.push('/Dashboard')
    } else {
      setLogged(false)
    }
    //    console.log(JSON.parse(user))
  }




  const HandleLogin = () => {


    // history.push('/Dashboard')



    const data = {
      email: email,
      password: password
    }

    fetch('https://mysocialapi1.herokuapp.com/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(data => {


        if (data) {
          // alert('loged in')
          localStorage.setItem('userToken', JSON.stringify(data.token))
          // setLogged(true)
          history.push('/Dashboard')


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
            height: 470,
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

                <h1 style={{ marginLeft: 27 }}>Login to your account</h1>
                <form className='form'>
                  <TextField

                    onChange={(e) => setemail(e.target.value)}
                    style={{ margin: 10 }} id="standard-basic" label="Email" type={'email'} variant="outlined" />
                  <TextField

                    onChange={(e) => setpassword(e.target.value)}
                    style={{ margin: 10 }} id="standard-basic" label="Password" type={'password'} variant="outlined" />
                  <Button
                    onClick={HandleLogin}
                    type="button" color="primary" className="form__custom-button">
                    Log in
                  </Button>
                  <Link to={'/signup'}>
                    <Button sx={{ m: 3 }}>Don't have an account? Sign up</Button>
                  </Link>
                </form>
              </>


          }

        </Paper>


      </Box>
    </div>
  )
}
