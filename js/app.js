function changeBaground() {
  document.querySelectorAll('.list-group-item').forEach((e, i) => {
    let background = [
      'rgb(209,35,146)',
      'rgb(118,33,180)',
      'rgb(209,35,146)',
      'rgb(254,191,2)',
      'rgb(61,176,73)'
    ]
    e.style.background = background[i];
    e.style.color = '#fff';
  });
}

function productsLoop() {
  const html = `
    <a href="#" class="link-recomended" id="recomended-product">
      <div class="card card-products">
      <img src="img/recomended-products/1.jpg" class="img-recomended">
        <div class="card-body">
            <h5 class="card-title">hand sanitizer pencuci tangan spray Antiseptic cosmo med 60ml 70 perse</h5>
            <p class="card-text">Rp 39.999</p>
        </div>
      </div>
    </a>
    `;
  for (let index = 0; index < 50; index++) {
    const list = document.getElementById('list-products');
    const list2 = document.getElementById('list-discounts');
    const list3 = document.getElementById('list-kulits');
    const list4 = document.getElementById('list-susus');
    const list5 = document.getElementById('list-mringans');
    list.innerHTML += html;
    list2.innerHTML += html;
    list3.innerHTML += html;
    list4.innerHTML += html;
    list5.innerHTML += html;
  }
}

function scroll() {
  const eFixed = document.getElementById('to-fixed');
  window.onscroll = () => {
    const y = scrollY;
    if (y >= 1186) {
      eFixed.classList.add('fixed-top');
      eFixed.classList.add('shadow-sulap');
      eFixed.classList.add('p-5xx');
    } else {
      eFixed.classList.remove('fixed-top');
      eFixed.classList.remove('shadow-sulap');
      eFixed.classList.remove('p-5xx');
    }
  }
}
changeBaground();
productsLoop();
scroll();