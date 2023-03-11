console.log('First Line is executing in javaScript')

// const observer = new IntersectionObserver((entries)=>{
//     entries.forEach((entry)=>{
//         if(entry.isIntersecting){
//             entry.target.classList.add('onscroll_animation_show')
//         }else{
//             entry.target.classList.remove('onscroll_animation_show')
//         }
//     });
// });

const observer_one_time = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('onscroll_animation_show')
        }
    });
});

const onscroll_elements = document.querySelectorAll('.onscroll_animation_hidden')
const onscroll_right_elements = document.querySelectorAll('.onscroll_animation_hidden_right')
onscroll_elements.forEach((element) => observer_one_time.observe(element));
onscroll_right_elements.forEach((element) => observer_one_time.observe(element));



const slider_menu_div_id = document.getElementById('slider_menu_div_id')
const main_container_id = document.getElementById('main_container_id')
const contact_id = document.getElementById('contact')

function sliderMenu(){
    slider_menu_div_id.classList.toggle('active')
    setTimeout(()=>{main_container_id.classList.toggle('active')
    contact_id.classList.toggle('active')},500)
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