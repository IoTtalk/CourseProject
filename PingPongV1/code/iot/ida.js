 $(function(){
        csmapi.set_endpoint ('https://test.iottalk.tw');
        var profile = {
		    'dm_name': 'paddle',          
			'idf_list':[],
			'odf_list':[odf_y_246],
		    'd_name': 'ping',
        };
		window.X1 = 360;
		window.Y1 = 240;
			
        function odf_y_246(data){
           window.Y1 = data[0] ;
			if(window.Y1 > 640){
				window.Y1 = 640;
			}
			if(window.Y1 < 0){
				window.Y1 = 0;
			}
			console.log(window.Y1);
			console.log(window.X1);
        }
      
/*******************************************************************/                
        function ida_init(){
	    console.log(profile.d_name);
	}
        var ida = {
            'ida_init': ida_init,
		}; 
		
        dai(profile,ida);     
});
