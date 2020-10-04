!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r={items:[],shown:!1,container:null,itemsContainer:null,url:"https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json",init(){this.container=document.querySelector("#basket"),this.itemsContainer=document.querySelector("#basket-items"),this.getData(this.url).then(t=>{this.items=t.content}).finally(()=>{this._render(),this._handleActions()})},getData:t=>fetch(t).then(t=>t.json()),_render(){let t="";this.items.forEach(e=>{t+=`<div class="drop__box" data-id="${e.productId}">\n                        <a class="drop__img" href="single.html"><img src="${e.productImg}" alt="#" width="72" height="85"></a>\n                        <div class="drop__info">\n                            <a href="single.html" class="drop__title">${e.productName}</a>\n                            <img src="../src/assets/imgs/drop_cart/stars.png" alt="#">\n                            <div class="drop__price"><span class="drop__count" data-id="${e.productId}">${e.amount}</span><span class="drop__span">\n                            x\n                            </span>$${e.productPrice}</div>\n                        </div>\n                        <button class="drop__cancel fas fa-times-circle" data-id="${e.productId}" name="remove">\n                        <button>\n                    </div>`}),this.itemsContainer.innerHTML=t},_handleActions(){document.querySelector("#basket-toggler").addEventListener("click",()=>{this.shown=!this.shown,this.container.classList.toggle("invisible")}),this.container.addEventListener("click",t=>{console.log(t.target.name),"remove"==t.target.name&&this._remove(t.target.dataset.id)})},add(t){let e=this.items.find(e=>e.productId==t.productId);e?e.amount++:this.items.push(Object.assign(t,{amount:1})),this._render()},_remove(t){let e=this.items.find(e=>e.productId==t);e.amount>1?e.amount--:this.items.splice(this.items.indexOf(e),1),this._render()}};basket.init();var a={container:null,url:"https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json",items:[],basket:null,init(){this.container=document.querySelector("#catalog"),this.getData(this.url).then(t=>{this.items=t}).finally(()=>{this._render(),this.basket=basket,this.handleActions()})},getData:t=>fetch(t).then(t=>t.json()),handleActions(){this.container.addEventListener("click",t=>{if("add"==t.target.name){let e=t.target.dataset,n={productId:e.id,productPrice:+e.price,productName:e.name,productImg:e.image};this.basket.add(n)}})},_render(){let t="";this.items.forEach(e=>{t+=function(t){return`<div class="catalog__item" id="${t.productId}">\n    <button \n        class="catalog__bucket" \n        name="add"\n        data-id="${t.productId}" \n        data-price="${t.productPrice}" \n        data-name="${t.productName}" \n        data-image="${t.productImg}"\n    >\n        <img class="catalog__hidden_img" \n        src="https://raw.githubusercontent.com/Eliseev88/geekbrains/3fdc76c4d5e84b1398b168e6239b8651dce01f6f/products/Forma_1_copy.svg" alt="#">\n        <span class="catalog__hidden_text">Add to Cart</span>\n    </button>\n    <div class="catalog__photo">\n        <img class="catalog__img" src="${t.productImg}" alt="#">\n    </div>\n    <div class="catalog__content">\n        <a class="catalog__name" href="#">${t.productName}</a>\n        <div class="catalog__price">$${t.productPrice}.00</div>\n    </div>\n</div>`}(e)}),this.container.innerHTML=t}};setTimeout(()=>{let t=document.querySelector(".page"),e=document.querySelector(".popup"),n=document.querySelector("#close");document.querySelectorAll(".catalog__name").forEach(n=>{n.addEventListener("click",(function(n){n.preventDefault(),t.classList.toggle("blur"),e.classList.toggle("state-appear")}))}),n.addEventListener("click",n=>{t.classList.remove("blur"),e.classList.remove("state-appear")})},300);let i=0;function s(){gallery.items.forEach((t,e)=>{if(gallery.main.src==t)return i=e})}document.querySelector("#next").addEventListener("click",t=>{s(),gallery.main.setAttribute("src",gallery.items[i+1]),i>=gallery.items.length-1&&gallery.main.setAttribute("src",gallery.items[0])}),document.querySelector("#prev").addEventListener("click",t=>{s(),gallery.main.setAttribute("src",gallery.items[i-1]),0==i&&gallery.main.setAttribute("src",gallery.items[gallery.items.length-1])});var c={main:null,carousel:null,items:[],baseUrl:"https://raw.githubusercontent.com/Eliseev88/geekbrains/master/pr_omega/src/layout/catalog.json",init(){this.main=document.querySelector("#main-pic"),this.carousel=document.querySelector("#carousel"),this.getImages(),setTimeout(()=>{this.render(),this.handleActions()},200)},getImages(){fetch(this.baseUrl).then(t=>t.json()).then(t=>{this.items=t.map(t=>t.productImg)})},handleActions(){let t=this.main.src;this.carousel.addEventListener("click",e=>{if("preview"==e.target.name)return this.changeMainImg(e.target.src),t=e.target.src}),this.carousel.addEventListener("mouseover",t=>{"preview"==t.target.name&&this.changeMainImg(t.target.src)})},changeMainImg(t){this.main.src=t},render(){this.main.src=this.items[0];let t="";this.items.forEach(e=>{t+=`<img src="${e}" class="popup__preview" name="preview">`}),this.carousel.innerHTML=t}};gallery.init();r.init(),a.init(),c.init()}]);