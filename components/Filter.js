import GetImageURL, {GetImageArr, GetEmbedVideo} from './Images.js';

export default function Filter(themes){
    return `
    <section id="filter" class="intro">
        <div class="text-wrapper">
            ${ThemeDropdown(themes)}
            <div class="row filter text-center">
                <input type="radio" name="project-filter" id="prj-all value="all" checked>
                <label for="prj-all">All</label>
                
                ${ThemeList(themes)}

            </div>
        </div>
    </section>
    <section id="filter">
        <div class="text-wrapper">
            <h1 class="title">${themes[0].name}</h1>
            <p>${themes[0].description}</p>
            <div class="project-img">
            </div>
            <a href="${themes[0].buttonlink}" target="_blank">
                <button class="button" style="margin-top: 30px; margin-bottom: 50px;">${themes[0].buttonlabel}</button>
            </a>
            <a href="${themes[0].resources}" target="_blank">
                <button class="button" style="margin-top: 30px; margin-bottom: 50px;">More Resources</button>
            </a>
        </div>    
    </section>`
}

export function ThemeDropdown(themes){
    return `
    <div class="dropdown">
        <button onclick="showThemes()" class="dropbtn">Choose Theme ↓ </button>
        <div id="myDropdown" class="dropdown-content">
            ${ThemeItems(themes)}
        </div>
    </div>`
}

export function ShowThemes() {
    document.getElementById("myDropdown").classList.toggle("show");
}

export function ThemeItems(themes) {
    return themes.map(d=>`
        <a href="#home">${(d.name)}</a>
        `).join('');
}

export function ThemeList(themes){
    return themes.map(d=>`
        <input type="radio" name="project-filter" id="prj-${d.name}" value="${d.name}" >
        <label for="prj-${d.name}">${d.name}</label>

    `).join('');
}