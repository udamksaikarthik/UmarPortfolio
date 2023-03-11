
const slider_menu_div_id = document.getElementById('slider_menu_div_id')
const main_container_id = document.getElementById('main_container_id')

function sliderMenu(){
    slider_menu_div_id.classList.toggle('active')
    setTimeout(()=>{main_container_id.classList.toggle('active')},500)
}

function home(){
    setTimeout(()=>{window.location.href='#home'},500)
}
function skills(){
    setTimeout(()=>{window.location.href='#skills'},500)
}
function certifications(){
    setTimeout(()=>{window.location.href='#certifications'},500)
}
function journey(){
    setTimeout(()=>{window.location.href='#journey'},500)
}
function contact(){
    setTimeout(()=>{window.location.href='#contact'},500)
}