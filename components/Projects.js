import GetImageURL, {GetTeaserURL} from './Images.js';

export default function Projects(projects, themes, about){
    return `
    
    <section id="projects">
        <div class="wrapper">
            <div class="project-list">
                ${SubmitButton(about)}
                ${ProjectItems(about, projects)}
                </div>
            </div>
        </div>
    </section>`;
}

export function SubmitButton(about){
    return `
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
    `
}

export function ProjectItems(about, projects){
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



export function handleProjectFilter(data){
    
    let conds = document.querySelectorAll('.filter input[name="project-filter"]');
    // console.log(conds);
    conds.forEach(cond=>cond.addEventListener('change', function(event){
        
        let checked = event.target.value; //Array.from(conds).filter(d=>d.checked).map(d=>d.value);
        console.log(checked);
        if (checked==='all'){
            document.querySelector('.project-list').innerHTML = ProjectItems(data.about, data.projects);
        }else{
            let filtered = data.projects.filter(d=>{
                // return d.id.some(id=>checked === checked.toLowerCase());
                return d.id === checked;
            });
            console.log('filtered', filtered);
            document.querySelector('.project-list').innerHTML += SubmitButton(data.about) + ProjectItems(data.about, filtered);
        }
    
    }));
    
}