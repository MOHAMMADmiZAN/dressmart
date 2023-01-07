let userData;
let jwt: string = '';

const GetJwt = () => {
  if (typeof window !== 'undefined') {
    // You now have access to `window`
    userData = window.localStorage.getItem('[EasyPeasyStore][0][Auth]')
    if (userData) {
      let {data} = JSON.parse(userData)
      jwt = data.AuthToken
    }
  }
  return jwt
}



export default GetJwt
