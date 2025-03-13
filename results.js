// JavaScript code for search functionality

// Load JSON data
let data = JSON.parse('{"lenses": [{"name": "Canon Lens 50 mm RF 1.2F","manufacturer": "Canon","aperture": "f/1.2"},{"name": "Canon Lens 24-105 mm RF","manufacturer": "Canon","aperture": "f/2.8"},{"name": "Canon Lens 85 mm RF","manufacturer": "Canon","aperture": "f/1.2"},{"name": "Canon Lens 100 mm RF","manufacturer": "Canon","aperture": "f/2.8"},{"name": "Canon Lens 70-200 mm RF","manufacturer": "Canon","aperture": "f/2.8"}]}');

// Get input element and results list
let search = document.getElementById('search');
let results = document.getElementById('results');

// Attach event listener to input element
search.addEventListener('keyup', function(event) {

  // Clear results list
  results.innerHTML = '';

  // Get search term
  let searchTerm = event.target.value.toLowerCase();

  // Loop through data and check for matches
  data.lenses.forEach(function(book) {

    // Check if title or author contains search term
    if (lenses.name.toLowerCase().indexOf(searchTerm) > -1 || lens.manufacturer.toLowerCase().indexOf(searchTerm) > -1) {

      // Create result item
      let item = document.createElement('li');
      item.innerHTML = lens.name + ' made by ' + lens.manufacturer + ' (' + lenses.aperture + ')';
      results.appendChild(item);

    }

  });

});