$.fn.DataTable.ext.pager.numbers_length = 3;

$.fn.DataTable.ext.pager.numbers_no_ellipses = function(page, pages){
   var numbers = [];
   var buttons = $.fn.DataTable.ext.pager.numbers_length;
   var half = Math.floor( buttons / 2 );

   var _range = function ( len, start ){
      var end;

      if ( typeof start === "undefined" ){
         start = 0;
         end = len;

      } else {
         end = start;
         start = len;
      }

      var out = [];
      for ( var i = start ; i < end; i++ ){ out.push(i); }

      return out;
   };


   if ( pages <= buttons ) {
      numbers = _range( 0, pages );

   } else if ( page <= half ) {
      numbers = _range( 0, buttons);

   } else if ( page >= pages - 1 - half ) {
      numbers = _range( pages - buttons, pages );

   } else {
      numbers = _range( page - half, page + half + 1);
   }

   numbers.DT_el = 'span';

   return ["first", "previous", numbers, "next", "last"];
};

$.fn.DataTable.ext.pager.numbers_no_ellipses_mobile = function(page, pages){
	   var numbers = [];
	   var buttons = $.fn.DataTable.ext.pager.numbers_length;
	   var half = Math.floor( buttons / 2 );

	   var _range = function ( len, start ){
	      var end;

	      if ( typeof start === "undefined" ){
	         start = 0;
	         end = len;

	      } else {
	         end = start;
	         start = len;
	      }

	      var out = [];
	      for ( var i = start ; i < end; i++ ){ out.push(i); }

	      return out;
	   };


	   if ( pages <= buttons ) {
	      numbers = _range( 0, pages );

	   } else if ( page <= half ) {
	      numbers = _range( 0, buttons);

	   } else if ( page >= pages - 1 - half ) {
	      numbers = _range( pages - buttons, pages );

	   } else {
	      numbers = _range( page - half, page + half + 1);
	   }

	   numbers.DT_el = 'span';

	   return ["previous", numbers, "next"];
	};