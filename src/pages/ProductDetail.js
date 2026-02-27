import React, { useState } from "react";
import shoe1 from "../assests/images/shoe1.png";
import shoe2 from "../assests/images/shoe2.png";
import shoe3 from "../assests/images/shoe3.png";
import shoe4 from "../assests/images/shoe4.png";
import shoe5 from "../assests/images/shoe5.png";
import shoe6 from "../assests/images/shoe6.png";
import shoe7 from "../assests/images/shoe7.png";
import shoe8 from "../assests/images/shoe8.png";
import shoe9 from "../assests/images/shoe9.png";
import shoe10 from "../assests/images/shoe10.png";
import shoe11 from "../assests/images/shoe11.png";
import shoe12 from "../assests/images/shoe12.png";


const allProducts = [

{ id:1, name:"Runner Pro Edition", price:99, rating:5, img:shoe1 },
{ id:2, name:"Impact Trainers", price:65, rating:3.5, img:shoe2 },
{ id:3, name:"Boost Sneaker", price:120, old:179, offer:"SAVE 25%", rating:4.7, img:shoe3 },
{ id:4, name:"Shock Absorbers", price:110, rating:4.9, img:shoe4 },

{ id:5, name:"Runner Pro Edition", price:99, rating:5, img:shoe5 },
{ id:6, name:"Impact Trainers", price:65, rating:3.5, img:shoe6 },
{ id:7, name:"Boost Sneaker", price:280, old:315, offer:"SAVE 10%", rating:4.7, img:shoe7 },
{ id:8, name:"Shock Absorbers", price:110, rating:4.9, img:shoe8 },

{ id:9, name:"Runner Pro Edition", price:99, rating:5, img:shoe9 },
{ id:10, name:"Impact Trainers", price:46, old:110, offer:"SAVE 60%", rating:3.5, img:shoe10 },
{ id:11, name:"Boost Sneaker", price:120, rating:4.7, img:shoe11 },
{ id:12, name:"Shock Absorbers", price:110, rating:4.9, img:shoe12 },

];

export default function ProductDetail(){
    const [currentPage,setCurrentPage] = useState(1);
    const [selectedProduct,setSelectedProduct] = useState(null);
    const [search, setSearch] = useState("");
const [sortOption, setSortOption] = useState("");
const [showModal,setShowModal] = useState(false);

const perPage = 12;   

const lastIndex = currentPage * perPage;
const firstIndex = lastIndex - perPage;

// 🔍 Filter by search
let filteredProducts = allProducts.filter((product) =>
  product.name.toLowerCase().includes(search.toLowerCase())
);

// 💰 Sort logic
if (sortOption === "high") {
  filteredProducts.sort((a, b) => b.price - a.price);
}

if (sortOption === "low") {
  filteredProducts.sort((a, b) => a.price - b.price);
}

// 📄 Pagination after filter + sort
const currentProducts = filteredProducts.slice(firstIndex, lastIndex);

const totalPages = Math.ceil(filteredProducts.length / perPage);


const openModal = (product)=>{
  setSelectedProduct(product);
  setShowModal(true);
}

const closeModal = ()=>{
  setShowModal(false);
}
return(

<div className="product-page">

{/* ===== TOP FILTER BAR ===== */}

<div className="filter-bar">

<input
  className="search-input"
  placeholder="Search product"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>

<select
  className="sort"
  value={sortOption}
  onChange={(e) => setSortOption(e.target.value)}
>
  <option value="">Sort By</option>
  <option value="high">Price High to Low</option>
  <option value="low">Price Low to High</option>
</select>

<button className="filter-btn">Filter</button>

</div>

{/* ===== PRODUCT GRID ===== */}

<div className="product-grid">

{currentProducts.map((p)=>(
<div 
className="product-card" 
key={p.id}
onClick={()=>openModal(p)}
>

{p.offer && <span className="offer">{p.offer}</span>}

<div className="img-box">
<img src={p.img} alt="shoe"/>
</div>

<h4>{p.name}</h4>

<div className="price-row">

<div className="rating">⭐ {p.rating}</div>

<div>
{p.old && <span className="old">${p.old}</span>}
<b>${p.price}</b>
</div>

<button 
className="add"
onClick={(e)=>{
  e.stopPropagation();
  alert("Added to Cart");
}}
>
Add
</button>

</div>

</div>
))}

</div>

{/* ===== PAGINATION ===== */}

<div className="pagination">

<div>
Show 12 per page
</div>

<div className="pages">

<span onClick={()=>setCurrentPage(prev=>Math.max(prev-1,1))}>←</span>

{[...Array(totalPages)].map((_,i)=>(
<span
key={i}
className={currentPage===i+1 ? "active" : ""}
onClick={()=>setCurrentPage(i+1)}
>
{i+1}
</span>
))}

<span onClick={()=>setCurrentPage(prev=>Math.min(prev+1,totalPages))}>→</span>

</div>

</div>
{showModal && selectedProduct && (

<div className="modal-overlay" onClick={closeModal}>

<div className="product-modal" onClick={(e)=>e.stopPropagation()}>

<div className="modal-header">
<h3>Product Details</h3>
<span className="close" onClick={closeModal}>✖</span>
</div>

<div className="modal-body">

<div className="modal-img">
<img src={selectedProduct.img}/>
{selectedProduct.offer && 
<span className="modal-offer">{selectedProduct.offer}</span>}
</div>

<h3>{selectedProduct.name}</h3>

<p className="desc">
Lightweight and stylish sneakers offer all-day comfort with breathable mesh.
Perfect for casual wear and daily adventures.
</p>

<div className="info-row">
<p><b>Availability :</b></p>
<span className="stock">In Stock</span>
</div>

<p><b>SKU :</b> SH-001-BLK-42</p>
<p><b>Category :</b> Sneakers</p>

<div className="info-row">
<p><b>Rating :</b></p>
<span className="stars">⭐ {selectedProduct.rating}</span>
</div>

<div className="price">
{selectedProduct.old && 
<span className="old">${selectedProduct.old}</span>}
<b>${selectedProduct.price}</b>
</div>

<button className="cart-btn">🛒 Add to Cart</button>

</div>

</div>

</div>

)}

</div>
);
}