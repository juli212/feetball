$(document).ready(function () {
  // loadMessages()
  // testLocationData()

  // $('#post-form').on('submit', function(e) {
  //   e.preventDefault();
  //   let post = $(e.target[0]).val().trim()
  //   let by = $(e.target[1]).val().trim()
  //   if (post === '' || by === '') return;

  //   let d = new Date()
  //   let now = d.toDateString()

  //   let data = {
  //     'by':by,'date':now,'post':post
  //   }

  //   $.ajax({
  //     type: 'POST',
  //     url: 'discuss.php',
  //     data: { messageData: data }
  //   }).done(function(data) {
  //     $('#post-form')[0].reset();
  //     let toAppend = buildNewMessage(data);
  //     if (!!toAppend) $('.messages').append(toAppend);
  //   })
  // })

  toggleFormVisibility();

  toggleMapButtons();

  // addMatch();
  // addResult();

});


// function loadMessages() {
//   $.ajax({
//     url: 'discussion.csv',
//     dataType: 'text'
//   }).done(function(data) {
//     let rows = data.split(/\r?\n|\r/);

//     if (rows.length <= 1) return;
//     $('.messages').find('.empty').remove();

//     for (i = 0; i+1 < rows.length; i++) {
//       let toAppend = buildNewMessage(rows[i]);
//       if (!!toAppend) $('.messages').append(toAppend);
//     }
//   });
// }

// function buildNewMessage(toSplit) {
//   let row = toSplit.split(',');
//   if (row[2].trim() === "") return false;
//   let top = "<article class='message'><div><p>"
//   let middle = "</p><span>"
//   let bottom = "</span></div></article>"
//   return top + row[2] + middle + row[1] + ' | ' + row[0] + bottom
// }

function toggleFormVisibility() {
  $('.add-game').on('click', 'button, a', function(e) {
    e.preventDefault();
    $(this).parent().children().toggleClass('hidden')
  })
}

function toggleMapButtons() {
  $('.map-buttons').on('click', 'button', function(e) {
    e.preventDefault();
    $(this).toggleClass('selected');
    // if ( $(this).hasClass('selected') ) return;
    // $(this).parent().children().removeClass('selected');
    // $(this).addClass('selected');
    if ( $(this).parent().children('selected').length > 1 ) {
      // load both...
      debugger;
    }
    // if (this.id === 'nyc') {
    //   // load nyc court data markers
    // } else if (this.id === 'favorites') {
    //   // load favorite map markers
    // }
  })
}

// if year is > this year
// year == this year and month > this month
// year & month == this year\this month and day >= this day

// function testLocationData() {
//   $.ajax({
//     url: 'courts.json',
//     dataType: "json"
//   }).done(function(response) {
//     debugger;
//   })
// }

// function addMatch() {
//   $('.add-game form').on('submit', function(e) {
//     e.preventDefault();
//       let date = $(e.target[0]).val().trim();
//       let time = $(e.target[1]).val().trim();
//       let location = $(e.target[2]).val().trim();
//       let password = $(e.target[3]).val().trim();
//     // let post = $(e.target[0]).val().trim()
//     // let by = $(e.target[1]).val().trim()
//     // if (post === '' && by === '') return;

//     let d = new Date()
//     let now = d.toDateString()

//     let data = {
//       'date':date,'time':time,'now':now,'location':location, 'password':password
//     }

//     $.ajax({
//       type: 'POST',
//       url: 'addMatch.php',
//       data: { matchData: data }
//     }).done(function(data) {
//       $('.add-game form')[0].reset();
//       // let toAppend = buildNewMessage(data);
//       // if (!!toAppend) $('.messages').append(toAppend);
//     })
//   })
// }