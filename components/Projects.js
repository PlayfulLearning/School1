import GetImageURL, {GetTeaserURL} from './Images.js';

export default function Projects(projects, themes, about){
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



export function handleProjectFilter(data){
    let conds = document.querySelectorAll('.filter input[name="project-filter"]');
    console.log(conds);
    conds.forEach(cond=>cond.addEventListener('change', function(event){
        
        let checked = event.target.value; //Array.from(conds).filter(d=>d.checked).map(d=>d.value);
        if (checked==='all'){
            console.log('all clicked');
            document.querySelector('.project-list').innerHTML = ProjectItems(data.projects);
        }else{
            let filtered = data.themes.filter(d=>{
                return d.tags.some(tag=>checked === tag.toLowerCase());
            });
            console.log('filtered', filtered);
        
            document.querySelector('.project-list').innerHTML = ThemeItems(filtered);
        }
    
    }));
    
}