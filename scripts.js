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
  })

});


function loadMessages() {
  $.ajax({
    type:'GET',
    url:'getDiscussionsOld.php',
    dataType: "json",
    success:function(data){
      $('.messages').find('.empty').remove();
      $('.messages').find('.message').remove();

      $.each(data, function(idx, message) {
        let toAppend = buildMessage(message)
        $('.messages').append(toAppend);
      })
    }
  });
}

function buildMessage(messageData) {
  let id = messageData.discussion_old_id
  let text = messageData.text
  let user = messageData.user_name
  let date = messageData.created_on

  return `<article class='message'><div><p>${text}</p><span>${user} | ${date}</span></div></article>`
}