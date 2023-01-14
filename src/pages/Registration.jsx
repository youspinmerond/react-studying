import { useState } from 'react'
import Header from '../components/Header'
function Registration()
{
  const [Login, setLogin] = useState('')
  const [Password, setPassword] = useState('')
  const [LoginDirty, setLoginDirty] = useState(false)
  const [PasswordDirty, setPasswordDirty] = useState(false)

  let disabled = Login.length >= 3 && Password.length >= 6 ? false : true

  function BlurHandler(e)
  {
    if(e.target.className === 'login') setLoginDirty(true)
    if(e.target.className === 'password') setPasswordDirty(true)
    if(Login.length > 3) setLoginDirty(false)
    if(Password.length > 6) setPasswordDirty(false)
  }

  function handlerLogin(e)
  {
    setLogin(e.target.value)
  }
  function handlerPassword(e)
  {
    setPassword(e.target.value)
  }
  return (
    <div>
      <Header/>
      <div className="validator">
        <form>
          {(LoginDirty && Login.length < 3) && <div className='err'>Login not enough letters</div>}
          {(PasswordDirty && Password.length < 6) && <div className='err'>Password not enough letters</div>}
          <label>Login</label><br/>
          <input onBlur={(e) => BlurHandler(e)} onChange={e => handlerLogin(e)} value={Login} className="login" type="text" placeholder='login' /><br/><br/>
          <label>Password</label><br/>
          <input onBlur={(e) => BlurHandler(e)} onChange={e => handlerPassword(e)} value={Password} className="password" type="password" placeholder='password' /><br/><br/>
          <input disabled={disabled} className="submit" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  )
}

export default Registration