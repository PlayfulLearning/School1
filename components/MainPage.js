import Navbar from './Navbar.js';
import About, {ShowHomeImage} from './About.js';
import Filter,  {ShowThemes} from './Filter.js';
import Footer from './Footer.js';
import Projects, {ProjectItems} from './Projects.js';


export default function MainPage(data){
    document.querySelector('.container').innerHTML = `
        ${Navbar(data.about)}
        ${About(data.about)}
        ${Filter(data.themes)}
        ${Projects(data.projects, data.about)}
        ${Footer(data.about)}
    `

    window.showThemes = function() {
        console.log('main dropdown');
        document.getElementById("myDropdown").classList.toggle("show");
    }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                }
            }
        }
    }
}

