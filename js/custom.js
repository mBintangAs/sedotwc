// Get Current Year
function getCurrentYear() {
    var d = new Date();
    var year = d.getFullYear();
    document.querySelector("#displayDateYear").innerText = year;
}
getCurrentYear()

//client section owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});


function kirimWa() {
    const nama = $('#nama').val();
    const lokasi = $('#lokasi').val();
    const keluhan = $('#keluhan').val();
    window.open(`https://wa.me/62895339413256?text=Halo Permisi, saya ${nama}, dari ${lokasi} saya ada keluhan ${keluhan}`,"_blank")
}
function toggleMenu() {
    var fabMenu = document.getElementById('fabMenu');
    fabMenu.classList.toggle('active');
}

function redirectToWhatsApp() {
    // Ganti URL dengan URL WhatsApp yang diinginkan
    window.location.href = 'https://wa.me/62895339413256';
}

function makePhoneCall() {
    // Ganti nomor telepon dengan nomor yang diinginkan
    window.location.href = 'tel:+62895339413256';
}

/** google_map js **/
