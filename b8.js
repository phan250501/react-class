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
//get
function getListItem() {
  var listItemStorage = localStorage.getItem('listItem') ? JSON.parse(localStorage.getItem('listItem')) : [];
  $("#list-items").empty();
  for (let i = 0; i < listItemStorage.length; i++) {
      var item = listItemStorage[i];
      $("#list-items").append(`<tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.info}</td>
        <td>${item.detail}</td>
        <td>${item.star}</td>
        <td>${item.image}</td>
        <td>${item.nsx}</td>
        <td>${item.category}</td>
        <td>
          <button onclick="openEditModal(${item.id})" type="button" class="btn-edit">Edit</button>
        </td>
        <td>
          <button onclick="removeItem(${item.id})" type="button" class="btn-delete">Remove</button>
        </td>
      </tr>`);
  }
};
//sửa
function openEditModal(id) {
  var listItemStorage = localStorage.getItem('listItem') ? JSON.parse(localStorage.getItem('listItem')) : [];
  var itemChoice = listItemStorage.find(item => item.id === id);
  $('#name').val(itemChoice.name);
  $('#price').val(itemChoice.price);
  $('#info').val(itemChoice.info);
  $('#detail').val(itemChoice.detail);
  $('#star').val(itemChoice.star);
  $('#image').val(itemChoice.image);
  $('#nsx').val(itemChoice.nsx);
  $('#category').val(itemChoice.category);
  $('#modal').show();
  localStorage.setItem('idEditing', id);
}
//xóa
function removeItem(id) {
  var listItemStorage = localStorage.getItem('listItem') ? JSON.parse(localStorage.getItem('listItem')) : [];
  var itemChoiceIndex = listItemStorage.findIndex(item => item.id === id);
  listItemStorage.splice(itemChoiceIndex, 1);
  localStorage.setItem('listItem', JSON.stringify(listItemStorage));
  getListItem();
}
// search
$(document).ready(function(){
  $(".search-input").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".product-section tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
$(document).ready(function(){
  function resetForm() {
    $('#name').val('');
    $('#price').val('');
    $('#info').val('');
    $('#detail').val('');
    $('#star').val('');
    $('#image').val('');
    $('#nsx').val('');
    $('#category').val('');
}
  $("#modal").hide();
  $("#signup-id").hide();
  $(".add").on('click', function(){
    $("#modal").show();
  })
  $(".login").on('click', function(){
    $("#signup-id").show();
  })
  $(".close").click(function (){
    $("#modal").hide();
  })
  $(".cancel-button").click(function (){
    $("#modal").hide();
  })

  $('.add-new-button').click(function () {
    var listItemStorage = localStorage.getItem('listItem') ? JSON.parse(localStorage.getItem('listItem')) : [];
    var name = $('#name').val();
    var price = $('#price').val();
    var info = $('#info').val();
    var detail = $('#detail').val();
    var star = $('#star').val();
    var image = $('#image').val();
    var nsx = $('#nsx').val();
    var category = $('#category').val();
    var itemData = {
      name,
      price,
      info,
      detail,
      star,
      image: image,
      nsx,
      category,
      id: listItemStorage.length + 1
    }
    $('#modal').hide();
    listItemStorage.push(itemData);
    localStorage.setItem('listItem', JSON.stringify(listItemStorage));
    getListItem();
    resetForm();
  })

  $('.submit-button').click(function () {
    var listItemStorage = localStorage.getItem('listItem') ? JSON.parse(localStorage.getItem('listItem')) : [];
    var idEditing = localStorage.getItem('idEditing');
    var name = $('#name').val();
    var price = $('#price').val();
    var info = $('#info').val();
    var detail = $('#detail').val();
    var star = $('#star').val();
    var image = $('#image').val();
    var nsx = $('#nsx').val();
    var category = $('#category').val();
    if (idEditing) {
      //logic update
      for (let i = 0; i < listItemStorage.length; i++) {
        var item = listItemStorage[i];
        if (item,id === idEditing) {
          listItemStorage[i] = {
            name,
            price,
            info,
            detail,
            star,
            image,
            nsx,
            category,
            id: idEditing
          };
        }
      }
      localStorage.removeItem('idEditing');
      localStorage.setItem('listItem', JSON.stringify(listItemStorage));
    } else {
      var itemData = {
        name,
        price,
        info,
        detail,
        star,
        image,
        nsx,
        category,
        id: listItemStorage.length + 1
      }
      listItemStorage.removeItem('idEditing');
      localStorage.setItem('lisItem', JSON,stringify(listItemStorage));
    }
    $('#modal').hide();
    getListItem();
    resetForm();
  })
  getListItem();
});




