// Initializes the api urls
let postLink="https://jsonplaceholder.typicode.com/posts?userId=1";
let userLink="https://jsonplaceholder.typicode.com/users";
let commentsLink="https://jsonplaceholder.typicode.com/posts/1/comments";

// Display all user lists
function userLists(userUrl){
	fetch(userUrl,{cache: "no-cache"}) 
		.then(response => response.json()) 
		.then(json => { 
			let li = '<h3>User Lists</h3><table><tr><th>Id</th><th>Name</th><th>Username</th></tr>'; 
			json.forEach(user => { 
				li += `<tr> 
				 <td><a class="user_scroll_top" onclick="user_details(this.id)" id=${user.id}>${user.id}</a> </td>
				 <td><a class="user_scroll_top" onclick="user_details(this.id)" id=${user.id}>${user.name} </a></td> 
				 <td><a class="user_scroll_top" onclick="user_details(this.id)" id=${user.id}>${user.username}</a></td>          
				</tr>`; 
			});
            li += '</table>';	
		// Display result 
		document.getElementById("usersList").innerHTML = li; 
	}).catch((error) => {
		console.log(error);
	}); 
}

// To display the specific user details
function user_details(clicked){
	let currentUrl="https://jsonplaceholder.typicode.com/users/"+clicked;
    request(currentUrl);
}

const request = async (urlLink) => {
    await fetch(urlLink, {cache: "no-cache"})
	    .then(response => response.json()) 
		.then(userdetails => { 
		    let results = '<h3> User Details</h3>';
			 results += '<table><tr><th>Id</th><th>Name</th><th>Username</th><th>Email</th><th>Address</th><th>Phone</th></tr>';
            const { id, name, username, email, address: { city, street }, phone } = userdetails			
			results +=
				`<tr>
					<td> ${id} </td>
					<td> ${name}</td>
					<td> ${username}</td>
					<td> ${email} </td>
					<td> ${city}, ${street} </td>
					<td> ${phone} </td>
				</tr></table>`;
	   
		// Display results
		document.getElementById("usersDetails").innerHTML = results; 
		jQuery('html, body').animate({
			scrollTop: jQuery("#usersDetails").offset().top
		}, 500);
	}).catch((error) => {
		console.log(error);
	});
}

// Display user post lists
function postLists(postUrl){
    fetch(postUrl, {cache: "no-cache"})
    .then(response => response.json()) 
    .then(json => { 
			let li = '<h3>Post Lists</h3><table><tr><th>Id</th><th>Title</th><th>Content</th></tr>'; 
			json.forEach(post => { 
				li += `<tr> 
				 <td>${post.id}</a> </td>
                 <td>${post.title}</a> </td> 
                 <td>${post.body}</a> </td> 				 
				</tr>`; 
			});
            li += '</table>';	
		// Display result 
		document.getElementById("usersList").innerHTML = li; 
	}).catch((error) => {
		console.log(error);
	});
}

// Display user comments
function commandLists(commandUrl){
    fetch(commandUrl, {cache: "no-cache"})
    .then(response => response.json()) 
    .then(json => { 
			let li = '<h3>Comments Lists</h3><table><tr><th>Postid</th><th>Name</th><th>Comments</th></tr>'; 
			json.forEach(comment => { 
				li += `<tr> 
				 <td>${comment.postId}</a> </td>
                 <td>${comment.name}</a> </td> 
                 <td>${comment.body}</a> </td> 				 
				</tr>`; 
			});
            li += '</table>';	
		// Display result 
		document.getElementById("usersList").innerHTML = li; 
	}).catch((error) => {
		console.log(error);
	});
}
	
			
// Change the api based on the dropdown select.
var getSelectBox = document.getElementById("select_val");
var getSelectBoxVal = getSelectBox.options[getSelectBox.selectedIndex].value;
selectLists(getSelectBoxVal);
function selectLists(selectedVal){
	switch (selectedVal) {
	  case 'Users':
		userLists(userLink);
		request("https://jsonplaceholder.typicode.com/users/1");
		break;
	  case 'Posts': 
	    postLists(postLink);
		document.getElementById("usersDetails").innerHTML = "";
		break;
	  case 'Comments':
		commandLists(commentsLink);
		document.getElementById("usersDetails").innerHTML = "";
		// expected output: "Mangoes and papayas are $2.79 a pound."
		break;
	  default:
		userLists(userLink);
		request("https://jsonplaceholder.typicode.com/users/1");
	}
}

