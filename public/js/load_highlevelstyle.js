function applyStyle() { 
    console.log('apply style...');
    //Sunshine style
    let content = $('.sunshine').text();
    $('.sunshine').empty();
    $('.sunshine').prepend('<section style="width: 50px;margin-bottom:-35px; height: 50px; background-color: rgb(255, 213, 34); border-radius: 50%; box-sizing: border-box;"></section>');
    $('.sunshine').append('<span class="sunshine-text">'+content+'</span>');
    $('.sunshine').append('<section style="margin-left: auto;margin-top:-35px; width: 50px; height: 50px; background-color: rgb(255, 213, 34); border-radius: 50%; box-sizing: border-box;"></section>');


    //Simple Style
    content = $('.simple').text();
    $('.simple').empty();
    $('.simple').prepend('<section style="margin-bottom:-15px;border-top:solid;border-left:solid;border-right:solid;border-width:1px;border-color:rgb(122, 174, 161);width:100%;height:25px;"></section>');
    $('.simple').append('<span class="simple-text">'+content+'</span>');
    $('.simple').append('<section style="margin-top:-15px;border-bottom:solid;border-left:solid;border-right:solid;border-width:1px;border-color:rgb(122, 174, 161);width:100%;height:25px;"></section>');

    //Num Style
    $('.num').each(function(){
        let content = $(this).text();
        let m_number = $(this).attr('number');
        let m_title = $(this).attr('title');
        $(this).empty();
        $(this).prepend(
    });
    
};