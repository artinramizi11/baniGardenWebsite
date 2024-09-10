
const section1InfoButtons = document.querySelector('.section1InfoButtons');
const section1Title = document.querySelector('.section1Title');
const section1Description = document.querySelector('.section1Description');

const section5Clients = document.querySelector('.section5clients')
const section5LeftButton = document.querySelector('.section5LeftButton');
const section5RightButton = document.querySelector('.section5RightButton');
const section5ClientDescription = document.querySelectorAll('.clientDescription')
const section5ClientImage = document.querySelectorAll('.clientImage')
const section5circle = document.querySelectorAll('.circle');
const section5circles = document.querySelector('.section5circles')


section1InfoButtons.addEventListener('click', function(e){
    if(e.target.classList.contains(`button${e.target.dataset.id}`)){
        section1Title.textContent = `${section1data[e.target.dataset.id].dataTitle}`;
        section1Description.textContent = `${section1data[e.target.dataset.id].dataDescription}`
    } 
    for(let i=0; i<section1InfoButtons.children.length; i++){
        section1InfoButtons.children[i].style.backgroundColor = 'rgb(117, 182, 117)';
        section1InfoButtons.children[i].addEventListener('mouseover', function(e){
            e.target.style.backgroundColor = 'green'
        })
        section1InfoButtons.children[i].addEventListener('mouseout', function(e){
            e.target.style.backgroundColor = 'rgb(117, 182, 117)'
        })
    
        if(e.target == section1InfoButtons.children[i]){
            section1InfoButtons.children[i].style.backgroundColor = 'green';
            e.target.addEventListener('mouseout', function(e){
                e.target.style.backgroundColor = 'green'
            })

        
        } else if(e.target == section1InfoButtons) {
            return;
        }
    }
})



let sliderPage = 0;
let maxSliderPage = clients.length - 1;



section5RightButton.addEventListener('click',function(){
if(sliderPage == maxSliderPage) {
        sliderPage = 0;
    } else {
        sliderPage++;
    }

    updateTestimonailsClients()
    fixTestimonialsClientsPhotos()

    
    });


    section5LeftButton.addEventListener('click',function(){
       
        if(sliderPage == 0){
            sliderPage = 3;
        } else {
            sliderPage--;
        }

        updateTestimonailsClients()
    })

function updateTestimonailsClients(){
    section5Clients.innerHTML = `
    <div class="section5client">
            <div class="section5clientImage">
            </div>
            <div class="section5clientDescription">
                <span class="material-symbols-outlined">
                    chat
                    </span>
<p class="clientDescription">${clients[sliderPage].description1}</p>
<h1 class="clientName">${clients[sliderPage].name1}</h1>
            </div>
        </div>
        <div class="section5client">
            <div class="section5clientImage">
            </div>
            <div class="section5clientDescription">
                <span class="material-symbols-outlined">
                    chat
                </span>
<p class="clientDescription">${clients[sliderPage].description2}</p>
<h1 class="clientName">${clients[sliderPage].name2}</h1>
            </div>
        </div>
   `;
   for(let i=0; i<section5circle.length; i++){
    section5circle[i].style.backgroundColor = 'gray'
   }
   section5circle[sliderPage].style.backgroundColor = 'green';

}

updateTestimonailsClients();

function fixTestimonialsClientsPhotos(){
    const actualTestimonials = document.querySelectorAll('.section5clientImage');
actualTestimonials[0].style.background = `url(${clients[sliderPage].image1})`
actualTestimonials[1].style.background = `url(${clients[sliderPage].image2})`
for(let i=0; i<actualTestimonials.length; i++){
    actualTestimonials[i].style.backgroundSize = 'cover';
    actualTestimonials[i].style.backgroundPosition = 'center'
}

}


section5circles.addEventListener('click',function(e){
    sliderPage = e.target.dataset.id;
    updateTestimonailsClients();
    fixTestimonialsClientsPhotos()
})

let openMenu = true;

document.querySelector('.openMenu').addEventListener('click',function(){
    if(openMenu) {
        document.querySelector('.nav-lists').style.display = 'flex';
    document.querySelector('.openMenu').innerHTML = `
    <span class="material-symbols-outlined">
close
</span>`; 
openMenu = false;
    }  else {
        document.querySelector('.nav-lists').style.display = 'none';
        document.querySelector('.openMenu').innerHTML = `
         <span class="material-symbols-outlined">
                    menu
                    </span>`;
                    openMenu = true;
    }

})