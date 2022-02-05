const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-list")
    const product = document.querySelectorAll(".product")
    const pname = document.getElementsByTagName("h2")

    for (var i = 0; pname.length; i++) {
        // all brands value name
        let match = product[i].getElementsByTagName('h2')[0];

        // match-items
        if (match) {
            let textvalue = match.textContent || match.innerHTML

            if (textvalue.toUpperCase().lastIndexOf(searchbox) > -1) {
                product[i].style.display = "";
            }
            // remove unmatch-item
            else {
                product[i].style.display = "none";
            }
        }
    }
}