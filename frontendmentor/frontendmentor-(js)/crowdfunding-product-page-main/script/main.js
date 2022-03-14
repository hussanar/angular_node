const header = document.querySelector('#header');
((page) => {

    page.addEventListener('scroll', () => {
        (page.pageYOffset > 40) ? header.classList.add('show-bg'): header.classList.remove('show-bg');
    });

})(window);

((burger) => {

    const navLinks = document.querySelector('.nav-links');
    const modalContainer = document.querySelector('.modal-container');
    burger.addEventListener('click', (e) => {
        //show nav-links mobile device
        if (e.target.classList.contains('burger-btn') || e.target.classList.contains('line') || e.target.classList.contains('bg-nav-links')) {


            // make animation while the link shows
            document.querySelectorAll('.nav-links li').forEach(li => li.classList.toggle('show'));

            document.body.classList.toggle('non-scroll');
            document.querySelector('.bg-nav-links').classList.toggle('active');
            navLinks.classList.toggle('show');
            document.querySelectorAll('.line').forEach(line => line.classList.toggle('active'));

        }
    });

})(document.body);

// show modal
const modalContainer = document.querySelector('.modal-container');
const modal = document.getElementById('modal');
document.querySelector('.btn-back').addEventListener('click', (e) => {

    e.preventDefault();
    modalContainer.classList.add('show');
    modal.classList.add('show');
    document.body.classList.add('non-scroll');

});
// close modal
document.querySelector('.close-modal-btn').addEventListener('click', () => {

    modalContainer.classList.remove('show');
    modal.classList.remove('show');
    document.body.classList.remove('non-scroll');

});