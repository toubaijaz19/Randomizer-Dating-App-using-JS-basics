	
			// Our List of Boys
			var boys = [
				'Barry Allen',
				'Carter Jenkins',
				'Jasper',
				'Ji Chang Wook',
				'Niklaus Mikaelson',
				'Xiao Nai'
			];
			// List of boy images
			var imgBoy = new Array();

			imgBoy[0] = new Image();
			imgBoy[0].src = 'images/barry allen.png';

			imgBoy[1] = new Image();
			imgBoy[1].src = 'images/carter jenkins.png';

			imgBoy[2] = new Image();
			imgBoy[2].src = 'images/jasper.png';

			imgBoy[3] = new Image();
			imgBoy[3].src = 'images/Ji chang wook.png';

			imgBoy[4] = new Image();
			imgBoy[4].src = 'images/Niklaus Mikaelson.png';

			imgBoy[5] = new Image();
			imgBoy[5].src = 'images/xiao nai.png';

			/*------------------------------------*/

			// Our List of countries
			var country = [
				'Paris',
				'Turkey',
				'South Korea',
				'Dubai',
				'China',
				'Austrailia'
			];
			// List of country images
			var imgcountry = new Array();

			imgcountry[0] = new Image();
			imgcountry[0].src = 'images/paris.png';

			imgcountry[1] = new Image();
			imgcountry[1].src = 'images/turkey.png';

			imgcountry[2] = new Image();
			imgcountry[2].src = 'images/korea.png';

			imgcountry[3] = new Image();
			imgcountry[3].src = 'images/dubai.png';

			imgcountry[4] = new Image();
			imgcountry[4].src = 'images/china.png';

			imgcountry[5] = new Image();
			imgcountry[5].src = 'images/austrailia.png';


			/*------------------------------------*/

			var randomboy = Math.floor(Math.random()*boys.length);
			var randomcountry = Math.floor(Math.random()*country.length);
			
			var boyname = boys[randomboy];
			var countryname = country[randomcountry];

			var bname = document.getElementById('boyname');
			var cname = document.getElementById('countryname');

			// Javascript Function
			document.addEventListener("click", function(){
				// display h1 and images
				document.getElementById('suggestion').style.display = 'block';
				document.getElementById('images').style.display = 'flex';
				
				var randomboy = Math.floor(Math.random()*boys.length);
				var randomcountry = Math.floor(Math.random()*country.length);
				
				var boyname = boys[randomboy];
				var countryname = country[randomcountry];

				bname.innerText = `${boyname}` ;
				cname.innerText = `${countryname}` ;
				document.images.namedItem("boyimage").src = imgBoy[randomboy].src;
				document.images.namedItem("countryimage").src = imgcountry[randomcountry].src;
				
			});