const nameInput = document.getElementById("name");
const idinput = document.getElementById("idinp");
const priceInput = document.getElementById("price");
const imageInput = document.getElementById("image");
const addBtn = document.getElementById("add-btn");
const catalogDiv = document.getElementById("catalog");
const rembtn = document.getElementById("rem-btn");

addBtn.addEventListener("click", function() {
	
    if (nameInput.value === '' || priceInput.value === '' || imageInput.files.length === 0) {
        alert('Please fill out all fields');
        return;
      }
	const productDiv = document.createElement("div");
	productDiv.className = "product";

	
	const img = document.createElement("img");
	img.src = URL.createObjectURL(imageInput.files[0]);
	img.alt = nameInput.value;
	productDiv.appendChild(img);
    const price = document.createElement("h3");
	const idpr = document.createElement("h4");
	const heading = document.createElement("h2");
	heading.textContent = nameInput.value;
    price.textContent = " Rs." + priceInput.value;
	productDiv.appendChild(heading);
    productDiv.appendChild(price);
    idpr.textContent = "id: "+idinput.value;
    productDiv.appendChild(idpr);
    const mybutton = document.createElement("button");
    mybutton.innerText = "Remove"
    mybutton.className = "rem-btn";
	productDiv.appendChild(mybutton);
	catalogDiv.appendChild(productDiv);

	
	nameInput.value = "";
	priceInput.value = "";
	imageInput.value = "";
    idinput.value="";
});



catalogDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('rem-btn')) {
      const product = e.target.closest('.product');
      product.remove();
      
    }
  });

function myfunc() {
    const productName = document.querySelector('#remove-name').value.trim();
    if (productName === '') {
        alert('Please enter a product name to remove');
        return;
    }

    const products = document.querySelectorAll('.product');
    let removed = false;

    products.forEach((product) => {
    const name = product.querySelector('h4').textContent.trim().slice(4,);
    alert(name.trim());
    alert(productName.trim());
    alert(name === productName);
    console.log(typeof(name));
    console.log(typeof(productName));
    console.log(name);
    console.log(productName);
    console.log(name===productName);
    if (name.trim() === productName.trim()) {
      const confirmation = confirm(`Are you sure you want to remove ${productName} from the catalog?`);
      if (confirmation) {
        product.remove();
        removed = true;
      }
    }
  });

  if (!removed) {
    alert(`Product "${productName}" not found in the catalog`);
  }

  document.querySelector('#remove-name').value = '';
    
}

function myfunc2(){
    const id = document.getElementById("1").value;
    const newname = document.getElementById("2").value;
    const newprice = document.getElementById("3").value;
    
    const products = document.querySelectorAll('.product');
    products.forEach(product=>{
        const ideach = product.querySelector('h4').textContent.trim().slice(4,);
        if(id === ideach)
        {
            product.querySelector("h2").textContent = newname;
            product.querySelector("h3").textContent = "Rs. "+newprice;
        }
    })

}

  
  
