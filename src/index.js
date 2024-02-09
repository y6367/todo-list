import generateJoke from "./generateJoke";
import './styles/main.scss'
import laughing from './assets/laughing.svg'

const laughImg = document.querySelector('#laughImg')
laughImg.src = laughing

console.log(generateJoke())