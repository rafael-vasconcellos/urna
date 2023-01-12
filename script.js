

let i, userentry
let session = 0
let p = document.querySelector('.display-text')
let display_input = document.querySelector('.display_input')
let display_info = document.querySelector('.display_info')
let n0 = document.querySelector('.n0')
let n1 = document.querySelector('.n1')
let n2 = document.querySelector('.n2')
let n3 = document.querySelector('.n3')
let n4 = document.querySelector('.n4')
let n5 = document.querySelector('.n5')
let n6 = document.querySelector('.n6')
let n7 = document.querySelector('.n7')
let n8 = document.querySelector('.n8')
let n9 = document.querySelector('.n9')
let confirma = document.querySelector('.n-confirma')
document.querySelector('.n-branco').onclick = () => {
    display_info.innerHTML = '<p>Tem certeza que deseja votar em branco?</p>'
    display_input.innerHTML = ''
    confirma.onclick = next
}

document.querySelector('.n-corrige').onclick = () => {
    display_info.innerHTML = '' ; userentry = "" ; i = 0
    inputs_for()
}

next()

n0.onclick = () => insert(n0.innerHTML, i)
n1.onclick = () => insert(n1.innerHTML, i)
n2.onclick = () => insert(n2.innerHTML, i)
n3.onclick = () => insert(n3.innerHTML, i)
n4.onclick = () => insert(n4.innerHTML, i)
n5.onclick = () => insert(n5.innerHTML, i)
n6.onclick = () => insert(n6.innerHTML, i)
n7.onclick = () => insert(n7.innerHTML, i)
n8.onclick = () => insert(n8.innerHTML, i)
n9.onclick = () => insert(n9.innerHTML, i)

function insert(n, index) {

    if (index < display_input.children.length) {
    userentry += n
    display_input.children[i].textContent = n
    i++

    if (index == display_input.children.length-1) { check() }

    }
}


function check() {
    if (userentry == 0 && session != 'Presidente') {
        display_info.innerHTML = 'Tem certeza que deseja anular seu voto?'
        confirma.onclick = next
        return undefined
    }

    if (session == 'Presidente' && userentry==13) {userentry=22 ; candidatos[candidatos.length-2].foto = candidatos[candidatos.length-2].foto2}
    else if (session == 'Presidente' && userentry==22) {userentry=13 ; candidatos[candidatos.length-3].foto = candidatos[candidatos.length-3].foto2}
    
    let db = candidatos.filter(indice => {return indice.cargo == session})
    let search = db.find( (indice) => {return indice.id == userentry} )
    if (search !== undefined) { 
        display_info.innerHTML = `<img src="${search.foto}" width="200" height="200"><p style="margin-left: 10px;">${search.nome}</p>`
        confirma.onclick = next

    } else { display_info.innerHTML = '<p>Candidato não encontrado!</p>' }

}





function next() {

userentry = ""
i = 0
display_info.innerHTML = ''
confirma.onclick = null

    switch(session) {
        case 0:
        p.textContent = 'Insira seu voto para deputado estadual:'
        session = "Deputado Estadual"
        inputs_for()


        break
        case "Deputado Estadual":
        p.textContent = 'Insira seu voto para deputado federal:'
        session = "Deputado Federal"
        inputs_for()


        break
        case "Deputado Federal":
        p.textContent = 'Insira seu voto para governador:'
        session = "Governador"
        inputs_for()


        break
        case "Governador":
        p.textContent = 'Insira seu voto para senador:'
        session = "Senador"
        inputs_for()


        break
        case "Senador":
        p.textContent = 'Insira seu voto para presidente:'
        session = "Presidente"
        inputs_for()


        break
        case "Presidente":
        p.textContent = 'Sessão finalizada!'
        display_input.innerHTML = ''

        default: console.log('nope')
    }
}


function inputs_for() {

    let number
    if (session === 'Deputado Estadual') {number = 5} else if (session === 'Deputado Federal') {number = 4} else if (session === 'Senador') {number = 3} else {number = 2}
    

    display_input.innerHTML = ''
    for (ii=1 ; ii<=number ; ii++) {
        display_input.innerHTML += '<span class="input"></span>'
    }
}



let aside = document.querySelector('aside')
for (let index of candidatos) {
    let div = document.createElement('div') ; div.classList.add("user-info")
    div.innerHTML = `
        <img src="${index.foto}" width="100" height="100">
        <p style="margin-left: 10px;">
            <b>${index.nome}</b><br>
            ${index.cargo}<br>
            <b>${index.id.toString()}</b>
        </p>
    `
    if (index.id != 0) {aside.append(div)}
}