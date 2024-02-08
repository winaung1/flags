const button = document.querySelector('button')
const body = document.querySelector('body')
const input = document.querySelector('input')
const flagContainer = document.querySelector('.flag-container')
const ul = document.querySelector('ul')

const flags = [
    {id: 1, country: 'USA', Flag: '/images/usa.jpeg', bg: 'https://images.pexels.com/photos/356844/pexels-photo-356844.jpeg'},
    {id: 2, country: 'Brazil', Flag: '/images/brazil.jpeg', bg: 'https://images.pexels.com/photos/2868240/pexels-photo-2868240.jpeg?auto=compress&cs=tinysrgb&w=800'},
    {id: 3, country: 'French', Flag: '/images/french.jpeg', bg: 'https://media.istockphoto.com/id/1185953092/photo/the-main-attraction-of-paris-and-all-of-europe-is-the-eiffel-tower-in-the-rays-of-the-setting.jpg?b=1&s=612x612&w=0&k=20&c=Zbku2ZmZvxljs5EyWJOsW91rYLFtpZVi_klejWdE2RA='},
    {id: 4, country: 'Italy', Flag: '/images/italy.jpeg', bg: 'https://images.pexels.com/photos/572780/pexels-photo-572780.jpeg?auto=compress&cs=tinysrgb&w=800'},
    {id: 5, country: 'Argentina', Flag: '/images/Argentina.jpeg', bg: 'https://images.pexels.com/photos/8281147/pexels-photo-8281147.jpeg?auto=compress&cs=tinysrgb&w=800'},
    {id: 6, country: 'UK', Flag: '/images/uk.jpeg', bg: 'https://images.pexels.com/photos/726484/pexels-photo-726484.jpeg?auto=compress&cs=tinysrgb&w=800'},
    {id: 7, country: 'Thailand', Flag: '/images/thailand.jpeg', bg: 'https://images.pexels.com/photos/1682748/pexels-photo-1682748.jpeg?auto=compress&cs=tinysrgb&w=800'},
    
]


input.addEventListener('input', (e) => {
    searchResult(e.target.value)
    if(input.value === ''){
        body.style.backgroundImage = "url('https://images.pexels.com/photos/269790/pexels-photo-269790.jpeg?auto=compress&cs=tinysrgb&w=600')"
    }
})

flags.map(flag => {
    const li = document.createElement('li')
    li.innerHTML = flag.country;

    ul.appendChild(li)
})

const searchResult = (prop) => {
    let result = ''
    flags.filter(flag => flag.country.toLowerCase() === prop.toLowerCase()).map(flag => {
            result += `
            <img src='${flag.Flag}'/>
            <p class='country'>${flag.country}</p>
            `
            body.style.backgroundImage = `url('${flag.bg}')`
    })
    flagContainer.innerHTML = result
}
    