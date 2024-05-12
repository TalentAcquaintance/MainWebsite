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
                    src="./Images/TAlogo_tranparent.png" style="height: 50px" /></span>Talent Aquitance</a>
        <button class="btn navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <i class="fa-solid fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="nav-item mx-auto mt-2 mb-lg-0">
                <ul class="nav justify-content-center">
                    <li class="nav-item me-2">
                        <a class="nav-link" aria-current="page" href="./Home.html">Home</a>
                    </li>
                    <li class="nav-item me-2 dropdown">
                            <a class="nav-link dropdown-toggle" href="./Services.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                            </a>
                
                        <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="./KpoHiring.html">Permanent Staffing</a></li>
                        <li><a class="dropdown-item" href="./ExecutiveSearch.html">Executive Search</a></li>
                        <li><a class="dropdown-item" href="./KpoHiring.html">Recruitment Process Outsourcing</a></li>
                        <li><a class="dropdown-item" href="./KpoHiring.html">BPO / KPO/ Call Centre Solutions</a></li>
                        <li><a class="dropdown-item" href="./KpoHiring.html">Information Technology</a></li>
                        <li><a class="dropdown-item" href="./KpoHiring.html">Payroll Services</a></li>
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

`

    return headerHtml

}

//function returning footer Html template
function footer() {

    const footerHtml = `<div class="bg-dark text-white secondary-border-Top container-fluid pt-2" >
    <div class="container pb-1">
    <div class="row">
    <div class="col-md-6">
        <h3>Contact Us</h3>
        <p>123 Staffing Street, City, Country</p>
        <p>Phone: 123-456-7890</p>
        <p>Email: info@hrstaffing.com</p>
    </div>
    <div class="col-md-6">
        <h3>Follow Us</h3>
        <ul class="list-inline">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Instagram</a></li>
        </ul>
    </div>
    </div>
    </div>
    <div class="container-fluid secondary-border-Top ">
    <p class="text-center py-2"> &copy; Talent Aquitance 2023-24</p>
    </div>
    </div>`

    return footerHtml;

}