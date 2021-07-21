
import MainPage from './components/MainPage.js';
import ProjectPage from './components/ProjectPage.js';
import Navbar from './components/Navbar.js';


Promise.all([
      d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vSa2-2dvTEoDZJzuCmvkHQwwO3gGQMfjbNgO56gU5KmgJsluaOXgkuRd2UgWsKXeVeSQLhlQ6yv86KZ/pub?output=csv"),
      d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vQ9EXny1oBEoaY0kV0WOYWMJyByGx6uo76KsfnSZ413LNlNNr0uU_b86kHxyavIj_FCotd3Ir76rtHe/pub?output=csv")
      ])
      .then(([about, projects]) => {
        const data = {about, projects};
        console.log(data);

    // determine what page to render
    let params = new URLSearchParams(window.location.search);
    if (params.get('project')==null){
        MainPage(data);
    }else{
        let project = data.projects.find(d=>d.title===params.get('project'));
        Navbar('project')
        ProjectPage(project, about);
        hljs.highlightAll();
        lightGallery(document.getElementById('lightgallery'), {
            plugins: [lgZoom, lgThumbnail, lgVideo],
            speed: 500,
            thumbnail: true
        });
    }  
});



