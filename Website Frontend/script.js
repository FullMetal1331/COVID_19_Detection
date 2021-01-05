const onSubmit = () => {
	const backend = "http://localhost:4000/upload"
	var input = document.querySelector('input[type="file"]')
	var output = document.getElementById('img-out')
	let formData = new FormData();
    let img = input.files[0]; 
    formData.append("img", img);

	var results = document.getElementById('results')
	results.style.display = "none"
	output.src = window.URL.createObjectURL(input.files[0])
	output.style.display = "block"

	fetch(backend, {
	  method: 'POST',
	  body: formData
	})
	.then(response =>response.text())
	.then(data => {
		console.log(data)
		printResult(data)
	})
	.catch(err => console.log(err))
}

const printResult = (data) =>{
	var covid = document.getElementById('covid')
	var normal = document.getElementById('normal')
	var pneumonia = document.getElementById('pneumonia')
	var form = document.querySelector('form')
	var results = document.getElementById('results')
	var reLoad = document.querySelector('h3')

	data = data.substring(2, data.length-4)
	data = toDecimal(data)
	form.style.display = "none"
	form.reset()
	covid.innerHTML = data[0]*100 + '%'
	normal.innerHTML = data[1]*100 + '%'
	pneumonia.innerHTML = data[2]*100 + '%'
	results.style.display = "flex"
}

const toDecimal = (data) =>{
	data = data.split(" ")
	for(i=0;i<3;i++){
		data[i] = new Number(data[i])
		data[i] = data[i].toFixed(3)
	}
	return data
}
const reload = () =>{
	var form = document.querySelector('form')
	var results = document.getElementById('results')
	form.style.display = "flex"
	results.style.display = "none"
}
