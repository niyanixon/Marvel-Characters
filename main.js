document.querySelector('button').addEventListener('click', getHero)

function getHero(){
    const hero = document.querySelector('input').value.toLowerCase()
    const url = `/api/${hero}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('#govName').innerText = data.birthName
        document.querySelector('img').src = data.url
        document.querySelector('#superPower').innerText = data.superPower
    })
}