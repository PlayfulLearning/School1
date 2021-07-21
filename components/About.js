import GetImageURL, {GetImageArr, GetEmbedVideo} from './Images.js';

export default function About(about){
    return `
    <section id="about" class="intro">
        <div class="text-wrapper">
            <h1 class="title">${about[0].name}</h1>
            <p>${about[0].description}</p>
            <div class="project-img">
            </div>
                ${ShowHomeImage(about[0].image)}
                <a href="${about[0].buttonlink}" target="_blank">
                    <button class="button" style="margin-top: 30px; margin-bottom: 50px;">${about[0].buttonlabel}</button>
                </a>
                <a href="${about[0].resources}" target="_blank">
                    <button class="button" style="margin-top: 30px; margin-bottom: 50px;">More Resources</button>
                </a>
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
