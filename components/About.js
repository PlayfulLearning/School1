import GetImageURL, {GetImageArr, GetEmbedVideo} from './Images.js';

// return HTML for about section
export default function About(about, category){
    return `
    <section id="about" class="intro">
        <div class="text-wrapper">
            <h1 class="site-title">${about[0].name}</h1>
                ${ShowHomeImage(about[0].image)}
        </div>
    </section>
    <section id="filter">
        <div class="text-wrapper">
            <div class="row filter text-center">
                <input type="radio" name="project-filter" id="prj-all" value="all" checked>
                <label for="prj-all">All</label>
                
                ${CategoryList(category)}

            </div>
        </div>    
    </section>`
}

export function ShowHomeImage(image){
    if (image==="") {
        return '';
    }else {
        return `<img src="${GetImageURL(image)}" div class="project-teaser">`;
    }
}

export function CategoryDropdown(category){
    return `
    <div class="dropdown">
        <button onclick="showThemes()" class="dropbtn">Choose Theme ↓ </button>
        <div id="myDropdown" class="dropdown-content">
            ${CategoryItems(category)}
        </div>
    </div>`
}

export function ShowCategories() {
    document.getElementById("myDropdown").classList.toggle("show");
}

export function CategoryItems(category) {
    return category.map(d=>`
        <a href="#home">${(d.name)}</a>
        `).join('');
}

export function CategoryList(category){
    return category.map(d=>`
        <input type="radio" name="project-filter" id="prj-${d.name}" value="${d.name}" >
        <label for="prj-${d.name}">${d.name}</label>

    `).join('');
}