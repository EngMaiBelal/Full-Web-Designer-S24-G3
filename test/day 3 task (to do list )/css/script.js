let ill= document.getElementById("ill");
let file= document.createElement("input");
let lable= document.createElement("p");
file.setAttribute("type","file");
file.setAttribute("id","file");
file.setAttribute("claas","divvvv");
let form= document.getElementById("divvvv");

ill.onclick=()=>{
    lable.innerHTML="ادخل الشهادة المرضية";
    form.appendChild(lable);
    form.appendChild(file);
};

let e3tyady= document.getElementById("e3tyady");
let arda= document.getElementById("el3arda");
let wad3= document.getElementById("wad3");
let ezn= document.getElementById("ezn");
let ma2moreya= document.getElementById("ma2moreya");
function cancel() {
    form.removeChild(file);
    lable.innerHTML="";
}
e3tyady.onclick=()=>{cancel()};
arda.onclick=()=>{cancel()};
wad3.onclick=()=>{
    lable.innerHTML="ادخل شهادة الوضع  ";
    form.appendChild(lable);
    form.appendChild(file);};
ezn.onclick=()=>{cancel()};
ma2moreya.onclick=()=>{cancel()};

const xValues = ["عارضة", "اعتيادي", "وضع", "مرضية"];
const yValues = [10, 14, 3, 12];
const barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9"
];
let holiday= document.createElement("p");
holiday.innerHTML="عدد الاجازات المتبقية"


new Chart("myChart", {
    type: "pie",
    data: {
    labels: xValues,
    datasets: [{
    backgroundColor: barColors,
    data: yValues
    }]
},
options: {
    title: {
    display: true,
    text: "عدد الاجازات المتبقية"
    }
}
});