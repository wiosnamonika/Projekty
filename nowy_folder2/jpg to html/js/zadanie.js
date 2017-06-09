document.addEventListener("DOMContentLoaded", function() {


// var contest = document.getElementsByClassName('contest');
// contest.style.display = 'block';
// setTimeout(hide, 2000);

// console.log(contest);
document.querySelector('img[alt=konkurs]').style.display = 'block';
setTimeout(hide, 2000);

var allLi = document.querySelectorAll('.gallery img');
var images = document.querySelectorAll('img');

for (var i = 0; i < allLi.length; i++) {
    allLi[i].addEventListener('click', function(el) {
        el.preventDefault();
        //console.log(this);
        // var new_url = this.querySelector('img[src]').getAttribute('src');
        var _tag = document.querySelector('body');
        var new_div = document.createElement('div');
        var new_img = document.createElement('img');
        var button = document.createElement('button');
        // new_img.setAttribute('src', new_url);
        button.classList.add('close');
        button.innerText = 'close';
        new_div.classList.add('fullScreen');
        new_div.appendChild(button);
        new_div.appendChild(new_img);


    })

}

})
