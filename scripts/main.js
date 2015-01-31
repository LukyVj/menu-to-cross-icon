/* 
Menu to cross icon - 2015
Author : @LukyVj 
http://lucasbonomi.com 
*/
// Unrelated to icons 
$('.howmuch').empty().append($('section').length);

setTimeout(function(){
  $('#twitter-widget-0').css('transform', 'scale(.8)');
}, 500);


$(document).keydown(function(e) {
  switch(e.which) {

    case 38: // up
      $('html:not(:animated), body:not(:animated)').animate({
        scrollTop: $(window).scrollTop()  - $(window).height()
      });
      break;

    case 40: // down
      $('html:not(:animated), body:not(:animated)').animate({
        scrollTop: $(window).scrollTop() + $(window).height()
      });
      break;

    default: return; // exit this handler for other keys
  }
  e.preventDefault(); // prevent the default action (scroll / move caret)
});

$('.show_snippet').on('click', function(e){
  e.preventDefault();
  var $this = $(this);
  $this.parent().parent().find('.snippet').toggleClass('show');
  $this.parent().toggleClass('ckd');
  $('body').toggleClass('lock');
   $('html, body').animate({
        scrollTop: $this.parent().parent().offset().top
    }, 500);
  });
$('.close').on('click', function(e){
  e.preventDefault();
  var $this = $(this);
  $('body').toggleClass('lock');
  $this.parent().parent().toggleClass('show');
    $this.parent().parent().fond('.options').toggleClass('ckd');

});

$('.codepen-able').each( function(e){

    var el = $(this),
        type = el.parent().parent().find('pre').data("type"),
        codeInside = el.parent().parent().find('pre').find("code"),
        isCodeInside = codeInside.length,
        isHTML = el.parent().parent().find('pre[data-type="html"] code'),
        isCSS = el.parent().parent().find('pre[data-type="css"] code'),
        isJS = el.parent().parent().find('pre[data-type="js"] code'),
        HTML = isHTML.html(),
        CSS = isCSS.html(),
        JS = isJS.html(),
        data = {
          title              : "",
          description        : "",
          html               : HTML,
          html_pre_processor : "none",
          css                : CSS,
          css_pre_processor  : "none",
          css_starter        : "neither",
          css_prefix_free    : false,
          css_prefix         : "autoprefixer",
          js                 : JS,
          js_pre_processor   : "none",
          js_modernizr       : false,
          js_library         : "jquery",
          html_classes       : "",
          css_external       : "",
          js_external        : ""
        },
        // Quotes will screw up the JSON
        JSONstring = JSON.stringify(data)
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&apos;"),
        form =
          '<form action="http://codepen.io/pen/define" method="POST" target="_blank">' + 
            '<input type="hidden" name="data" value=\'' + 
              JSONstring + 
              '\'>' + 
            '<input type="image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/64/Shape.svg" width="40" height="40" value="Create New Pen with Prefilled Data" class="codepen-mover-button">' +
          '</form>';

    el.append(form);

});


// Sample 2 
$(document).ready(function(){

  var svg = $('svg'),
      lines = svg.find('rect'),
      line_first = $('svg rect:nth-child(1)'),
      line_second = $('svg rect:nth-child(2)'),
      line_third = $('svg rect:nth-child(3)'),
      i = true;

  svg.on('click', function(){
    if (i) {
      setTimeout(function(){
        $(this).find("g").addClass('gotcha');

        line_first.css({
          'transform':'rotate(45deg)',
          'left':'50%',
          'top':'50%',
          'width':'200px',
          // This line BELONGS to @dervondenbergen :D 
          // Enjoy your propriety my friend.
          'transform-origin': 'left bottom'
        });
        line_third.css({
          'transform':'rotate(-45deg) translate(-50%,-50%)',
          'left':'50%',
          'top':'50%'
        });
        line_second.css('opacity','0');
      },005);
    } else {
      setTimeout(function(){
        line_first.attr('style', '');
        line_third.attr('style', '');
        line_second.css('opacity','1');
      },005);
    }
    i=!i; 
  });


  // Sample 4 
  var $block = $('.sample--4'),
      $icon = $block.find('span');
  $icon.on('click',function(e){
    $(this).toggleClass('close');
  });

});

