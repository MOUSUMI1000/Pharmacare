const slides= document.querySelectorAll(".slide");
var counter=0;

const buttonIds= ['homepage', 'doctorpage','loginpage'];

buttonIds.forEach(buttonId =>
{
const button=document.getElementById(buttonId)

button.onclick=function()
{

    if(buttonId==='homepage')
    {
        window.location.href='index.html';
    }
    else if(buttonId==='doctorpage')
    {
        window.location.href='FindDoctor.html';
    }
    else if(buttonId==='loginpage')
    {
        window.location.href='login.html';
    }
    button.onclick=null;
};
});

const imageIds=['box-content-image-soft','box-content-image-baby','box-content-image-summer','box-content-image-personal','box-content-image-supplement','box-content-image-skin','box-content-image-woman','box-content-image-protein','box-content-image-multivitamin','box-content-image-test','box-content-image-device','box-content-image-ayurveda'];

imageIds.forEach(imageId =>
{
    const image=document.getElementById(imageId)

    image.onclick=function()
    {
        if(imageId==='box-content-image-soft')
        {
            window.location.href='SoftProduct.html';
        }
        else if(imageId==='box-content-image-baby')
        {
            window.location.href='BabyCare.html';
        }
        else if(imageId==='box-content-image-summer')
        {
            window.location.href='Summer.html';
        }
        else if(imageId==='box-content-image-personal')
        {
            window.location.href='PersonalCare.html';
        }
        image.onclick=null;
    };
});

slides.forEach(
    (slide,index)=>
    {
        slide.style.left=`${index *100}%`;
    }
);

const goNext= () =>
{
    counter++;
    if (counter >= slides.length) {
        counter = 0;
    }
    slideimage(counter);
}
const goPrev =()=>
{
    counter--;
    if (counter < 0) {
        counter= slides.length - 1;
    }
    slideimage(counter);  
}

setInterval(() =>
{
    nextslide();
},2000);

const slideimage= () =>
{
    slides.forEach(
        (slide,index)=>
        {
            slide.style.transform= `translateX(${-counter*100}%)`;
        }
    )
};


function homepage()
{
    window.location.href("index.html");
}

function doctorpage()
{
    window.location.href("FindDoctor.html")
}

