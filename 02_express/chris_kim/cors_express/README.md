npm install express --save-dev

This allows us to read packets of data --> readable stream
npm install body-parser --save-dev


http://codepen.io/code-for-coffee/pen/vNEBgP?editors=101
$('button').on('click', function() {

  $.ajax({
    url: 'http://localhost:5000/submit?booze=true',
    data: {name: 'James', friend: 'Vader'},
    type: 'post',
    dataType: 'json',
    success: function(data) {
      console.log('it worked!')
      console.log(data);
      for (var key in data) {
        $('body').append('<li>' + key + ": " + data[key] + '</li>');
      }
    }
  });
});

<button>post to $.ajax info</button>


$('button').on('click', function() {

  $.ajax({
    url: 'http://localhost:5000/chris',
    data: {name: 'Chris', friend: 'Vader'},
    type: 'post',
    success: function(data) {
      console.log(data);

    }
  });

});

<button>post to $.ajax info</button>
