import GetImageURL, {GetImageArr, GetEmbedVideo} from './Images.js';

export default function Filter(themes){
    return `
    <section id="filter" class="intro">
        <div class="text-wrapper">
            <div class="row filter text-center">
                <input type="radio" name="project-filter" id="prj-all" value="all" checked>
                <label for="prj-all">All</label>
                
                ${ThemeList(themes)}

            </div>
        </div>
    </section>

    <section id="theme">
        <div class="text-wrapper theme-info">
        ${DefaultInfo()}
        </div>    
    </section>`
}

export function DefaultInfo(){
    return `
    <h1 class="title">All Projects</h1>
    `
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
        <input type="radio" name="project-filter" id="prj-${d.id}" value="${d.id}" >
        <label for="prj-${d.id}">${d.name}</label>

    `).join('');
}