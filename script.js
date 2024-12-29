const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll('.price');

	const sum = Array.from(prices).map((p) =>parseFloat(p.textContent)).reduce((acc,curr) => acc+curr,0);

	const table = document.querySelector('table');
	const row = document.createElement('tr');
	const td = document.createElement('td');

	td.colSpan = 2;
	td.textContent = "Total Price :" + sum;

	row.appendChild(td);
	table.appendChild(row)
	
  
};

getSumBtn.addEventListener("click", getSum);

