$(document).ready(function(){

	// draggable
	$( "#draggable" ).draggable();

	// dropable
	$( "#dragg" ).draggable();
	   $( "#droppable" ).droppable({
	     drop: function( event, ui ) {
	       $( this )
	         .addClass( "ui-state-highlight" )
	         .find( "p" )
	           .html( "Dropped!" );
	     }
	   });

	// resizable
	$( "#resizable" ).resizable();

	// accordion
	 $( "#accordion" ).accordion({
	 	collapsible: true
	 });

	 // autocomplete
	 var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });

    // slider
     $( "#slider" ).slider();

    // progressbar
      $( "#progressbar" ).progressbar({
      value: 90
    });

    // tabs
    $( "#tabs" ).tabs();

});
