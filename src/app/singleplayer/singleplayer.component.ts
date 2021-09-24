import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singleplayer',
  templateUrl: './singleplayer.component.html',
  styleUrls: ['./singleplayer.component.css']
})
export class SingleplayerComponent implements OnInit {


  public chance: string = "Player X Will Move first";
  public winner: string = " "
  squares: any[] = new Array(10).fill(null);
  count:number = 0;
  On:number = 0;
  public Btn_1: boolean = false;
  public Btn_2: boolean = false;
  public Btn_3: boolean = false;
  public Btn_4: boolean = false;
  public Btn_5: boolean = false;
  public Btn_6: boolean = false;
  public Btn_7: boolean = false;
  public Btn_8: boolean = false;
  public Btn_9: boolean = false;
  public block1 = " 1";
  public block2 = " 2";
  public block3 = " 3";
  public block4 = " 4";
  public block5 = " 5";
  public block6 = " 6";
  public block7 = " 7";
  public block8 = " 8";
  public block9 = " 9";
  btn_style1 = "normal";
  btn_style2 = "normal";
  btn_style3 = "normal";
  btn_style4 = "normal";
  btn_style5 = "normal";
  btn_style6 = "normal";
  btn_style7 = "normal";
  btn_style8 = "normal";
  btn_style9 = "normal";
  n:number | undefined;
  Restart: boolean = false;
  names1 = "names";
  public player1:boolean = true;
  public player2:boolean = false;
  public start:boolean = true;
  public username1: string = "";
  fill: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  next()
  {
    if(this.username1 == "")
    {
      this.fill = true;
      return;
    }
    this.player1 = false;
    this.fill = false;
    this.start = false;
  }

  choose()
  {
    let n = Math.floor(Math.random() * this.squares.length);
    while(this.squares[n]!==null || n===9)
    {
      n = Math.floor(Math.random() * this.squares.length)
    }
    console.log(n);
    return n;
  }

  style(index:any)
  {
    if(index==0)
    {
      this.btn_style1 = "win";
      this.btn_style2 = "win";
      this.btn_style3 = "win";
    }
    else if(index==1)
    {
      this.btn_style4 = "win";
      this.btn_style5 = "win";
      this.btn_style6 = "win";
    }
    else if(index==2)
    {
      this.btn_style7 = "win";
      this.btn_style8 = "win";
      this.btn_style9 = "win";
    }
    else if(index==3)
    {
      this.btn_style1 = "win";
      this.btn_style4 = "win";
      this.btn_style7 = "win";
    }
    else if(index==4)
    {
      this.btn_style2 = "win";
      this.btn_style5 = "win";
      this.btn_style8 = "win";
    }
    else if(index==5)
    {
      this.btn_style3 = "win";
      this.btn_style6 = "win";
      this.btn_style9 = "win";
    }
    else if(index==6)
    {
      this.btn_style1 = "win";
      this.btn_style5 = "win";
      this.btn_style9 = "win";
    }
    else if(index==7)
    {
      this.btn_style3 = "win";
      this.btn_style5 = "win";
      this.btn_style7 = "win";
    }
  }

  new_game()
  {
    window.location.reload(true);
  }

  Check()
  {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    for(let i=0;i<lines.length;++i)
    {
      const [a,b,c] = lines[i];
      if(this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c])
      {
        this.Restart = true;
        this.style(i);
        this.Btn_1 = true;
        this.Btn_2 = true;
        this.Btn_3 = true;
        this.Btn_4 = true;
        this.Btn_5 = true;
        this.Btn_6 = true;
        this.Btn_7 = true;
        this.Btn_8 = true;
        this.Btn_9 = true;
        if(this.squares[a]=='X')
        {
          return this.username1
        }
        return this.squares[a];
      }
    }
    return false;
  }

  CpuMove()
  {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    for(let i=0;i<lines.length;++i)
    {
      const [a,b,c] = lines[i];
      if(this.squares[a]==this.squares[b] && this.squares[c]==null && this.squares[a] != null)
      {
        return c;
      }
      else if(this.squares[a]==this.squares[c] && this.squares[b]==null && this.squares[a] != null)
      {
        return b;
      }
      else if(this.squares[b]==this.squares[c] && this.squares[a]==null && this.squares[b] != null)
      {
        return a;
      }
    }

    console.log('false');
    return this.choose();
  }

  Cpu_move()
  {
    setTimeout( () => 
    {
      this.n = this.CpuMove();
      if(this.n===0)
      {
        this.squares[this.n] = 'O';
        this.count++;
        this.block1 = 'O'
        this.chance = `Player ${this.username1} (X)`;
        this.btn_style1 = "onclickO"; 
        this.Btn_1 = true;
      }

      else if(this.n===1)
      {
        this.squares[this.n] = 'O';
        this.count++;
        this.block2 = 'O'
        this.chance = `Player ${this.username1} (X)`;
        this.btn_style2 = "onclickO"; 
        this.Btn_2 = true;
      }
      else if(this.n===2)
      {
        this.squares[this.n] = 'O';
        this.count++;
        this.block3 = 'O'
        this.chance = `Player ${this.username1} (X)`;
        this.btn_style3 = "onclickO";
        this.Btn_3 = true; 
      }
      else if(this.n===3)
      {
        this.squares[this.n] = 'O';
        this.count++;
        this.block4 = 'O'
        this.chance = `Player ${this.username1} (X)`;
        this.btn_style4 = "onclickO"; 
        this.Btn_4 = true;
      }
      else if(this.n===4)
      {
        this.squares[this.n] = 'O';
        this.count++;
        this.block5 = 'O'
        this.chance = `Player ${this.username1} (X)`;
        this.btn_style5 = "onclickO"; 
        this.Btn_5 = true;
      }
      else if(this.n===5)
      {
        this.squares[this.n] = 'O';
        this.count++;
        this.block6 = 'O'
        this.chance = `Player ${this.username1} (X)`;
        this.btn_style6 = "onclickO"; 
        this.Btn_6 = true;
      }
      else if(this.n===6)
      {
        this.squares[this.n] = 'O';
        this.count++;
        this.block7 = 'O'
        this.chance = `Player ${this.username1} (X)`;
        this.btn_style7 = "onclickO"; 
        this.Btn_7 = true;
      }
      else if(this.n===7)
      {
        this.squares[this.n] = 'O';
        this.count++;
        this.block8 = 'O'
        this.chance = `Player ${this.username1} (X)`;
        this.btn_style8 = "onclickO";
        this.Btn_8 = true; 
      }
      else if(this.n===8)
      {
        this.squares[this.n] = 'O';
        this.count++;
        this.block9 = 'O'
        this.chance = `Player ${this.username1} (X)`;
        this.btn_style9 = "onclickO"; 
        this.Btn_9 = true;
      }
      if(this.Check())
      {
        this.winner = "Player O Won";
      }
    }, 500);
  }

  btn1()
  {
    this.On = 0;
    if(this.squares[this.On]===null){
      this.squares[this.On] = 'X';
      this.count++;
      this.block1 = 'X'
      this.chance = "Player O";
      this.btn_style1 = "onclickX";
      this.Btn_1 = true;
      if(this.Check())
      {
        this.winner = `Player ${this.username1} won`;
      }
    }

    if(!this.Check())
    {
      this.Cpu_move();
    }

    if(this.count===9)
    {
      if(this.Check())
      {
        this.winner = `Player ${this.Check()} Won`;
      }
      else
      {
        this.winner = "Game is Draw";
        this.Restart = true;
      }
    }
    
  }

  btn2()
  {
    this.On = 1;
    if(this.squares[this.On]===null){
      this.squares[this.On] = 'X';
      this.count++;
      this.block2 = 'X'
      this.chance = "Player O";
      this.btn_style2 = "onclickX";
      this.Btn_2 = true;
      if(this.Check())
      {
        this.winner = `Player ${this.username1} won`;
      }
    }
    if(!this.Check())
    {
      this.Cpu_move();
    }

    if(this.count===9)
    {
      if(this.Check())
      {
        this.winner = `Player ${this.Check()} Won`;
      }
      else
      {
        this.winner = "Game is Draw";
        this.Restart = true;
      }
    }
  }

  btn3()
  {
    this.On = 2;
    if(this.squares[this.On]===null){
      this.squares[this.On] = 'X';
      this.count++;
      this.block3 = 'X'
      this.chance = "Player O";
      this.btn_style3 = "onclickX";
      this.Btn_3 = true;
      if(this.Check())
      {
        this.winner = `Player ${this.username1} won`;
      }
    }
    if(!this.Check())
    {
      this.Cpu_move();
    }

    if(this.count===9)
    {
      if(this.Check())
      {
        this.winner = `Player ${this.Check()} Won`;
      }
      else
      {
        this.winner = "Game is Draw";
        this.Restart = true;
      }
    }
  }

  btn4()
  {
    this.On = 3;
    if(this.squares[this.On]===null){
      this.squares[this.On] = 'X';
      this.count++;
      this.block4 = 'X'
      this.chance = "Player O";
      this.btn_style4 = "onclickX";
      this.Btn_4 = true;
      if(this.Check())
      {
        this.winner = `Player ${this.username1} won`;
      }
    }
    if(!this.Check())
    {
      this.Cpu_move();
    }
    if(this.count===9)
    {
      if(this.Check())
      {
        this.winner = `Player ${this.Check()} Won`;
      }
      else
      {
        this.winner = "Game is Draw";
        this.Restart = true;
      }
    }
  }

  btn5()
  {
    this.On = 4;
    if(this.squares[this.On]===null){
      this.squares[this.On] = 'X';
      this.count++;
      this.block5 = 'X'
      this.chance = "Player O";
      this.btn_style5 = "onclickX";
      this.Btn_5 = true;
      if(this.Check())
      {
        this.winner = `Player ${this.username1} won`;
      }
    }
    if(!this.Check())
    {
      this.Cpu_move();
    }
    if(this.count===9)
    {
      if(this.Check())
      {
        this.winner = `Player ${this.Check()} Won`;
      }
      else
      {
        this.winner = "Game is Draw";
        this.Restart = true;
      }
    }
  }

  btn6()
  {
    this.On = 5;
    if(this.squares[this.On]===null){
      this.squares[this.On] = 'X';
      this.count++;
      this.block6 = 'X'
      this.chance = "Player O";
      this.btn_style6 = "onclickX";
      this.Btn_6 = true;
      if(this.Check())
      {
        this.winner = `Player ${this.username1} won`;
      }
    }
    if(!this.Check())
    {
      this.Cpu_move();
    }
    if(this.count===9)
    {
      if(this.Check())
      {
        this.winner = `Player ${this.Check()} Won`;
      }
      else
      {
        this.winner = "Game is Draw";
        this.Restart = true;
      }
    }
  }

  btn7()
  {
    this.On = 6;
    if(this.squares[this.On]===null){
      this.squares[this.On] = 'X';
      this.count++;
      this.block7 = 'X'
      this.chance = "Player O";
      this.btn_style7 = "onclickX";
      this.Btn_7 = true;
      if(this.Check())
      {
        this.winner = `Player ${this.username1} won`;
      }
    }
    if(!this.Check())
    {
      this.Cpu_move();
    }
    if(this.count===9)
    {
      if(this.Check())
      {
        this.winner = `Player ${this.Check()} Won`;
      }
      else
      {
        this.winner = "Game is Draw";
        this.Restart = true;
      }
    }
  }

  btn8()
  {
    this.On = 7;
    if(this.squares[this.On]===null){
      this.squares[this.On] = 'X';
      this.count++;
      this.block8 = 'X'
      this.chance = "Player O";
      this.btn_style8 = "onclickX";
      this.Btn_8 = true;
      if(this.Check())
      {
        this.winner = `Player ${this.username1} won`;
      }
    }
    if(!this.Check())
    {
      this.Cpu_move();
    }
    if(this.count===9)
    {
      if(this.Check())
      {
        this.winner = `Player ${this.Check()} Won`;
      }
      else
      {
        this.winner = "Game is Draw";
        this.Restart = true;
      }
    }
  }

  btn9()
  {
    this.On = 8;
    if(this.squares[this.On]===null){
      this.squares[this.On] = 'X';
      this.count++;
      this.block9 = 'X'
      this.chance = "Player O";
      this.btn_style9 = "onclickX";
      this.Btn_9 = true;
      if(this.Check())
      {
        this.winner = `Player ${this.username1} won`;
      }
    }
    if(!this.Check())
    {
      this.Cpu_move();
    }
    if(this.count===9)
    {
      if(this.Check())
      {
        this.winner = `Player ${this.Check()} Won`;
      }
      else
      {
        this.winner = "Game is Draw";
        this.Restart = true;
      }
    }
  }
}
