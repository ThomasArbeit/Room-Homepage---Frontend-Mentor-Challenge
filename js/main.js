let counter = 0;
const imgSlider = document.getElementById("imgSlider");
const titleSlider = document.getElementById('titleSlider');
const paragraphSlider = document.getElementById('paragraphSlider');
const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");


let text = [
    { 
        title : 'Discover innovative ways to decorate',
        paragraph : 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love'
    },
    {
        title : 'We are available all across the globe',
        paragraph : "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        title: "Manufactured with the best materials",
        paragraph : "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
];

promptText(counter);

function promptText(counter){
    titleSlider.textContent = text[counter].title;

    paragraphSlider.textContent = text[counter].paragraph;
}

nextBtn.addEventListener('click', function(e){
    e.preventDefault();
    slideLeft();
    
});
previousBtn.addEventListener('click', function(e){
    e.preventDefault();
    slideRight();
});

function slideLeft(){
    if (counter < 2){
        counter ++;
        let translate = (-100*counter);
        console.log(translate);
        imgSlider.style.transition = "transform 0.4s ease-in-out";
        imgSlider.style.transform = `translate(${translate}%)`;
    } else {
        counter = 0;
        imgSlider.style.transition = "transform 0.4s ease-in-out";
        imgSlider.style.transform = "translate(0%)";
    }
    console.log(counter);
    promptText(counter);
}

function slideRight(){
    if (counter > 0){
        counter--;
        let translate = (-100*counter);
        console.log(translate);
        imgSlider.style.transition = "transform 0.4s ease-in-out";
        imgSlider.style.transform = `translate(${translate}%)`;
    } else {
        counter = 2;
        imgSlider.style.transition = "transform 0.4s ease-in-out";
        imgSlider.style.transform = "translate(-200%)";
    }
    console.log(counter);
    promptText(counter);
}