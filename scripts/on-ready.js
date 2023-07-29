document.querySelector("link[rel~='icon']").href = chrome.runtime.getURL(TWITTER_PATH)

waitForElement('[aria-label="Twitter"]').then((element) => {
    const container = element.children[0]
    container.innerHTML = ''

    const logo = document.createElement('img')
    logo.src = chrome.runtime.getURL(DOGE_PATH)
    logo.height = 42
    logo.width = 42
    container.appendChild(logo)
})
