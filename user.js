window.addEventListener('load', () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        document.getElementById('usr').innerText =loggedInUser
       
    }
})