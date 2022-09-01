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
   category:"Desserts",
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
   desc: `Fluffy pancakes made with oatmilk and vegan butter. Topped with strawberry and blueberry. Option vegan cream and agave syrup toppings.`,
},
{
   id: 4,
   title:"Vanilla French Toast",
   category:"Brunch",
   price:9.50,
   img:"./images/vegan-frenchtoast.jpg",
   desc: `Vegan french toast toasted golden brown topped with vegan ice cream. Optional toppings: vegan cream and agave syrup toppings.`,
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
   category:"Desserts",
   price:3.50,
   img:"./images/vegan-bananadonuts.jpg",
   desc: `Vegan banana donut is made with ripe banana, dark chocolate and vegan cream. `,
},
{
   id: 8,
   title:"Orange Spiritz",
   category:"Drinks",
   price:4,
   img:"./images/vegan-orangespiriz.jpg",
   desc: `The Orange Spirit is made from home-made orange jam and refreshing home-made sparkling lemonade. `,
},
{
   id: 9,
   title:"Vegan Oreo cake",
   category:"Desserts",
   price:3.50,
   img:"./images/vegan-oreocake.jpg",
   desc: `The Oreo baked vegan cheesecake is made from crushed oreo, cashews nuts base and dark chocolate ganache filling. `,
},
{
   id: 10,
   title:"Vegan Strawberry Milk",
   category:"Drinks",
   price:2.50,
   img:"./images/vegan-strawberrymilk.jpg",
   desc: `The vegan strawberry milk is made of fresh organic strawberry jam handmade with oatmilk and a dash of vanilla extract. Perfect afternoon drink with a slice of cake. `,
},
];

const sectionCenter = document.querySelector(`.section-center`);
const filterBtns = document.querySelectorAll('.filter-btn');

// Load items
window.addEventListener(`DOMContentLoaded`,function(){
  displayMenuItems(menu);
  const catergories = menu.reduce(function(values,item){
      if(!values.includes(item.catergories)) {
         values.push(items.category);
      }
   return values
  },['All']);
  const categoryBtns = catergories.map(function(category){
   return    '<button class="filter-btn" type="button" data-id=${category}>${catergory}</button>'
  })
});

//filter items
filterBtns.forEach(function(btn){
   btn.addEventListener('click',function(e){
     const category = e.currentTarget.dataset.id;
     const menuCatergory = menu.filter(function(menuItem){
      if (menuItem.category === category) {
         return menuItem;
      }
     });
     if (category === 'All'){
      displayMenuItems(menu)
     }
     else {
      displayMenuItems(menuCatergory);
     }
   });
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