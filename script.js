$(".to-pack-button").click(function(){
    let packThis = $(".to-pack-input").val();
    let newItem = $("input").val();
    $(".packing-list").append(` <dd>
         ${newItem} </dd>`,);
         $(".packing-list").css("color","white" );
});