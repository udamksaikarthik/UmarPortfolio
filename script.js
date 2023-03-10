
const slider_menu_div_id = document.getElementById('slider_menu_div_id')
const main_container_id = document.getElementById('main_container_id')

function sliderMenu(){
    slider_menu_div_id.classList.toggle('active')
    setTimeout(()=>{main_container_id.classList.toggle('active')},500)
}