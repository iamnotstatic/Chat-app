const socket = io();

// Element 
const $rooms = document.querySelector('#rooms');
const $form = document.querySelector('#form');
const $input = document.querySelector('input');
const $roomInput = document.querySelector('#roomInput');

// Templates
const roomsTemplate = document.querySelector('#rooms-template').innerHTML;

socket.on('rooms', (rooms) => {
    const html = Mustache.render(roomsTemplate, {
        rooms
    })
    $rooms.innerHTML = html;
})

$rooms.addEventListener('change', (e) => {
    if (e.target.value !== undefined) {
        $roomInput.setAttribute('disabled', 'disabled');
    }
})