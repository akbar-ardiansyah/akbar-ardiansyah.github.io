document.querySelector('.bullet-red').addEventListener('click', function () {
    var container = document.querySelector('.flip-container');
    container.classList.add('flip');
    setTimeout(function () {
        container.classList.add('d-none');
        // container.classList.remove('flip');
    }, 1000); // Adjust the delay according to your preference
});

document.getElementById('twitter-card').addEventListener('mouseover', function () {
    $('#twitter-modal').modal('show');
    $('#twitter-modalLabel').text(' ');
    $('.modal-body').html('<iframe src="https://twitter.com/kbarvds" width="100%" height="500" title="Twitter Feed" frameborder="0" scrolling="no"></iframe>');

});