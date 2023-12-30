const searchBar = document.getElementById('search')
const profilePic = document.getElementById('profile-pic')
const userName = document.getElementById('name')
const loc = document.getElementById('location')
const login = document.getElementById('loginn')
const bio = document.getElementById('bio-imp')
const following = document.getElementById('following')
const followers = document.getElementById('followers')
const numOfRepos = document.getElementById('num-repos')
const dateJoined = document.getElementById('date-joined-imp')

searchBar.addEventListener('keydown', (event) => handleEnterKey(event))
function handleEnterKey(event) {
    if (event.key == 'Enter') {
        search(searchBar.value)
        searchBtn.toggleAttribute('isactive')
        homeBtn.style.display = 'flex'
        navSearchBar.style.display = 'none'
        searchBtn.style.display = 'flex'
    }
}

async function search(username) {
    const userInfo = await fetch (`https://api.github.com/users/${username}`)
    const userData = await userInfo.json()

    login.innerText = userData.login
    login.setAttribute('href', `${userData.html_url}`)
    userName.innerText = userData.name
    profilePic.setAttribute('src', `${userData.avatar_url}`)
    loc.innerText = userData.location
    bio.innerText = userData.bio || 'No Bio'
    followers.innerText = userData.followers
    followers.setAttribute('href', `${userData.followers_url}`)
    following.innerText = userData.following
    following.setAttribute('href', `${userData.following_url}`)
    numOfRepos.innerText = userData.public_repos
    dateJoined.innerText = `${new Date(`${userData.created_at}`).getDate()}/${new Date(`${userData.created_at}`).getMonth()}/${new Date(`${userData.created_at}`).getFullYear()} `

    console.log(userData);
}