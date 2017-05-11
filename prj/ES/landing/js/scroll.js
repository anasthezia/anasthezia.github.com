function ges(sel, cb, parent) {
  parent = parent || document
  var items = parent.querySelectorAll(sel);
  for (var i = 0; i < items.length; i++) {
    typeof cb == 'function' && cb(items[i])
  }
  return items;
}

var hasClass = function (elem, className) {
  if (!elem) {
    return false
  } else {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');

  }
};


var remCl = function (elem, className) {
  if (!elem) {
    return
  }
  if (className) {

    var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
      while (newClass.indexOf(' ' + className + ' ') >= 0) {
        newClass = newClass.replace(' ' + className + ' ', ' ');
      }
      elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
  } else {
    elem.className = ''
  }
};


var addCl = function (elem, className) {
  if (!elem) {
    return
  }
  if (!hasClass(elem, className)) {
    elem.className += ' ' + className;
  }
};

function ge(sel, cb) {
  var el = ges(sel)[0];
  cb && cb(el);
  return el;
}

function getOffset(elem) {
  var top = 0,
    left = 0,
    bottom = 0,
    right = 0

  var width = elem.offsetWidth;
  var height = elem.offsetHeight;

  while (elem) {
    top += elem.offsetTop;
    left += elem.offsetLeft;
    elem = elem.offsetParent;
  }

  right = left + width;
  bottom = top + height;

  return {
    top: top,
    left: left,
    bottom: bottom,
    right: right,
  }
}
function getHeight(){
  var w = window,
    d = document,
    e = d.documentElement,
    g = ge('body');
    return w.innerHeight|| e.clientHeight|| g.clientHeight;
}
function getScroll() {

  if (window.pageYOffset != undefined) {
    return pageYOffset;
  }
  else {
    var sy, d = document, r = d.documentElement, b = d.body;
    // sx= r.scrollLeft || b.scrollLeft || 0;
    sy = r.scrollTop || b.scrollTop || 0;
    return sy;
  }
}

var sc_items = [];


function data_sc_init() {
  ges('[data-scroll]', function (el) {
    var top = el.getAttribute('data-scroll-top')
      , offset = getOffset(el);

    sc_items.push({
      el: el,
      opacity_action: typeof el.getAttribute('data-scroll-opacity') == 'string',
      top_action: top ? +top : null,
      top: offset.top,
      class: el.getAttribute('data-scroll'),
      delta: offset.bottom - offset.top,
      // left: offset.left,
      bottom: offset.bottom
    })
  })
  // sc_items = [sc_items[6]]
}

var main_status;
function on_scroll() {
  var y = getScroll();
  var h = getHeight();
  sc_items.forEach(function (item) {
    if (item.bottom > y && (item.top < (y + h))) {
      if (item.opacity_action || item.top_action) {
        var k = (item.bottom - y) / item.delta
        if (item.opacity_action) {
          item.el.style.opacity = Math.pow(k, .7);
        }
        if (item.top_action) {
          window.item = item
          var value = k * item.top_action * (-1);
          item.el.style.transform = 'translateY(' + value + 'px)';
        }

      }
      if (item.class && item.status != 1) {
        addCl(item.el, item.class)
      }
      item.status = 1
    } else {
      // if (item.class && item.status != -1) {
        // remCl(item.el, item.class)
      // }
      // item.status = -1
    }
  });

  var val = getOffset(ge('article')).top;
  if (y > val && main_status != 1) {
    main_status = 1;
    addCl(ge('.is-sticky'), 'header-sticky')
  } else if (y <= val && main_status != -1) {
    main_status = -1;
    remCl(ge('.is-sticky'), 'header-sticky')
  }

};
window.onscroll = on_scroll;
window.onresize = data_sc_init;
// etc

// setTimeout(() => {
  data_sc_init();
  on_scroll()
// });
