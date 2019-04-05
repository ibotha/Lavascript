export function Lavascript(width, height, fps, parent, game) {

    this.canvas = document.createElement("canvas");
    this.height = this.canvas.height = height;
    this.width = this.canvas.width = width;
    this.parent = parent;
    this.context = this.canvas.getContext('2d');
    this.context.font = "20px Georgia";
    this.context.width = this.width;
    this.context.height = this.height;
    this.runing = false;

    this.pressed = {};
    this.t1 = null;
    this.t2 = null;
    this.fps = fps;
    this.mspf = (1 / fps) * 1000;

    document.addEventListener("keydown", (e) => {
        this.pressed[e.keyCode] = true;
    })

    document.addEventListener("keyup", (e) => {
        delete this.pressed[e.keyCode];
    })

    this.parent.appendChild(this.canvas);

    this.run_game = async () => {
        if (!this.runing) {
            this.runing = true
            this.main_loop()
        }
    }

    this.main_loop = async () => {
        this.t1 = await Date.now()
        await this.process_input()
        await this.update()
        await this.render()
        this.t2 = await Date.now()
        if (!this.pressed[27]) {
            window.setTimeout((this.main_loop), Math.max(2, this.mspf - (this.t2 - this.t1)))
        } else {
            this.runing = false
        }
    }

    this.process_input = () => {
        //add listeners here
    }

    this.update = () => {
        //update gamestate
    }

    this.render = () => {
        //draw to canvas
        this.context.clearRect(0, 0, this.width, this.height);
        this.context.beginPath();
        this.context.rect(40, 10, 20, 20);
        this.context.stroke();
        if (this.pressed[38])
            this.context.fill();

        this.context.beginPath();
        this.context.rect(10, 40, 20, 20);
        this.context.stroke();
        if (this.pressed[37])
            this.context.fill();

        this.context.beginPath();
        this.context.rect(40, 40, 20, 20);
        this.context.stroke();
        if (this.pressed[40])
            this.context.fill();

        this.context.beginPath();
        this.context.rect(70, 40, 20, 20);
        this.context.stroke();
        if (this.pressed[39])
            this.context.fill();
        console.log(this.pressed)
    }
}