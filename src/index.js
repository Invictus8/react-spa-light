const Component = () => {
    const element = document.createElement('div')

    element.innerHTML = 'Hello, World!'

    return element
}

document.body.appendChild(Component())

module.hot && module.hot.accept()
