import Navbar from './Navbar.js';
import About, {ShowHomeImage} from './About.js';
import Footer from './Footer.js';
import Projects, {ProjectItems} from './Projects.js';


export default function MainPage(data){
    document.querySelector('.container').innerHTML = `
        ${Navbar(data.about)}
        ${About(data.about)}
        ${Projects(data.projects, data.about)}
        ${Footer(data.about)}
    `
}

