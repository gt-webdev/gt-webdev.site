import React from 'react';
import $ from 'jquery'
import Menu from './menu'
import Footer from './footer'
class Root extends React.Component {
  componentDidMount() {
    window.gtRequestAnimationFrame = window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)};
    $(document).ready(function($){
      /*
       * Parallax
       */
      var $window = $(window);
      $('[data-parallax-speed], .bg-parallax').each(function(){
          // declare the variable to affect the defined data-type
          var $scroll = $(this),
              scrollEl = this,
              speed = $scroll.data('parallax-speed');

          if(!speed && $scroll.is('.bg-parallax')){
              // Try to find a speed class
              $.each(this.className.split(' '), function(i, str){
                  var match = str.match(/^bg-parallax-speed-(\d+)$/);
                  if(match)speed=parseFloat(match[1]);
              });
          }

          if(!speed)speed = 20;

          speed /= 100;
          speed *= -1;



          $(window).on('scroll touchstart touchend touchmove touchcancel gesturestart gestureend gesturechange orientationchange', requestTick);

          var ticking = false;
          function requestTick() {
              if(!ticking)gtRequestAnimationFrame(recalc);
              ticking=true;
          }

          function recalc(){
              ticking=false;
              // HTML5 proves useful for helping with creating JS functions!
              // also, negative value because we're scrolling upwards
              var yPos = window.scrollY * speed;

              // move the background
              scrollEl.style.backgroundPosition = '50% '+ yPos + 'px';
          };
      });
    });
  }

  render() {
    return (
      <div className={'page-' + (this.props.location.pathname.replace(/^\/+/,'').replace(/\//g,'-') || 'home')}>
        <Menu />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

module.exports = Root;
