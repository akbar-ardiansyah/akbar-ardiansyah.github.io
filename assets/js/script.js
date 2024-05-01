document.querySelector('.bullet-red').addEventListener('click', function () {
    var container = document.querySelector('.flip-container');
    container.classList.add('flip');
    setTimeout(function () {
        container.classList.add('d-none');
        // container.classList.remove('flip');
    }, 1000); // Adjust the delay according to your preference
});
