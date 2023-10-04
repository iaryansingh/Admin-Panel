// let totalEntries;
// fetch("products.json")
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(products){
//         let placeholder = document.querySelector("#data-output");
//         let fillString = "";
//         totalEntries = products.length; // Count the number of items in the JSON array
//
//         for(let product of products){
//             fillString += `
//                         <tr>
//                             <td>${product.phoneNumber}</td>
//                             <td onclick="showImageModal('${product.image}')" <span style="cursor: pointer"><img src='${product.image}' alt="" class="rounded-lg flex justify-center m-auto">
//                             </td>
//                         </tr>
//                     `;
//         }

        // Now you can use the 'count' variable to store the number of items
    //     console.log("Number of items in JSON file:", totalEntries);
    //
    //     placeholder.innerHTML = fillString;
    // });
    //


//Image Preview
function showImageModal(imageUrl) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");

    modalImage.src = imageUrl;
    modal.style.display = "block";
}

//On click the buttons it will close the window
function closeImageModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}



//Image download button onclick
function downloadImage() {
    // Get the source URL of the image
    const imageUrl = document.getElementById("modalImage").src;

    // Created a temporary anchor element
    const a = document.createElement("a");
    a.href = imageUrl;
    a.download = "image.jpg";

    // Trigger a click event on the anchor element to start the download
    a.click();

    document.body.removeChild(a);
}



// -- scroll to top Script --

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#66b0ff ${scrollValue}%, #a7afbd ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;



