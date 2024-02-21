const usernameInput = document.getElementById("inputUsername");
const size = document.getElementById("size");
const fileFormat = document.getElementById("fileFormat");
const isCircular = document.getElementById("isCircular");
const thumbnail = document.getElementById("thumbnail");

async function fetchImageUrl(username, imageSize, imageFormat, circular) {
	return new Promise((resolve, reject) => {

	const config = {
		url: `https://api.valiantwind.dev/v1/roblox/get-avatar-body-thumbnail?username=${username.value}&size=${imageSize.value}&format=${imageFormat.value}&isCircular=${circular.value}`,
		method: 'get',
	}
		axios(config).then(response => {
			resolve(response.data.data[0].imageUrl)
		}).catch(error => {
			reject(error)
		})
	})
}

function generateThumbnail() {

	const generateButton = document.getElementById("submit");

	fetchImageUrl(usernameInput, size, fileFormat, isCircular)
		.then(url => {
			console.log(url)
			thumbnail.src = url;
		})
		.catch(error => {
			generateButton.innerHTML = "Something went wrong.";

			setTimeout(() => {
				generateButton.innerHTML = "Generate Thumbnail";
			}, 3000)
			console.log(error);
		})
}

function copyImageUrl() {
	const copyUrlButton = document.getElementById("copyUrlButton");

	if (userIdInput && size && fileFormat && isCircular) {

		fetchImageUrl(userIdInput, size, fileFormat, isCircular)
			.then(url => {
				console.log(url)
				navigator.clipboard.writeText(url);

				copyUrlButton.innerHTML = "Copied!"

				setTimeout(() => {
					copyUrlButton.innerHTML = "Copy Image URL";
				}, 3000)
			})

	}
}