// items 
const menu = [
 {
    id: 1,
    title:"Matcha latte",
    category:"drinks",
    price:3,
    img:"./images/vegan-matchalatte.jpg",
    desc: `Green tea matcha with dairy-free milk alternatives. Choose either oat, soy or coconut milk`,
 },
 {
   id: 2,
   title:"Matcha Tart",
   category:"dessert",
   price:5,
   img:"./images/vegan-matchatart.jpg",
   desc: `Green tea matcha tart filled with white chocolate ganache. Crust is made of buttery almond topped with vegan cream.`,
},
{
   id: 3,
   title:"Fluffy Pancake",
   category:"brunch",
   price:7.50,
   img:"./images/vegan-pancake.png",
   desc: `Fluffy vegan pancake made with oatmilk and vegan butter. Topped with strawberry and blueberry. Option vegan cream and agave syrup toppings.`,
},
{
   id: 4,
   title:"Vanilla French Toast",
   category:"brunch",
   price:9.50,
   img:"./images/vegan-frenchtoast.jpg",
   desc: `Golden brown vegan french toast topped with vegan ice cream. Optional toppings: vegan cream and agave syrup toppings.`,
},
{
   id: 5,
   title:"Tofu summer rolls",
   category:"brunch",
   price:11,
   img:"./images/vegan-tofurolls.jpg",
   desc: `3 Refreshng rice-paper summer rolls filled with crispy tofu, cucumbers carrots and leafy greens. This comes with a peanut sesame dipping sauce.`,
},
{
   id: 6,
   title:"Chickpea omelet",
   category:"brunch",
   price:11,
   img:"./images/vegan-chickpeaomelet.jpg",
   desc: `High protein chickpea omelet with carrots, zuchinni and mushroom sauteed in vegan herb butter. Served with small summer salad on the side.`,
},
{
   id: 7,
   title:"Banana donut",
   category:"dessert",
   price:3.50,
   img:"./images/vegan-bananadonuts.jpg",
   desc: `Vegan banana donut with dark chocolate and vegan cream. `,
},
{
   id: 8,
   title:"Orange Spiritz",
   category:"drinks",
   price:4,
   img:"./images/vegan-orangespiriz.jpg",
   desc: `Spirit made from orange jam and refreshing home-made sparkling lemonade. `,
},
{
   id: 9,
   title:"Vegan Oreo cake",
   category:"dessert",
   price:3.50,
   img:"./images/vegan-oreocake.jpg",
   desc: `Oreo baked vegan cheesecake made from cashews nuts and dark chocolate ganache. `,
},
{
   id: 9,
   title:"Vegan Oreo cake",
   category:"dessert",
   price:3.50,
   img:"./images/vegan-oreocake.jpg",
   desc: `Oreo baked vegan cheesecake made from cashews nuts and dark chocolate ganache. `,
},
];

const sectionCenter = document.querySelector(`.section-center`);

window.addEventListener(`DOMContentLoaded`,function(){
  displayMenuItems(menu);
});

function displayMenuItems(menuItems) {
   let displayMenu = menuItems.map(function(item){
      //console.log(item);

   return `  <article class="menu-item">
   <img src=${item.img} class="photo" alt=${item.title} />
   <div class="item-info">
       <header>
           <h4>${item.title}</h4>
           <h4 class="price">€${item.price}</h4>
       </header>
       <p class="item-text">
       ${item.desc}
       </p>
   </div>
</article>`;
   });
   displayMenu = displayMenu.join("");
   sectionCenter.innerHTML = displayMenu;
}