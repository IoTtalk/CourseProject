 $(function(){
		// set_endpoint('http://garden2.iottalk.tw/csm');
		set_endpoint('http://iottalk2.tw:9992');
		set_PUSH_INTERVAL(10);  // unit: ms
		
		window.X1 = 360;
		window.Y1 = 40;

		var profile = {
		    'dm_name': 'paddle',          
			'idf_list': [],
		    'odf_list':[[odf_y_246]],
        };
		function odf_y_246(data){
			window.Y1 = data[0]
			console.log(window.Y1)
		}
		
      
/*******************************************************************/                
        function ida_init(result){console.log('Register Result:',result);}
        var ida = {
            'ida_init': ida_init,
        }; 
        dai(profile,ida);     
});
