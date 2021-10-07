$(document).ready(function() {
			$(".calcContent").hide();
			var calcHidden = true, u2e = true, u2a = true, u3e = true, u3a = true;
			$("#selectorCalculus").click(function(){
				if(calcHidden) {
					$(".calcContent").show(500);
					calcHidden = false;
				}else{
					$(".calcContent").hide(500);
					calcHidden = true;
				}
				
			});
			$("#unit2button").click(function(){
				if(u2e) {
					$("#unit2exercises").show(500);
					$("#unit2button").css("background-color","#FF5733");
					u2e = false;
				}else{
					$("#unit2exercises").hide(500);
					$("#unit2button").css("background-color","#e7e7e7");
					u2e = true;
				}
			});
			$("#unit2answersButton").click(function(){
				if(u2a) {
					$("#unit2answers").show(500);
					$("#unit2answersButton").css("background-color","#FF5733");
					u2a = false;
				}else{
					$("#unit2answers").hide(500);
					$("#unit2answersButton").css("background-color","#e7e7e7");
					u2a = true;
				}
			});
			$("#unit3button").click(function(){
				if(u3e) {
					$("#unit3exercises").show(500);
					$("#unit3button").css("background-color","#FF5733");
					u3e = false;
				}else{
					$("#unit3exercises").hide(500);
					$("#unit3button").css("background-color","#e7e7e7");
					u3e = true;
				}
			});
			$("#unit3answersButton").click(function(){
				if(u3a) {
					$("#unit3answers").show(500);
					$("#unit3answersButton").css("background-color","#FF5733");
					u3a = false;
				}else{
					$("#unit3answers").hide(500);
					$("#unit3answersButton").css("background-color","#e7e7e7");
					u3a = true;
				}
			});
			
});