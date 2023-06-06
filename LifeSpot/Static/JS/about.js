function addReview() {
    let review = new Map();
    review.set("name", prompt("Пожалуйста, введите ваше имя"));
    review.set("comment", prompt("Введите коментарий"));
    review.set("date", new Date().toLocaleString());
    if ((review.get("name") == null) || (review.get("comment") == null)
        || review.get("name") == "" || review.get("comment") == "") {
        return;
    }
    postComment(review);
}

const postComment = review => {
    document.getElementsByClassName('reviews')[0].innerHTML +=
        '<div class="review-text">\n' +
        `<p> <i> <b>${review.get("name")}</b>  ${review.get("date")}</i></p>` +
        `<p>${review.get("comment")}</p>` +
        '</div>';
}


function addComment() {
    let review = {};
    review.name = prompt("Пожалуйста, введите ваше имя");
    review.comment = prompt("Введите коментарий");
    review.date = new Date().toLocaleString();

    if ((review.name == null) || (review.comment == null)
        || review.name == "" || review.comment == "") {
        return;
    }
    else {
        console.log(review.date);
    }

    let likes = confirm('Разрешить пользователям оценивать ваш отзыв?')

    if (likes) {
        let comment = Object.create(review)
        comment.rate = 0;
        postReview(comment)
    } else {
        postReview(review)
    }
}

const postReview = review => {
    let likeCounter = '';
    let commentId = Math.random();
    if (review.hasOwnProperty('rate')) {
        likeCounter += '<button id="' + commentId + '" style="border: none" onclick="addLike(this.id)">' + `❤️ ${review.rate}</button>`
    }

    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review['name']}</b>  ${review['date']}${likeCounter}</i></p>` +
        `<p>${review['comment']}</p>` +
        '</div>';
}

function postCommnetByConstruct() {
    let review = new getReview();

    if ((review.name == null) || (review.comment == null)
        || review.name == "" || review.comment == "") {
        return;
    }
    else {
        console.log(review.date);
    }
    let likes = confirm('Разрешить пользователям оценивать ваш отзыв?')
    if (likes) {
        let comment = Object.create(review)
        comment.rate = 0;
        postReview(comment)
    } else {
        postReview(review)
    }
}

function getReview() {

    this.name = prompt("Пожалуйста, введите ваше имя");
    this.comment = prompt("Введите коментарий");
    this.date = new Date().toLocaleString();
}

function addLike(id) {
    let text = document.getElementById(id).innerText;
    let rate = 0;
    rate = Number(text.substring(2));
    rate += 1;
    document.getElementById(id).innerText = '❤️ ' + rate;
}

let currentImage = {
    index: 0,
    secondRound: false
};

function showImageBlock(id) {
    let images = document.getElementsByClassName("sliderImageBlock");
    for (let image of images) {
        image.style.display = 'none';
    }
    if (id >= images.length) {
        images[0].style.display = 'block';
        currentImage.secondRound = true;
    }
    if (id >= 0 && id < images.length) {
        images[id].style.display = 'block';
        currentImage.secondRound = false;
    }
    if (id < 0) {
        images[2].style.display = 'block';
        currentImage.secondRound = true;
    }
}

function next(currentIndex) {
    //console.log('Next');
    showImageBlock(currentIndex + 1);
    if (currentImage.secondRound)
        currentImage.index = 0;
    else
        currentImage.index++;
}
function previous(currentIndex) {
    //console.log('Previous');
    showImageBlock(currentIndex - 1);
    if (currentImage.secondRound)
        currentImage.index = 2;
    else
        currentImage.index--;
}