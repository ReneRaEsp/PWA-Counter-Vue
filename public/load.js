if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(
        // eslint-disable-next-line no-unused-vars
        (reg) => console.log('Registro Exitoso')
    ).catch(
        err => console.log(err)
    )
}