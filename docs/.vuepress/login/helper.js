export const STORAGE_KEY = 'user_auth_xxxxxxxxxxxx'

// Do user authorization verify
// export function checkAuth () 
// {
//   var auth = JSON.parse(localStorage.getItem(STORAGE_KEY))
//   return auth && Object.keys(auth).length
// }

export function checkAuth () 
{
  // return false;
  var auth = JSON.parse(localStorage.getItem(STORAGE_KEY))
  // console.log(auth)
  if(auth && auth.time){
    var preTime = new Date(auth.time)
    var nowTime = new Date().setHours(-1)
    if(nowTime > preTime) // 如果超过1h需重新登录
    {
        return false;
    }
    return auth && Object.keys(auth).length
  }
  else
  {
    return false;
  }
}