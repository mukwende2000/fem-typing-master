import data from './data.json' with {type: 'json'}

const input = document.querySelector('#input')
const mainInterface = document.querySelector('.main-interface')

// document.addEventListener('DOMContentLoaded', () => input.focus())

const text = (data.easy[0].text).split('')

const char = 5


text.map((char) => {
    const el = document.createElement('span')
    el.textContent = char
    mainInterface.appendChild(el)
})

let counter = 0

document.addEventListener('keydown', (e) => {
    const currentLetter = text[counter]

    if (counter === text.length - 1) console.log('Done, congratulations')

    const nonCharKeys = ['Shift', 'Control']
    if (nonCharKeys.includes(e.key)) return

    if (e.key === 'Backspace') {
        counter--
        mainInterface.children[counter].style.color = 'var(--neutral)'
    } else if (e.key === currentLetter) {
        mainInterface.children[counter].style.color = 'green'
        counter++
    } else {
        mainInterface.children[counter].style.color = 'red'
        counter++
    }

    // input.value = ''

})
