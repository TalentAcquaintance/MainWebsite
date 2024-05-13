// refernce of header and footer element
const Header = document.getElementById("header")
const Footer = document.getElementById("footer")

//initiation header and footer
Header.innerHTML = header()
Footer.innerHTML = footer()

//reference of toggle an link elements
const links = document.querySelectorAll(".nav-link")


//setting active nav link based on current page
for (let link of links) {
    if (window.location.href.indexOf(link.href) > -1) {
        link.classList.add("active")
        if (link.classList.contains("dropdown-item"))
            link.parentElement.parentElement.parentElement.firstElementChild.classList.add("active")
    }

}



//function returning header Html template
function header() {
    const headerHtml = `    <nav class="navbar navbar-expand-md" style="box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.1);">
    <div class="container-fluid px-3 justify-content-start">
        <a class="navbar-brand me-auto mt-2" href="./Home.html"><span class="mx-4"><img
                    src="./Images/TAlogo_tranparent.png" style="height: 50px" /></span>Talent Acquaintance</a>
        <button class="btn navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <i class="fa-solid fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="nav-item mx-auto mt-2 mb-lg-0">
                <ul class="nav justify-content-center">
                    <li class="nav-item me-2">
                        <a class="nav-link" aria-current="page" href="./index.html">Home</a>
                    </li>
                    <li class="nav-item me-2 dropdown">
                            <a class="nav-link dropdown-toggle" href="./Services.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                            </a>
                
                        <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="./PermanentStaffing.html">Permanent Staffing</a></li>
                        <li><a class="dropdown-item" href="./ExecutiveSearch.html">Executive Search</a></li>
                        <li><a class="dropdown-item" href="./OutSourcing.html">Recruitment Process Outsourcing</a></li>
                        <li><a class="dropdown-item" href="./KpoHiring.html">BPO / KPO/ Call Centre Solutions</a></li>
                        <li><a class="dropdown-item" href="./InformationTechnology.html">Information Technology</a></li>
                        <li><a class="dropdown-item" href="./PayRollServices.html">Payroll Services</a></li>
                        </ul>
                    </li>
                    <li class="nav-item me-2">
                        <a class="nav-link" href="./AboutUs.html">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./ContactUs.html">Contacts</a>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</nav>

<div id="social">
<a id="facebook" class="social-btn" target="_blank"
    href="https://www.facebook.com/Talent-Acquaintance-467618167340354"><img
        class="social-img"
        src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/768px-Facebook_f_logo_%282021%29.svg.png?20210818083032"
        alt="fb"></a>

<a id="linkedin" class="social-btn" target="_blank"
    href="https://www.linkedin.com/company/talent-acquaintance"><img
        class="social-img"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/108px-LinkedIn_icon.svg.png"
        alt="in"></a>
<a id="whatsapp" class="social-btn" target="_blank"
    href="https://wa.me/9998838800?text=Welcome+to+Talent+Acquaintance"><img
        class="social-img"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/768px-WhatsApp.svg.png"
        alt="w-app"></a>

<a id="mail" class="social-btn" target="_blank"
    href="mailto:anil.makvana@talentacquaintance.com"><img
        class="social-img"
        src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000019_1549330510_mail-logo.png"
        alt="mail"></a>
        
</div>

`

    return headerHtml

}

//function returning footer Html template
function footer() {

    const footerHtml = `    <div class="bg-dark text-white secondary-border-Top container-fluid pt-2">
    <div class="container pb-1">
        <div class="row">
            <div class="col-12 col-sm-9">
                <h3>Contact Us</h3>
                <p>B-501, Tower-B, Tulip Corpoze, Ashram Rd, opp. V.S. Hospital, Ahmedabad, Gujarat 380006</p>
                <p>Phone: 9998838800</p>
                <p>Mail: anil.makvana@talentacquaintance.com</p>
            </div>
            <div class="col-12 col-sm-3">
                <h3 class="">Follow Us</h3>
                <div class="row g-0 row-cols-5">
                    <div class="col">
                        <a href="https://www.facebook.com/Talent-Acquaintance-467618167340354">
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/768px-Facebook_f_logo_%282021%29.svg.png?20210818083032"
                                class="img-fluid" height="30px" width="30" alt="">
                        </a>
                    </div>
                    <div class="col">
                        <a href="https://www.linkedin.com/company/talent-acquaintance">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/108px-LinkedIn_icon.svg.png"
                                class="img-fluid" height="30px" width="30" alt="">
                        </a>
                    </div>
                    <div class="col">
                        <a href="https://www.instagram.com/invites/contact/?i=yqtriws8xzwv&utm_content=ic45n9d">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/198px-Instagram_logo_2016.svg.png?20210403190622"
                                class="img-fluid" height="30px" width="30" alt="">
                        </a>
                    </div>
                    <div class="col">
                        <a href="https://t.me/+Ql1P7tF0KdllNmQ1">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/768px-Telegram_logo.svg.png"
                                class="img-fluid" height="30px" width="30" alt="">
                        </a>
                    </div>
                    <div class="col">
                        <a href="https://wa.me/9998838800?text=Welcome+to+Talent+Acquaintance">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/768px-WhatsApp.svg.png"
                                class="img-fluid" height="30px" width="30" alt="">
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid secondary-border-Top ">
        <p class="text-center py-2"> &copy; Talent Aquitance 2024-25</p>
    </div>
</div>`

    return footerHtml;

}