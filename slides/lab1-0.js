JSON OBJECTS

name value pairs:


***************
  flower = {
    name: "sunflower",
    height: 100,
    width: 5,
    season: "summer"
  }

  function setup() {

    createCanvas(400, 400);
  }

  function draw() {

    rect(100, 0, flower.width, flower.height);
    text(flower.name, 10, 50);

  }

******************

- create a file called flower.JSON
- no code, just data that can be loaded into a JS object.
- put property names in quotes. 
- its an object
- it's a list of key value pairs.
- can get WAY complex

{
    "name": "sunflower",
    "height": 100,
    "width": 5,
    "season": "summer"
  }

--> flower.JSON

******************


--> put it in the p5 editor.
--> JSON validation
- loadJSON(); (same as loadImage, loadSound, loadTable)
- remember that Javascript is always asynchonous
- you need to enforce that the data is loaded before we use it. 


JSON - corpora - https://github.com/dariusk/corpora
******************

{birds:[
	{"name":"penguin",
	"height": 1
},
{"name": "eagle",
"height":3
}

	]
	}

}
}
******************

{
	"birds": [{
			"name": "penguin",
			"height": 1
		}, {
			"name": "eagle",
			"height": 3
		}

	]
}

* data.birds[1].height (this is the path into this json file)

