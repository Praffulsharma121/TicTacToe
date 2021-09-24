import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit 
{
  public chance: string = `Player X Will Move first`;
  public winner: string = " "
  squares: any[] = new Array(10).fill(null);
  count:number = 0;
  On:number = 0;
  public Over: boolean = false;
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
  names1 = "names";
  Restart: boolean = false;
  public player1:boolean = true;
  public player2:boolean = false;
  public start:boolean = true;
  public username1: string = "";
  public username2: string = "";
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
    this.player2 = true;
    this.fill = false;
    this.names1 = "name";
  }

  play()
  {
    if(this.username2 == "")
    {
      this.fill = true;
      return;
    }
    this.player2 = false;
    this.start = false;
    this.fill = false;
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
        this.Over = true;
        console.log(`the winner is ${this.squares[a]} at index ${this.On}`);
        this.style(i);
        if(this.squares[a]=='X')
          return this.username1;
        return this.username2;
      }
    }
    return false;
  }

  new_game()
  {
    window.location.reload(true);
  }

  btn1()
  {
    this.On = 0;
    if(this.count%2===0 && this.squares[this.On]===null){
      this.squares[this.On] = 'X';
      this.count++;
      this.block1 = 'X'
      this.chance = `Player ${this.username2} (O)`;
      this.btn_style1 = "onclickX";
      if(this.Check())
      {
        this.winner = `Player ${this.username1} Won`;
      }
    }
    else if(this.count%2!==0 && this.squares[this.On]===null){
      this.squares[this.On] = 'O';
      this.count++;
      this.block1 = 'O'
      this.chance = `Player ${this.username1} (X)`;
      this.btn_style1 = "onclickO";
      if(this.Check())
      {
        this.winner = `Player ${this.username2} Won`;
      }
    }
    console.log(this.squares[this.On], this.On);
    if(this.count===9)
    {
      if(this.Check())
      {
        this.winner = `Player ${this.Check()} Won`;
      }
      else
      {
        this.winner = "Game is Draw";
      }
      this.Restart = true;
    }
    
  }
  btn2()
  {
    this.On = 1;
    if(this.count%2===0 && this.squares[this.On]===null){
      this.squares[this.On] = 'X';
      this.count++;
      this.block2 = 'X';
      this.chance = `Player ${this.username2} (O)`;
      this.btn_style2 = "onclickX";

      if(this.Check())
      {
        this.winner = `Player ${this.Check()} Won`;
      }
    }
    else if(this.count%2!==0 && this.squares[this.On]===null){
      this.squares[this.On] = 'O';
      this.count++;
      this.block2 = 'O';
      this.chance = `Player ${this.username1} (X)`;
      this.btn_style2 = "onclickO";
      if(this.Check())
      {
        this.winner = `Player ${this.Check()} Won`;
      }
    }
    console.log(this.squares[this.On], this.On);
    if(this.count===9)
    {
      if(this.Check())
      {
        this.winner = `Player ${this.Check()} Won`;
      }
      else
      {
        this.winner = "Game is Draw";
      }
      this.Restart = true;
    }
  }
  btn3()
  {
    this.On = 2;
    if(this.count%2===0 && this.squares[this.On]===null){
      this.squares[this.On] = 'X';
      this.count++;
      this.block3 = 'X';
      this.chance = `Player ${this.username2} (O)`;
      this.btn_style3 = "onclickX";
      if(this.Check())
      {
        this.winner = `Player ${this.Check()} Won`;
      }
    }
    else if(this.count%2!==0 && this.squares[this.On]===null){
      this.squares[this.On] = 'O';
      this.count++;
      this.block3 = 'O';
      this.chance = `Player ${this.username1} (X)`;
      this.btn_style3 = "onclickO";
      if(this.Check())
      {
        this.winner = `Player ${this.Check()} Won`;
      }
    }
    console.log(this.squares[this.On], this.On);
    if(this.count===9)
    {
      if(this.Check())
      {
        this.winner = `Player ${this.Check()} Won`;
      }
      else
      {
        this.winner = "Game is Draw";
      }
      this.Restart = true;
    }
  }
  btn4()
  {
    this.On = 3;
    if(this.count%2===0 && this.squares[this.On]===null){
      this.squares[this.On] = 'X';
      this.count++;
      this.block4 = 'X';
      this.chance = `Player ${this.username2} (O)`;
      this.btn_style4 = "onclickX";
      if(this.Check())
      {
        this.winner = `Player ${this.Check()} Won`;
      }
    }
    else if(this.count%2!==0 && this.squares[this.On]===null){
      this.squares[this.On] = 'O';
      this.count++;
      this.block4 = 'O';
      this.chance = `Player ${this.username1} (X)`;
      this.btn_style4 = "onclickO";
      if(this.Check())
      {
        this.winner = `Player ${this.Check()} Won`;
      }
    }
    console.log(this.squares[this.On], this.On);
    if(this.count===9)
    {
      if(this.Check())
      {
        this.winner = `Player ${this.Check()} Won`;
      }
      else
      {
        this.winner = "Game is Draw";
      }
      this.Restart = true;
    }
  }
  btn5()
  {
    this.On = 4;
    if(this.count%2===0 && this.squares[this.On]===null){
      this.squares[this.On] = 'X';
      this.count++;
      this.block5 = 'X';
      this.chance = `Player ${this.username2} (O)`;
      this.btn_style5 = "onclickX";
      if(this.Check())
      {
        this.winner = `Player ${this.Check()} Won`;
      }
    }
    else if(this.count%2!==0 && this.squares[this.On]===null){
      this.squares[this.On] = 'O';
      this.count++;
      this.block5 = 'O';
      this.chance = `Player ${this.username1} (X)`;
      this.btn_style5 = "onclickO";
      if(this.Check())
      {
        this.winner = `Player ${this.Check()} Won`;
      }
    }
    console.log(this.squares[this.On], this.On);
    if(this.count===9)
    {
      if(this.Check())
      {
        this.winner = `Player ${this.Check()} Won`;
      }
      else
      {
        this.winner = "Game is Draw";
      }
      this.Restart = true;
    }
  }
  btn6()
  {
    this.On = 5;
    if(this.count%2===0 && this.squares[this.On]===null){
      this.squares[this.On] = 'X';
      this.count++;
      this.block6 = 'X';
      this.chance = `Player ${this.username2} (O)`;
      this.btn_style6 = "onclickX";
      if(this.Check())
      {
        this.winner = `Player ${this.Check()} Won`;
      }
    }
    else if(this.count%2!==0 && this.squares[this.On]===null){
      this.squares[this.On] = 'O';
      this.count++;
      this.block6 = 'O';
      this.chance = `Player ${this.username1} (X)`;
      this.btn_style6 = "onclickO";
      if(this.Check())
      {
        this.winner = `Player ${this.Check()} Won`;
      }
    }
    console.log(this.squares[this.On], this.On);
    if(this.count===9)
    {
      if(this.Check())
      {
        this.winner = `Player ${this.Check()} Won`;
      }
      else
      {
        this.winner = "Game is Draw";
      }
      this.Restart = true;
    }
  }
  btn7()
  {
    this.On = 6;
    if(this.count%2===0 && this.squares[this.On]===null){
      this.squares[this.On] = 'X';
      this.count++;
      this.block7 = 'X';
      this.chance = `Player ${this.username2} (O)`;
      this.btn_style7 = "onclickX";
      if(this.Check())
      {
        this.winner = `Player ${this.Check()} Won`;
      }
    }
    else if(this.count%2!==0 && this.squares[this.On]===null){
      this.squares[this.On] = 'O';
      this.count++;
      this.block7 = 'O';
      this.chance = `Player ${this.username1} (O)`;
      this.btn_style7 = "onclickO";
      if(this.Check())
      {
        this.winner = `Player ${this.Check()} Won`;
      }
    }
    console.log(this.squares[this.On], this.On);
    if(this.count===9)
    {
      if(this.Check())
      {
        this.winner = `Player ${this.Check()} Won`;
      }
      else
      {
        this.winner = "Game is Draw";
      }
      this.Restart = true;
    }
  }
  btn8()
  {
    this.On = 7;
    if(this.count%2===0 && this.squares[this.On]===null){
      this.squares[this.On] = 'X';
      this.count++;
      this.block8 = 'X';
      this.chance = `Player ${this.username2} (O)`;
      this.btn_style8 = "onclickX";
      if(this.Check())
      {
        this.winner = `Player ${this.Check()} Won`;
      }
    }
    else if(this.count%2!==0 && this.squares[this.On]===null){
      this.squares[this.On] = 'O';
      this.count++;
      this.block8 = 'O';
      this.chance = `Player ${this.username1} (X)`;
      this.btn_style8 = "onclickO";
      if(this.Check())
      {
        this.winner = `Player ${this.Check()} Won`;
      }
    }
    console.log(this.squares[this.On], this.On);
    if(this.count===9)
    {
      if(this.Check())
      {
        this.winner = `Player ${this.Check()} Won`;
      }
      else
      {
        this.winner = "Game is Draw";
      }
      this.Restart = true;
    }
  }
  btn9()
  {
    this.On = 8;
    if(this.count%2===0 && this.squares[this.On]===null){
      this.squares[this.On] = 'X';
      this.count++;
      this.block9 = 'X';
      this.chance = `Player ${this.username2} (O)`;
      this.btn_style9 = "onclickX";
      if(this.Check())
      {
        this.winner = `Player ${this.Check()} Won`;
      }
    }
    else if(this.count%2!==0 && this.squares[this.On]===null){
      this.squares[this.On] = 'O';
      this.count++;
      this.block9 = 'O';
      this.chance = `Player ${this.username1} (X)`;
      this.btn_style9 = "onclickO";
      if(this.Check())
      {
        this.winner = `Player ${this.Check()} Won`;
      }
    }
    console.log(this.squares[this.On], this.On);
    if(this.count===9)
    {
      if(this.Check())
      {
        this.winner = `Player ${this.Check()} Won`;
      }
      else
      {
        this.winner = "Game is Draw";
      }
      this.Restart = true;
    }
  }

}
