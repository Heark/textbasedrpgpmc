/* 

 */

setFont( 'Comic Sans MS', 32, 'italic' )

// The code inside this do block is run each frame
$gc = getControls()
$start = False
$sit1 = False
$sit2 = False
def Game()
    $gc = getControls()
    $start = True
end
def sit1()
    $gc = getControls()
    $sit1 = True
end
onEachFrame() do
    fill( :red )
    setColor( :white )
    $music = new Sound('music.mp3')
    $music.play()
if $start == True && $sit1 = False
    setFont( 'Comic Sans MS', 22, 'italic' )
    fillText( 'You wake up and realise something isnt right', 295, 185, :center )
    if $gc.isKeyPressed([:space])
        sit1()
    if $sit1 == True && $sit2 = False
    onEachFrame() do
        fillText( 'Walk into the kitchen or bathroom?', 295, 185, :center )
        fillText( 'X: Kitchen Y: Bathroom', 395, 225, :center )
end
end
end 
end
if $gc.isKeyPressed([:space])
    Game()
end
if $start == False
    fillText( "Text Based Adventure", 10, 32 )
    fillText( "Press Space to start!", 100, 115 )
end
end
