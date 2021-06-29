$(document).ready(function(){

		//var name;
		
		//name = prompt('Веди Ваше имя','Иван')

		//$('#rezultat').html(name);
		
		$('input').on('keyup',function(){

			var a,b,c;
			a = $('#a').val();
			b = $('#b').val();

			a = parseInt(a);
			b = parseInt(b);

			c = a * b;

			$('#rezultat').html('Будет ' + c);
		});

});
