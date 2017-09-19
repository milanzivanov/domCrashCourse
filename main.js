var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Forms submit event
form.addEventListener('submit', addItem);
// Delite event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
    e.preventDefault();
    //console.log(1);

    // Get input value
    var newItem = document.getElementById('item').value;

    // Create new li element
    var li = document.createElement('li');
    li.className = 'list-group-item';
    console.log(li);

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create delite button
    var deliteBtn = document.createElement('button');

    // Add classes with 
    deliteBtn.className = 'btn btn-danger btn-sm float-right delite';

    // Append text node
    deliteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deliteBtn);

        // Append li to the list
    itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        // console.log(1);
        if(confirm('Are you shure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter items
function filterItems(e) {
    // Convert text to lowerCase
     var text = e.target.value.toLowerCase();
    // console.log(text);
    // Get list
    var items = itemList.getElementsByTagName('li');
    // Converting to an Array
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        // console.log(itemName);
        if(itemName.toLocaleLowerCase().indexOf(text) !== -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}