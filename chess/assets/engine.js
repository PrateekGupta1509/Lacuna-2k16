var chess={
	Bishop: function(color){
		var obj = new Object();
		var html= document.createElement("div");
		html.setAttribute("class","bishop");
		html.style.backgroundImage = "url('./assets/"+color+".svg')";	 
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
			if(m==1 || m==-1){
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
	},
	isValidMove : function(){
		var diffX,diffY,m;
		diffX= box.x-this.box.x;
		diffY=box.y-this.box.y;
		m=diffX/diffY;
		if(m==1 || m==-1){
			return 1;
		}
		return 0;
	},
	Box: function(x,y){
		var obj = new Object();
		var html= document.createElement("div");
		html.setAttribute("class","chess-box");
		if((x+y)%2==0){
			html.style.backgroundColor="#333";
		}else{
			html.style.backgroundColor="#fff";
		}
		$(html).droppable({
  			accept: '.bishop',
			drop: function(event, ui) {
				//Get bishop and box********************************
				if(bishop.canMakeMove(box) == 1) {
					$('.ui-draggable-dragging').hide();
					this.checkForVictory();
				}
			} 
		});
		obj.x= x;
		obj.y= y;
		obj.html= html;
		return obj;
	},
	createBoxs: function(){
		var board= document.getElementById("chess-board");
		for(var i=0;i<4;i++){
			for(var j=0;j<5;j++){
				this.boxs[i][j] = this.Box(i,j);
				board.appendChild(this.boxs[i][j].html);
			}
		}
	},
	createBishops: function(){
		var board= document.getElementById("chess-board");
		for(var i=0;i<2;i++){
			this.black[i] = this.Bishop(0);
			this.white[i] = this.Bishop(1);
			this.black[i].box=this.boxs[(2*i)+1][0];
			this.white[i].box=this.boxs[(2*i)+1][4];
			board.appendChild(this.white[i].html);
			board.appendChild(this.black[i].html);
		}
	},
	checkForVictory: function(){
		 for(var i=0;i<2;i++){
		 	if(!((black[i].box==this.boxs[3][4] || black[i].box==this.boxs[1][4]) && (white[i].box==this.boxs[1][0] || white[i].box==this.boxs[4][2]))){
		 		return 0;
		 	}
		}
		window.alert("You won!");
		return 1;
	},
	setStyle : function(){
		var h= (0.75*window.innerHeight);
		var chessBoard= document.getElementById("chess-board");
		var chessBoxs= document.getElementsByClassName("chess-box");
		var bishops = document.getElementsByClassName("bishop");
		chessBoard.style.height= (h);
		chessBoard.style.width= (h*1.25);
		for(var i=0; i<chessBoxs.length;i++){
			chessBoxs[i].style.height=(h*0.25);
			chessBoxs[i].style.width=(h*0.25);
		}
		for(var i=0; i<4;i++){
			bishops[i].style.height=(h*0.25);
			bishops[i].style.width=(h*0.25);
		}
		for(var i=0;i<2;i++){
			this.white[i].html.style.top = (this.white[i].box.x*(h*0.25));
			this.white[i].html.style.left = (this.white[i].box.y*(h*0.25));
			this.black[i].html.style.top = (this.black[i].box.x*(h*0.25));
			this.black[i].html.style.left = (this.black[i].box.y*(h*0.25));
		}
	},
	initArrays: function(){
		this.boxs= new Array(5);
		for(var i=0; i<5;i++){
			this.boxs[i]= new Array(4);
		};
		this.white= new Array(2);
		this.black= new Array(2);
	},
	init: function(){
		this.initArrays();
		this.createBoxs();
		this.createBishops();
		this.setStyle();
	}
}