let sideMenu = document.querySelector("aside");
let menuBtn = document.querySelector("#menu-btn");
let closeBtn = document.querySelector("#close-btn");
let themeToggler = document.querySelector(".theme-toggler")

//Displaying sidebar
menuBtn.addEventListener('click', ()=>{
    sideMenu.style.display = 'block';
})

//Close sidebar
closeBtn.addEventListener('click', ()=>{
    sideMenu.style.display='none';
})

//Changing theme
themeToggler.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

Orders.forEach(order =>{
    let tr = document.createElement('tr');
    let trContent = `
                    <td>${order.productName}</td>
                    <td>${order.productNumber}</td>
                    <td>${order.paymentStatus}</td>
                    <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'pending' ? 'warning': 'primary'}">${order.shipping}</td>
                    <td class="primary">Details</td>
                    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})