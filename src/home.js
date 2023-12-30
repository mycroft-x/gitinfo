// async function getUser(params) {
//     const userInfo = await fetch ('https://api.github.com/users/mywdcroft-x')
//     const userData = await userInfo.json()
//     console.log(userData);
// }

// getUser()

const navSearchBar = document.getElementById('nav-searchbar')
const searchBtn = document.getElementById('search-btn')
const homeBtn = document.getElementById('home-btn')
const searchX = document.getElementById('search-x')

searchBtn.addEventListener('click', () => {
    searchBtn.toggleAttribute('isactive')
    if (searchBtn.hasAttribute('isactive')) {
        navSearchBar.style.display = 'flex'
        searchBtn.style.display = 'none'
        homeBtn.style.display = 'none'
    }
})
searchX.addEventListener('click', () => {
    searchBtn.toggleAttribute('isactive')
    if (!searchBtn.hasAttribute('isactive')) {
        homeBtn.style.display = 'flex'
        navSearchBar.style.display = 'none'
        searchBtn.style.display = 'flex'
    }
})

