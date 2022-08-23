// items 
const menu = [
 {
    id: 1,
    title:"Matcha latte",
    category:"Drinks",
    price:3,
    img:"./images/vegan-matchalatte.jpg",
    desc: `Green tea matcha with dairy-free milk alternatives. Choose either oat, soy or coconut milk`,
 },
 {
   id: 2,
   title:"Matcha Tart",
   category:"Dessert",
   price:5,
   img:"./images/vegan-matchatart.jpg",
   desc: `Green tea matcha tart filled with white chocolate ganache. Crust is made of buttery almond topped with vegan cream.`,
},
{
   id: 3,
   title:"Fluffy Pancake",
   category:"Brunch",
   price:7.50,
   img:"./images/vegan-pancake.png",
   desc: `Fluffy vegan pancake made with oatmilk and vegan butter. Topped with strawberry and blueberry. Option vegan cream and agave syrup toppings.`,
},
{
   id: 4,
   title:"Vanilla French Toast",
   category:"Brunch",
   price:9.50,
   img:"./images/vegan-frenchtoast.jpg",
   desc: `Golden brown vegan french toast topped with vegan ice cream. Optional toppings: vegan cream and agave syrup toppings.`,
},
{
   id: 5,
   title:"Tofu summer rolls",
   category:"Brunch",
   price:11,
   img:"./images/vegan-tofurolls.jpg",
   desc: `Refreshng rice-paper summer rolls filled with crispy tofu, cucumbers carrots and leafy greens. This comes with a peanut sesame dipping sauce.`,
},
{
   id: 6,
   title:"Chickpea omelet",
   category:"Brunch",
   price:11,
   img:"./images/vegan-chickpeaomelet.jpg",
   desc: `High protein chickpea omelet with carrots, zuchinni and mushroom sauteed in vegan herb butter. Served with small summer salad on the side.`,
},
{
   id: 7,
   title:"Banana donut",
   category:"Dessert",
   price:3.50,
   img:"./images/vegan-bananadonuts.jpg",
   desc: `Vegan banana donut with dark chocolate and vegan cream. `,
},
{
   id: 8,
   title:"Orange Spiritz",
   category:"Drinks",
   price:4,
   img:"./images/vegan-orangespiriz.jpg",
   desc: `Spirit made from orange jam and refreshing home-made sparkling lemonade. `,
},
{
   id: 9,
   title:"Vegan Oreo cake",
   category:"Dessert",
   price:3.50,
   img:"./images/vegan-oreocake.jpg",
   desc: `Oreo baked vegan cheesecake made from cashews nuts and dark chocolate ganache. `,
},
{
   id: 10,
   title:"Vegan Strawberry Milk",
   category:"Drinks",
   price:2.50,
   img:"./images/vegan-strawberrymilk.jpg",
   desc: `Fresh organic strawberry jam handmade with oatmilk and a dash of vanilla extract. Perfect afternoon drink with a slice of cake. `,
},
];

const sectionCenter = document.querySelector(`.section-center`);
const filterBtns = document.querySelectorAll('.filter-btn');

// Load items
window.addEventListener(`DOMContentLoaded`,function(){
  displayMenuItems(menu);
});

//filter items
filterBtns.forEach(function(btn){
   btn.addEventListener('click',function(e){
      console.log(e.currentTarget.dataset.id);
   })
})




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