async function getUser(params) {
    const userInfo = await fetch ('https://api.github.com/users/mywdcroft-x')
    const userData = await userInfo.json()
    console.log(userData);
}

getUser()
