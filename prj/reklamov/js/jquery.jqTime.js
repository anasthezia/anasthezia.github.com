// Plugin NimTime. Printing current time in selector.
// Autor Ivanushkin Nikolay (Nim579). Sorced 29.04.2011
// Site http://nim579.ru
// About and documentation of plugin - http://nim579.ru/html/jqtime.html
// Used modifying code by jQuery.timers plugin

//Seconds counter function
jQuery.fn.extend({
	everyTime: function(label, fn, times) {
		return this.each(function() {
			jQuery.timer.add(this, label, fn, times);
		});
	}
});

jQuery.extend({
	timer: {
		guid: 1,
		global: {},
		add: function(element, label, fn, times) {
			var counter = 0;		
			interval = label;
			element.$timers = {};
			element.$timers[label] = {};
			fn.$timerID = fn.$timerID || this.guid++;
			
			var handler = function() {
				if ((++counter > times && times !== 0) || fn.call(element, counter) === false)
					jQuery.timer.remove(element, label, fn);
			};
			
			handler.$timerID = fn.$timerID;
			
			if (!element.$timers[label][fn.$timerID]) 
				element.$timers[label][fn.$timerID] = window.setInterval(handler,interval);
			
			if ( !this.global[label] )
				this.global[label] = [];
			this.global[label].push( element );
			
		},
	}
});

//Time vars
var today = new Date();
var gh = today.getHours();
var gm = today.getMinutes();
var gs = today.getSeconds();
/* Dev time vars
var gh = 23
var gm = 59
var gs = 50
*/
var che = 3600*gh+60*gm+gs

jQuery.fn.curTime = function(options) {
	var options = jQuery.extend({
		sepor: ':',
		warp: 'no',
		tz: '0',
		template: 'hms',
		format: 'yes'
	}, options);
	return this.each( function() {
		jQuery(this).everyTime(1000, function(i) {
			i = i + che
			if (options.tz != '0') {var w = i + options.tz*3600} else {w = 0 + i}
			if (w>=86400) w = w - 86400;
			if (w<=0) w = 86400 + w;
			if (options.warp == 'yes') {var w = 86400 - w} else if (options.warp == 'no') {w = 0 + w}
			hou = Math.floor(w/3600)
			min = Math.floor((w-hou*3600)/60)
			sec = Math.floor(w-hou*3600-min*60)
			if(options.format == 'yes') {
				if (sec<=9) sec = '0'+sec;
				if (hou<=9) hou = '0'+hou;
				if (min<=9) min = '0'+min;
			}
			function returnString(tmpl) {
				var str = '';
				var sar = new Array();
				tmpl = tmpl.toLowerCase()
				if (tmpl.indexOf('h') >= 0) {sar[tmpl.indexOf('h')] = hou}
				if (tmpl.indexOf('m') >= 0) {sar[tmpl.indexOf('m')] = min}
				if (tmpl.indexOf('s') >= 0) {sar[tmpl.indexOf('s')] = sec}
				for(var i in sar) {
					if(i == sar.length-1) {str = str + sar[i]} else {str = str + sar[i]+options.sepor}
				}
				return str;
			}

			jQuery(this).text(returnString(options.template));
		});
	});
};

jQuery.fn.IntervalTimer = function(options){
	var options = jQuery.extend({
	sepor: ":",
	warp: "no",
	template: "hms",
	format: "yes",
	timeFrom: '10:00:01',
	timeTo: '10:23:54',
	altText: 'out of interval'
	}, options);
	return this.each(function(){
		var vFrom = options.timeFrom
		var aFrom = vFrom.split(':');
		var vTo = options.timeTo
		var aTo = vTo.split(':');
		var iFrom = Number(aFrom[0])*3600+Number(aFrom[1])*60+Number(aFrom[2])
		var iTo = Number(aTo[0])*3600+Number(aTo[1])*60+Number(aTo[2])
		jQuery(this).everyTime(1000, function(i) {
			c = i + 0;
			i = i + che;
			if (i>=86400) i = i - 86400;
			if(options.warp == 'yes') {
				if (iFrom >= iTo) {
					b=86400+iTo-che;
					if((i >= iFrom && i <= 86400) || (i <= iTo && i >= 0)) {b = b - c;} else {b = -1}
				} else {
					if(i>=iFrom) {b = iTo - i} else {b = -1}
				}
			} else if(options.warp == 'no') {
				if(iFrom >= iTo) {if((i >= iFrom && i <= 86400) || (i <= iTo && i >= 0)){b = 0 + i;} else {b = -1}} else
				if(i >= iFrom && i <= iTo){b = 0 + i;} else {b = -1}
			}
			hou = Math.floor(b/3600)
			min = Math.floor((b-hou*3600)/60)
			sec = Math.floor(b-hou*3600-min*60)
			if(options.format == 'yes') {
				if (sec<=9) sec = '0'+sec;
				if (hou<=9) hou = '0'+hou;
				if (min<=9) min = '0'+min;
			}
			if(b >= 0) {
				jQuery(this).text(hou+options.sepor+min+options.sepor+sec);
			} else {
				jQuery(this).text(options.altText);
			}
		});
	});	
};

jQuery.fn.TimerToggler = function(options){
	var options = jQuery.extend({
		timeFrom: '',
		timeTo: '',
		newContent: ''
	}, options);
	return this.each(function(){
		var vFrom = options.timeFrom
		var aFrom = vFrom.split(':');
		var vTo = options.timeTo
		var aTo = vTo.split(':');
		var iFrom = Number(aFrom[0])*3600+Number(aFrom[1])*60+Number(aFrom[2])
		var iTo = Number(aTo[0])*3600+Number(aTo[1])*60+Number(aTo[2])
		jQuery(this).everyTime(1000, function(i) {
			i = i + che
			if(iFrom <= iTo){
				if(i>=iFrom && i<=iTo){var tFlag = 1} else {var tFlag = 0}
			} else {
				if((i>=iFrom && i<= 86400) || (i>=0 && i<=iTo)){var tFlag = 1} else {var tFlag = 0}
			}

			if(tFlag == 1){jQuery(this).show();} else if(tFlag == 0){jQuery(this).hide();}
		});
	});
};

//IE fix
if (jQuery.browser.msie)
	jQuery(window).one("unload", function() {
		var global = jQuery.timer.global;
		for ( var label in global ) {
			var els = global[label], i = els.length;
			while ( --i )
				jQuery.timer.remove(els[i], label);
		}
	});