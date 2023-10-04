const ImageList = [
    { 'Date': '2023-09-18', 'PhoneNumber': 9940055778, 'image':' product-images/p-4.jpg'},
    { 'Date': '2023-09-18', 'PhoneNumber': 9940055778, 'image':' product-images/p-1.jpg'},
    { 'Date': '2023-09-18', 'PhoneNumber': 9940055778, 'image':' product-images/p-1.jpg'},
    { 'Date': '2023-09-11', 'PhoneNumber': 9940055778, 'image':' product-images/p-6.jpg'},
    { 'Date':  '2023-09-18', 'PhoneNumber': 9940055778, 'image':' product-images/p-1.jpg'},
    { 'Date':  '2023-09-14', 'PhoneNumber': 9940055778, 'image':' product-images/p-1.jpg'},
    { 'Date': '2023-09-18', 'PhoneNumber': 9940055778, 'image':' product-images/p-1.jpg'},
    { 'Date': '2023-09-18', 'PhoneNumber': 9940055778, 'image':' product-images/p-1.jpg'},
    { 'Date':  '2023-09-18', 'PhoneNumber': 9940055778, 'image':' product-images/p-1.jpg'},
    { 'Date':  '2023-09-18', 'PhoneNumber': 9940055778, 'image':' product-images/p-1.jpg'},
    { 'Date': '2023-09-18', 'PhoneNumber': 9940055778, 'image':' product-images/p-1.jpg'},
    { 'Date': '2023-09-18', 'PhoneNumber': 9940055778, 'image':' product-images/p-1.jpg'},
    { 'Date': '2023-09-18', 'PhoneNumber': 9940055778, 'image':' product-images/p-1.jpg'},
    { 'Date': '2023-09-18', 'PhoneNumber': 9940055778, 'image':' product-images/p-1.jpg'},
    { 'Date': '2023-09-18', 'PhoneNumber': 9940055778, 'image':' product-images/p-1.jpg'},
    { 'Date': '2023-09-18', 'PhoneNumber': 9940055778, 'image':' product-images/p-1.jpg'},
    { 'Date':  '2023-09-18', 'PhoneNumber': 9940055778, 'image':' product-images/p-1.jpg'},
    { 'Date': '2023-09-18', 'PhoneNumber': 9940055778, 'image':' product-images/p-1.jpg'},
    { 'Date':  '2023-09-18', 'PhoneNumber': 9940055778, 'image':' product-images/p-1.jpg'},
    { 'Date':  '2023-09-18', 'PhoneNumber': 9940055778, 'image':' product-images/p-1.jpg'},
    { 'Date':  '2023-09-18', 'PhoneNumber': 9940055778, 'image':' product-images/p-1.jpg'},
    { 'Date':  '2023-09-18', 'PhoneNumber': 9940055778, 'image':' product-images/p-1.jpg'}
];

let array = [];
let array_length = 0;
let table_size = 10;
let start_index = 1;
let end_index = 0;
let current_index = 1;
let max_index = 0;

function preloadCalculations() {
    filterImageList();
    array_length = array.length;
    max_index = parseInt(array_length / table_size);

    if ((array_length % table_size) > 0) {
        max_index++;
    }
}

function filterImageList() {
    let from_date = $("#from_date").val();
    let to_date = $("#to_date").val();

    array = ImageList.filter(function (object) {
        let imageDate = object.Date;
        return (from_date === '' || imageDate >= from_date) && (to_date === '' || imageDate <= to_date);
    });
}

function displayIndexButtons() {
    preloadCalculations();
    $(".index_buttons button").remove();
    $(".index_buttons").append('<button onclick="prev();">Previous</button>');
    for (var i = 1; i <= max_index; i++) {
        $(".index_buttons").append('<button onclick="indexPagination(' + i + ')" index="' + i + '">' + i + '</button>');
    }
    $(".index_buttons").append('<button onclick="next();">Next</button>');
    highlightIndexButton();
}

function highlightIndexButton() {
    start_index = ((current_index - 1) * table_size) + 1;
    end_index = (start_index + table_size) - 1;
    if (end_index > array_length) {
        end_index = array_length;
    }

    $(".table-footer span").text('Showing ' + start_index + ' to ' + end_index + ' of ' + array_length + ' entries');
    $(".index_buttons button").removeClass('active');
    $(".index_buttons button[index='" + current_index + "']").addClass('active');

    displayTableRows();
}

function displayTableRows() {
    $(".table table tbody tr").remove();
    const tab_start = start_index - 1;
    const tab_end = end_index;
    for (let i = tab_start; i < tab_end; i++) {
        const imageDash = array[i];
        const tr = '<tr>' +
            '<td>' + imageDash['PhoneNumber'] + '</td>' +
            '<td><img src="' + imageDash['image'] + '" alt="Product Image" width="100" onclick="showImageModal(\'' + imageDash['image'] + '\')"></td>' +
            '</tr>';
        $(".table tbody").append(tr);
    }
}

function next() {
    if (current_index < max_index) {
        current_index++;
        highlightIndexButton();
    }
}

function prev() {
    if (current_index > 1) {
        current_index--;
        highlightIndexButton();
    }
}

function indexPagination(index) {
    current_index = parseInt(index);
    highlightIndexButton();
}

$("#table_size").change(function () {
    table_size = parseInt($(this).val());
    current_index = 1;
    start_index = 1;
    displayIndexButtons();
});

$("#tab_filter_btn").click(function () {
    current_index = 1;
    start_index = 1;
    displayIndexButtons();
});

$("#from_date, #to_date").change(function () {
    current_index = 1;
    start_index = 1;
    displayIndexButtons();
});

displayIndexButtons();