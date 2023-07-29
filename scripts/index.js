const TWITTER_PATH = '../assets/twitter.png'
const DOGE_PATH = '../assets/doge.png'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const waitForElement = async (selector) => {
    while (!document.body) {
        await sleep(10)
    }

    return new Promise((resolve) => {
        console.log(`waiting for ${selector}!`)

        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector))
        }

        const observer = new MutationObserver((_) => {
            const element = document.querySelector(selector)
            if (element) {
                resolve(element)
                observer.disconnect()
            }
        })

        observer.observe(document.body, {
            childList: true,
            subtree: true
        })
    })
}

waitForElement('[aria-label="Loading…"]').then((element) => {
    const originalLogo = element.children[0]
    const newLogo = document.createElement('img')
    newLogo.src = chrome.runtime.getURL(TWITTER_PATH)
    newLogo.height = 55
    newLogo.width = 55
    newLogo.classList = originalLogo.classList
    element.replaceChild(newLogo, originalLogo)
})
