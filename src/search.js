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
const reposCont = document.getElementById('repos')

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
    const userInfo = await fetch(`https://api.github.com/users/${username}`)
    const userData = await userInfo.json()
    if (userData.message === "Not Found"){
        window.location.href = 'not-found'
        return;
    }
    if (userData.message !== "Not Found") {
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

        const userRepos = await fetch(userData.repos_url)
        const userReposData = await userRepos.json()

        for (const x in userReposData) {
            reposCont.innerHTML += `<li id="repo"> -- > <a href="${userReposData[x].html_url}">${userReposData[x].name}</a><li>`
            console.log(userReposData[x].name);
        }

        console.log(typeof(userReposData));
    }
    

}