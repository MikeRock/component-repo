self.addEventListener('push', (e) => {
    const data = e.data.json()
    e.waitUntil(self.registration.showNotification(data.title, {
        body: 'TEST BODY',
        icon: 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png'
    }).catch(err => {
        console.error(err)
    }));
})