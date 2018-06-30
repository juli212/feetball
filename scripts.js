$(document).ready(function () {
  loadMessages()


  $('#post-form').on('submit', function(e) {
    e.preventDefault();
    let post = $(e.target[0]).val().trim()
    let by = $(e.target[1]).val().trim()
    let postType = $(e.target[2]).val().trim()
    if (post === '' || by === '') return;

    let d = new Date()
    let now = d.toDateString()

    let data = {
      'by':by,'date':now,'post':post,'postType':postType
    }
    console.log(data)
    $.ajax({
      type: 'POST',
      url: 'postDiscussionsOld.php',
      data: { messageData: data }
    }).done(function(data) {
      $('#post-form')[0].reset();
      loadMessages()
    })
//Original Version    
//    $.ajax({
//      type: 'POST',
//      url: 'discuss.php',
//      data: { messageData: data }
//    }).done(function(data) {
//      $('#post-form')[0].reset();
//      let toAppend = buildNewMessage(data);
//      $('.messages').append(toAppend);
//    })    
  })

});


function loadMessages() {
  $.ajax({
    type:'GET',
    url:'getDiscussionsOld.php',
    dataType: "html",
    success:function(data){
      $('.messages').find('.empty').remove();
      $('.messages').find('.message').remove();
      $('.messages').append(data)
    }
  });
}

function loadMessagesOld() {
  $.ajax({
    url: 'discussion.csv',
    dataType: 'text'
  }).done(function(data) {
    let rows = data.split(/\r?\n|\r/);

    if (rows.length <= 1) return;
    $('.messages').find('.empty').remove();

    for (i = 0; i+1 < rows.length; i++) {
      let toAppend = buildNewMessage(rows[i])
      $('.messages').append(toAppend)
    }
  });
}


function buildNewMessage(toSplit) {
  let row = toSplit.split(',')
  let top = "<article class='message'><div><p>"
  let middle = "</p><span>"
  let bottom = "</span></div></article>"
  return top + row[2] + middle + row[1] + ' | ' + row[0] + bottom
}