 $(function(){
        set_endpoint('http://iottalk2.tw:9992');
		set_PUSH_INTERVAL(500);  // unit: ms
		
        var profile = {
		    'dm_name': 'smartphone_0616018_outputv2',          
            'idf_list':[],
		    'odf_list':[[smartphone_0616018v2,['None']]],			
		    'u_name': 'smartphone_06160140'
        };
        
        function smartphone_0616018v2(data){
            if(data[2] < 0){
                console.log(data[2]);
                gInputEngine.bombput();
            }
            else if(Math.abs(data[0]) > Math.abs(data[1])){
                gInputEngine.actions['sniper_down'] = false;
                gInputEngine.actions['sniper_up'] = false;
                if(data[0]>0){
                    gInputEngine.actions['sniper_right'] = false;
                    gInputEngine.actions['sniper_left'] = true;
                }
                else{
                    gInputEngine.actions['sniper_right'] = true;
                    gInputEngine.actions['sniper_left'] = false;
                }
            }
            else{
                gInputEngine.actions['sniper_right'] = false;
                gInputEngine.actions['sniper_left'] = false;
                if(-data[1]>0){
                    gInputEngine.actions['sniper_down'] = false;
                    gInputEngine.actions['sniper_up'] = true;
                }
                else{
                    gInputEngine.actions['sniper_down'] = true;
                    gInputEngine.actions['sniper_up'] = false;
                }
            }
        }
      
/*******************************************************************/                
        function ida_init(){console.log('Success.');}
        var ida = {
            'ida_init': ida_init,
        }; 
        dai(profile,ida);     
});
