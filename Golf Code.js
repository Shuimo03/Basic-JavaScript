function golfScore(par, strokes) {

  if (strokes === 1)
  {
    return "Hole-in-one!";
  } else if (strokes <= par - 2)
    
  {
    return "Eagle";
  } else if (strokes === par - 1) 
    
  {
    return "Birdie";
  } else if (strokes === par) 
    
  {
    return "Par";
  } else if (strokes === par + 1) 
    
  {
    return "Bogey";
  } else if (strokes === par + 2) 
    
  {
    return "Double Bogey";
    
  } else if (strokes >= par + 3) 
    
  {
    return "Go Home!";
  }
}
golfScore(5, 4);

/*
Golf Code
在高尔夫golf游戏中，每个洞都有自己的标准杆数par，代表着距离。根据你把球打进洞所挥杆的次数strokes，可以计算出你的高尔夫水平。

函数将会传送2个参数，分别是标准杆数par 和 挥杆次数strokes ，根据下面的表格返回正确的水平段位。

Strokes	Return
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!"
par 和 strokes 必须是数字而且是正数。
*/
