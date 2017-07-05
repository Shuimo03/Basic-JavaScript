var count = 0;

function cc(card) {
  switch(card)
    {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        count+=1;
        break;
      case 7:
      case 8:
      case 9:
        count+=0;
        break;
      case 10:
      case 'J':
      case 'Q':
      case 'K':
      case 'Q':
      case 'K':
      case 'A':
        count-=1;
        break;
    }
  

  return count + (count > 0 ? " Bet" : " Hold");
}


cc(2); cc(3); cc(7); cc('K'); cc('A');

/*
根据下面的表格，每张卡牌都分配了一个值。如果卡牌的值大于0，那么玩家应该追加赌注。反之，追加少许赌注甚至不追加赌注。

Count Change	Cards
+1	2, 3, 4, 5, 6
0	7, 8, 9
-1	10, 'J', 'Q', 'K','A'
你需要写一个函数，实现21点算法，它根据参数 card的值来递增或递减变量count，函数返回一个由当前count和 "Bet"(count>0)或"Hold"(count<=0) 拼接的字符串。注意count和"Bet" 或 "Hold"应该用空格分开。

例如：
"-3 Hold"
"5 Bet"

提示
既然card的值为7、8、9时，count值不变，那我们就可以忽略这种情况。
*/
