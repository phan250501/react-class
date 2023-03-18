$(function(){
  loadComponent();
});
function loadComponent(params){
  $(".header").load("./b8-header.html");
  $(".banner-section").load('./b8-banner.html');
}
var index = 1;
changeImage = function(){
  var imgs = ["./image/banner-big-desk-1920x450-1.webp","./image/BOX-QUÀ-605x260.png","./image/chungr-MSI-720-220-720x220-1.webp"];
  document.getElementById('img').src = imgs[index];
  index++;
  if(index==3){
    index = 0;
  }
}
setInterval(changeImage,3000);
$(document).ready(function () {
  var image_list = [
      {
          url: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-vang-thumb-600x600.jpg',
          name: 'san pham 1',
          price: 10000,
          manufaturor: 'cong ty 1'
      },
      {
          url: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/303163/xiaomi-redmi-12c-blue-thumb-600x600.jpg',
          name: 'san pham 2',
          price: 10000,
          manufaturor: 'cong ty 2'
      },
      {
          url: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/298377/samsung-galaxy-a34-5g-xanh-thumb-600x600.jpg',
          name: 'san pham 3',
          price: 10000,
          manufaturor: 'cong ty 3'
      },
      {
          url: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/522/294103/iPad-gen-10-1-600x600.jpg',
          name: 'san pham 4',
          price: 10000,
          manufaturor: 'cong ty 4'
      }
  ]
  for (i = 0; i < image_list.length; i++) {
      var item = image_list[i];
      $("#image-container").append("<div><img class='anh' src=" + item.url + " /><p>"
          + item.name + "</p><p>hang san xuat:"
          + item.manufaturor +
          "</p><p>gia: " + item.price + "Dong </p></div>");
      $("img").addClass("image-content");
  }
})
$(document).ready(function () {
  var products_list = [
      {
         id: 1,
         name: 'Samsung Galaxy S22 Ultra 5G',
         price: 1000,
         info: '6.9 inches, Chip MediaTek Helio G85 (12nm) mạnh mẽ, Ram 4G, Pin 7000 mAh',
         default: 'ProductDetail1',
         star: 5,
         image: 'abc',
         nsx: 'SAMSUNG',
         category: 'Điện thoại',
         edit: 'Edit',
         delete: 'Delete',
      },
      {
        id: 1,
        name: 'Samsung Galaxy S23 Ultra',
        price: 1000,
        info: '6.9 inches, Chip MediaTek Helio G85 (12nm) mạnh mẽ, Ram 4G, Pin 7000 mAh',
        default: 'ProductDetail1',
        star: 5,
        image: 'abc',
        nsx: 'SAMSUNG',
        category: 'Điện thoại',
        edit: 'Edit',
        delete: 'Delete',
     },   
     {
      id: 1,
      name: 'Iphone 11',
      price: 1000,
      info: '6.9 inches, Chip MediaTek Helio G85 (12nm) mạnh mẽ, Ram 4G, Pin 7000 mAh',
      default: 'ProductDetail1',
      star: 5,
      image: 'abc',
      nsx: 'Apple',
      category: 'Điện thoại',
      edit: 'Edit',
      delete: 'Delete',
   }, 
   {
    id: 1,
    name: 'Samsung Galaxy S22 Ultra',
    price: 1000,
    info: '6.9 inches, Chip MediaTek Helio G85 (12nm) mạnh mẽ, Ram 4G, Pin 7000 mAh',
    default: 'ProductDetail1',
    star: 5,
    image: 'abc',
    nsx: 'SAMSUNG',
    category: 'Điện thoại',
    edit: 'Edit',
    delete: 'Delete',
 },  
  ]
  for (i = 0; i < products_list.length; i++) {
      var item = products_list[i];
      $(".product-body").append(`
      <tr><td>  ${item.id} 
      </td><td class='ten-pro'> ${item.name} 
      </td><td> ${item.price} 
      </td><td> ${item.info} 
      </td><td> ${item.default} 
      </td><td> ${item.star} 
      </td><td> ${item.image} 
      </td><td> ${item.nsx} 
      </td><td> ${item.category} 
      </td><td><button class='btn-edit'> ${item.edit} 
      </td><td><button class='btn-delete'> ${item.delete} </button</td></tr>`);
  }
})
// search
$(document).ready(function(){
  $(".search-input").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".product-body tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
// delete
$(document).ready(function(){
  $(".btn-delete").on('click', function(){
    $(this).closest("tr").remove();
  });
});
//add
$(document).ready(function(){
  $(".add").on('click', function(){
    $("#myModal").css({"display":"block"})
  })
  $(".close").click(function (){
    $("#myModal").css("display","none")
  })
  $(".cancel-button").click(function (){
    $("#myModal").css("display","none")
  })
});
