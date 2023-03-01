console.log('First Line is executing in javaScript')

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('onscroll_animation_show')
        }else{
            entry.target.classList.remove('onscroll_animation_show')
        }
    });
});

const observer_one_time = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('onscroll_animation_show')
        }
    });
});

const observer_one_time_onetime = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('onscroll_animation_show_onetime')
        }
    });
});

const observer_one_time_profile_right = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('onscroll_animation_show_profile')
        }
    });
});

const onscroll_elements = document.querySelectorAll('.onscroll_animation_hidden')
const onscroll_right_elements = document.querySelectorAll('.onscroll_animation_hidden_right')
const onscroll_right_onetime_element = document.querySelectorAll('.onscroll_animation_hidden_right_onetime')
const onscroll_animation_hidden_right_profile = document.querySelectorAll('.onscroll_animation_hidden_right_profile')
onscroll_elements.forEach((element) => observer_one_time.observe(element));
onscroll_right_elements.forEach((element) => observer_one_time.observe(element));
onscroll_right_onetime_element.forEach((element) => observer_one_time_onetime.observe(element));
onscroll_animation_hidden_right_profile.forEach((element) => observer_one_time_profile_right.observe(element));


let WINDOW_HEIGHT = window.innerHeight / 2;
let WINDOW_WIDTH = window.innerWidth / 2;
const profile_picture_id = document.getElementById('home_container_profile_picture_id')
const home_content_container_id = document.getElementById('home_content_container_id')


if(WINDOW_HEIGHT > WINDOW_WIDTH)
{
    WINDOW_WIDTH = WINDOW_WIDTH / 1.5
    profile_picture_id.style.height = WINDOW_WIDTH + 'px';
    profile_picture_id.style.width = WINDOW_WIDTH + 'px';
    profile_picture_id.style.borderRadius = WINDOW_WIDTH + 'px';
    const profile_picture_translate_y = window.innerHeight * 0.30;
    // console.log('profile_picture_translate_x: ',profile_picture_translate_x)
    // profile_picture_id.style.translate = profile_picture_translate_x + 'px'
    profile_picture_id.style.transform = "translate(-50%,-"+ profile_picture_translate_y + "px)"
    home_content_container_id.style.top = home_content_container_id.offsetHeight + window.innerHeight * 0.22 + 'px'
}else{
    profile_picture_id.style.height = WINDOW_HEIGHT + 'px'
    profile_picture_id.style.width = WINDOW_HEIGHT + 'px'
    profile_picture_id.style.borderRadius = WINDOW_HEIGHT + 'px'
    const profile_picture_translate_x = window.innerWidth * 0.6;
    console.log('profile_picture_translate_x: ',profile_picture_translate_x)
    profile_picture_id.style.translate = profile_picture_translate_x + 'px'
    // home_content_container_id.style.top = home_content_container_id.offsetHeight + 'px'
}

const home_container_slider_background_div_id = document.getElementById('home_container_slider_background_div_id')
const aboutMe = document.getElementById('aboutMe')
const skills = document.getElementById('skills')
const certificate = document.getElementById('certificate')
const contact = document.getElementById('contact')
function slider(){
    home_container_slider_background_div_id.classList.toggle('active')
    aboutMe.classList.toggle('active')
    skills.classList.toggle('active')
    certificate.classList.toggle('active')
    contact.classList.toggle('active')
}


const about_me_right_section_id = document.getElementById('about_me_right_section_id');

const about_me_left_section_id = document.getElementById('about_me_left_section_id')

about_me_left_section_id.style.height = about_me_right_section_id.offsetHeight + 'px'

const right_top_corner_circle_id = document.getElementById('right_top_corner_circle_id');

right_top_corner_circle_id.style.height = right_top_corner_circle_id.offsetWidth + 'px';

right_top_corner_circle_id.style.borderRadius = right_top_corner_circle_id.offsetWidth + 'px';

console.log('right_top_corner_circle_id: ',right_top_corner_circle_id.offsetWidth + 'px')

const  educational_section_content_id = document.getElementById('educational_section_content_id')

const  educational_logo_1_common_id = document.getElementById('educational_logo_1_common_id')
const  educational_logo_2_common_id = document.getElementById('educational_logo_2_common_id')
const  educational_logo_3_common_id = document.getElementById('educational_logo_3_common_id')
const work_logo_1_common_id = document.getElementById('work_logo_1_common_id')
const work_logo_2_common_id = document.getElementById('work_logo_2_common_id')
const work_logo_3_common_id = document.getElementById('work_logo_3_common_id')


educational_logo_2_common_id.style.height = educational_section_content_id.offsetHeight + 'px'
educational_logo_2_common_id.style.width = educational_section_content_id.offsetHeight + 'px'

educational_logo_3_common_id.style.height = educational_section_content_id.offsetHeight + 'px'
educational_logo_3_common_id.style.width = educational_section_content_id.offsetHeight + 'px'


work_logo_1_common_id.style.height = educational_section_content_id.offsetHeight + 'px'
work_logo_1_common_id.style.width = educational_section_content_id.offsetHeight + 'px'
work_logo_2_common_id.style.height = educational_section_content_id.offsetHeight + 'px'
work_logo_2_common_id.style.width = educational_section_content_id.offsetHeight + 'px'
work_logo_3_common_id.style.height = educational_section_content_id.offsetHeight + 'px'
work_logo_3_common_id.style.width = educational_section_content_id.offsetHeight + 'px'

educational_logo_1_common_id.style.height = educational_section_content_id.offsetHeight + 'px'
educational_logo_1_common_id.style.width = educational_section_content_id.offsetHeight + 'px'

const skill_container_id = document.getElementById('skill_container_id')
const certificate_container_id = document.getElementById('certificate_container_id')
const contact_header_id = document.getElementById('contact_header_id')
const send_me_msg_container_id = document.getElementById('send_me_msg_container_id')
const contact_details_section_id = document.getElementById('contact_details_section_id')
const skill_logo_common = document.getElementsByClassName('skill_logo_common')
const certificate_logo_common = document.getElementsByClassName('certificate_logo_common')


send_me_msg_container_id.style.top = contact_header_id.offsetHeight*1.3 + 'px'
contact_details_section_id.style.top = contact_header_id.offsetHeight*1.3 + send_me_msg_container_id.offsetHeight + 'px'


const firstName = document.getElementById('firstName').value
const lastName = document.getElementById('lastName').value
const email = document.getElementById('email').value
const phone = document.getElementById('phone').value
const msg = document.getElementById('msg').value

console.log("First Name: "+firstName +"\n Last Name: "+ lastName + "\n Phone: " + phone + "\nEmail: "+email+
"\n Message: "+ msg)

function sendEmail(){
    console.log("First Name: "+firstName +"\n Last Name: "+ lastName + "\n Phone: " + phone + "\nEmail: "+email+
    "\n Message: "+ msg)
    // Email Code
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "developer.test.25.1999@gmail.com",
        Password : "FFD96ECC500FD4D6233CDD7DC328CD664289",
        To : 'saikarthikjana@gmail.com',
        From : "developer.test.25.1999@gmail.com",
        Subject : "Message from Viewer",
        Body : "First Name: "+firstName +"\n Last Name: "+ lastName + "\n Phone: " + phone + "\nEmail: "+email+
        "\n Message: "+ msg
    }).then(
      message => alert(message)
    );
}



function runtimeFunction(){
    skill_dimension_length = skill_container_id.offsetWidth/3;
    console.log('skill_dimension_length: ',skill_dimension_length)
    certificate_dimension_length = certificate_container_id.offsetWidth/1.5;
    console.log('certificate_dimension_length: ',certificate_dimension_length)

    for(i=0;i<skill_logo_common.length;i++){
        skill_logo_common[i].style.height = skill_dimension_length + 'px'
        skill_logo_common[i].style.width = skill_dimension_length + 'px'
    }
    for(i=0;i<certificate_logo_common.length;i++){
        certificate_logo_common[i].style.height = certificate_dimension_length + 'px'
        certificate_logo_common[i].style.width = certificate_dimension_length * 1.4 + 'px'
    }

}

runtimeFunction()
