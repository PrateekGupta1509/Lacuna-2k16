// Array for game
var cur_pos = 0;
// var game_seq = ["dashboard","story01","story02","story03","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",]


var story_seq=[
		{
			name:"dashboard",
			type:"game_start",
			img:"",

		 },
		{	
			name:"story01",
			type:"story",
			img:'img/story/story01.png',
			text:'“Hello, Mr. Holmes,” said the bearded old man who had just entered The Stranger’s Room at The Diogenes.<br>The older and comparatively less famous Holmes brother looked up in surprise. He had never before been interrupted at this establishment. It had been a long time since someone took him by surprise. Sipping his Earl Grey as calmly as ever, Mycroft looked questioningly at the intruder. Seeking an answer to the obvious, and realizing that he would receive none till he asked, he said, “Hello. Who might you be?”',
			func: moveto_story,
		 },
		{	
			name:"story02",
			type:"story",
			img:'img/story/story02.jpg',
			text:'“Maupertuis,” he replied. Responding to Mycroft’s continued expression of confusion, Maupertuis went on in a voice which reeked of egomania, “Perhaps you know me better as ‘The Baron’.”',
			func: moveto_story, 
		 },
		{	
			name:"story03",
			type:"story",
			img:'img/story/story03.jpg',
			text:'The grimace on Mycroft’s face didn’t go unnoticed by the Baron, though he still felt disappointed at not having been recognized immediately. Surely the buffoons at MI6 were not, well, buffoons. Well, he had to make sure. Just in case. He couldn’t possibly have somebody this incompetent as his business partner. Definitely not after the fruitful partnership that was brought to an abrupt end due to the demise of his colleague. “Mr. Holmes. You’re one of the few people lucky enough to hear the words I am about to say. However, I do question your competence, considering you did not recognize me. But before we discuss business, you must first prove your mettle to me.”',
			func: moveto_story, 
		},
		{	
			name:"puzzle01",
			type:"puzzle",
			img:'img/story/story04.png',
			text:'Sherlock took another puff of his pipe as he stared out into the busy bustling marketplace of Baghdad. He was bored. Bored. How could I not be bored? My brother asks me to stay here pretending to be dead. Sherlock winced at the bitter irony. Of all the things he had in his previous life, the one thing he missed the most after he had to fake his death was John. His first friend. His only friend. And he had had to betray him. Sherlock had faked his death to protect John, but that didn’t lessen the pain of lying to him',
			func: moveto_story, 
		 },	
		{	
			name:"story04",
			type:"story",
			img:'img/story/story04.png',
			text:'Sherlock took another puff of his pipe as he stared out into the busy bustling marketplace of Baghdad. He was bored. Bored. How could I not be bored? My brother asks me to stay here pretending to be dead. Sherlock winced at the bitter irony. Of all the things he had in his previous life, the one thing he missed the most after he had to fake his death was John. His first friend. His only friend. And he had had to betray him. Sherlock had faked his death to protect John, but that didn’t lessen the pain of lying to him',
			func: moveto_story, 
		 },
		{	
			name:"story05",
			type:"story",
			img:'img/story/story05.jpg',
			text:'His reverie was interrupted by his phone beeping. He could feel adrenaline pumping through his veins as his hand crept forward to pick up the phone. Only Mycroft had the number to this phone. One message, an unknown number. Was this another message from the telecom service providers or was this Mycroft keeping his promise? Hopefully the latter. Hopefully this was a clue to one of Moriarty’s henchmen. Maybe, just maybe. One can only have so much fun in a mind palace, grinned Sherlock as he opened the message.',
			func: moveto_story, 
		 },
		{	
			name:"crypt01",
			type:"crypt",
			img:'img/story/story04.png',
			text:'Sherlock took another puff of his pipe as he stared out into the busy bustling marketplace of Baghdad. He was bored. Bored. How could I not be bored? My brother asks me to stay here pretending to be dead. Sherlock winced at the bitter irony. Of all the things he had in his previous life, the one thing he missed the most after he had to fake his death was John. His first friend. His only friend. And he had had to betray him. Sherlock had faked his death to protect John, but that didn’t lessen the pain of lying to him',
			func: moveto_story, 
		 },	
		{	
			name:"story06",
			type:"story",
			img:'img/story/story06.jpg',
			text:'Big brother really loves playing his games, smiled Sherlock as he celebrated another of his small victories. He had never settled in this shady hotel, always yearning to leave. Even if home was naught but a memory now. At least now he had something to keep his mind occupied. Something to keep his guilty conscience silent. None of that matters now. Moriarty’s web must be dismantled for Moriarty’s death to have any finality, any meaning. And Mycroft had just guided him towards the first thread in the web. The first one to be broken.',
			func: moveto_story, 
		 },
		{	
			name:"story07",
			type:"story",
			img:'img/story/story07.jpg',
			text:'A month had passed now, and Sherlock had been inducted into the ranks of the silent monks at the temple. Only this final test remained to prove that he had achieved inner peace and could be one of them. After this test was done, he could unveil Moriarty’s accomplice. Disguised as a monk, she smuggled drugs right under their very noses. Drugs that had once funded Moriarty’s plans. Not anymore though. Once Sherlock had cleared this test and earned the brotherhood of the monks, her game was up.',
			func: moveto_story, 
		 },
		{	
			name:"story08",
			type:"story",
			img:'img/story/story08.jpg',
			text:'Sherlock entered the test chamber to find all the monks seated on the stone floor in a circle. He sat gracefully in the centre at the place designated for him. A monk rose up silently and offered him a bowl with a sweet smelling fluid in it. Sherlock looked at his reflection in the clear green liquid, and drank it without a second thought.',
			func: moveto_story, 
		 },
		{	
			name:"story09",
			type:"story",
			img:'img/story/story01.png',
			text:null,
			func: moveto_story, 
		 },
		{	
			name:"story10",
			type:"story",
			img:'img/story/story01.png',
			text:null,
			func: moveto_story, 
		 },
		{	
			name:"story11",
			type:"story",
			img:'img/story/story01.png',
			text:null,
			func: moveto_story, 
		 },
		{	
			name:"story12",
			type:"story",
			img:'img/story/story01.png',
			text:null,
			func: moveto_story, 
		 },
		{	
			name:"story13",
			type:"story",
			img:'img/story/story01.png',
			text:null,
			func: moveto_story, 
		 },
		{	
			name:"story14",
			type:"story",
			img:'img/story/story01.png',
			text:null,
			func: moveto_story, 
		 },
		{	
			name:"story15",
			type:"story",
			img:'img/story/story01.png',
			text:null,
			func: moveto_story, 
		 },
		{	
			name:"story15",
			type:"story",
			img:'img/story/story01.png',
			text:null,
			func: moveto_story, 
		 },
		{	
			name:"story16",
			type:"story",
			img:'img/story/story01.png',
			text:null,
			func: moveto_story, 
		 },
		{	
			name:"story17",
			type:"story",
			img:'img/story/story01.png',
			text:null,
			func: moveto_story, 
		 },
		{	
			name:"story18",
			type:"story",
			img:'img/story/story01.png',
			text:null,
			func: moveto_story, 
		 },
		{	
			name:"story19",
			type:"story",
			img:'img/story/story01.png',
			text:null,
			func: moveto_story, 
		 },
		{	
			name:"story20",
			type:"story",
			img:'img/story/story01.png',
			text:null,
			func: moveto_story, 
		 },
		{	
			name:"story21",
			type:"story",
			img:'img/story/story01.png',
			text:null,
			func: moveto_story, 
		 },
		{	
			name:"story22",
			type:"story",
			img:'img/story/story01.png',
			text:null,
			func: moveto_story, 
		 },
		{	
			name:"story23",
			type:"story",
			img:'img/story/story01.png',
			text:null,
			func: moveto_story, 
		 },
		{	
			name:"story24",
			type:"story",
			img:'img/story/story01.png',
			text:null,
			func: moveto_story, 
		 },
		{	
			name:"story25",
			type:"story",
			img:'img/story/story01.png',
			text:null,
			func: moveto_story, 
		 },
		{	
			name:"story26",
			type:"story",
			img:'img/story/story01.png',
			text:null,
			func: moveto_story, 
		 },
		{	
			name:"story27",
			type:"story",
			img:'img/story/story01.png',
			text:null,
			func: moveto_story, 
		 },
		{	
			name:"story28",
			type:"story",
			img:'img/story/story01.png',
			text:null,
			func: moveto_story, 
		 },
		{	
			name:"story29",
			type:"story",
			img:'img/story/story01.png',
			text:null,
			func: moveto_story, 
		 },
		{	
			name:"story30",
			type:"story",
			img:'img/story/story01.png',
			text:null,
			func: moveto_story, 
		 },
		{	
			name:"story31",
			type:"story",
			img:'img/story/story01.png',
			text:null,
			func: moveto_story, 
		 },
		{	
			name:"story32",
			type:"story",
			img:'img/story/story01.png',
			text:null,
			func: moveto_story, 
		 },
		{	
			name:"story33",
			type:"story",
			img:'img/story/story01.png',
			text:null,
			func: moveto_story, 
		 },
		{	
			name:"story34",
			type:"story",
			img:'img/story/story01.png',
			text:null,
			func: moveto_story, 
		 },
];

function go_to_pos(ch){
	cur_pos = cur_pos + ch;
	if(story_seq[cur_pos]['type']=='story')
	{
		console.log('yo');
		$('#game_loader').fadeIn(200);
		var $downloadingImage = $("<img>");
		$downloadingImage.load(function(){	
		    story_seq[cur_pos]['func'](story_seq[cur_pos]['img'],story_seq[cur_pos]['text']);
			$('#game_loader').fadeOut(200);
		});
		$downloadingImage.attr("src", story_seq[cur_pos]['img']);
	}
}

function moveto_story(img,text){
	console.log('in');
	$('.story_container').css({'background-image':'url('+img+')'});
	$('.text_container').html(text);
}

$('.story_but').click(function(){
	if($(this).hasClass('story_prev'))
	{
		go_to_pos(-1);
	}
	else if($(this).hasClass('story_next'))
	{
		go_to_pos(1);
	}

});

// PUZZLE 5
function puzzle5init()
{	var grid= [
		[3,2,1,3,2,1,3,1,3],
		[1,2,3,3,1,2,2,2,2],
		[3,2,1,2,1,3,1,3,1],
		[3,1,2,2,3,1,1,2,3],
		[2,1,3,1,1,2,3,2,1],
		[2,3,1,3,2,3,1,2,3],
		[1,3,2,2,3,1,2,3,1],
		[1,2,3,1,1,3,3,2,2],
		[3,2,1,3,2,2,1,1,3],
	];
	var row=grid.length,col=grid[0].length;
	var count=0;


	function GenerateGrid()
	{
		var html = '<div class="puzzle5grid">';
		for(i=0;i<grid.length;++i)
		{
			for(j=0;j<grid[i].length;++j)
			{
				
				html+='<div class="puzzle5box" data-x="'+i+'" data-y="'+j+'">'+grid[i][j]+'</div>';
			}
		}
		html+='</div>';
		$('#puzzle5 .puzzle_deti').html(html);
		var initbox = ((row - 1) * col) + 1;
		// $('.puzzle5box:nth-child('+initbox+')').trigger("click");
		// setTimeout(function(){
		// 	$('.puzzle5grid').css({height:row*70,width:col*70});
		// },200);
		
	}		
	GenerateGrid();
	function CheckSurrounding()
	{
		var box=$('.puzzle5box.sel');
		var x=box.data('x'),y=box.data('y');
		var arr = [
					$('.puzzle5box[data-x="'+x+'"][data-y="'+(y-1)+'"]')[0],
					$('.puzzle5box[data-x="'+(x+1)+'"][data-y="'+y+'"]')[0],
					$('.puzzle5box[data-x="'+x+'"][data-y="'+(y+1)+'"]')[0],
					$('.puzzle5box[data-x="'+(x-1)+'"][data-y="'+y+'"]')[0],
				];
		// console.log(pos,arr);
		for(i=0;i<arr.length;++i)
		{
			if( !($(arr[i]).hasClass('visited')) && (((count+1)%3)==(parseInt($(arr[i]).html()))%3))
			{
				return true;
			}
		}
		return false;
	}
	function CheckMovePossible()
	{
		if(!CheckSurrounding())
		{
			if($('.puzzle5box:not(.visited)')[0]==undefined)
				win();
			else
				lost();
		}
	}

	function CheckIsNeighbor(prev,cur)
	{
		var dx=Math.abs($(prev).data('x') - $(cur).data('x')),  dy=Math.abs($(prev).data('y') - $(cur).data('y'));
		if((dx==1 && dy==0) || (dx==0 && dy==1))
		{
			$(prev).removeClass('sel');
			$(cur).addClass('visited sel');
			CheckMovePossible();
		}
		else
		{
			--count;
			alert('not neightbor');
		}	
	}

	$('.puzzle5box').click(function(){
		++count;
		// console.log(count);
		if((count%3) == (parseInt($(this).html())%3) &&  !($(this).hasClass('visited'))  )
		{
			if(count>1)
				CheckIsNeighbor($('.puzzle5box.sel')[0],this);
			else
			{
				$('.puzzle5box.sel').removeClass('sel');
				$(this).addClass('visited sel');
			}
		}
		else
		{
			alert('can only click in order 1..2...3 or it is already selected');
			--count;
		}	
	});

	function  lost()
	{
		alert('lost');
	}
	function win()
	{
		if(count==row*col)
			alert('win');
	}

}
puzzle5init();
