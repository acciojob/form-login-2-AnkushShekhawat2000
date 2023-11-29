//your JS code here. If required.
let formsDataCollect = document.querySelector(".forms");
forms.addEventListener("onsubmit", showData);
function showData(e){
	e.preventDefault();
	let data = {
		name:document.getElelemntByQuerrySelector(".firstName").value,
	    lastName:document.getElelemntByQuerrySelector(".lastName").value,
     	phoneNumber:document.getElelemntByQuerrySelector(".phoneNumber").value,
		email:document.getElelemntByQuerrySelector(".email").value,
	
		}
	
	alert(data);
}