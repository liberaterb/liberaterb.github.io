const secondLength = 100 * 0.9
const minuteLength = 100 * 0.7
const hourLength = 100 * 0.5

Vue.component('clock', {
    data() {
        return {
            name: '123',
            clock: undefined,
        }
    },
    template: '<canvas ref="clock" width="200" height="200" style="border: 1px solid black;">CLOCK</canvas>',
    methods: {
        drawLogo() {
            const logo = this.$refs.logo
            let context = logo.getContext("2d");
            context.fillStyle = "#ff0000";
            context.fillRect(10, 10, 50, 50);
            // 绘制半透明蓝色矩形
            context.fillStyle = "rgba(0,0,255,0.5)";
            context.fillRect(30, 30, 50, 50);
        },
        initClock() {
            this.drawClock()
            setInterval(() => { this.drawClock() }, 1000)
        },
        drawClock() {
            let context = this.clock.getContext("2d");
            context.clearRect(0, 0, 200, 200)
            context.beginPath()
            context.arc(100, 100, 99, 0, 2 * Math.PI, false);
            context.moveTo(194, 100);
            context.arc(100, 100, 94, 0, 2 * Math.PI, false);

            this.drawTime(context, hourLength, 'h')
            this.drawTime(context, minuteLength, 'm')
            this.drawTime(context, secondLength, 's')

            context.stroke();
        },
        drawTime(context, length, type) {
            const date = new Date()
            const hour = date.getHours()
            const angle_12 = (hour > 12 ? (hour - 12) : hour) / 12
            context.moveTo(100, 100)
            let angle
            let x, y
            switch (type) {
                case 'h':
                    angle = angle_12 * 360 + angle_12 * (360 / 12)
                    break;
                case 'm':
                    angle = (date.getMinutes() / 60) * 360
                    break;
                case 's':
                    angle = (date.getSeconds() / 60) * 360
                    break;
            }

            if (angle <= 90) {
                x = 100 + length * Math.sin(angle * Math.PI / 180)
                y = 100 - length * Math.cos(angle * Math.PI / 180)
            } else if (90 < angle <= 180) {
                x = 100 + length * Math.sin((180 - angle) * Math.PI / 180)
                y = 100 + length * Math.cos((180 - angle) * Math.PI / 180)
            } else if (180 < angle <= 270) {
                x = 100 - length * Math.sin((angle - 180) * Math.PI / 180)
                y = 100 + length * Math.sin((angle - 180) * Math.PI / 180)
            } else if (270 < angle <= 360) {
                x = 100 - length * Math.sin((360 - angle) * Math.PI / 180)
                y = 100 - length * Math.sin((360 - angle) * Math.PI / 180)
            }
            context.lineTo(x, y)
        }
    }, mounted() {
        this.clock = this.$refs.clock
        this.initClock()
    },
})