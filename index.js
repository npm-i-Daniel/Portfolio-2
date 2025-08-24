let boxes = document.querySelectorAll(".box")
let hamburger = document.querySelector('.hamburger');
let list = document.querySelector('.list');
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
let img1 = document.querySelector('.img-ui1')
let img2 = document.querySelector('.img-ui2')
let img3 = document.querySelector('.img-ui3')
let contact = document.querySelector('.contact')
let dp = document.querySelector('.part2 img')
let rembtn = document.querySelector('.removebtn')


lis.forEach(function (li, index) {
    li.addEventListener('click', function () {
        boxes[index].style.border = '2px solid white'
        boxes[index].style.boxShadow = '2px 2px 10px white'
        boxes[index].style.transform = 'scale(1.1)'
        content.style.display = 'flex'
        content.style.alignItems = "center"
        content.style.justifyContent = 'center'

    })

    li.addEventListener('mouseleave', function () {
        boxes[index].style.border = '2px solid black'
        boxes[index].style.boxShadow = 'none'
        boxes[index].style.height = '23vh'
        boxes[index].style.width = '450px'
        boxes[index].style.transform = 'scale(1)'
        content.style.display = 'flex'
        content.style.alignItems = "center"
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
        box.style.left = '50%';
        box.style.transform = 'translateX(-50%) scale(3.1)';
        nav.style.filter = 'blur(4px)'
        container.style.filter = 'blur(4px)'
        box.style.height = '28vh'
        box.style.width = "450px"
        box.style.zIndex = '4'
        remove[index].style.display = 'block'
        title[index].style.textAlign = 'start'
        title[index].style.fontSize = 'small'

        content.style.display = 'flex';
        content.style.alignItems = "center";
        content.style.justifyContent = 'center';

        progressbar.forEach(bar => {
            bar.style.display = "block"
        })

        cardset.style.display = "flex"
        img.style.display = "none"
        contact.style.display = 'block'
        contact.style.position = 'relative'
        contact.style.top = '0px'
        contact.style.left = '0px'
        content.style.display = 'flex'
        content.style.alignItems = "center"
        content.style.justifyContent = 'center'
        progressElements.forEach(el => {
            const skillLevel = el.getAttribute("data-skill");
            el.style.width = skillLevel + "%";
            el.style.transition = "10s linear "

            box.classList.add('expanded');
        });
    });



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
        img1.style.position = 'relative'
        img2.style.position = 'relative'
        img3.style.position = 'relative'
        img1.style.top = '-14px'
        img1.style.left = '-40px'
        img2.style.top = '-85px'
        img2.style.left = '0px'
        img3.style.top = '-160px'
        img3.style.left = '40px'
        contact.style.display = "block"
        contact.style.top = '-1px'
        contact.style.left = '-70px'
        content.style.display = 'flex'
        content.style.alignItems = "center"
        content.style.justifyContent = 'center'

        progressElements.forEach(el => {
            el.style.width = "0%";
        });

        box.classList.remove('expanded');
        content.style.display = 'flex';
content.style.alignItems ="center";
content.style.justifyContent = 'center';

    })
});

dp.addEventListener('click', function () {
    dp.style.transform = 'scale(1.8)'
    dp.style.borderRadius = '10px'
    rembtn.style.display = 'block'
    rembtn.style.color = 'white'
    rembtn.style.position = 'relative'
    rembtn.style.top = '-270px'
    rembtn.style.left = '240px'
    rembtn.style.backgroundColor = 'black'
    rembtn.style.border = '2px solid white'
    rembtn.style.borderRadius = '50%'
    rembtn.style.width = '20px'
})
rembtn.addEventListener('click', function () {
    dp.style.transform = 'scale(1)'
    dp.style.borderRadius = '50%'
    rembtn.style.display = 'none'
})

hamburger.addEventListener('click', () => {
  list.classList.toggle('active');
});