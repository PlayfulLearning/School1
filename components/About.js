import GetImageURL, {GetImageArr, GetEmbedVideo} from './Images.js';

export default function About(about){
    return `
    <section id="about" class="intro">
        <div class="text-wrapper">
            <h1 class="project-title">${about[0].name}</h1>
            <div class="project-img">
            </div>
                ${ShowHomeImage(about[0].image)}
                
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
