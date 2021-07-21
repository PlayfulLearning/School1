import GetImageURL, {GetTeaserURL} from './Images.js';

export default function Projects(projects, about){
    return `
    
    <section id="projects">
        <div class="wrapper">
            <div class="project-list">
                <div class="project-box">
                    <img src="assets/global/add-placeholder.png" div class="teaser">
                    <div class="info">
                        <div class="project-overview">
                            <div class="project-title">
                                <a href="${about[0].form}" target="_blank"><strong>Submit Project → </strong></a>
                            </div>
                        </div>
                    </div>
                </div> 
                ${ProjectItems(projects)}
            </div>
        </div>
    </section>`;
}

export function ProjectItems(projects){
    return projects.map(d=>`
        <div class="project-box">
                <img src="${(GetTeaserURL(d.images))}" div class="teaser">
                <div class="info">
                    <div class="project-overview">
                        <div class="project-title">
                            <a href="?project=${d.title}"><strong>${d.title}</strong></a>
                        </div>
                    <div class="project-subtitle">
                        ${d.subtitle}
                    </div>
                    <div class="project-authors">
                        ${d.authors}
                    </div>
                    
                </div>
            </div> 
        </div>
        `).join('');
}

