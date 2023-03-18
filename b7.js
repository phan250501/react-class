function send(){
    var arr = document.getElementsByTagName('input');
    var name = arr[0].value;
    var age = arr[1].value;
    var address = arr[2].value;
    var class1 = arr[3].value;
    var gender = "";
    if(arr[4].checked){
        gender = arr[4].value;
    }else{
        gender = arr[5].value;
    }
    if(name == "" || age == "" || address == "" || class1 == ""){
        alert('Vui lòng điền đủ ô trống');
        return;
    }
    if(isNaN(age)){
        alert('Tuổi phải là số');
        return;
    }
    document.write("Tên: "+name+"<br/>"+"Tuổi: "+age+"<br/>"+"Địa chỉ: "+address+"<br/>"+"Lớp: "+class1+"<br/>"+"Giới tính: "+gender)

}
function sum(){
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let sum = parseInt(a) + parseInt(b);
    document.getElementById('result').innerHTML = sum;
}