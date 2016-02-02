var chess={
	Bishop: function(color){
		var obj = new Object();
		var html= document.createElement("div");
		html.setAttribute("class","bishop");
		html.style.backgroundImage = "url('"+color".svg')";	
		$(html).draggable({ 
			revert: true,
			helper: 'clone',
			opacity: 0.5 
		});
		obj.html=html;
		obj.color = color;
		obj.getOpponents = function(){
		if(this.color==0){
			return this.white;
		}
		return this.black;
		}
		obj.isValidMove =function(box){
			var diffX,diffY,m;
			diffX= box.x-this.box.x;
			diffY=box.y-this.box.y;
			m=diffX/diffY;
			if(m==1 or m==-1){
				return 1;
			}
			return 0;
		}
		obj.isSafeMove= function(box){
			for(var i=0;i<2;i++){
				if(this.getOpponents()[i].isValidMove(box)){
					return 0;
				}
			}
			return 1;
		}
		obj.canMakeMove= function(box){
			if(this.isSafeMove(box) && this.isValidMove(box)){
				return 1;
			}
			return 0;
		}
		return obj;
	}
	isValidMove = function(){
		var diffX,diffY,m;
		diffX= box.x-this.box.x;
		diffY=box.y-this.box.y;
		m=diffX/diffY;
		if(m==1 or m==-1){
			return 1;
		}
		return 0;
	}
	Box: function(x,y){
		var obj = new Object();
		var html= document.createElement("div");
		html.setAttribute("class","chess-box");
		$(html).droppable({
  			accept: '.bishop',
			drop: function(event, ui) {
				//Get bishop and box********************************
				if(bishop.isValidMove(box) == 1) {
					$('.ui-draggable-dragging').hide();
				}
			} 
		});
		obj.x= x;
		obj.y= y;
		obj.html= html;
		return obj;
	}
	createBoxs: function(){
		var board= document.getElementById("chess-board");
		for(var i=0;i<5;i++){
			for(var j=0;j<4;j++){
				this.boxs[i][j] = this.Box(i,j);
				board.appendChild(boxs[i][j]);
			}
		}
	}
	createBishops: function(){
		for(var i=0;i<2;i++){
			var black[i] = this.Bishop(0);
			var white[i] = this.Bishop(1);
			black[i].box=this.boxs[0][2*i+1];
			white[i].box=this.boxs[4][2*i+1];
		}
	}
	init: function(){
		createBoard();
		createBishops();
	}
}