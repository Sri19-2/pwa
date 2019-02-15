function loadjson(file,callback) {
  var xhr =new XMLHttpRequest();
  xhr.overrideMimeType("applaicaton/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status == "200"){
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}
loadjson("data.json",function(text)
{
  var data=JSON.parse(text);
  console.log(data);
  details(data.basic);
  careerinfo(data.career);
  education(data.education);
})
var left=document.querySelector(".leftchild");
function details(det)
{
  var image = document.createElement("img");
  image.src=det.image;
  left.appendChild(image);

  var name=document.createElement("h1");
  name.textContent=det.name;
  left.appendChild(name);

  var number=document.createElement("a");
  number.textContent=det.number;
  left.appendChild(number);

  var  email=document.createElement("p");
  email.textContent=det.email;
  left.appendChild(email);

  var address=document.createElement("p")
address.textContent=det.address;
left.appendChild(address);
}
var right=document.querySelector(".rightchild");
function careerinfo(career){
  var ci=document.createElement("h2");
  ci.textContent="Career Objective";
  right.appendChild(ci);

  var add=document.createElement("p");
  add.textContent=career.info;
  right.appendChild(add);

  var hr=document.createElement("hr");
  right.appendChild(hr);
}

  function education(edu){
    var add1=document.createElement("h3");
    add1.textContent="education qualifications";
    right.appendChild(add1);

    var hr=document.createElement("hr");
    right.appendChild(hr);

  var table=document.createElement("table");
  table.border="1";
  var tr1="<tr><th>institute</th><th>degree</th><th>passout</th></tr>";
  var tr2="";

  for(var i=0;i<edu.length;i++)
  {
    tr2+="<tr><td>"+edu[i].institute+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].passout+"</td></tr>";

  }
table.innerHTML=tr1+tr2;
right.appendChild(table);
}
