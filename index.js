let boxes = document.querySelectorAll(".box")
let lis = document.querySelectorAll('li')
let parent = document.querySelector('.parent')
let nav = document.querySelector('nav')
let container = document.querySelector('.container')
let content = document.querySelector('.content')
let title = document.querySelectorAll('.title')
let remove = document.querySelectorAll('.remove')
let progressbar = document.querySelectorAll(".progress-bar");
let progressElements = document.querySelectorAll(".progress");
let cardset = document.querySelector(".cardset")
let img = document.querySelector('.img-ui')
let contact = document.querySelector('.contact')


lis.forEach(function (li, index) {
    li.addEventListener('click', function () {
        boxes[index].style.border = '2px solid white'
        boxes[index].style.boxShadow = '2px 2px 10px white'
        boxes[index].style.transform = 'scale(1.1)'
        content.style.display = 'flex'
        content.style.alignItems ="center"
        content.style.justifyContent = 'center'

    })

    li.addEventListener('mouseleave', function () {
        boxes[index].style.border = '2px solid black'
        boxes[index].style.boxShadow = 'none'
        boxes[index].style.height = '23vh'
        boxes[index].style.width = '450px'
        boxes[index].style.transform = 'scale(1)'
        content.style.display = 'flex'
        content.style.alignItems ="center"
        content.style.justifyContent = 'center'
    })
})
boxes.forEach((box, index) => {
    box.addEventListener('mouseenter', function () {
        boxes[index].style.border = '2px solid white'
        // boxes[index].style.transform = 'scale(1.1)'
    })
    box.addEventListener('mouseleave', function () {
        boxes[index].style.border = '2px solid black'
        // boxes[index].style.transform = 'scale(0.9)'
    })
});

boxes.forEach((box, index) => {
    box.addEventListener('click', function () {
        box.style.position = 'absolute'
        box.style.top = '-240px'
        box.style.left = '385px'
        box.style.transform = 'scale(3.1)'
        nav.style.filter = 'blur(4px)'
        container.style.filter = 'blur(4px)'
        box.style.height = '28vh'
        box.style.width = "450px"
        box.style.zIndex = '4'
        remove[index].style.display = 'block'
        title[index].style.textAlign = 'start'
        title[index].style.fontSize = 'small'

        progressbar.forEach(bar => {
            bar.style.display = "block"
        })

        cardset.style.display = "flex"
        img.style.display = "none"
        contact.style.display = 'block'
        contact.style.position = 'relative'
        contact.style.top ='0px'
        contact.style.left = '0px'
        content.style.display = 'flex'
        content.style.alignItems ="center"
        content.style.justifyContent = 'center'
    })


    remove[index].addEventListener('click', function (event) {
        event.stopPropagation();
        box.style.transform = 'scale(0.9)'
        nav.style.filter = 'blur(0px)'
        container.style.filter = 'blur(0px)'
        box.style.position = 'relative'
        box.style.top = '-10px'
        box.style.left = '0px'
        box.style.height = '26vh'
        box.style.width = '485px'
        box.style.zIndex = '1'
        remove[index].style.display = 'none'
        title[index].style.textAlign = 'center'
        title[index].style.fontSize = '25px'
        progressbar.forEach(bar => {
            bar.style.display = "none"
        })
        cardset.style.display = "none"
        img.style.display = "block"
        img.style.position ="relative"
        img.style.left = '30px'
        img.style.top = '-3px'
        contact.style.display = "block"
        contact.style.top ='-1px'
        contact.style.left = '-70px'
        content.style.display = 'flex'
        content.style.alignItems ="center"
        content.style.justifyContent = 'center'
    });
})
window.addEventListener("DOMContentLoaded", function () {
    progressElements.forEach(el => {
        const skillLevel = el.getAttribute("data-skill");
        el.style.width = skillLevel + "%";
        el.style.transition = "10s linear "
    });
})
progressElements.forEach(el => {
    el.style.width = "0%";
});
