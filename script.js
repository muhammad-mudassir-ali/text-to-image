

const token="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"
const inputtext=document.getElementById("input")
const image=document.getElementById("image")
const button=document.getElementById("btn")

async function query(data) {
    image.src="loading.gif"
	const response = await fetch(
		"https://api-inference.huggingface.co/models/Melonie/text_to_image_finetuned",
		{
			headers: {
				Authorization: `Bearer ${token}`
			},
			method: "POST",
			body: JSON.stringify({"inputs":inputtext.value}),
		}
	);
	const result = await response.blob();
	return result;
}

button.addEventListener('click',async function(){

    query().then((response) => {
        const objectURL=URL.createObjectURL(response);
        image.src=objectURL;
    });

})