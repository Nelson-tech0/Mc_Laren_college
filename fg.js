function flipGrid(grid){
      for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
         if(grid[i][j])
          grid[i][j] = false
         else
          grid[i][j] = true
        }
      }
      return grid
    }
    let grid = [[true,false,false,true],
                [false,false,true,true],
                [true,true,true,true],
                [false,false,false,false]];
    console.log(flipGrid(grid));
    /*
    should print
    [[false,true,true,false],
     [true,true,false,false],
     [false,false,false,false],
     [true,true,true,true]]);
    */