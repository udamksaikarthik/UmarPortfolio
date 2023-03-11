
const slider_menu_div_id = document.getElementById('slider_menu_div_id')
const main_container_id = document.getElementById('main_container_id')

function sliderMenu(){
    slider_menu_div_id.classList.toggle('active')
    setTimeout(()=>{main_container_id.classList.toggle('active')},500)
}

function home(){
    setTimeout(()=>{window.location.href='#home'},600)
}
function skills(){
    setTimeout(()=>{window.location.href='#skills'},600)
}
function certifications(){
    setTimeout(()=>{window.location.href='#certifications'},600)
}
function journey(){
    setTimeout(()=>{window.location.href='#journey'},600)
}
function contact(){
    setTimeout(()=>{window.location.href='#contact'},600)
}