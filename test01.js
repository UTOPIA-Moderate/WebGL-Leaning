function main() {
    let canvas = document.getElementById('example-test01')
    // if(!canvas){
    //     console.log("Failed to retrieve the canvas Element")
    //     return
    // }

    // let ctx = canvas.getContext('2d')
    // ctx.fillStyle = 'rgba(0,0,255,1.0)'
    // ctx.fillRect(120,10,150,150)

    let ctx = getWebGLContext(canvas)
    if(!ctx){
        console.log('Failed to get the rendering context for WebGL')
        return
    }
    ctx.clearColor(0.0,0.0,0.0, 1.0)
    ctx.clear(ctx.COLOR_BUFFER_BIT)
}
