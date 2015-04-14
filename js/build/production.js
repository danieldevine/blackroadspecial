/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/*!
 *  Liquid Slider v2.0.8
 *  http://liquidslider.com
 *  GPL license
 */

// See https://github.com/KevinBatdorf/liquidslider for version updates

/*jslint bitwise: true, browser: true */
/*global $, jQuery */
/*jshint unused:false, curly:false */

// Utility for creating objects in older browsers
if (typeof Object.create !== 'function') {
  Object.create = function(obj) {
    "use strict";
    function F() {}
    F.prototype = obj;
    return new F();
  };
}
(function($, window, document, undefined) {
  "use strict";
  var Slider = {
    //initialize

    makeResponsive: function() {
      var self = this;
      // Adjust widths and add classes to make responsive
      $(self.sliderId + '-wrapper').addClass('ls-responsive').css({
        'max-width': $(self.sliderId + ' .panel:first-child').width(),
        'width': '100%'
      });
      // Update widths
      $(self.sliderId + ' .panel-container').css('width', 100 * self.panelCountTotal + self.pSign);
      $(self.sliderId + ' .panel').css('width', 100 / self.panelCountTotal + self.pSign);

      // Cache the padding for add/removing arrows
      if (self.options.hideArrowsWhenMobile) {
        self.leftWrapperPadding = $(self.sliderId + '-wrapper').css('padding-left');
        self.rightWrapperPadding = (self.$sliderWrap).css('padding-right');
      }
      // Set events and fire on browser resize
      self.responsiveEvents();
      $(window).bind('resize', function() {
        self.responsiveEvents();

        clearTimeout(self.resizingTimeout);
        self.resizingTimeout = setTimeout(function() {
          var height = (self.options.autoHeight) ? self.getHeight() : self.getHeighestPanel(self.nextPanel);
          self.adjustHeight(false, height);
        }, 500);
      });
    },

    responsiveEvents: function() {
      var self = this,
        mobileNavChangeOver = (self.options.hideArrowsThreshold ||
          self.options.mobileUIThreshold ||
          (self.totalNavWidth + 10));
      // Since we are resizing, let's simply test the width
      if ((self.$sliderId).outerWidth() < mobileNavChangeOver) {
        if (self.options.mobileNavigation) {
          (self.navigation).css('display', 'none');
          (self.dropdown).css('display', 'block');
          (self.dropdownSelect).css('display', 'block');
          // Update the navigation
          $(self.sliderId + '-nav-select').val(self.options.mobileNavDefaultText);
        }
        if (self.options.dynamicArrows) {
          if (self.options.hideArrowsWhenMobile) {
            (self.leftArrow).remove().length = 0;
            (self.rightArrow).remove().length = 0;
          } else if (!self.options.dynamicArrowsGraphical) {
            // If using text arrows, let's move them to the top
            (self.leftArrow).css('margin-' + self.options.dynamicTabsPosition, '0');
            (self.rightArrow).css('margin-' + self.options.dynamicTabsPosition, '0');
          }
        }
      } else {
        if (self.options.mobileNavigation) {
          (self.navigation).css('display', 'block');
          (self.dropdown).css('display', 'none');
          (self.dropdownSelect).css('display', 'none');
        }
        if (self.options.dynamicArrows) {
          if (self.options.hideArrowsWhenMobile &&
            (!(self.leftArrow).length || !(self.rightArrow).length)) {
            self.addArrows();
            self.registerArrows();
          }
        } else if (!self.options.dynamicArrowsGraphical) {
          // Reposition the text arrows
          (self.leftArrow).css('margin-' +
            self.options.dynamicTabsPosition, (self.navigation).css('height'));
          (self.rightArrow).css('margin-' +
            self.options.dynamicTabsPosition, (self.navigation).css('height'));
        }
      }
      // While resizing, set the width to 100%
      $(self.sliderId + '-wrapper').css('width', '100%');

      // Update when the select box changes
      if (self.options.mobileNavigation) {
        (self.dropdownSelect).change(function() {
          self.setNextPanel(parseInt($(this).val().split('tab')[1], 10) - 1);
        });
      }
    },

    addNavigation: function(navClass) {
      var self = this,
        dynamicTabsElm = '<' + self.options.navElementTag + ' class="ls-nav"><ul id="' +
          (self.$elem).attr('id') + '-nav-ul"></ul></' + self.options.navElementTag + '>';
      // Add basic frame
      if (self.options.dynamicTabsPosition === 'bottom') {
        (self.$sliderId).after(dynamicTabsElm);
      } else {
        (self.$sliderId).before(dynamicTabsElm);
      }

      // Add responsive navigation
      if (self.options.mobileNavigation) {
        var selectBoxDefault = (self.options.mobileNavDefaultText) ?
          '<option disabled="disabled" selected="selected">' +
          self.options.mobileNavDefaultText + '</option>' :
          null,
          dropDownList = '<div class="ls-select-box"><select id="' +
            (self.$elem).attr('id') + '-nav-select" name="navigation">' +
            selectBoxDefault + '</select></div>';
        // cache elements
        self.navigation = $(self.sliderId + '-nav-ul').before(dropDownList);
        self.dropdown = $(self.sliderId + '-wrapper .ls-select-box');
        self.dropdownSelect = $(self.sliderId + '-nav-select');

        $.each(
          (self.$elem).find(self.options.panelTitleSelector),
          function(n) {
            $((self.$sliderWrap)).find('.ls-select-box select')
              .append('<option value="tab' + (n + 1) + '">' +
              $(this).text() + '</option>');
          }
        );
      }
      // Add standard navigation
      $.each(
        (self.$elem).find(self.options.panelTitleSelector),
        function(n) {
          $((self.$sliderWrap)).find('.ls-nav ul').append('<li class="tab' +
            (n + 1) + '"><a class="' + ( navClass || '') + '" href="#' +
            (n + 1) + '">' + self.getNavInsides(this) + '</a></li>');
          if (!self.options.includeTitle) $(this).remove();
        }
      );
    },

    getNavInsides: function(input) {
      return (this.options.dynamicTabsHtml) ? $(input).html() : $(input).text();
    },

    alignNavigation: function() {
      var self = this,
        arrow = (self.options.dynamicArrowsGraphical) ? '-arrow' : '';
      // Set the alignment, adjusting for margins
      if (self.options.dynamicTabsAlign !== 'center') {
        if (!self.options.responsive) {
          $((self.$sliderWrap)).find('.ls-nav ul').css(
            'margin-' + self.options.dynamicTabsAlign,
            // Finds the width of the arrows and the margin
            $((self.$sliderWrap)).find(
              '.ls-nav-' +
              self.options.dynamicTabsAlign +
              arrow
            ).outerWidth(true) + parseInt((self.$sliderId)
              .css('margin-' + self.options.dynamicTabsAlign), 10)
          );
        }
        $((self.$sliderWrap)).find('.ls-nav ul').css('float', self.options.dynamicTabsAlign);
      }
      self.totalNavWidth = $((self.$sliderWrap)).find('.ls-nav ul').outerWidth(true);
      if (self.options.dynamicTabsAlign === 'center') {
        // Get total width of the navigation tabs and center it
        self.totalNavWidth = 0;
        $((self.$sliderWrap)).find('.ls-nav li a').each(function() {
          self.totalNavWidth += $(this).outerWidth(true);
        });
        $((self.$sliderWrap)).find('.ls-nav ul').css('width', self.totalNavWidth + 1);
      }
    },

    registerNav: function() {
      var self = this;
      (self.$sliderWrap).find('[class^=ls-nav] li').on('click', function() {
        self.setNextPanel(parseInt($(this).attr('class').split('tab')[1], 10) - 1);
        return false;
      });
    },

    addArrows: function(arrowClass) {
      var self = this,
        arrow = (self.options.dynamicArrowsGraphical) ? "-arrow " : ' ';
      (self.$sliderWrap).addClass("arrows");

      if (self.options.dynamicArrowsGraphical) {
        self.options.dynamicArrowLeftText = '';
        self.options.dynamicArrowRightText = '';
      }
      // Build the arrows
      (self.$sliderId).before('<div class="ls-nav-left' + arrow + (arrowClass || '') +
        '"><a href="#">' +
        self.options.dynamicArrowLeftText + '</a></div>');
      (self.$sliderId).after('<div class="ls-nav-right' + arrow + (arrowClass || '') +
        '"><a href="#">' +
        self.options.dynamicArrowRightText + '</a></div>');

      self.leftArrow = $(self.sliderId + '-wrapper [class^=ls-nav-left]')
        .css('visibility', "hidden").addClass('ls-hidden');
      self.rightArrow = $(self.sliderId + '-wrapper [class^=ls-nav-right]')
        .css('visibility', "hidden").addClass('ls-hidden');
      if (!self.options.hoverArrows) self.hideShowArrows(undefined, true, true, false);
    },

    hideShowArrows: function(speed, forceVisibility, showBoth, hideBoth) {
      var self = this,
        fadeOut = (typeof speed !== 'undefined') ? speed : self.options.fadeOutDuration,
        fadeIn = (typeof speed !== 'undefined') ? speed : self.options.fadeInDuration,
        visibility = forceVisibility ? "visible" : "hidden";

      if (!showBoth && (hideBoth || (self.sanatizeNumber(self.nextPanel) === 1))) {
        self.leftArrow.stop().fadeTo(fadeOut, 0, function() {
          $(this).css('visibility', visibility).addClass('ls-hidden');
        });
      } else if (showBoth || self.leftArrow.hasClass('ls-hidden')) {
        self.leftArrow.stop().css('visibility', "visible").fadeTo(fadeIn, 1).removeClass('ls-hidden');
      }
      if (!showBoth && (hideBoth || (self.sanatizeNumber(self.nextPanel) === self.panelCount))) {
        self.rightArrow.stop().fadeTo(fadeOut, 0, function() {
          $(this).css('visibility', visibility).addClass('ls-hidden');
        });
      } else if (showBoth || self.rightArrow.hasClass('ls-hidden')) {
        self.rightArrow.stop().css('visibility', "visible").fadeTo(fadeIn, 1).removeClass('ls-hidden');
      }
    },

    registerArrows: function() {
      var self = this;
      $((self.$sliderWrap).find('[class^=ls-nav-]')).on('click', function() {
        self.setNextPanel($(this).attr('class').split(' ')[0].split('-')[2]);
      });
    },

    registerCrossLinks: function() {
      var self = this;
      // Find cross links
      self.crosslinks = $('[data-liquidslider-ref*=' + (self.sliderId).split('#')[1] + ']');
      (self.crosslinks).on('click', function(e) {
        if (self.options.autoSlide === true)
          self.startAutoSlide(true);
        self.setNextPanel(self.getPanelNumber(($(this).attr('href').split('#')[1]), self.options.panelTitleSelector));
        e.preventDefault();
      });
    },

    registerTouch: function() {
      var self = this,
      args = self.options.swipeArgs || {
        fallbackToMouseEvents: false,
        allowPageScroll: "vertical",
        swipe: function(e, dir) {
          if (dir === 'up' || dir === 'down')
            return false;
          // Reverse the swipe direction
          self.swipeDir = (dir === 'left') ? 'right' : 'left';
          self.setNextPanel(self.swipeDir);
        }};
      $(self.sliderId + ' .panel').swipe(args);
    },

    registerKeyboard: function() {
      var self = this;
      $(document).keydown(function(event) {
        var key = event.keyCode || event.which;
        if (event.target.type !== 'textarea' && event.target.type !== 'textbox') {
          // Off the autoSlider
          if (!self.options.forceAutoSlide)
            $(this).trigger('click');
          if (key === self.options.leftKey)
            self.setNextPanel('right');
          if (key === self.options.rightKey)
            self.setNextPanel('left');
          $.each(self.options.panelKeys, function(index, value) {
            if (key === value) {
              self.setNextPanel(index - 1);
            }
          });
        }
      });
    },

    autoSlide: function() {
      var self = this;
      // Can't set the autoSlide slower than the easing ;-)
      if (self.options.autoSlideInterval < self.options.slideEaseDuration) {
        self.options.autoSlideInterval =
          (self.options.slideEaseDuration > self.options.heightEaseDuration) ?
          self.options.slideEaseDuration : self.options.heightEaseDuration;
      }
      self.autoSlideTimeout = setTimeout(function() {
        // Slide left or right
        self.setNextPanel(self.options.autoSlideDirection);
        self.autoSlide();
      }, self.options.autoSlideInterval);
    },

    stopAutoSlide: function() {
      var self = this;
      self.options.autoSlide = false;
      clearTimeout(self.autoSlideTimeout);
    },

    startAutoSlide: function(reset) {
      var self = this;
      self.options.autoSlide = true;
      if (!reset) self.setNextPanel(self.options.autoSlideDirection);
      self.autoSlide(clearTimeout(self.autoSlideTimeout));
    },

    updateHashTags: function() {
      var self = this,
        filtered = (self.nextPanel === self.panelCount) ? 0 : self.nextPanel;
      window.location.hash = self.getFromPanel(self.options.hashTitleSelector, filtered);
    },

    adjustHeight: function(noAnimation, height, easing, duration) {
      var self = this;
      if (noAnimation || self.useCSS) {
        if (noAnimation) self.configureCSSTransitions('0', '0');
        (self.$sliderId).height(height);
        if (noAnimation) self.configureCSSTransitions();
        return;
      }
      (self.$sliderId).animate({
        'height': height + 'px'
      }, {
        easing: easing || self.options.heightEaseFunction,
        duration: duration || self.options.heightEaseDuration,
        queue: false
      });
    },

    getHeight: function(height) {
      var self = this;
      height = height || self.$panelClass.eq(self.sanatizeNumber(self.nextPanel) - 1).outerHeight(true);
      // If the height in the settings be higher, honor thy
      height = (height < self.options.minHeight) ? self.options.minHeight : height;
      return height;
    },

    addPreloader: function() {
      var self = this;
      $(self.sliderId + '-wrapper').append('<div class="ls-preloader"></div>');
    },

    removePreloader: function() {
      var self = this;
      $(self.sliderId + '-wrapper .ls-preloader').fadeTo('slow', 0, function() {
        $(this).remove();
      });
    },

    init: function(options, elem) {
      var self = this;
      // Cache the element
      self.elem = elem;
      self.$elem = $(elem);

      $('body').removeClass('no-js');

      // Cache the ID and class. This allows for multiple instances with any ID name supplied
      self.sliderId = '#' + (self.$elem).attr('id');
      self.$sliderId = $(self.sliderId);

      // Set the options
      self.options = $.extend({}, $.fn.liquidSlider.options, options);

      // Variable for the % sign if needed (responsive), otherwise px
      self.pSign = (self.options.responsive) ? '%' : 'px';

      if (self.options.responsive) {
        // jQuery or CSS3 ?
        self.determineAnimationType();
      } else {
        // Disable some stuff
        self.options.mobileNavigation = false;
        self.options.hideArrowsWhenMobile = false;
      }

      // If using animate.css, add the class here and disable other options.
      if (self.options.slideEaseFunction === "animate.css") {
        if (!self.useCSS) {
          self.options.slideEaseFunction = "easeInOutExpo";
        } else {
          self.options.continuous = false;
          self.animateCSS = true;
        }
      }
      // Build the tabs and navigation
      self.build();

      // Register events
      self.events();
      // Fix width
      if (!self.options.responsive && self.options.dynamicArrows)
        self.$sliderWrap.width(self.$sliderId.outerWidth(true) +
          self.leftArrow.outerWidth(true) +
          self.rightArrow.outerWidth(true));

      self.loaded = true;

      $(window).bind("load", function() {
        self.options.preload.call(self);
      });
    },

    build: function() {
      var self = this,
        isAbsolute;
      // Wrap the entire slider unless manually there
      if ((self.$sliderId).parent().attr('class') !== 'ls-wrapper') {
        (self.$sliderId).wrap('<div id="' +
          (self.$elem).attr('id') +
          '-wrapper" class="ls-wrapper"></div>');
      }
      // Cache the wrapper
      self.$sliderWrap = $(self.sliderId + '-wrapper');

      if (self.options.preloader) self.addPreloader();

      // Add the .panel class to the individual panels
      $(self.sliderId).children().addClass((self.$elem).attr('id') + '-panel panel');
      self.panelClass = self.sliderId + ' .' + (self.$elem).attr('id') + '-panel:not(.clone)';
      self.$panelClass = $(self.panelClass);

      // Wrap all panels in a div, and wrap inner content in a div (not backwards compatible)
      (self.$panelClass).wrapAll('<div class="panel-container"></div>');
      (self.$panelClass).wrapInner('<div class="panel-wrapper"></div>');
      self.panelContainer = (self.$panelClass).parent();
      self.$panelContainer = self.panelContainer;

      // If using fade transition, add the class here and disable other options.
      if (self.options.slideEaseFunction === "fade") {
        (self.$panelClass).addClass('fade');
        self.options.continuous = false;
        self.fade = true;
      }

      // Build navigation tabs
      if (self.options.dynamicTabs)
        self.addNavigation();
      else
        self.options.mobileNavigation = false;

      // Build navigation arrows or disable features
      if (self.options.dynamicArrows) {
        self.addArrows();
      } else {
        self.options.hoverArrows = false;
        self.options.hideSideArrows = false;
        self.options.hideArrowsWhenMobile = false;
      }
      // Create a container width to allow for a smooth float right. Won't calculate arrows if absolute
      isAbsolute = ((self.$leftArrow) && (self.$leftArrow).css('position') === 'absolute') ? 0 : 1;

      // Set slider width
      self.totalSliderWidth = (self.$sliderId).outerWidth(true) +
        ($(self.$leftArrow).outerWidth(true)) * isAbsolute +
        ($(self.$rightArrow).outerWidth(true)) * isAbsolute;
      $((self.$sliderWrap)).css('width', self.totalSliderWidth);

      // Align navigation tabs
      if (self.options.dynamicTabs) self.alignNavigation();

      if (self.options.hideSideArrows) self.options.continuous = false;

      // Clone panels if continuous is enabled
      if (self.options.continuous) {
        (self.$panelContainer).prepend((self.$panelContainer).children().last().clone().addClass('clone'));
        (self.$panelContainer).append((self.$panelContainer).children().eq(1).clone().addClass('clone'));
      }
      var clonedCount = (self.options.continuous) ? 2 : 0;

      // Count the number of panels and get the combined width
      self.panelCount = $(self.panelClass).length;
      self.panelCountTotal = (self.fade) ? 1 : self.panelCount + clonedCount;
      self.panelWidth = $(self.panelClass).outerWidth();
      self.totalWidth = self.panelCountTotal * self.panelWidth;

      // Apply the width to the panel container
      $(self.sliderId + ' .panel-container').css('width', self.totalWidth);

      //How far should we slide?
      self.slideDistance = (self.options.responsive) ? 100 : $(self.sliderId).outerWidth();
      if (self.useCSS) {
        self.totalWidth = 100 * self.panelCountTotal;
        self.slideDistance = 100 / self.panelCountTotal;
      }
      // Make responsive
      if (self.options.responsive) self.makeResponsive();

      // Apply starting position
      self.prepareTransition(self.getFirstPanel(), true);

      // Update the class
      self.updateClass();
    },

    determineAnimationType: function() {
      var self = this,
        animationstring = 'animation',
        keyframeprefix = '',
        domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
        pfx = '',
        i = 0;
      // Decide whether or not to use CSS transitions or jQuery
      // https://developer.mozilla.org/en-US/docs/CSS/CSS_animations/Detecting_CSS_animation_support
      self.useCSS = false;
      if (self.elem.style.animationName) {
        self.useCSS = true;
      }
      if (self.useCSS === false) {
        for (i = 0; i < domPrefixes.length; i++) {
          if (self.elem.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
            pfx = domPrefixes[i];
            animationstring = pfx + 'Animation';
            keyframeprefix = '-' + pfx.toLowerCase() + '-';
            self.useCSS = true;
            break;
          }
        }
      }
      if (document.documentElement.clientWidth > self.options.useCSSMaxWidth) {
        self.useCSS = false;
      }
    },

    configureCSSTransitions: function(slide, height) {
      var self = this,
        slideTransition,
        heightTransition;
      self.easing = {
        // Penner equations
        easeOutCubic: 'cubic-bezier(.215,.61,.355,1)',
        easeInOutCubic: 'cubic-bezier(.645,.045,.355,1)',
        easeInCirc: 'cubic-bezier(.6,.04,.98,.335)',
        easeOutCirc: 'cubic-bezier(.075,.82,.165,1)',
        easeInOutCirc: 'cubic-bezier(.785,.135,.15,.86)',
        easeInExpo: 'cubic-bezier(.95,.05,.795,.035)',
        easeOutExpo: 'cubic-bezier(.19,1,.22,1)',
        easeInOutExpo: 'cubic-bezier(1,0,0,1)',
        easeInQuad: 'cubic-bezier(.55,.085,.68,.53)',
        easeOutQuad: 'cubic-bezier(.25,.46,.45,.94)',
        easeInOutQuad: 'cubic-bezier(.455,.03,.515,.955)',
        easeInQuart: 'cubic-bezier(.895,.03,.685,.22)',
        easeOutQuart: 'cubic-bezier(.165,.84,.44,1)',
        easeInOutQuart: 'cubic-bezier(.77,0,.175,1)',
        easeInQuint: 'cubic-bezier(.755,.05,.855,.06)',
        easeOutQuint: 'cubic-bezier(.23,1,.32,1)',
        easeInOutQuint: 'cubic-bezier(.86,0,.07,1)',
        easeInSine: 'cubic-bezier(.47,0,.745,.715)',
        easeOutSine: 'cubic-bezier(.39,.575,.565,1)',
        easeInOutSine: 'cubic-bezier(.445,.05,.55,.95)',
        easeInBack: 'cubic-bezier(.6,-.28,.735,.045)',
        easeOutBack: 'cubic-bezier(.175,.885,.32,1.275)',
        easeInOutBack: 'cubic-bezier(.68,-.55,.265,1.55)'
      };
      // Build a CSS class depending on the type of transition
      if (self.useCSS) {
        slideTransition = 'all ' + (slide || self.options.slideEaseDuration) + 'ms ' +
          self.easing[self.options.slideEaseFunction];
        heightTransition = 'all ' + (height || self.options.heightEaseDuration) + 'ms ' +
          self.easing[self.options.heightEaseFunction];
        // Build the width transition rules
        $(self.panelContainer).css({
          '-webkit-transition': slideTransition,
          '-moz-transition': slideTransition,
          '-ms-transition': slideTransition,
          '-o-transition': slideTransition,
          'transition': slideTransition
        });
        // Build the height transition rules
        if (self.options.autoHeight) {
          (self.$sliderId).css({
            '-webkit-transition': heightTransition,
            '-moz-transition': heightTransition,
            '-ms-transition': heightTransition,
            '-o-transition': heightTransition,
            'transition': heightTransition
          });
        }
      }
    },
    
    transitionFade: function() {
      var self = this;
      $(self.panelClass).eq(self.nextPanel)
        .fadeTo(self.options.fadeInDuration, 1.0).css('z-index', 1);
      $(self.panelClass).eq(self.prevPanel)
        .fadeTo(self.options.fadeOutDuration, 0).css('z-index', 0);
      self.callback(self.options.callback, true);
    },

    hover: function() {
      var self = this;

      (self.$sliderWrap).hover(
        function() {
          if (self.options.hoverArrows)
            self.hideShowArrows(self.options.fadeInDuration, true, true, false);

          if (self.options.pauseOnHover)
            clearTimeout(self.autoSlideTimeout);
        },
        function() {
          if (self.options.hoverArrows)
            self.hideShowArrows(self.options.fadeOutnDuration, true, false, true);

          if (self.options.pauseOnHover && self.options.autoSlide)
            self.startAutoSlide();
        }
      );
    },

    events: function() {
      var self = this;

      if (self.options.dynamicArrows) self.registerArrows();
      if (self.options.crossLinks) self.registerCrossLinks();
      if (self.options.dynamicTabs) self.registerNav();
      if (self.options.swipe) self.registerTouch();
      if (self.options.keyboardNavigation) self.registerKeyboard();

      // Click to stop autoSlider
      (self.$sliderWrap).find('*').on('click', function() {
        if (self.options.forceAutoSlide)
          self.startAutoSlide(true);
        else if (self.options.autoSlide)
          self.stopAutoSlide();
      });
      self.hover();
    },

    setNextPanel: function(direction) {
      var self = this;
      if (direction === self.nextPanel)
        return;
      self.prevPanel = self.nextPanel;
      if (self.loaded) {
        if (typeof direction === 'number') {
          self.nextPanel = direction;
        } else {
          // "left" = -1; "right" = 1;
          self.nextPanel += (~~(direction === 'right') || -1);
          // If not continuous, slide back at the last or first panel
          if (!self.options.continuous)
            self.nextPanel = (self.nextPanel < 0) ? self.panelCount - 1 : (self.nextPanel % self.panelCount);
        }
      if (self.fade || self.animateCSS)
        self.prepareTransition(self.nextPanel);
      else
        self.verifyPanel();
      }
    },

    getFirstPanel: function() {
      var self = this,
        output;
      // is there a hash tag?
      if (self.options.hashLinking) {
        output = self.getPanelNumber(window.location.hash, self.options.hashTitleSelector);
        // Default to panel 1 if mistyped
        if (typeof(output) !== 'number') {
          output = 0;
        }
      }
      return (output) ? output : self.options.firstPanelToLoad - 1;
    },

    getPanelNumber: function(input, searchTerm) {
      var self = this,
        title,
        output = input.replace('#', '').toLowerCase();
      // Return the num that matches the panel, or return whats given.
      (self.$panelClass).each(function(i) {
        title = $(this).find(searchTerm).text()
          .toLowerCase().replace(/(^\s+|\s+$)/g, '').replace(/(\s)/g, '-');
        if (title === output) {
          output = i + 1;
        }
      });
      return (parseInt(output, 10) ? parseInt(output, 10) - 1 : output);
    },

    getFromPanel: function(searchTerm, panelNumber) {
      var self = this;
      // Return string that matches selector.
      return self.$panelClass.find(searchTerm).eq(panelNumber)
        .text().replace(/(^\s+|\s+$)/g, '').replace(/(\s)/g, '-', '-')
        .toLowerCase();
    },

    updateClass: function() {
      var self = this;
      if (self.options.dynamicTabs) {
        $((self.$sliderWrap)).find('.tab' + self.sanatizeNumber(self.nextPanel) + ':first a')
          .addClass('current')
          .parent().siblings().children().removeClass('current');
      }
      // Add current class to cross linked Tabs
      if (self.options.crossLinks && self.crosslinks) {
              (self.crosslinks).not(self.nextPanel).removeClass('currentCrossLink');
        (self.crosslinks).each(function() {
          if ($(this).attr('href') === ('#' +
            self.getFromPanel(self.options.panelTitleSelector, self.nextPanel))) {
              $(this).addClass('currentCrossLink');
          }
       });
      }
    },

    sanatizeNumber: function(panel) {
      var self = this;
      // spits out real numbers, 1-based
      if (panel >= self.panelCount) {
        return 1;
      } else if (panel <= -1) {
        return self.panelCount;
      } else {
        return panel + 1;
      }
    },

    finalize: function() {
      var self = this;
      // Adjust the height again
      var height = (self.options.autoHeight) ? self.getHeight() : self.getHeighestPanel(self.nextPanel);
      if (self.options.autoHeight)
        self.adjustHeight(true, height);
      if (self.options.autoSlide) self.autoSlide();
      if (self.options.preloader) self.removePreloader();
      self.onload();
    },

    callback: function(callbackFn, isFade) {
      var self = this;
      if (callbackFn && self.loaded) {
        if (self.useCSS && typeof isFade !== 'undefined') {
          $('.panel-container').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
            function(e) {
              callbackFn.call(self);
            });
        } else {
          setTimeout(function() {
            callbackFn.call(self);
          }, self.options.slideEaseDuration + 50);
        }
      }
    },

    onload: function() {
      var self = this;
      self.options.onload.call(self);
    },

    prepareTransition: function(nextPanel, noAnimation, noPretransition, noPosttransition) {
      var self = this;
      // Override panel
      self.nextPanel = nextPanel || 0;
      // Option to not update classes, etc
      if (!noPretransition) self.pretransition(self.options.pretransition);
      // stores some variables, then sends to pretransition hook
      self.noAnimation = noAnimation;
      self.noPosttransition = noPosttransition;
      if (!self.loaded)
        self.transition();
      else
        self.options.pretransition.call(self);
    },

    pretransition: function() {
      var self = this,
        marginLeft;
      if (self.options.hashLinking) self.updateHashTags();
      if (self.options.mobileNavigation) self.dropdownSelect.val('tab' + (self.nextPanel + 1));
      if (self.options.hideSideArrows) self.hideShowArrows();
      self.updateClass();
    },

    getTransitionMargin: function() {
      var self = this;
      return -(self.nextPanel * self.slideDistance) -
        (self.slideDistance * ~~(self.options.continuous));
    },

    transition: function() {
      var self = this,
          marginLeft = self.getTransitionMargin();

      if(self.animateCSS && self.loaded) {
        self.transitionOutAnimateCSS();
        return false;
      }

      if ((marginLeft + self.pSign) !== (self.panelContainer).css('margin-left') || (marginLeft !== -100)) {
        if (self.options.autoHeight && !self.animateCSS)
          self.adjustHeight(true, self.getHeight());
        // SLIDE!
        if (self.fade)
          self.transitionFade();
        else if (self.animateCSS)
          self.transitionInAnimateCSS(marginLeft);
        else if (self.useCSS)
          self.transitionCSS(marginLeft, self.noAnimation);
        else
          self.transitionjQuery(marginLeft, self.noAnimation);
      }
      if (!self.noPosttransition) self.callback(self.options.callback);
    },

    transitionOutAnimateCSS: function() {
      var self = this;
      $(self.panelClass).removeClass(self.options.animateIn + ' animated');
      $(self.panelClass).eq(self.prevPanel).addClass('animated ' + self.options.animateOut);
      self.callback(self.transitionInAnimateCSS, undefined);
    },

    transitionInAnimateCSS: function() {
      var self = this;
      if (self.options.autoHeight)
        self.adjustHeight(false, self.getHeight());
      self.transitionCSS(self.getTransitionMargin(), !self.loaded);
      $(self.panelClass).removeClass(self.options.animateOut + ' animated');
      $(self.panelClass).eq(self.nextPanel).addClass('animated ' + self.options.animateIn);
      self.callback(self.options.callback, undefined);
    },

    transitionCSS: function(marginLeft, noAnimation) {
      var self = this;
      if (noAnimation) self.configureCSSTransitions('0', '0');
      (self.panelContainer).css({
        '-webkit-transform': 'translate3d(' + marginLeft + self.pSign + ', 0, 0)',
        '-moz-transform': 'translate3d(' + marginLeft + self.pSign + ', 0, 0)',
        '-ms-transform': 'translate3d(' + marginLeft + self.pSign + ', 0, 0)',
        '-o-transform': 'translate3d(' + marginLeft + self.pSign + ', 0, 0)',
        'transform': 'translate3d(' + marginLeft + self.pSign + ', 0, 0)'
      });
      // Reset transitions
      if (noAnimation)
        self.callback(function() {
          self.configureCSSTransitions();
        });
      else
        self.configureCSSTransitions();
    },

    transitionjQuery: function(marginLeft, noAnimation) {
      var self = this;
      if (noAnimation) {
        (self.panelContainer).css('margin-left', marginLeft + self.pSign);
      } else {
        (self.panelContainer).animate({
          'margin-left': marginLeft + self.pSign
        }, {
          easing: self.options.slideEaseFunction,
          duration: self.options.slideEaseDuration,
          queue: false //,
          //complete: function () {

          //}
        });
      }
    },

    getHeighestPanel: function() {
      var self = this, height, heighest = 0;
      self.$panelClass.each(function() {
        height = $(this).outerHeight(true);
        heighest = (height > heighest) ? height : heighest;
      });
      if (!self.options.autoHeight) return heighest;
    },

    verifyPanel: function() {
      // Basically checks if we need to jump panels
      var self = this,
        clickable = false;

      // Continuous slide required careful clicking
      if (self.options.continuous) {
        // If they click beyond, run it through again.
        if (self.nextPanel > self.panelCount) {
          self.nextPanel = self.panelCount;
          self.setNextPanel(self.panelCount);
        } else if (self.nextPanel < -1) {
          self.nextPanel = -1;
          self.setNextPanel(-1);
        } else if ((!clickable) && ((self.nextPanel === self.panelCount) || (self.nextPanel === -1))) {
          // If on the edge, transport them across
          self.prepareTransition(self.nextPanel);
          self.updateClass();
          clearTimeout(cloneJumper);
          var cloneJumper = setTimeout(function() {
            // But wait first until all is rested
            if (self.nextPanel === self.panelCount) {
              self.prepareTransition(0, true, true, true);
            } else if (self.nextPanel === -1) {
              self.prepareTransition(self.panelCount - 1, true, true, true);
            }
          }, self.options.slideEaseDuration + 50);
        } else {
          clickable = true;
          self.prepareTransition(self.nextPanel);
        }
      } else {
        // Non-continuous just needs to stay in bounds
        if (self.nextPanel === self.panelCount) {
          self.nextPanel = 0;
        } else if (self.nextPanel === -1) {
          self.nextPanel = (self.panelCount - 1);
        }
        self.prepareTransition(self.nextPanel);
      }
    }
  };

  $.fn.liquidSlider = function(options) {
    return this.each(function() {
      var slider = Object.create(Slider);
      slider.init(options, this);
      $.data(this, 'liquidSlider', slider);
    });
  };

  $.fn.liquidSlider.options = {
    autoHeight: true,
    minHeight: 0,
    heightEaseDuration: 1500,
    heightEaseFunction: "easeInOutExpo",

    slideEaseDuration: 1500,
    slideEaseFunction: "easeInOutExpo",
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    continuous: true,
    fadeInDuration: 500,
    fadeOutDuration: 500,

    autoSlide: false,
    autoSlideDirection: 'right',
    autoSlideInterval: 6000,
    forceAutoSlide: false,
    pauseOnHover: false,

    dynamicArrows: true,
    dynamicArrowsGraphical: true,
    dynamicArrowLeftText: "&#171; left",
    dynamicArrowRightText: "right &#187;",
    hideSideArrows: false,
    hideSideArrowsDuration: 750,
    hoverArrows: true,
    hoverArrowDuration: 250,

    dynamicTabs: true,
    dynamicTabsHtml: true,
    includeTitle: true,
    panelTitleSelector: ".title",
    dynamicTabsAlign: "left",
    dynamicTabsPosition: "top",
    navElementTag: "div",

    firstPanelToLoad: 1,
    crossLinks: false,
    hashLinking: false,
    hashTitleSelector: ".title",

    keyboardNavigation: false,
    leftKey: 39,
    rightKey: 37,
    panelKeys: {
      1: 49,
      2: 50,
      3: 51,
      4: 52
    },

    responsive: true,
    mobileNavigation: true,
    mobileNavDefaultText: 'Menu',
    mobileUIThreshold: 0,
    hideArrowsWhenMobile: true,
    hideArrowsThreshold: 0,
    useCSSMaxWidth: 2200,

    preload: function() {
      this.finalize();
    },
    onload: function() {},
    pretransition: function() {
      this.transition();
    },
    callback: function() {},

    preloader: false,
    swipe: true,
    swipeArgs: undefined
  };

})(jQuery, window, document);
// TouchSwipe v1.6.4
// https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
(function(e){var o="left",n="right",d="up",v="down",c="in",w="out",l="none",r="auto",k="swipe",s="pinch",x="tap",i="doubletap",b="longtap",A="horizontal",t="vertical",h="all",q=10,f="start",j="move",g="end",p="cancel",a="ontouchstart" in window,y="TouchSwipe";var m={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"button, input, select, textarea, a, .noSwipe"};e.fn.swipe=function(D){var C=e(this),B=C.data(y);if(B&&typeof D==="string"){if(B[D]){return B[D].apply(this,Array.prototype.slice.call(arguments,1))}else{e.error("Method "+D+" does not exist on jQuery.swipe")}}else{if(!B&&(typeof D==="object"||!D)){return u.apply(this,arguments)}}return C};e.fn.swipe.defaults=m;e.fn.swipe.phases={PHASE_START:f,PHASE_MOVE:j,PHASE_END:g,PHASE_CANCEL:p};e.fn.swipe.directions={LEFT:o,RIGHT:n,UP:d,DOWN:v,IN:c,OUT:w};e.fn.swipe.pageScroll={NONE:l,HORIZONTAL:A,VERTICAL:t,AUTO:r};e.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:h};function u(B){if(B&&(B.allowPageScroll===undefined&&(B.swipe!==undefined||B.swipeStatus!==undefined))){B.allowPageScroll=l}if(B.click!==undefined&&B.tap===undefined){B.tap=B.click}if(!B){B={}}B=e.extend({},e.fn.swipe.defaults,B);return this.each(function(){var D=e(this);var C=D.data(y);if(!C){C=new z(this,B);D.data(y,C)}})}function z(a0,aq){var av=(a||!aq.fallbackToMouseEvents),G=av?"touchstart":"mousedown",au=av?"touchmove":"mousemove",R=av?"touchend":"mouseup",P=av?null:"mouseleave",az="touchcancel";var ac=0,aL=null,Y=0,aX=0,aV=0,D=1,am=0,aF=0,J=null;var aN=e(a0);var W="start";var T=0;var aM=null;var Q=0,aY=0,a1=0,aa=0,K=0;var aS=null;try{aN.bind(G,aJ);aN.bind(az,a5)}catch(ag){e.error("events not supported "+G+","+az+" on jQuery.swipe")}this.enable=function(){aN.bind(G,aJ);aN.bind(az,a5);return aN};this.disable=function(){aG();return aN};this.destroy=function(){aG();aN.data(y,null);return aN};this.option=function(a8,a7){if(aq[a8]!==undefined){if(a7===undefined){return aq[a8]}else{aq[a8]=a7}}else{e.error("Option "+a8+" does not exist on jQuery.swipe.options")}};function aJ(a9){if(ax()){return}if(e(a9.target).closest(aq.excludedElements,aN).length>0){return}var ba=a9.originalEvent?a9.originalEvent:a9;var a8,a7=a?ba.touches[0]:ba;W=f;if(a){T=ba.touches.length}else{a9.preventDefault()}ac=0;aL=null;aF=null;Y=0;aX=0;aV=0;D=1;am=0;aM=af();J=X();O();if(!a||(T===aq.fingers||aq.fingers===h)||aT()){ae(0,a7);Q=ao();if(T==2){ae(1,ba.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}if(aq.swipeStatus||aq.pinchStatus){a8=L(ba,W)}}else{a8=false}if(a8===false){W=p;L(ba,W);return a8}else{ak(true)}}function aZ(ba){var bd=ba.originalEvent?ba.originalEvent:ba;if(W===g||W===p||ai()){return}var a9,a8=a?bd.touches[0]:bd;var bb=aD(a8);aY=ao();if(a){T=bd.touches.length}W=j;if(T==2){if(aX==0){ae(1,bd.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}else{aD(bd.touches[1]);aV=ap(aM[0].end,aM[1].end);aF=an(aM[0].end,aM[1].end)}D=a3(aX,aV);am=Math.abs(aX-aV)}if((T===aq.fingers||aq.fingers===h)||!a||aT()){aL=aH(bb.start,bb.end);ah(ba,aL);ac=aO(bb.start,bb.end);Y=aI();aE(aL,ac);if(aq.swipeStatus||aq.pinchStatus){a9=L(bd,W)}if(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave){var a7=true;if(aq.triggerOnTouchLeave){var bc=aU(this);a7=B(bb.end,bc)}if(!aq.triggerOnTouchEnd&&a7){W=ay(j)}else{if(aq.triggerOnTouchLeave&&!a7){W=ay(g)}}if(W==p||W==g){L(bd,W)}}}else{W=p;L(bd,W)}if(a9===false){W=p;L(bd,W)}}function I(a7){var a8=a7.originalEvent;if(a){if(a8.touches.length>0){C();return true}}if(ai()){T=aa}a7.preventDefault();aY=ao();Y=aI();if(a6()){W=p;L(a8,W)}else{if(aq.triggerOnTouchEnd||(aq.triggerOnTouchEnd==false&&W===j)){W=g;L(a8,W)}else{if(!aq.triggerOnTouchEnd&&a2()){W=g;aB(a8,W,x)}else{if(W===j){W=p;L(a8,W)}}}}ak(false)}function a5(){T=0;aY=0;Q=0;aX=0;aV=0;D=1;O();ak(false)}function H(a7){var a8=a7.originalEvent;if(aq.triggerOnTouchLeave){W=ay(g);L(a8,W)}}function aG(){aN.unbind(G,aJ);aN.unbind(az,a5);aN.unbind(au,aZ);aN.unbind(R,I);if(P){aN.unbind(P,H)}ak(false)}function ay(bb){var ba=bb;var a9=aw();var a8=aj();var a7=a6();if(!a9||a7){ba=p}else{if(a8&&bb==j&&(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave)){ba=g}else{if(!a8&&bb==g&&aq.triggerOnTouchLeave){ba=p}}}return ba}function L(a9,a7){var a8=undefined;if(F()||S()){a8=aB(a9,a7,k)}else{if((M()||aT())&&a8!==false){a8=aB(a9,a7,s)}}if(aC()&&a8!==false){a8=aB(a9,a7,i)}else{if(al()&&a8!==false){a8=aB(a9,a7,b)}else{if(ad()&&a8!==false){a8=aB(a9,a7,x)}}}if(a7===p){a5(a9)}if(a7===g){if(a){if(a9.touches.length==0){a5(a9)}}else{a5(a9)}}return a8}function aB(ba,a7,a9){var a8=undefined;if(a9==k){aN.trigger("swipeStatus",[a7,aL||null,ac||0,Y||0,T]);if(aq.swipeStatus){a8=aq.swipeStatus.call(aN,ba,a7,aL||null,ac||0,Y||0,T);if(a8===false){return false}}if(a7==g&&aR()){aN.trigger("swipe",[aL,ac,Y,T]);if(aq.swipe){a8=aq.swipe.call(aN,ba,aL,ac,Y,T);if(a8===false){return false}}switch(aL){case o:aN.trigger("swipeLeft",[aL,ac,Y,T]);if(aq.swipeLeft){a8=aq.swipeLeft.call(aN,ba,aL,ac,Y,T)}break;case n:aN.trigger("swipeRight",[aL,ac,Y,T]);if(aq.swipeRight){a8=aq.swipeRight.call(aN,ba,aL,ac,Y,T)}break;case d:aN.trigger("swipeUp",[aL,ac,Y,T]);if(aq.swipeUp){a8=aq.swipeUp.call(aN,ba,aL,ac,Y,T)}break;case v:aN.trigger("swipeDown",[aL,ac,Y,T]);if(aq.swipeDown){a8=aq.swipeDown.call(aN,ba,aL,ac,Y,T)}break}}}if(a9==s){aN.trigger("pinchStatus",[a7,aF||null,am||0,Y||0,T,D]);if(aq.pinchStatus){a8=aq.pinchStatus.call(aN,ba,a7,aF||null,am||0,Y||0,T,D);if(a8===false){return false}}if(a7==g&&a4()){switch(aF){case c:aN.trigger("pinchIn",[aF||null,am||0,Y||0,T,D]);if(aq.pinchIn){a8=aq.pinchIn.call(aN,ba,aF||null,am||0,Y||0,T,D)}break;case w:aN.trigger("pinchOut",[aF||null,am||0,Y||0,T,D]);if(aq.pinchOut){a8=aq.pinchOut.call(aN,ba,aF||null,am||0,Y||0,T,D)}break}}}if(a9==x){if(a7===p||a7===g){clearTimeout(aS);if(V()&&!E()){K=ao();aS=setTimeout(e.proxy(function(){K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}},this),aq.doubleTapThreshold)}else{K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}}}}else{if(a9==i){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("doubletap",[ba.target]);if(aq.doubleTap){a8=aq.doubleTap.call(aN,ba,ba.target)}}}else{if(a9==b){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("longtap",[ba.target]);if(aq.longTap){a8=aq.longTap.call(aN,ba,ba.target)}}}}}return a8}function aj(){var a7=true;if(aq.threshold!==null){a7=ac>=aq.threshold}return a7}function a6(){var a7=false;if(aq.cancelThreshold!==null&&aL!==null){a7=(aP(aL)-ac)>=aq.cancelThreshold}return a7}function ab(){if(aq.pinchThreshold!==null){return am>=aq.pinchThreshold}return true}function aw(){var a7;if(aq.maxTimeThreshold){if(Y>=aq.maxTimeThreshold){a7=false}else{a7=true}}else{a7=true}return a7}function ah(a7,a8){if(aq.allowPageScroll===l||aT()){a7.preventDefault()}else{var a9=aq.allowPageScroll===r;switch(a8){case o:if((aq.swipeLeft&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case n:if((aq.swipeRight&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case d:if((aq.swipeUp&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break;case v:if((aq.swipeDown&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break}}}function a4(){var a8=aK();var a7=U();var a9=ab();return a8&&a7&&a9}function aT(){return !!(aq.pinchStatus||aq.pinchIn||aq.pinchOut)}function M(){return !!(a4()&&aT())}function aR(){var ba=aw();var bc=aj();var a9=aK();var a7=U();var a8=a6();var bb=!a8&&a7&&a9&&bc&&ba;return bb}function S(){return !!(aq.swipe||aq.swipeStatus||aq.swipeLeft||aq.swipeRight||aq.swipeUp||aq.swipeDown)}function F(){return !!(aR()&&S())}function aK(){return((T===aq.fingers||aq.fingers===h)||!a)}function U(){return aM[0].end.x!==0}function a2(){return !!(aq.tap)}function V(){return !!(aq.doubleTap)}function aQ(){return !!(aq.longTap)}function N(){if(K==null){return false}var a7=ao();return(V()&&((a7-K)<=aq.doubleTapThreshold))}function E(){return N()}function at(){return((T===1||!a)&&(isNaN(ac)||ac===0))}function aW(){return((Y>aq.longTapThreshold)&&(ac<q))}function ad(){return !!(at()&&a2())}function aC(){return !!(N()&&V())}function al(){return !!(aW()&&aQ())}function C(){a1=ao();aa=event.touches.length+1}function O(){a1=0;aa=0}function ai(){var a7=false;if(a1){var a8=ao()-a1;if(a8<=aq.fingerReleaseThreshold){a7=true}}return a7}function ax(){return !!(aN.data(y+"_intouch")===true)}function ak(a7){if(a7===true){aN.bind(au,aZ);aN.bind(R,I);if(P){aN.bind(P,H)}}else{aN.unbind(au,aZ,false);aN.unbind(R,I,false);if(P){aN.unbind(P,H,false)}}aN.data(y+"_intouch",a7===true)}function ae(a8,a7){var a9=a7.identifier!==undefined?a7.identifier:0;aM[a8].identifier=a9;aM[a8].start.x=aM[a8].end.x=a7.pageX||a7.clientX;aM[a8].start.y=aM[a8].end.y=a7.pageY||a7.clientY;return aM[a8]}function aD(a7){var a9=a7.identifier!==undefined?a7.identifier:0;var a8=Z(a9);a8.end.x=a7.pageX||a7.clientX;a8.end.y=a7.pageY||a7.clientY;return a8}function Z(a8){for(var a7=0;a7<aM.length;a7++){if(aM[a7].identifier==a8){return aM[a7]}}}function af(){var a7=[];for(var a8=0;a8<=5;a8++){a7.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return a7}function aE(a7,a8){a8=Math.max(a8,aP(a7));J[a7].distance=a8}function aP(a7){return J[a7].distance}function X(){var a7={};a7[o]=ar(o);a7[n]=ar(n);a7[d]=ar(d);a7[v]=ar(v);return a7}function ar(a7){return{direction:a7,distance:0}}function aI(){return aY-Q}function ap(ba,a9){var a8=Math.abs(ba.x-a9.x);var a7=Math.abs(ba.y-a9.y);return Math.round(Math.sqrt(a8*a8+a7*a7))}function a3(a7,a8){var a9=(a8/a7)*1;return a9.toFixed(2)}function an(){if(D<1){return w}else{return c}}function aO(a8,a7){return Math.round(Math.sqrt(Math.pow(a7.x-a8.x,2)+Math.pow(a7.y-a8.y,2)))}function aA(ba,a8){var a7=ba.x-a8.x;var bc=a8.y-ba.y;var a9=Math.atan2(bc,a7);var bb=Math.round(a9*180/Math.PI);if(bb<0){bb=360-Math.abs(bb)}return bb}function aH(a8,a7){var a9=aA(a8,a7);if((a9<=45)&&(a9>=0)){return o}else{if((a9<=360)&&(a9>=315)){return o}else{if((a9>=135)&&(a9<=225)){return n}else{if((a9>45)&&(a9<135)){return v}else{return d}}}}}function ao(){var a7=new Date();return a7.getTime()}function aU(a7){a7=e(a7);var a9=a7.offset();var a8={left:a9.left,right:a9.left+a7.outerWidth(),top:a9.top,bottom:a9.top+a7.outerHeight()};return a8}function B(a7,a8){return(a7.x>a8.left&&a7.x<a8.right&&a7.y>a8.top&&a7.y<a8.bottom)}}})(jQuery);
  /**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */(function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var r={};for(var i in e)e.hasOwnProperty(i)&&(r[i]=t.util.clone(e[i]));return r;case"Array":return e.slice()}return e}},languages:{extend:function(e,n){var r=t.util.clone(t.languages[e]);for(var i in n)r[i]=n[i];return r},insertBefore:function(e,n,r,i){i=i||t.languages;var s=i[e],o={};for(var u in s)if(s.hasOwnProperty(u)){if(u==n)for(var a in r)r.hasOwnProperty(a)&&(o[a]=r[a]);o[u]=s[u]}return i[e]=o},DFS:function(e,n){for(var r in e){n.call(e,r,e[r]);t.util.type(e)==="Object"&&t.languages.DFS(e[r],n)}}},highlightAll:function(e,n){var r=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code');for(var i=0,s;s=r[i++];)t.highlightElement(s,e===!0,n)},highlightElement:function(r,i,s){var o,u,a=r;while(a&&!e.test(a.className))a=a.parentNode;if(a){o=(a.className.match(e)||[,""])[1];u=t.languages[o]}if(!u)return;r.className=r.className.replace(e,"").replace(/\s+/g," ")+" language-"+o;a=r.parentNode;/pre/i.test(a.nodeName)&&(a.className=a.className.replace(e,"").replace(/\s+/g," ")+" language-"+o);var f=r.textContent;if(!f)return;f=f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ");var l={element:r,language:o,grammar:u,code:f};t.hooks.run("before-highlight",l);if(i&&self.Worker){var c=new Worker(t.filename);c.onmessage=function(e){l.highlightedCode=n.stringify(JSON.parse(e.data),o);t.hooks.run("before-insert",l);l.element.innerHTML=l.highlightedCode;s&&s.call(l.element);t.hooks.run("after-highlight",l)};c.postMessage(JSON.stringify({language:l.language,code:l.code}))}else{l.highlightedCode=t.highlight(l.code,l.grammar,l.language);t.hooks.run("before-insert",l);l.element.innerHTML=l.highlightedCode;s&&s.call(r);t.hooks.run("after-highlight",l)}},highlight:function(e,r,i){return n.stringify(t.tokenize(e,r),i)},tokenize:function(e,n,r){var i=t.Token,s=[e],o=n.rest;if(o){for(var u in o)n[u]=o[u];delete n.rest}e:for(var u in n){if(!n.hasOwnProperty(u)||!n[u])continue;var a=n[u],f=a.inside,l=!!a.lookbehind,c=0;a=a.pattern||a;for(var h=0;h<s.length;h++){var p=s[h];if(s.length>e.length)break e;if(p instanceof i)continue;a.lastIndex=0;var d=a.exec(p);if(d){l&&(c=d[1].length);var v=d.index-1+c,d=d[0].slice(c),m=d.length,g=v+m,y=p.slice(0,v+1),b=p.slice(g+1),w=[h,1];y&&w.push(y);var E=new i(u,f?t.tokenize(d,f):d);w.push(E);b&&w.push(b);Array.prototype.splice.apply(s,w)}}}return s},hooks:{all:{},add:function(e,n){var r=t.hooks.all;r[e]=r[e]||[];r[e].push(n)},run:function(e,n){var r=t.hooks.all[e];if(!r||!r.length)return;for(var i=0,s;s=r[i++];)s(n)}}},n=t.Token=function(e,t){this.type=e;this.content=t};n.stringify=function(e,r,i){if(typeof e=="string")return e;if(Object.prototype.toString.call(e)=="[object Array]")return e.map(function(t){return n.stringify(t,r,e)}).join("");var s={type:e.type,content:n.stringify(e.content,r,i),tag:"span",classes:["token",e.type],attributes:{},language:r,parent:i};s.type=="comment"&&(s.attributes.spellcheck="true");t.hooks.run("wrap",s);var o="";for(var u in s.attributes)o+=u+'="'+(s.attributes[u]||"")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'" '+o+">"+s.content+"</"+s.tag+">"};if(!self.document){self.addEventListener("message",function(e){var n=JSON.parse(e.data),r=n.language,i=n.code;self.postMessage(JSON.stringify(t.tokenize(i,t.languages[r])));self.close()},!1);return}var r=document.getElementsByTagName("script");r=r[r.length-1];if(r){t.filename=r.src;document.addEventListener&&!r.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)}})();;
Prism.languages.markup={comment:/&lt;!--[\w\W]*?-->/g,prolog:/&lt;\?.+?\?>/,doctype:/&lt;!DOCTYPE.+?>/,cdata:/&lt;!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/&lt;\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|\w+))?\s*)*\/?>/gi,inside:{tag:{pattern:/^&lt;\/?[\w:-]+/i,inside:{punctuation:/^&lt;\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,inside:{punctuation:/=|>|"/g}},punctuation:/\/?>/g,"attr-name":{pattern:/[\w:-]+/g,inside:{namespace:/^[\w-]+?:/}}}},entity:/&amp;#?[\da-z]{1,8};/gi};Prism.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});;
Prism.languages.css={comment:/\/\*[\w\W]*?\*\//g,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*{))/gi,inside:{punctuation:/[;:]/g}},url:/url\((["']?).*?\1\)/gi,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/g,property:/(\b|\B)[\w-]+(?=\s*:)/ig,string:/("|')(\\?.)*?\1/g,important:/\B!important\b/gi,ignore:/&(lt|gt|amp);/gi,punctuation:/[\{\};:]/g};Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{style:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/style(>|&gt;)/ig,inside:{tag:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)|(&lt;|<)\/style(>|&gt;)/ig,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.css}}});;
Prism.languages.clike={comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])\/\/.*?(\r?\n|$))/g,lookbehind:!0},string:/("|')(\\?.)*?\1/g,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/ig,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|catch|finally|null|break|continue)\b/g,"boolean":/\b(true|false)\b/g,"function":{pattern:/[a-z0-9_]+\(/ig,inside:{punctuation:/\(/}}, number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,operator:/[-+]{1,2}|!|&lt;=?|>=?|={1,3}|(&amp;){1,2}|\|?\||\?|\*|\/|\~|\^|\%/g,ignore:/&(lt|gt|amp);/gi,punctuation:/[{}[\];(),.:]/g};;
Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(var|let|if|else|while|do|for|return|in|instanceof|function|new|with|typeof|try|catch|finally|null|break|continue)\b/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/g});Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,lookbehind:!0}});Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/script(>|&gt;)/ig,inside:{tag:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)|(&lt;|<)\/script(>|&gt;)/ig,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript}}});;
Prism.hooks.add("after-highlight",function(e){var t=e.element.parentNode;if(!t||!/pre/i.test(t.nodeName)||t.className.indexOf("line-numbers")===-1){return}var n=1+e.code.split("\n").length;var r;lines=new Array(n);lines=lines.join("<span></span>");r=document.createElement("span");r.className="line-numbers-rows";r.innerHTML=lines;if(t.hasAttribute("data-start")){t.style.counterReset="linenumber "+(parseInt(t.getAttribute("data-start"),10)-1)}e.element.appendChild(r)})
;

