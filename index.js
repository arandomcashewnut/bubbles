const canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var c = canvas.getContext('2d')


colors = ['#B8336A', '#726DA8', '#7D8CC4', '#A0D2DB', 'C490D1']

function Circle(x, y, radius, dx, dy) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.color = colors[Math.floor(Math.random() * colors.length)]

    this.draw = () => {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        c.strokeStyle = this.color
        c.stroke()
        // c.fillStyle = this.color
        // c.fill()
    }

    this.update = () => {
        this.x += this.dx
        this.y += this.dy
        if (this.x > canvas.width - this.radius || this.x < this.radius ) {
            this.dx = -this.dx
        }
        if (this.y > canvas.height - this.radius || this.y < this.radius ) {
            this.dy = -this.dy
        }

        this.draw()
    }
}

minRadius = 30
maxRadius = 30
maxSpeedX = 1
maxSpeedY = 1
numOfCircles = 50

let circleArray = []

for (i = 0; i < numOfCircles; i++) {
    radius = minRadius + Math.random() * (maxRadius - minRadius)
    x = radius + Math.random() * (window.innerWidth - 2 * radius)
    y = radius + Math.random() * (window.innerHeight - 2 * radius)
    dx = ( -0.5 + Math.random() ) * 2 * maxSpeedX
    dy = ( -0.5 + Math.random() ) * 2 * maxSpeedY
    circleArray.push(new Circle(x, y, radius, dx, dy))
}

function animate() {
    requestAnimationFrame(animate)
    // c.fillStyle = 'rgba(255, 255, 255, 0.1)'
    // c.fillRect (0, 0, innerWidth, innerHeight)
    c.clearRect (0, 0, innerWidth, innerHeight)

    for (i = 0; i < circleArray.length; i++) {
        circleArray[i].update()
    }
    
}

animate()