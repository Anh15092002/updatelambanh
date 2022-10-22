$('.start').click(function(){
    $('.stage1').fadeOut();
    fire_modal('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/cake_modal.png','Let’s make a cake!','Hôm nay là một ngày rất đặc biệt của em và từ 05/09/2022 thì nó cũng đã trở thành của anh, nên anh thấy thật ý nghĩa khi em có thể tự làm một chiếc bánh sinh nhật của riêng mình. Vậy nên chúng ta bắt đầu làm bánh bằng cách làm hỗn hợp cho bánh của em nào, sau đó nướng trong lò nướng và cuối cùng là trang trí. Chúc sinh nhật vui vẻ và hạnh phúc ');
})

progress = 1;

$('.modal_content button').click(function(){
    progress++;
    close_modal(progress)
})

function close_modal(callback){
    modal.css('transform','translateY(-50%) scale(0)')
    setTimeout(function(){
        $('.stage' + callback).fadeIn();
    },600)
}


function fire_modal(imgurl,title,content){

    modal = $('.birthday_inner__modal');
    modal.find('h1').html(title);
    modal.find('img').attr('src',imgurl);
    modal.find('p').html(content);
    setTimeout(function(){
        modal.css('transform','translateY(-50%) scale(1)')
    },1000)


}


mixing = false;
mixtimes = 0;

$('.mixer').click(function(){
    if(mixing == false){
        mixing = true
        mixtimes++;
        $('.mix_spoon img').addClass('move')
        setTimeout(function(){
            $('.mix_spoon img').removeClass('move')
            mixing = false;
        },1000)
    }
    if(mixtimes == 6){
        $('.stage2').fadeOut();
        fire_modal('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/mix_modal.png','Mix successful!','Chúc mừng Anhs, hỗn hợp là đã hoàn thành! Em thấy anh nói đúng không nào, không mất tí sức nào nhé. Rùi tiếp đến sẽ đổ hỗn hợp vào hộp nướng, bây giờ đã đến lúc đặt nó vào lò nướng của anh trong khoảng 3 giây. Chắc em thấy thời gian nướng quá ngắn nhỉ vì đây là lò nướng của anh làm ra mà kkk.');

    }

})

$('.tin').draggable({
    revert:true
})
$( ".oven" ).droppable({
    drop: function( event, ui ) {
        $('.stage3').fadeOut();
        fire_modal('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/oven_modal.png','Bake successfull!','Phần đế được nướng hoàn toàn và trông siêu ngon. Em rất có năng khiếu làm bánh đấy vậy mà phải ở KTX nên không được nấu ăn trổ tài nên phung phí tài năng này quá nhể.Nhưng mà Anh tin chắc là đây là lần đầu tiên em làm bánh kiểu này nhỉ. Không lam man nữa bây giờ đã đến lúc kết hợp lớp nền này với rất nhiều nguyên liệu khác nhá.');
    }
})

bases = 0;
fillings = 0;

$('.sponges .item_inner').click(function(){
    $('.sponges').addClass('inactive')
    $('.fillings').removeClass('inactive')
    t = $(this).attr('class').split(' ').pop();
    bases++
    if(bases < 6){
        add_sponge(t)
    }
})

$('.fillings .item_inner').click(function(){
    $('.fillings').addClass('inactive')
    $('.sponges').removeClass('inactive')
    f = $(this).attr('class').split(' ').pop();
    fillings++
    if(fillings < 7){
        add_filling(f)
    }
})

function add_sponge(t){

    $('.cakemake').prepend('<div style="width:' + (200 - (bases * 20)) + 'px" class="sponge sponge-' + t + '"><div></div><div></div><div></div><div></div><div></div></div>')
    $('.sponges h5 span').html(bases)
}

$('.startagain').click(function(){
    $('.cakemake').html('<div class="base"></div>');
    bases = 0;
    fillings = 0;
    $('.sponges h5 span').html(bases)
    $('.fillings h5 span').html(fillings)
     $('.fillings').removeClass('inactive')
    $('.sponges').addClass('inactive')
})
function add_filling(f){

    $('.cakemake').prepend('<div style="width:' + (200 - (bases * 20)) + 'px" class="filling filling-' + f + '"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>')
    $('.fillings h5 span').html(fillings)
}

function fin(){
    $('h1,h2,.options,.startagain,.add').fadeOut();
    
    setTimeout(function(){
        $('.cakemake').fadeIn()
        $('.cakemake').animate({'margin-top':'0px'})
    },1000)
    add_candle()
    $('svg').addClass('text')
}

function add_candle(){
    var stages = $('.cakemake > div').length;
    var h = (stages/2) * 41 + 22 + 'px';
    console.log(stages)
    $('.cakemake').prepend('<div class="candle" ><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/candle.png" /></div>')
    $('svg').show()
    setTimeout(function(){
        $('.sa').fadeIn()
    },2200)
    
}

$('.add').click(function(){
    fin();
})

$('.sa').click(function(){
    window.location.reload();
})