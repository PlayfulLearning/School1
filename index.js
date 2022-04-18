
import MainPage from './components/MainPage.js';
import ProjectPage from './components/ProjectPage.js';
import Navbar from './components/Navbar.js';

// load csv files and populate data
Promise.all([
      d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vS-o3cNDhXKVZzpOwsCVkFfPdZGq-E5RsqXnuFAxHw2uxbStOGh1FE5c6TbFsZU7t9tdauW2ZoiYi73/pub?output=csv"),
      d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vRm3TDoNdQD7sG-1TRfOTWfr-NZMilzpoAxbam72z1QvM34ysN0pxc8_A7Ed2TAGlB9-DCp1cOhl3K_/pub?output=csv"),
      d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vQ2h7rvX2OiyG4r8M7tYCpequxTKut0ZWOIWQvAcRb0rIYiiNmvN7pub0arPRoxFPDRm1SlFKe0iSni/pub?output=csv"),
      ])
      .then(([about, themes, projects]) => {
        const data = {about, themes, projects};
        console.log(data);

    // determine what page to render
    let params = new URLSearchParams(window.location.search);
    if (params.get('project')==null){
        MainPage(data);
    }else{
        let project = data.projects.find(d=>d.title===params.get('project'));
        Navbar('project')
        ProjectPage(project, data.projects);
        lightGallery(document.getElementById('lightgallery'), {
            plugins: [lgZoom, lgThumbnail, lgVideo],
            speed: 500,
            thumbnail: true
        });
        
        // apply HighlightJS
        setTimeout(function () {
            var pres = document.querySelectorAll("pre>code");
            for (var i = 0; i < pres.length; i++) {
                hljs.highlightBlock(pres[i]);
            }
            var options = {
                contentSelector: ".container",
                // Delay in ms used for `setTimeout` before badging is applied
                // Use if you need to time highlighting and badge application
                // since the badges need to be applied afterwards.
                // 0 - direct execution (ie. you handle timing
                loadDelay:0,
    
                // CSS class(es) used to render the copy icon.
                copyIconClass: "fa fa-copy",
                // CSS class(es) used to render the done icon.
                checkIconClass: "fa fa-check text-success",
              
                // hook to allow modifying the text before it's pasted
                onBeforeTextCopied: function(text, codeElement) {
                  return text;   //  you can fix up the text here
                }
            };
            window.highlightJsBadge(options);
        },10);
    } 
});
