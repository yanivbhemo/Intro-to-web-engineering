(function() {
    var i, j, counter = 0;
    var box = ["box2", "box3"];
    
    var cube1 = document.createElement("div");
    cube1.className="box_small";
    var cube2 = document.createElement("div");
    cube2.className="box_small";
    var cube3 = document.createElement("div");
    cube3.className="box_small";
    var cube4 = document.createElement("div");
    cube4.className="box_small";
    var cube5 = document.createElement("div");
    cube5.className="box_small";
    var cube6 = document.createElement("div");
    cube6.className="box_small";
    var cube7 = document.createElement("div");
    cube7.className="box_small";
    var cube8 = document.createElement("div");
    cube8.className="box_small";
    var cube_arr = [cube1, cube2, cube3, cube4, cube5, cube6, cube7, cube8]
    
    var plus_but = document.getElementById('plus_area');
    plus_but.onclick = function() {
        if(counter == 0)
        {
            for(i=0;i<4;i++)
            {
                document.getElementById(box[0]).appendChild(cube_arr[i]);
            }
            counter++;
        }
        else
        {
            for(i=4;i<8;i++)
            {
                document.getElementById(box[1]).appendChild(cube_arr[i]);
            }
            counter--;
        }   
    };
})(); 
