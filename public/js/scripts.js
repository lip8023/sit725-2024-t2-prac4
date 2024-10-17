const cardList = [
    {
        title: "Kitten 1",
        image: "images/kitten-1.png",
        link: "About Kitten 1",
        desciption: "Demo desciption about kitten 1"
    },
    {
        title: "Kitten 2",
        image: "images/kitten-2.png",
        link: "About Kitten 2",
        desciption: "Demo desciption about kitten 2"
    },
    {
        title: "Kitten 3",
        image: "images/kitten-3.png",
        link: "About Kitten 3",
        desciption: "Demo desciption about kitten 3"
    }
]
const clickMe = () => {
    $('#modal1').modal('open'); // 打开模态框
}
const submitForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();
    console.log("Form Data Submitted: ", formData);
}
const addCards = (items) => {
    items.forEach(item => {
    let itemToAppend = '<div class="col s4 center-align">'+
    '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.image+'">'+
    '</div><div class="card-content">'+
    '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div>'+
    '<div class="card-reveal">'+
    '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
    '<p class="card-text">'+item.desciption+'</p>'+
    '</div></div></div>';
    $("#card-section").append(itemToAppend)
    });
}
$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#clickMeButton').click(clickMe); // 修改这里
    $('#formSubmit').click(()=>{
    submitForm();})
    //addCards(cardList);
    getProjects();
    $('.modal').modal();
});

const getProjects = () => {
    $.get('/api/projects',(response) => {
    if(response.statusCode==200){
        addCards(response.data);
    }
    })
}