// Set favicon
document.querySelector("link[rel~='icon']").href = chrome.runtime.getURL('../assets/favicon.png')

function waitForElement(selector) {
    return new Promise((resolve) => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector))
        }

        const observer = new MutationObserver((_) => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector))
                observer.disconnect()
            }
        })

        observer.observe(document.body, {
            childList: true,
            subtree: true
        })
    })
}

waitForElement('[aria-label="Loading…"]').then((container) => {
    container.innerHTML = ''
})

waitForElement('[aria-label="Twitter"]').then((element) => {
    const container = element.children[0]
    container.innerHTML = ''

    const icon = document.createElement('img')
    icon.src = chrome.runtime.getURL('../assets/logo.png')
    icon.height = 42
    icon.width = 42
    container.appendChild(icon)
})
