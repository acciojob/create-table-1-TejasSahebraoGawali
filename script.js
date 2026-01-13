function insert_Row() {
    //Write your code here
	let table = document.querySelector("#sampleTable");
	// let newRow = document.createElement("tr");
	// newRow.textContent = "<td>New Cell1</td><td>New Cell2</td>";
	
	// table.prepend("newRow");

	const newRow = table.insertRow(0);
	let cell1 = newRow.insertCell(0);
	let cell2 = newRow.insertCell(1);

	cell1.textContent = "New Cell1";
	cell2.textContent = "New Cell2";
}
