document.querySelector('form')
    .addEventListener('submit', e =>{
        e.preventDefault()
        const datos = Object.fromEntries(
            new FormData(e.target)
        )
        const data = (JSON.stringify(datos))
        console.log(JSON.parse(data))
    })