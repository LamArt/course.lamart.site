function changeBackgroundImage() {
    let imgArr = ["1.bmp","2.bmp","3.bmp","4.bmp","5.bmp"];
    let num = Math.floor(Math.random() * (imgArr.length));
    let imageName = "url('static/background/" + imgArr[num]+ "')";
    // let block = document.getElementsByClassName('bg-image');
    // block.style.backgroundImage = imageName;
    document.body.style.backgroundImage = imageName;
}
document.addEventListener("DOMContentLoaded", changeBackgroundImage);


