document.addEventListener("DOMContentLoaded", function() {
    let menu = document.querySelector('#menu-bars');
    let header = document.querySelector('header');
    let cursor1 = document.querySelector('.cursor-1');
    
    menu.onclick = () => {
        menu.classList.toggle('fa-times');
        header.classList.toggle('active');
    }

    window.onscroll = () => {
        menu.classList.remove('fa-times');
        header.classList.remove('active');
    }

    window.onmousemove = (e) => {
        cursor1.style.top = e.pageY + 'px';
        cursor1.style.left = e.pageX + 'px';
    }

    document.querySelectorAll('a').forEach(links => {
        links.onmouseenter = () => {
            cursor1.classList.add('active');
        }
        links.onmouseleave = () => {
            cursor1.classList.remove('active');
        }
    });
    let readMoreLinks = document.querySelectorAll('.read-more');

    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            let contentSummary = this.previousElementSibling.previousElementSibling;
            let contentDetails = this.previousElementSibling;
            contentDetails.style.display = (contentDetails.style.display === 'none') ? 'block' : 'none';
            contentSummary.style.display = (contentSummary.style.display === 'none') ? 'block' : 'none';
            if (contentDetails.style.display === 'block') {
                this.textContent = 'Read Less';
            } else {
                this.textContent = 'Read More';
            }
        });
    });
    document.getElementById('hire-me').addEventListener('click', function() {
        window.location.href = 'mailto:singamounika2003@gmail.com';
    });
});
    
