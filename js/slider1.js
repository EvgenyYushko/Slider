(function mySlider() {
    let selectImage = 1;
    let _timeout, _interval;
    let mainImage = document.getElementById('main_image');
    let img_1 = document.getElementsByClassName('image1')[0];
    let img_2 = document.getElementsByClassName('image2')[0];
    let img_3 = document.getElementsByClassName('image3')[0];
    let img_4 = document.getElementsByClassName('image4')[0];
    let img_5 = document.getElementsByClassName('image5')[0];
    let img_6 = document.getElementsByClassName('image6')[0];

    let leftButton = document.getElementById('left_button');
    let rightButton = document.getElementById('right_button');

    img_1.addEventListener('click', function () {imageClick(1)});
    img_2.addEventListener('click', function () {imageClick(2)});
    img_3.addEventListener('click', function () {imageClick(3)});
    img_4.addEventListener('click', function () {imageClick(4)});
    img_5.addEventListener('click', function () {imageClick(5)});
    img_6.addEventListener('click', function () {imageClick(6)});

    leftButton.addEventListener('click', leftButtonClick);
    rightButton.addEventListener('click', rightButtonClick);
    
    document.addEventListener('keydown', function(e) {
        switch (e.code) {
            case 'ArrowRight':
                rightButtonClick();
                break;
            case 'ArrowLeft':
                leftButtonClick();
                break;
            default:
                break;
        }
    });

    timeOutStart();

    function timeOutStart(){
        _timeout = setTimeout(() => {
            _interval = setInterval(() =>{
                rightButtonClick(1);
            }, 3000);
        }, 10000);
    }

    function leftButtonClick(){
        refrashTimeOut();
        removeAllBorder();
        selectImage--;
        if(selectImage == 0) 
            selectImage = 6;

        mainImage.src = `img/img${selectImage}.jpg`;

        let el = document.getElementById(`img${selectImage}`);
        el.classList.add('white__border');
        slowImage();
    }

    function rightButtonClick(param){
        if(param != 1) refrashTimeOut();

        removeAllBorder();
        selectImage++;
        if(selectImage == 7) 
            selectImage = 1;

        mainImage.src = `img/img${selectImage}.jpg`;

        let el = document.getElementById(`img${selectImage}`);
        el.classList.add('white__border');
        slowImage();
    }

    function refrashTimeOut(){
        clearTimeout(_timeout); 
        clearInterval(_interval);
        timeOutStart();
    }

    function imageClick(imgNum){
        refrashTimeOut();
        removeAllBorder();

        let element = document.getElementById(`img${imgNum}`)
        element.classList.add('white__border');

        selectImage = imgNum;
        mainImage.src = `img/img${imgNum}.jpg`;
        slowImage();
    }

    function removeAllBorder(){
        for (let i = 1; i <= 6; i++) {
            let el = document.getElementById(`img${i}`);
            el.classList.remove('white__border');
        } 
    }

    function slowImage(){
        mainImage.style.opacity = 0
        let opac = 0;
        let timer = setInterval(() =>{
            if(opac <= 0.9){
                opac = opac + 0.1;
                mainImage.style.opacity = opac;
            }
            else clearInterval(timer);
        }, 50);
    }
})()
