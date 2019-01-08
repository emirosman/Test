
$(document).ready(function(){
  // $('p').click(function(){
  //     var $this = $(this);
  //     $this.hide();
  //    console.log("selam");
  //   });
  $('#button1').click(function(){
      var $p2 = $('#p2');
      if($p2.data('state')=='active'){
        $p2.hide();
        $p2.data('state','passive');
        console.log("pasif");
      }
      else {
        $p2.show();
        $p2.data('state','active');
        $p2.css('color','red');
        console.log("aktif");
      }
    });

    $('#p1').click(function(){
      $('#button1').click();
    });
});
