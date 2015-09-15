'use strict';

/**
 * @ngdoc overview
 * @name planistoApp
 * @description
 * # planistoApp
 *
 * Main module of the application.
 */
angular
  .module('planistoApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'google.places'
  ])
  .config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/contact', {
        templateUrl: 'views/contacts.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .when('/search', {
        templateUrl: 'views/results.html',
        controller: 'ResultsCtrl',
        controllerAs: 'results'
      })
      .otherwise({
        redirectTo: '/'
      });
    //$locationProvider.html5Mode(true);
  }]);

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2008 George McGinley Smith
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
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});

//Make sure jQuery has been loaded before this js
if (typeof jQuery === "undefined") {
  throw new Error("Planisto requires jQuery");
}


$.Planisto = {};

/* --------------------
 * - Planisto Options -
 * --------------------
 * Modify these options to suit your implementation
 */
$.Planisto.options = {
  //Add slimscroll to navbar menus
  //This requires you to load the slimscroll plugin
  //in every page before app.js
  navbarMenuSlimscroll: true,
  navbarMenuSlimscrollWidth: "3px", //The width of the scroll bar
  navbarMenuHeight: "200px", //The height of the inner menu
  //General animation speed for JS animated elements such as box collapse/expand and
  //sidebar treeview slide up/down. This options accepts an integer as milliseconds,
  //'fast', 'normal', or 'slow'
  animationSpeed: 500,
  //Sidebar push menu toggle button selector
  sidebarToggleSelector: "[data-toggle='offcanvas']",
  //Activate sidebar push menu
  sidebarPushMenu: true,
  //Activate sidebar slimscroll if the fixed layout is set (requires SlimScroll Plugin)
  sidebarSlimScroll: true,
  //Enable sidebar expand on hover effect for sidebar mini
  //This option is forced to true if both the fixed layout and sidebar mini
  //are used together
  sidebarExpandOnHover: false,
  //BoxRefresh Plugin
  enableBoxRefresh: true,
  //Bootstrap.js tooltip
  enableBSToppltip: true,
  BSTooltipSelector: "[data-toggle='tooltip']",
  //Enable Fast Click. Fastclick.js creates a more
  //native touch experience with touch devices. If you
  //choose to enable the plugin, make sure you load the script
  //before Planisto's app.js
  enableFastclick: true,
  //Control Sidebar Options
  enableControlSidebar: true,
  controlSidebarOptions: {
    //Which button should trigger the open/close event
    toggleBtnSelector: "[data-toggle='control-sidebar']",
    //The sidebar selector
    selector: ".control-sidebar",
    //Enable slide over content
    slide: true
  },
  //Box Widget Plugin. Enable this plugin
  //to allow boxes to be collapsed and/or removed
  enableBoxWidget: true,
  //Box Widget plugin options
  boxWidgetOptions: {
    boxWidgetIcons: {
      //Collapse icon
      collapse: 'fa-minus',
      //Open icon
      open: 'fa-plus',
      //Remove icon
      remove: 'fa-times'
    },
    boxWidgetSelectors: {
      //Remove button selector
      remove: '[data-widget="remove"]',
      //Collapse button selector
      collapse: '[data-widget="collapse"]'
    }
  },
  //Direct Chat plugin options
  directChat: {
    //Enable direct chat by default
    enable: true,
    //The button to open and close the chat contacts pane
    contactToggleSelector: '[data-widget="chat-pane-toggle"]'
  },
  //Define the set of colors to use globally around the website
  colors: {
    lightBlue: "#3c8dbc",
    red: "#f56954",
    green: "#00a65a",
    aqua: "#00c0ef",
    yellow: "#f39c12",
    blue: "#0073b7",
    navy: "#001F3F",
    teal: "#39CCCC",
    olive: "#3D9970",
    lime: "#01FF70",
    orange: "#FF851B",
    fuchsia: "#F012BE",
    purple: "#8E24AA",
    maroon: "#D81B60",
    black: "#222222",
    gray: "#d2d6de"
  },
  //The standard screen sizes that bootstrap uses.
  //If you change these in the variables.less file, change
  //them here too.
  screenSizes: {
    xs: 480,
    sm: 768,
    md: 992,
    lg: 1200
  }
};

/* ------------------
 * - Implementation -
 * ------------------
 * The next block of code implements Planisto's
 * functions and plugins as specified by the
 * options above.
 */
$(function () {
  "use strict";

  //Fix for IE page transitions
  $("body").removeClass("hold-transition");

  //Extend options if external options exist
  if (typeof PlanistoOptions !== "undefined") {
    $.extend(true,
            $.Planisto.options,
            PlanistoOptions);
  }

  //Easy access to options
  var o = $.Planisto.options;

  //Set up the object
  _init();

  //Activate the layout maker
  $.Planisto.layout.activate();

  //Enable sidebar tree view controls
  $.Planisto.tree('.sidebar');

  //Enable control sidebar
  if (o.enableControlSidebar) {
    $.Planisto.controlSidebar.activate();
  }

  //Add slimscroll to navbar dropdown
  if (o.navbarMenuSlimscroll && typeof $.fn.slimscroll != 'undefined') {
    $(".navbar .menu").slimscroll({
      height: o.navbarMenuHeight,
      alwaysVisible: false,
      size: o.navbarMenuSlimscrollWidth
    }).css("width", "100%");
  }

  //Activate sidebar push menu
  if (o.sidebarPushMenu) {
    $.Planisto.pushMenu.activate(o.sidebarToggleSelector);
  }

  //Activate Bootstrap tooltip
  if (o.enableBSToppltip) {
    $('body').tooltip({
      selector: o.BSTooltipSelector
    });
  }

  //Activate box widget
  if (o.enableBoxWidget) {
    $.Planisto.boxWidget.activate();
  }

  //Activate fast click
  if (o.enableFastclick && typeof FastClick != 'undefined') {
    FastClick.attach(document.body);
  }

  //Activate direct chat widget
  if (o.directChat.enable) {
    $(document).on('click', o.directChat.contactToggleSelector, function () {
      var box = $(this).parents('.direct-chat').first();
      box.toggleClass('direct-chat-contacts-open');
    });
  }

  /*
   * INITIALIZE BUTTON TOGGLE
   * ------------------------
   */
  $('.btn-group[data-toggle="btn-toggle"]').each(function () {
    var group = $(this);
    $(this).find(".btn").on('click', function (e) {
      group.find(".btn.active").removeClass("active");
      $(this).addClass("active");
      e.preventDefault();
    });

  });
});

/* ----------------------------------
 * - Initialize the Planisto Object -
 * ----------------------------------
 * All Planisto functions are implemented below.
 */
function _init() {
  'use strict';
  /* Layout
   * ======
   * Fixes the layout height in case min-height fails.
   *
   * @type Object
   * @usage $.Planisto.layout.activate()
   *        $.Planisto.layout.fix()
   *        $.Planisto.layout.fixSidebar()
   */
  $.Planisto.layout = {
    activate: function () {
      var _this = this;
      _this.fix();
      _this.fixSidebar();
      $(window, ".wrapper").resize(function () {
        _this.fix();
        _this.fixSidebar();
      });
    },
    fix: function () {
      //Get window height and the wrapper height
      var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
      var window_height = $(window).height();
      var sidebar_height = $(".sidebar").height();
      //Set the min-height of the content and sidebar based on the
      //the height of the document.
      if ($("body").hasClass("fixed")) {
        $(".content-wrapper, .right-side").css('min-height', window_height - $('.main-footer').outerHeight());
      } else {
        var postSetWidth;
        if (window_height >= sidebar_height) {
          $(".content-wrapper, .right-side").css('min-height', window_height - neg);
          postSetWidth = window_height - neg;
        } else {
          $(".content-wrapper, .right-side").css('min-height', sidebar_height);
          postSetWidth = sidebar_height;
        }

        //Fix for the control sidebar height
        var controlSidebar = $($.Planisto.options.controlSidebarOptions.selector);
        if (typeof controlSidebar !== "undefined") {
          if (controlSidebar.height() > postSetWidth)
            $(".content-wrapper, .right-side").css('min-height', controlSidebar.height());
        }

      }
    },
    fixSidebar: function () {
      //Make sure the body tag has the .fixed class
      if (!$("body").hasClass("fixed")) {
        if (typeof $.fn.slimScroll != 'undefined') {
          $(".sidebar").slimScroll({destroy: true}).height("auto");
        }
        return;
      } else if (typeof $.fn.slimScroll == 'undefined' && window.console) {
        window.console.error("Error: the fixed layout requires the slimscroll plugin!");
      }
      //Enable slimscroll for fixed layout
      if ($.Planisto.options.sidebarSlimScroll) {
        if (typeof $.fn.slimScroll != 'undefined') {
          //Destroy if it exists
          $(".sidebar").slimScroll({destroy: true}).height("auto");
          //Add slimscroll
          $(".sidebar").slimscroll({
            height: ($(window).height() - $(".main-header").height()) + "px",
            color: "rgba(0,0,0,0.2)",
            size: "3px"
          });
        }
      }
    }
  };

  /* PushMenu()
   * ==========
   * Adds the push menu functionality to the sidebar.
   *
   * @type Function
   * @usage: $.Planisto.pushMenu("[data-toggle='offcanvas']")
   */
  $.Planisto.pushMenu = {
    activate: function (toggleBtn) {
      //Get the screen sizes
      var screenSizes = $.Planisto.options.screenSizes;

      //Enable sidebar toggle
      $(toggleBtn).on('click', function (e) {
        e.preventDefault();

        //Enable sidebar push menu
        if ($(window).width() > (screenSizes.sm - 1)) {
          if ($("body").hasClass('sidebar-collapse')) {
            $("body").removeClass('sidebar-collapse').trigger('expanded.pushMenu');
          } else {
            $("body").addClass('sidebar-collapse').trigger('collapsed.pushMenu');
          }
        }
        //Handle sidebar push menu for small screens
        else {
          if ($("body").hasClass('sidebar-open')) {
            $("body").removeClass('sidebar-open').removeClass('sidebar-collapse').trigger('collapsed.pushMenu');
          } else {
            $("body").addClass('sidebar-open').trigger('expanded.pushMenu');
          }
        }
      });

      $(".content-wrapper").click(function () {
        //Enable hide menu when clicking on the content-wrapper on small screens
        if ($(window).width() <= (screenSizes.sm - 1) && $("body").hasClass("sidebar-open")) {
          $("body").removeClass('sidebar-open');
        }
      });

      //Enable expand on hover for sidebar mini
      if ($.Planisto.options.sidebarExpandOnHover
              || ($('body').hasClass('fixed')
                      && $('body').hasClass('sidebar-mini'))) {
        this.expandOnHover();
      }
    },
    expandOnHover: function () {
      var _this = this;
      var screenWidth = $.Planisto.options.screenSizes.sm - 1;
      //Expand sidebar on hover
      $('.main-sidebar').hover(function () {
        if ($('body').hasClass('sidebar-mini')
                && $("body").hasClass('sidebar-collapse')
                && $(window).width() > screenWidth) {
          _this.expand();
        }
      }, function () {
        if ($('body').hasClass('sidebar-mini')
                && $('body').hasClass('sidebar-expanded-on-hover')
                && $(window).width() > screenWidth) {
          _this.collapse();
        }
      });
    },
    expand: function () {
      $("body").removeClass('sidebar-collapse').addClass('sidebar-expanded-on-hover');
    },
    collapse: function () {
      if ($('body').hasClass('sidebar-expanded-on-hover')) {
        $('body').removeClass('sidebar-expanded-on-hover').addClass('sidebar-collapse');
      }
    }
  };

  /* Tree()
   * ======
   * Converts the sidebar into a multilevel
   * tree view menu.
   *
   * @type Function
   * @Usage: $.Planisto.tree('.sidebar')
   */
  $.Planisto.tree = function (menu) {
    var _this = this;
    var animationSpeed = $.Planisto.options.animationSpeed;
    $(document).on('click', menu + ' li a', function (e) {
      //Get the clicked link and the next element
      var $this = $(this);
      var checkElement = $this.next();

      //Check if the next element is a menu and is visible
      if ((checkElement.is('.treeview-menu')) && (checkElement.is(':visible'))) {
        //Close the menu
        checkElement.slideUp(animationSpeed, function () {
          checkElement.removeClass('menu-open');
          //Fix the layout in case the sidebar stretches over the height of the window
          //_this.layout.fix();
        });
        checkElement.parent("li").removeClass("active");
      }
      //If the menu is not visible
      else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
        //Get the parent menu
        var parent = $this.parents('ul').first();
        //Close all open menus within the parent
        var ul = parent.find('ul:visible').slideUp(animationSpeed);
        //Remove the menu-open class from the parent
        ul.removeClass('menu-open');
        //Get the parent li
        var parent_li = $this.parent("li");

        //Open the target menu and add the menu-open class
        checkElement.slideDown(animationSpeed, function () {
          //Add the class active to the parent li
          checkElement.addClass('menu-open');
          parent.find('li.active').removeClass('active');
          parent_li.addClass('active');
          //Fix the layout in case the sidebar stretches over the height of the window
          _this.layout.fix();
        });
      }
      //if this isn't a link, prevent the page from being redirected
      if (checkElement.is('.treeview-menu')) {
        e.preventDefault();
      }
    });
  };

  /* ControlSidebar
   * ==============
   * Adds functionality to the right sidebar
   *
   * @type Object
   * @usage $.Planisto.controlSidebar.activate(options)
   */
  $.Planisto.controlSidebar = {
    //instantiate the object
    activate: function () {
      //Get the object
      var _this = this;
      //Update options
      var o = $.Planisto.options.controlSidebarOptions;
      //Get the sidebar
      var sidebar = $(o.selector);
      //The toggle button
      var btn = $(o.toggleBtnSelector);

      //Listen to the click event
      btn.on('click', function (e) {
        e.preventDefault();
        //If the sidebar is not open
        if (!sidebar.hasClass('control-sidebar-open')
                && !$('body').hasClass('control-sidebar-open')) {
          //Open the sidebar
          _this.open(sidebar, o.slide);
        } else {
          _this.close(sidebar, o.slide);
        }
      });

      //If the body has a boxed layout, fix the sidebar bg position
      var bg = $(".control-sidebar-bg");
      _this._fix(bg);

      //If the body has a fixed layout, make the control sidebar fixed
      if ($('body').hasClass('fixed')) {
        _this._fixForFixed(sidebar);
      } else {
        //If the content height is less than the sidebar's height, force max height
        if ($('.content-wrapper, .right-side').height() < sidebar.height()) {
          _this._fixForContent(sidebar);
        }
      }
    },
    //Open the control sidebar
    open: function (sidebar, slide) {
      //Slide over content
      if (slide) {
        sidebar.addClass('control-sidebar-open');
      } else {
        //Push the content by adding the open class to the body instead
        //of the sidebar itself
        $('body').addClass('control-sidebar-open');
      }
    },
    //Close the control sidebar
    close: function (sidebar, slide) {
      if (slide) {
        sidebar.removeClass('control-sidebar-open');
      } else {
        $('body').removeClass('control-sidebar-open');
      }
    },
    _fix: function (sidebar) {
      var _this = this;
      if ($("body").hasClass('layout-boxed')) {
        sidebar.css('position', 'absolute');
        sidebar.height($(".wrapper").height());
        $(window).resize(function () {
          _this._fix(sidebar);
        });
      } else {
        sidebar.css({
          'position': 'fixed',
          'height': 'auto'
        });
      }
    },
    _fixForFixed: function (sidebar) {
      sidebar.css({
        'position': 'fixed',
        'max-height': '100%',
        'overflow': 'auto',
        'padding-bottom': '50px'
      });
    },
    _fixForContent: function (sidebar) {
      $(".content-wrapper, .right-side").css('min-height', sidebar.height());
    }
  };

  /* BoxWidget
   * =========
   * BoxWidget is a plugin to handle collapsing and
   * removing boxes from the screen.
   *
   * @type Object
   * @usage $.Planisto.boxWidget.activate()
   *        Set all your options in the main $.Planisto.options object
   */
  $.Planisto.boxWidget = {
    selectors: $.Planisto.options.boxWidgetOptions.boxWidgetSelectors,
    icons: $.Planisto.options.boxWidgetOptions.boxWidgetIcons,
    animationSpeed: $.Planisto.options.animationSpeed,
    activate: function (_box) {
      var _this = this;
      if (!_box) {
        _box = document; // activate all boxes per default
      }
      //Listen for collapse event triggers
      $(_box).on('click', _this.selectors.collapse, function (e) {
        e.preventDefault();
        _this.collapse($(this));
      });

      //Listen for remove event triggers
      $(_box).on('click', _this.selectors.remove, function (e) {
        e.preventDefault();
        _this.remove($(this));
      });
    },
    collapse: function (element) {
      var _this = this;
      //Find the box parent
      var box = element.parents(".box").first();
      //Find the body and the footer
      var box_content = box.find("> .box-body, > .box-footer, > form  >.box-body, > form > .box-footer");
      if (!box.hasClass("collapsed-box")) {
        //Convert minus into plus
        element.children(":first")
                .removeClass(_this.icons.collapse)
                .addClass(_this.icons.open);
        //Hide the content
        box_content.slideUp(_this.animationSpeed, function () {
          box.addClass("collapsed-box");
        });
      } else {
        //Convert plus into minus
        element.children(":first")
                .removeClass(_this.icons.open)
                .addClass(_this.icons.collapse);
        //Show the content
        box_content.slideDown(_this.animationSpeed, function () {
          box.removeClass("collapsed-box");
        });
      }
    },
    remove: function (element) {
      //Find the box parent
      var box = element.parents(".box").first();
      box.slideUp(this.animationSpeed);
    }
  };
}

/* ------------------
 * - Custom Plugins -
 * ------------------
 * All custom plugins are defined below.
 */

/*
 * BOX REFRESH BUTTON
 * ------------------
 * This is a custom plugin to use with the component BOX. It allows you to add
 * a refresh button to the box. It converts the box's state to a loading state.
 *
 * @type plugin
 * @usage $("#box-widget").boxRefresh( options );
 */
(function ($) {

  "use strict";

  $.fn.boxRefresh = function (options) {

    // Render options
    var settings = $.extend({
      //Refresh button selector
      trigger: ".refresh-btn",
      //File source to be loaded (e.g: ajax/src.php)
      source: "",
      //Callbacks
      onLoadStart: function (box) {
        return box;
      }, //Right after the button has been clicked
      onLoadDone: function (box) {
        return box;
      } //When the source has been loaded

    }, options);

    //The overlay
    var overlay = $('<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>');

    return this.each(function () {
      //if a source is specified
      if (settings.source === "") {
        if (window.console) {
          window.console.log("Please specify a source first - boxRefresh()");
        }
        return;
      }
      //the box
      var box = $(this);
      //the button
      var rBtn = box.find(settings.trigger).first();

      //On trigger click
      rBtn.on('click', function (e) {
        e.preventDefault();
        //Add loading overlay
        start(box);

        //Perform ajax call
        box.find(".box-body").load(settings.source, function () {
          done(box);
        });
      });
    });

    function start(box) {
      //Add overlay and loading img
      box.append(overlay);

      settings.onLoadStart.call(box);
    }

    function done(box) {
      //Remove overlay and loading img
      box.find(overlay).remove();

      settings.onLoadDone.call(box);
    }

  };

})(jQuery);

/*
 * EXPLICIT BOX ACTIVATION
 * -----------------------
 * This is a custom plugin to use with the component BOX. It allows you to activate
 * a box inserted in the DOM after the app.js was loaded.
 *
 * @type plugin
 * @usage $("#box-widget").activateBox();
 */
(function ($) {

  'use strict';

  $.fn.activateBox = function () {
    $.Planisto.boxWidget.activate(this);
  };

})(jQuery);

/*
 * TODO LIST CUSTOM PLUGIN
 * -----------------------
 * This plugin depends on iCheck plugin for checkbox and radio inputs
 *
 * @type plugin
 * @usage $("#todo-widget").todolist( options );
 */
(function ($) {

  'use strict';

  $.fn.todolist = function (options) {
    // Render options
    var settings = $.extend({
      //When the user checks the input
      onCheck: function (ele) {
        return ele;
      },
      //When the user unchecks the input
      onUncheck: function (ele) {
        return ele;
      }
    }, options);

    return this.each(function () {

      if (typeof $.fn.iCheck != 'undefined') {
        $('input', this).on('ifChecked', function () {
          var ele = $(this).parents("li").first();
          ele.toggleClass("done");
          settings.onCheck.call(ele);
        });

        $('input', this).on('ifUnchecked', function () {
          var ele = $(this).parents("li").first();
          ele.toggleClass("done");
          settings.onUncheck.call(ele);
        });
      } else {
        $('input', this).on('change', function () {
          var ele = $(this).parents("li").first();
          ele.toggleClass("done");
          if ($('input', ele).is(":checked")) {
            settings.onCheck.call(ele);
          } else {
            settings.onUncheck.call(ele);
          }
        });
      }
    });
  };
}(jQuery));

'use strict';

/**
 * @ngdoc function
 * @name planistoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the planistoApp
 */
angular.module('planistoApp')
  .controller('MainCtrl', ["$scope", "searchService", "$q", "$rootScope", function ($scope, searchService, $q, $rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  $scope.selectedItem;

  $scope.lat = "";
  $scope.lng = "";
  

  $scope.catAutocomplete = function(term) {
    return searchService.getCategories(term).then(function(result){
      return result.data;
    }, function(error) {
    });
  }

  $scope.getLocations = function(term) {
    var Geocoder = new google.maps.Geocoder();
    var AutoCompleteService = new google.maps.places.AutocompleteService();
    var deferred = $q.defer();
    var request = {
      input: term,
      componentRestrictions: {country: 'in'},
      types: ['(regions)']
    };
    AutoCompleteService.getPlacePredictions(request, function(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        deferred.resolve(results);
      } else {
        var noResults = "";
        deferred.resolve(noResults);
      }
      })
  return deferred.promise;
  }

  $scope.getLatLngFromAddress = function(){
    var searchTxt = $scope.address.description;
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': searchTxt}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        $scope.lat = Math.round(results[0].geometry.location.lat() * 100) / 100;
        $scope.lng = Math.round(results[0].geometry.location.lng() * 100) / 100;
        alert("Search Category is "+$scope.selectedItem.id+", Latitude : " + $scope.lat + " and Longitude : " + $scope.lng);
      }
    });
  }

}]);

'use strict';

/**
 * @ngdoc function
 * @name planistoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the planistoApp
 */
angular.module('planistoApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc service
 * @name planistoApp.search/searchService
 * @description
 * # search/searchService
 * Service in the planistoApp.
 */
angular.module('planistoApp')
.factory('searchService', ['$http', function($http) {
  var factory = {};

  factory.getCategories = function(term) {
    return $http.get('http://localhost:4100/search/categories?term='+ term);
  };

  return factory;
  }]);

 



'use strict';

/**
 * @ngdoc service
 * @name planistoApp.user/userService
 * @description
 * # user/userService
 * Service in the planistoApp.
 */
angular.module('planistoApp')
.factory('userService', ['$http', function($http) {
  var factory = {};

  factory.signIn = function(authRequest) {
    return $http.post('http://localhost:4100/auth/login', authRequest)
    .success(function() {

    }).error(function(){

    });
  };

  return factory;
  }]);

 



'use strict';

/**
 * @ngdoc function
 * @name planistoApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the planistoApp
 */
angular.module('planistoApp')
  .controller('LoginCtrl', ["$scope", "$http", function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  $scope.login = true;
  $scope.register = false;

  $scope.login = function() {
    $scope.login = true;
    $scope.register = false;
  }

  $scope.register = function() {
    $scope.login = false;
    $scope.register = true;
  }

  $scope.user = {};

  $scope.signin = function() {
    var authRequest = {email : $scope.user.email, password : $scope.user.password};
    $http.post('http://localhost:4100/auth/login', authRequest)
    .success(function(response , data) {
      alert(data);
    });
    
  }
  
  }]);

'use strict';

/**
 * @ngdoc function
 * @name planistoApp.controller:ResultsCtrl
 * @description
 * # ResultsCtrl
 * Controller of the planistoApp
 */
angular.module('planistoApp')
  .controller('ResultsCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

'use strict';

/**
 * @ngdoc function
 * @name planistoApp.controller:LocationCtrl
 * @description
 * # LocationCtrl
 * Controller of the planistoApp
 */
angular.module('planistoApp')
  .controller('LocationCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

angular.module('planistoApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<nav class=\"navbar navbar-custom navbar-fixed-top\" role=\"navigation\"> <div class=\"container\"> <div class=\"navbar-header\"> <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-main-collapse\"> <i class=\"fa fa-bars\"></i> </button> <a class=\"navbar-brand\" href=\"#/\"> <span class=\"light\">PLANISTO</span> </a> </div> <!-- Collect the nav links, forms, and other content for toggling --> <div class=\"collapse navbar-collapse navbar-right navbar-main-collapse\"> <ul class=\"nav navbar-nav\"> <!-- Hidden li included to remove active class from about link when scrolled up past about section --> <li class=\"hidden\"> <a href=\"#page-top\"></a> </li> <li> <a href=\"#about\">About</a> </li> <li> <a href=\"#contact\">Contact</a> </li> <li> <a href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#loginModal\">Login</a> </li> </ul> </div> <!-- /.navbar-collapse --> </div> <!-- /.container --> </nav> <!-- About Section --> <section id=\"about\" class=\"content-section text-center\"> <div class=\"row\"> <div class=\"col-lg-8 col-lg-offset-2\"> <h2 class=\"section-title\">About Planisto</h2> <div class=\"vspacer30\"></div> <p>Planisto is one stop solution for all the rush and hustle you face while organising an event, either it be a family function, or a corporate event.</p> <p>We brings all the people you need for your event at your doorstep by listing contact details of all related vendor which range from corporate event planner to Halwayi (Caterer) for your wedding</p> <p>It is a free service, neither we charge you a penny nor take any commission from the vendor. All it does is to bring event organizing vendor and end user at a common platform.</p> </div> </div> </section>"
  );


  $templateCache.put('views/contacts.html',
    "<nav class=\"navbar navbar-custom navbar-fixed-top\" role=\"navigation\"> <div class=\"container\"> <div class=\"navbar-header\"> <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-main-collapse\"> <i class=\"fa fa-bars\"></i> </button> <a class=\"navbar-brand\" href=\"#/\"> <span class=\"light\">PLANISTO</span> </a> </div> <!-- Collect the nav links, forms, and other content for toggling --> <div class=\"collapse navbar-collapse navbar-right navbar-main-collapse\"> <ul class=\"nav navbar-nav\"> <!-- Hidden li included to remove active class from about link when scrolled up past about section --> <li class=\"hidden\"> <a href=\"#page-top\"></a> </li> <li> <a href=\"#about\">About</a> </li> <li> <a href=\"#contact\">Contact</a> </li> <li> <a href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#loginModal\">Login</a> </li> </ul> </div> <!-- /.navbar-collapse --> </div> <!-- /.container --> </nav> <!-- Contact Section --> <section id=\"contact\" class=\"content-section text-center\"> <div class=\"row\"> <div class=\"col-lg-8 col-lg-offset-2\"> <h2 class=\"section-title\">Contact Planisto</h2> <p>Feel free to email us to provide some feedback on our website, give us any suggestions to improve our sevices, or to just say hello!</p> <form id=\"contactForm\" class=\"form-horizontal bv-form\" method=\"post\" action=\"#\" novalidate><button type=\"submit\" class=\"bv-hidden-submit\" style=\"display: none; width: 0px; height: 0px\"></button> <fieldset class=\"col-sm-12\"> <div class=\"form-group\"> <div class=\"col-sm-2\">&nbsp;</div> <div class=\"col-sm-8\"> <div class=\"input-group\"> <span class=\"input-group-addon\"><i class=\"fa fa-user fa-fw\"></i></span> <input type=\"text\" id=\"Name\" name=\"Name\" class=\"form-control\" placeholder=\"* Enter Name\" data-bv-field=\"Name\"> </div> <small class=\"help-block\" data-bv-validator=\"notEmpty\" data-bv-for=\"Name\" data-bv-result=\"NOT_VALIDATED\" style=\"display: none\">Your name is required</small></div> </div> <div class=\"form-group\"> <div class=\"col-sm-2\">&nbsp;</div> <div class=\"col-sm-8\"> <div class=\"input-group\"> <span class=\"input-group-addon\"><i class=\"fa fa-envelope fa-fw\"></i></span> <input type=\"email\" id=\"Email\" name=\"Email\" class=\"form-control\" placeholder=\"* Enter Email\" data-bv-field=\"Email\"> </div> <small class=\"help-block\" data-bv-validator=\"notEmpty\" data-bv-for=\"Email\" data-bv-result=\"NOT_VALIDATED\" style=\"display: none\">Your email is required</small><small class=\"help-block\" data-bv-validator=\"emailAddress\" data-bv-for=\"Email\" data-bv-result=\"NOT_VALIDATED\" style=\"display: none\">Your email is not valid</small></div> </div> <div class=\"form-group\"> <div class=\"col-sm-2\">&nbsp;</div> <div class=\"col-sm-8\"> <div class=\"input-group\"> <span class=\"input-group-addon\"><i class=\"fa fa-phone fa-fw\"></i></span> <input type=\"text\" id=\"Phone\" name=\"Phone\" class=\"form-control\" placeholder=\"Enter Phone Number\"> </div> </div> </div> <div class=\"form-group\"> <div class=\"col-sm-2\">&nbsp;</div> <div class=\"col-sm-8\"> <div class=\"input-group\"> <span class=\"input-group-addon\"><i class=\"fa fa-comment fa-fw\"></i></span> <textarea id=\"Message\" name=\"Message\" class=\"form-control\" rows=\"5\" data-bv-field=\"Message\"></textarea> </div> <small class=\"help-block\" data-bv-validator=\"notEmpty\" data-bv-for=\"Message\" data-bv-result=\"NOT_VALIDATED\" style=\"display: none\">Your message is required</small></div> </div> <div class=\"form-group\"> <div class=\"col-sm-2\">&nbsp;</div> <div class=\"col-sm-8\"> <button type=\"submit\" class=\"btn btn-default btn-md\">Submit</button> </div> </div> </fieldset> </form> <ul class=\"list-inline banner-social-buttons\"> <li> <a href=\"\" class=\"btn btn-default btn-md\"><i class=\"fa fa-twitter fa-fw\"></i> <span class=\"network-name\">Twitter</span></a> </li> <li> <a href=\"\" class=\"btn btn-default btn-md\"><i class=\"fa fa-facebook fa-fw\"></i> <span class=\"network-name\">Facebook</span></a> </li> <li> <a href=\"\" class=\"btn btn-default btn-md\"><i class=\"fa fa-google-plus fa-fw\"></i> <span class=\"network-name\">Google+</span></a> </li> </ul> </div> </div> </section>"
  );


  $templateCache.put('views/left_nav.html',
    "<section class=\"sidebar\"> <!-- Sidebar user panel --> <div class=\"user-panel\"> <div class=\"pull-left image\"> <img src=\"dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\"> </div> <div class=\"pull-left info\"> <p>Alexander Pierce</p> <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a> </div> </div> <!-- search form --> <form action=\"#\" method=\"get\" class=\"sidebar-form\"> <div class=\"input-group\"> <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search...\"> <span class=\"input-group-btn\"> <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i></button> </span> </div> </form> <!-- /.search form --> <!-- sidebar menu: : style can be found in sidebar.less --> <ul class=\"sidebar-menu\"> <li class=\"header\">MAIN NAVIGATION</li> <li class=\"active treeview\"> <a href=\"#\"> <i class=\"fa fa-dashboard\"></i> <span>Dashboard</span> <i class=\"fa fa-angle-left pull-right\"></i> </a> <ul class=\"treeview-menu\"> <li class=\"active\"><a href=\"index.html\"><i class=\"fa fa-circle-o\"></i> Dashboard v1</a></li> <li><a href=\"index2.html\"><i class=\"fa fa-circle-o\"></i> Dashboard v2</a></li> </ul> </li> <li class=\"treeview\"> <a href=\"#\"> <i class=\"fa fa-files-o\"></i> <span>Layout Options</span> <span class=\"label label-primary pull-right\">4</span> </a> <ul class=\"treeview-menu\"> <li><a href=\"pages/layout/top-nav.html\"><i class=\"fa fa-circle-o\"></i> Top Navigation</a></li> <li><a href=\"pages/layout/boxed.html\"><i class=\"fa fa-circle-o\"></i> Boxed</a></li> <li><a href=\"pages/layout/fixed.html\"><i class=\"fa fa-circle-o\"></i> Fixed</a></li> <li><a href=\"pages/layout/collapsed-sidebar.html\"><i class=\"fa fa-circle-o\"></i> Collapsed Sidebar</a></li> </ul> </li> <li> <a href=\"pages/widgets.html\"> <i class=\"fa fa-th\"></i> <span>Widgets</span> <small class=\"label pull-right bg-green\">new</small> </a> </li> <li class=\"treeview\"> <a href=\"#\"> <i class=\"fa fa-pie-chart\"></i> <span>Charts</span> <i class=\"fa fa-angle-left pull-right\"></i> </a> <ul class=\"treeview-menu\"> <li><a href=\"pages/charts/chartjs.html\"><i class=\"fa fa-circle-o\"></i> ChartJS</a></li> <li><a href=\"pages/charts/morris.html\"><i class=\"fa fa-circle-o\"></i> Morris</a></li> <li><a href=\"pages/charts/flot.html\"><i class=\"fa fa-circle-o\"></i> Flot</a></li> <li><a href=\"pages/charts/inline.html\"><i class=\"fa fa-circle-o\"></i> Inline charts</a></li> </ul> </li> <li class=\"treeview\"> <a href=\"#\"> <i class=\"fa fa-laptop\"></i> <span>UI Elements</span> <i class=\"fa fa-angle-left pull-right\"></i> </a> <ul class=\"treeview-menu\"> <li><a href=\"pages/UI/general.html\"><i class=\"fa fa-circle-o\"></i> General</a></li> <li><a href=\"pages/UI/icons.html\"><i class=\"fa fa-circle-o\"></i> Icons</a></li> <li><a href=\"pages/UI/buttons.html\"><i class=\"fa fa-circle-o\"></i> Buttons</a></li> <li><a href=\"pages/UI/sliders.html\"><i class=\"fa fa-circle-o\"></i> Sliders</a></li> <li><a href=\"pages/UI/timeline.html\"><i class=\"fa fa-circle-o\"></i> Timeline</a></li> <li><a href=\"pages/UI/modals.html\"><i class=\"fa fa-circle-o\"></i> Modals</a></li> </ul> </li> <li class=\"treeview\"> <a href=\"#\"> <i class=\"fa fa-edit\"></i> <span>Forms</span> <i class=\"fa fa-angle-left pull-right\"></i> </a> <ul class=\"treeview-menu\"> <li><a href=\"pages/forms/general.html\"><i class=\"fa fa-circle-o\"></i> General Elements</a></li> <li><a href=\"pages/forms/advanced.html\"><i class=\"fa fa-circle-o\"></i> Advanced Elements</a></li> <li><a href=\"pages/forms/editors.html\"><i class=\"fa fa-circle-o\"></i> Editors</a></li> </ul> </li> <li class=\"treeview\"> <a href=\"#\"> <i class=\"fa fa-table\"></i> <span>Tables</span> <i class=\"fa fa-angle-left pull-right\"></i> </a> <ul class=\"treeview-menu\"> <li><a href=\"pages/tables/simple.html\"><i class=\"fa fa-circle-o\"></i> Simple tables</a></li> <li><a href=\"pages/tables/data.html\"><i class=\"fa fa-circle-o\"></i> Data tables</a></li> </ul> </li> <li> <a href=\"pages/calendar.html\"> <i class=\"fa fa-calendar\"></i> <span>Calendar</span> <small class=\"label pull-right bg-red\">3</small> </a> </li> <li> <a href=\"pages/mailbox/mailbox.html\"> <i class=\"fa fa-envelope\"></i> <span>Mailbox</span> <small class=\"label pull-right bg-yellow\">12</small> </a> </li> <li class=\"treeview\"> <a href=\"#\"> <i class=\"fa fa-folder\"></i> <span>Examples</span> <i class=\"fa fa-angle-left pull-right\"></i> </a> <ul class=\"treeview-menu\"> <li><a href=\"pages/examples/invoice.html\"><i class=\"fa fa-circle-o\"></i> Invoice</a></li> <li><a href=\"pages/examples/profile.html\"><i class=\"fa fa-circle-o\"></i> Profile</a></li> <li><a href=\"pages/examples/login.html\"><i class=\"fa fa-circle-o\"></i> Login</a></li> <li><a href=\"pages/examples/register.html\"><i class=\"fa fa-circle-o\"></i> Register</a></li> <li><a href=\"pages/examples/lockscreen.html\"><i class=\"fa fa-circle-o\"></i> Lockscreen</a></li> <li><a href=\"pages/examples/404.html\"><i class=\"fa fa-circle-o\"></i> 404 Error</a></li> <li><a href=\"pages/examples/500.html\"><i class=\"fa fa-circle-o\"></i> 500 Error</a></li> <li><a href=\"pages/examples/blank.html\"><i class=\"fa fa-circle-o\"></i> Blank Page</a></li> </ul> </li> <li class=\"treeview\"> <a href=\"#\"> <i class=\"fa fa-share\"></i> <span>Multilevel</span> <i class=\"fa fa-angle-left pull-right\"></i> </a> <ul class=\"treeview-menu\"> <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level One</a></li> <li> <a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level One <i class=\"fa fa-angle-left pull-right\"></i></a> <ul class=\"treeview-menu\"> <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Two</a></li> <li> <a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Two <i class=\"fa fa-angle-left pull-right\"></i></a> <ul class=\"treeview-menu\"> <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Three</a></li> <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Three</a></li> </ul> </li> </ul> </li> <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level One</a></li> </ul> </li> <li><a href=\"documentation/index.html\"><i class=\"fa fa-book\"></i> <span>Documentation</span></a></li> <li class=\"header\">LABELS</li> <li><a href=\"#\"><i class=\"fa fa-circle-o text-red\"></i> <span>Important</span></a></li> <li><a href=\"#\"><i class=\"fa fa-circle-o text-yellow\"></i> <span>Warning</span></a></li> <li><a href=\"#\"><i class=\"fa fa-circle-o text-aqua\"></i> <span>Information</span></a></li> </ul> </section>"
  );


  $templateCache.put('views/login.html',
    "<!-- Intro Header --> <header class=\"login-background\"> <div class=\"login-box\"> <div class=\"lb-header\"> <a href=\"#\" class=\"active\" id=\"login-box-link\">Login</a> <a href=\"#\" id=\"signup-box-link\">Sign Up</a> </div> <div class=\"social-login\"> <a href=\"#\"> <i class=\"fa fa-facebook fa-lg\"></i> Facebook Login </a> <a href=\"#\"> <i class=\"fa fa-google-plus fa-lg\"></i> Google+ Login </a> </div> <form class=\"email-login\"> <div class=\"u-form-group\"> <input type=\"email\" placeholder=\"Email\"> </div> <div class=\"u-form-group\"> <input type=\"password\" placeholder=\"Password\"> </div> <div class=\"u-form-group\"> <button>Log in</button> </div> <div class=\"u-form-group\"> <a href=\"#\" class=\"forgot-password\">Forgot password?</a> </div> </form> <!-- <form class=\"email-signup\">\n" +
    "      <div class=\"u-form-group\">\n" +
    "        <input type=\"email\" placeholder=\"Email\"/>\n" +
    "      </div>\n" +
    "      <div class=\"u-form-group\">\n" +
    "        <input type=\"password\" placeholder=\"Password\"/>\n" +
    "      </div>\n" +
    "      <div class=\"u-form-group\">\n" +
    "        <input type=\"password\" placeholder=\"Confirm Password\"/>\n" +
    "      </div>\n" +
    "      <div class=\"u-form-group\">\n" +
    "        <button>Sign Up</button>\n" +
    "      </div>\n" +
    "    </form> --> </div> </header>"
  );


  $templateCache.put('views/main.html',
    "<!-- \n" +
    "<nav class=\"navbar navbar-custom navbar-fixed-top\" role=\"navigation\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"navbar-header\">\n" +
    "                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-main-collapse\"> <i class=\"fa fa-bars\"></i>\n" +
    "                </button>\n" +
    "                <a class=\"navbar-brand\" href=\"#/\">\n" +
    "                    <span class=\"light\">PLANISTO</span>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "           \n" +
    "            \n" +
    "            <div class=\"collapse navbar-collapse navbar-right navbar-main-collapse\">\n" +
    "                <ul class=\"nav navbar-nav\">\n" +
    "                   \n" +
    "                    <li class=\"hidden\">\n" +
    "                        <a href=\"#page-top\"></a>\n" +
    "                    </li>\n" +
    "                    <li>\n" +
    "                        <a  href=\"#about\">About</a>\n" +
    "                    </li>\n" +
    "                    <li>\n" +
    "                        <a href=\"#contact\">Contact</a>\n" +
    "                    </li>\n" +
    "                    <li>\n" +
    "                        <a href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#loginModal\">Login</a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "          \n" +
    "        </div>\n" +
    "        \n" +
    "    </nav> --><!-- Intro Header --> <header class=\"intro\" ng-show=\"$root.address == null\"> <div class=\"intro-body\"> <div class=\"container\"> <div class=\"row\"> <div class=\"col-md-8 col-md-offset-2 container-panel\"> <h1 class=\"brand-heading section-title\">Planisto</h1> <h5>Your personal Event planner</h5> <div class=\"vspacer30\"></div> <form role=\"form\" ng-submit=\"getLatLngFromAddress()\"> <div class=\"row\"> <div class=\"col-md-5\"> <div class=\"form-group input-box\"> <md-autocomplete md-selected-item=\"selectedItem\" md-search-text-change=\"null\" md-search-text=\"searchText\" md-selected-item-change=\"catAutocomplete(searchText)\" md-items=\"item in catAutocomplete(searchText)\" md-item-text=\"item.name\" md-min-length=\"1\" placeholder=\"What are you planning today?\"> <md-item-template> <span md-highlight-text=\"searchText\" md-highlight-flags=\"^i\">{{item.name}}</span> </md-item-template> <md-not-found>No matches found for \"{{searchText}}\".</md-not-found> </md-autocomplete> </div> </div> <div class=\"col-md-5\"> <div class=\"form-group input-box\"> <label class=\"sr-only\" for=\"location\">Location</label> <md-autocomplete md-selected-item=\"$root.address\" md-search-text-change=\"null\" md-search-text=\"addrSearchText\" md-items=\"place in getLocations(addrSearchText)\" md-selected-item-change=\"null\" md-item-text=\"place.description\" placeholder=\"Location?\"> <md-item-template> <span md-highlight-text=\"addrSearchText\" md-highlight-flags=\"^i\">{{place.description}}</span> </md-item-template> <md-not-found>No matches found for \"{{addrSearchText}}\".</md-not-found> </md-autocomplete> </div> </div> <div class=\"col-md-2\"> <a href=\"#/search\"> <button type=\"button\" class=\"btn btn-search\">Search</button> </a></div> </div> </form> <div class=\"vspacer30\"></div> </div> </div> </div> </div> </header>"
  );


  $templateCache.put('views/results.html',
    "<nav class=\"navbar navbar-custom navbar-fixed-top\" role=\"navigation\" style=\"opacity:1!important; z-index:99\"> <div class=\"container\"> <div class=\"navbar-header\"> <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".filters_section_collapse\"> <i class=\"fa fa-filter\"></i> </button> <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".header-search-bar\"> <i class=\"fa fa-search\"></i> </button> <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-main-collapse\"> <i class=\"fa fa-bars\"></i> </button> <a class=\"navbar-brand\" href=\"#/\"> <span class=\"light\">PLANISTO</span> </a> </div> <!-- Collect the nav links, forms, and other content for toggling --> <div class=\"collapse navbar-collapse navbar-right navbar-main-collapse\"> <ul class=\"nav navbar-nav\"> <!-- Hidden li included to remove active class from about link when scrolled up past about section --> <li> <a href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#loginModal\">Login</a> </li> </ul> </div> <!-- /.navbar-collapse --> </div> <!-- /.container --> </nav> <div> <div class=\"header-search-bar collapse navbar-collapse\" ng-controller=\"MainCtrl\"> <div class=\"row\"> <form role=\"form\" ng-submit=\"getLatLngFromAddress()\"> <div class=\".col-xs-4 col-md-4 col-sm-4 col-lg-4\"> <div class=\"form-group input-box\"> <md-autocomplete md-selected-item=\"selectedItem\" md-search-text-change=\"null\" md-search-text=\"searchText\" md-selected-item-change=\"catAutocomplete(searchText)\" md-items=\"item in catAutocomplete(searchText)\" md-item-text=\"item.name\" md-min-length=\"1\" placeholder=\"What are you planning today?\"> <md-item-template> <span md-highlight-text=\"searchText\" md-highlight-flags=\"^i\">{{item.name}}</span> </md-item-template> <md-not-found>No matches found for \"{{searchText}}\".</md-not-found> </md-autocomplete> </div> </div> <div class=\".col-xs-6 col-md-6 col-sm-6 col-lg-6\"> <div class=\"form-group input-box\"> <label class=\"sr-only\" for=\"location\">Location</label> <md-autocomplete md-selected-item=\"address\" md-search-text-change=\"null\" md-search-text=\"addrSearchText\" md-items=\"place in getLocations(addrSearchText)\" md-selected-item-change=\"null\" md-item-text=\"place.description\" placeholder=\"Location?\"> <md-item-template> <span md-highlight-text=\"addrSearchText\" md-highlight-flags=\"^i\">{{place.description}}</span> </md-item-template> <md-not-found>No matches found for \"{{addrSearchText}}\".</md-not-found> </md-autocomplete> </div> </div> <div class=\"col-xs-2 col-md-2 col-sm-2 col-lg-2\"> <a href=\"#/search\"> <button type=\"button\" class=\"btn btn-search\">Search</button> </a> </div> </form> </div> </div> <div class=\"row\"> <div class=\"col-md-3 col-sm-4 col-xs-6\" id=\"filters_section\"> <!-- Sidebar --> <nav class=\"navbar navbar-inverse\" id=\"sidebar-wrapper\" role=\"navigation\"> <ul class=\"nav sidebar-nav\"> <li class=\"sidebar-brand\"> <a href=\"#\"> Brand </a> </li> <li> <a href=\"#\">Home</a> </li> <li> <a href=\"#\">About</a> </li> <li> <a href=\"#\">Events</a> </li> <li> <a href=\"#\">Team</a> </li> <li class=\"dropdown\"> <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Works <span class=\"caret\"></span></a> <ul class=\"dropdown-menu\" role=\"menu\"> <li class=\"dropdown-header\">Dropdown heading</li> <li><a href=\"#\">Action</a></li> <li><a href=\"#\">Another action</a></li> <li><a href=\"#\">Something else here</a></li> <li><a href=\"#\">Separated link</a></li> <li><a href=\"#\">One more separated link</a></li> </ul> </li> <li> <a href=\"#\">Services</a> </li> <li> <a href=\"#\">Contact</a> </li> <li> <a href=\"https://twitter.com/maridlcrmn\">Follow me</a> </li> </ul> </nav> <!-- /#sidebar-wrapper --> <!-- <div class=\"col-md-3 col-sm-4 col-xs-6\" id=\"filters_section\">\n" +
    "\n" +
    "  <div class=\"panel-group filters_section_collapse collapse navbar-collapse\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n" +
    "  <span class=\"fa fa-filter\" id=\"filterhead\">&nbsp Filters</span>\n" +
    "  <div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\n" +
    "      <h4 class=\"panel-title\">\n" +
    "        <button role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n" +
    "        Filter 1\n" +
    "        </button>\n" +
    "      </h4>\n" +
    "    </div>\n" +
    "    <div id=\"collapseOne\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n" +
    "      <div class=\"panel-body\">\n" +
    "        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\n" +
    "      <h4 class=\"panel-title\">\n" +
    "        <button class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n" +
    "     Filter 2\n" +
    "        </button>\n" +
    "      </h4>\n" +
    "    </div>\n" +
    "    <div id=\"collapseTwo\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n" +
    "      <div class=\"panel-body\">\n" +
    "        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-heading\" role=\"tab\" id=\"headingThree\">\n" +
    "      <h4 class=\"panel-title\">\n" +
    "        <button class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n" +
    "            Filter 3\n" +
    "        </button>\n" +
    "      </h4>\n" +
    "    </div>\n" +
    "    <div id=\"collapseThree\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\n" +
    "      <div class=\"panel-body\">\n" +
    "        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div> --> </div> <div class=\"col-md-6 col-sm-6\"> </div> <div class=\"col-md-3 col-sm-3\"></div> </div></div>"
  );


  $templateCache.put('views/services.html',
    "<!-- Services Section --> <section id=\"service\" class=\"content-section text-center\"> <h2 class=\"section-title\">Our Services</h2> <div class=\"vspacer30\"></div> <div class=\"container\"> <div class=\"row row-centered\"> <div class=\"col-xs-6 col-centered col-fixed\"> <div class=\"item\"> <div class=\"item_content_img\"> <img src=\"img/business_dinner.jpg\"> </div> <div class=\"item_content_txt\"> <div class=\"vspacer10\"></div> Business Events </div> </div> </div> <div class=\"col-xs-6 col-centered col-fixed\"> <div class=\"item\"> <div class=\"item_content_img\"> <img src=\"img/business_dinner.jpg\"> </div> <div class=\"item_content_txt\"> <div class=\"vspacer10\"></div> Wedding Planning </div> </div> </div> <div class=\"col-xs-6 col-centered col-fixed\"> <div class=\"item\"> <div class=\"item_content_img\"> <img src=\"img/business_dinner.jpg\"> </div> <div class=\"item_content_txt\"> <div class=\"vspacer10\"></div> Mehndi Sangeet Engagment </div> </div> </div> <div class=\"col-xs-6 col-centered col-fixed\"> <div class=\"item\"> <div class=\"item_content_img\"> <img src=\"img/business_dinner.jpg\"> </div> <div class=\"item_content_txt\"> <div class=\"vspacer10\"></div> Birthday Party </div> </div> </div> <div class=\"col-xs-6 col-centered col-fixed\"> <div class=\"item\"> <div class=\"item_content_img\"> <img src=\"img/business_dinner.jpg\"> </div> <div class=\"item_content_txt\"> <div class=\"vspacer10\"></div> Kitty Party </div> </div> </div> <div class=\"col-xs-6 col-centered col-fixed\"> <div class=\"item\"> <div class=\"item_content_img\"> <img src=\"img/business_dinner.jpg\"> </div> <div class=\"item_content_txt\"> <div class=\"vspacer10\"></div> DJ Night </div> </div> </div> </div> </div> </section>"
  );

}]);
