document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {	
	    $("#jantungbtn").click(function(){
	    $.ajax({url: "http://192.168.0.104/cekatan/api.php?lat=-6.598033&long=106.797336&pname=Lorem&stype=jantung&phone=08123456789", success:         function(result){
	        console.log('Serangan Jantung')	        
	    }});
	    });

	    $("#lukabtn").click(function(){
	    $.ajax({url: "http://192.168.0.104/cekatan/api.php?lat=-6.598033&long=106.797336&pname=Lorem&stype=luka&phone=08123456789", success:        function(result){
	        console.log('Kecelakaan/Luka')	        
	    }});
	    });

	    $("#bencanabtn").click(function(){
	    $.ajax({url: "http://192.168.0.104/cekatan/api.php?lat=-6.536368&long=106.796907&pname=Lorem&stype=bencana&phone=08123456789", success:         function(result){	     
	    		console.log('Bencana Alam')   
	    }});
	    });
};