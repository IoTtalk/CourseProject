 $(function(){
        set_endpoint('http://iottalk2.tw:9992');
		set_PUSH_INTERVAL(10);  // unit: ms
		
		var profile = {
		    'dm_name': 'bombman',          
			'idf_list': [],
		    'odf_list':[[control],[smartphone_0616018v2]],
        };
		controlvalue = 0;
		var temp;
		function control(data){

			
			if(data[0] != temp){
				console.log("ok");
				//if(temp == 1){
					//event2 = new CustomEvent('controlend',{'detail':{value: 32}});
					//document.dispatchEvent(event2);
				//}
				if(temp == 2){
					event2 = new CustomEvent('controlend',{'detail':{value: 39}});
					document.dispatchEvent(event2);
				}
				else if(temp == 3){
					event2 = new CustomEvent('controlend',{'detail':{value: 37}});
					document.dispatchEvent(event2);
				}
				else if(temp == 4){
					event2 = new CustomEvent('controlend',{'detail':{value: 38}});
					document.dispatchEvent(event2);
				}
				else if(temp == 5){
					event2 = new CustomEvent('controlend',{'detail':{value: 40}});
					document.dispatchEvent(event2);
				}
			}
				
			if(data[0] == 1){//bomb
				$('.action')[0].innerText="bomb";
				controlvalue = 32;
				event1 = new CustomEvent('control',{'detail':{value: 32}});
				var t=setTimeout(function(){
					event2 = new CustomEvent('controlend',{'detail':{value: 32}});
					document.dispatchEvent(event2);},10);
				//event2 = new CustomEvent('controlend',{'detail':{value: 32}});
				//document.dispatchEvent(event2);
			}
			else if(data[0] == 2){//right
				$('.action')[0].innerText="right";
				controlvalue = 39;
				event1 = new CustomEvent('control',{'detail':{value: 39}});
				document.dispatchEvent(event1);
				//var t=setTimeout(function(){
					//event2 = new CustomEvent('controlend',{'detail':{value: 39}});
					//document.dispatchEvent(event2);},300);
			}
			
			else if(data[0] == 3){//left
				$('.action')[0].innerText="left";
				controlvalue = 37;
				event1 = new CustomEvent('control',{'detail':{value: 37}});
				document.dispatchEvent(event1);
				//var t=setTimeout(function(){
					//event2 = new CustomEvent('controlend',{'detail':{value: 37}});
					//document.dispatchEvent(event2);},300);
			}
			
			else if(data[0] == 4){//up
				$('.action')[0].innerText="up";
				controlvalue = 38;
				event1 = new CustomEvent('control',{'detail':{value: 38}});
				document.dispatchEvent(event1);
			//	var t=setTimeout(function(){
					//event2 = new CustomEvent('controlend',{'detail':{value: 38}});
					//document.dispatchEvent(event2);},300);
			}
			
			else if(data[0] == 5){//down
				$('.action')[0].innerText="down";
				controlvalue = 40;
				event1 = new CustomEvent('control',{'detail':{value: 40}});
				document.dispatchEvent(event1);
				//var t=setTimeout(function(){
					//event2 = new CustomEvent('controlend',{'detail':{value: 40}});
					//document.dispatchEvent(event2);},300);
			}
			temp = data[0];
		}
		
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
       /* var profile = {
		    'dm_name': 'snake313',          
			'idf_list': [],
		    'odf_list':[[snake313,['None']]],
		    //'u_name': 'nctu_iottalk_final'
        };
		controlvalue = 0;
	//	event1 = new CustomEvent('control',{'detail':{value: controlvalue}});
	//	event2 = new CustomEvent('controlend',{'detail':{value: controlvalue}});
		
        function snake313(data){
			var tempa, tempb, tempc;
			tempc = data[2];
			tempb = data[1];
			tempa = data[0];
			if(tempc > 11){//bomb
				$('.action')[0].innerText="bomb";
				controlvalue = 32;
				event1 = new CustomEvent('control',{'detail':{value: 32}});
				var t=setTimeout(function(){
					event2 = new CustomEvent('controlend',{'detail':{value: 32}});
					document.dispatchEvent(event2);},10);
			}
			
			else if(tempa < -3){//right
				$('.action')[0].innerText="right";
				controlvalue = 39;
				event1 = new CustomEvent('control',{'detail':{value: 39}});
				document.dispatchEvent(event1);
				var t=setTimeout(function(){
					event2 = new CustomEvent('controlend',{'detail':{value: 39}});
					document.dispatchEvent(event2);},600);

			}
			
			else if(tempa > 3){//left
				$('.action')[0].innerText="left";
				controlvalue = 37;
				event1 = new CustomEvent('control',{'detail':{value: 37}});
				document.dispatchEvent(event1);
				var t=setTimeout(function(){
					event2 = new CustomEvent('controlend',{'detail':{value: 37}});
					document.dispatchEvent(event2);},600);
			}
			
			else if(tempb < -1){//up
				$('.action')[0].innerText="up";
				controlvalue = 38;
				event1 = new CustomEvent('control',{'detail':{value: 38}});
				document.dispatchEvent(event1);
				var t=setTimeout(function(){
					event2 = new CustomEvent('controlend',{'detail':{value: 38}});
					document.dispatchEvent(event2);},600);
			}
			
			else if(tempb > 4){//down
				$('.action')[0].innerText="down";
				controlvalue = 40;
				event1 = new CustomEvent('control',{'detail':{value: 40}});
				document.dispatchEvent(event1);
				var t=setTimeout(function(){
					event2 = new CustomEvent('controlend',{'detail':{value: 40}});
					document.dispatchEvent(event2);},600);
			}
			
			else
				controlvalue = 0;	
        };*/
      
/*******************************************************************/                
        function ida_init(){console.log('Success.');}
        var ida = {
            'ida_init': ida_init,
        }; 
        dai(profile,ida);     
});
