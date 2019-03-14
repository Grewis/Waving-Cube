let angle = 0;
let w = 20
let h = 20;
let ma = atan(1 / sqrt(2));

function setup() {
	createCanvas(400,400, WEBGL)
	rotateX((radians(50)));
}

function draw() {
	background(255)
	ortho(-300, 300, -300, 300, -1000, 1000); 
	//translate(width / 2, height / 2);
	rotateX((radians(-30)));
	rotateY((radians(-45)));
	let maxD = dist(0, 0, 200, 200);
	directionalLight(504, 504, 504, 0, 0, 0);



	for (let z = 0; z < height; z += h) {
		for (let x = 0; x < width; x += w) {
			push();
			let d = dist(x,z,width/2, height/2);
			let offset = map (d, 0, maxD, -3, 3);
			let a = angle - offset;
			let h = map(sin(a), -1, 1, 100, 300);
			translate(x - width / 2, 0, z - height / 2);
			normalMaterial();
			box(w - 2, h, w - 2);
			//rect(x - width / 2 + w / 2, 0,  w - 2, h);
			pop();
		}
	}

	angle += 0.04;
}