function AddTask() {
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'newCheckbox';
    checkbox.name = 'newCheckbox';
    checkbox.value = 'value';

    var label = document.createElement('label');
    label.htmlFor = 'newCheckbox';
    label.appendChild(document.createTextNode('New Checkbox'));

    var container = document.getElementById('checkboxContainer');
 
    container.appendChild(checkbox);
    container.appendChild(label);
    container.appendChild(br);

}

function DeleteTask() {

}