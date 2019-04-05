let Lavascript;

window.onload = () => {
    import('/lavascript/lavascript.js').then((val) => {
        Lavascript = val.Lavascript
        let lavascript = new Lavascript(640, 480, 60, document.body);
        document.addEventListener('keydown', (e) => {
            if (e.keyCode === 32)
                lavascript.run_game();
        })
    });
}