 var turn = 0;
 function AppendDisplay(input)
 {
      const button = document.getElementById(input);

      if (button.innerHTML == '' && CheckWin() == 0)
      {
         if (turn == 0)
         {
            button.innerHTML = "X";
         }
         else
         {
            button.innerHTML = "O";
         }

         if (turn == 0)
         {
            turn = 1;
         }
         else
         {
            turn = 0;
         }
      }

      const h1 = document.getElementById("h1");

      if (CheckWin() == "D")
      {
         h1.innerHTML = "Draw";
      }
      else if (CheckWin() == "O")
      {
         h1.innerHTML = "O Wins";
      }
      else if (CheckWin() == "X")
      {
         h1.innerHTML = "X Wins";
      }

      console.log(CheckWin());

 }

function CheckWin()
{
   const button1 = document.getElementById("1");
   const button2 = document.getElementById("2");
   const button3 = document.getElementById("3");
   const button4 = document.getElementById("4");
   const button5 = document.getElementById("5");
   const button6 = document.getElementById("6");
   const button7 = document.getElementById("7");
   const button8 = document.getElementById("8");
   const button9 = document.getElementById("9");

   if (button1.innerHTML == "X" && button2.innerHTML == "X" && button3.innerHTML == "X")
      {
         return "X";
      }
      else if (button4.innerHTML == "X" && button5.innerHTML == "X" && button6.innerHTML == "X")
      {
         return "X";
      }
      else if (button7.innerHTML == "X" && button8.innerHTML == "X" && button9.innerHTML == "X")
      {
         return "X"
      }
      else if (button1.innerHTML == "X" && button4.innerHTML == "X" && button7.innerHTML == "X")
      {
         return "X";
      }
      else if (button2.innerHTML == "X" && button5.innerHTML == "X" && button8.innerHTML == "X")
         {
            return "X";
         }
      else if (button3.innerHTML == "X" && button6.innerHTML == "X" && button9.innerHTML == "X")
         {
            return "X";
         }
      else if (button1.innerHTML == "X" && button5.innerHTML == "X" && button9.innerHTML == "X")
         {
            return "X";
         }
      else if (button3.innerHTML == "X" && button5.innerHTML == "X" && button7.innerHTML == "X")
      {
            return "X";
      }


   if (button1.innerHTML == "O" && button2.innerHTML == "O" && button3.innerHTML == "O")
      {
         return "O";
      }
      else if (button4.innerHTML == "O" && button5.innerHTML == "O" && button6.innerHTML == "O")
      {
         return "O";
      }
      else if (button7.innerHTML == "O" && button8.innerHTML == "O" && button9.innerHTML == "O")
      {
         return "O"
      }
      else if (button1.innerHTML == "O" && button4.innerHTML == "O" && button7.innerHTML == "O")
      {
         return "O";
      }
      else if (button2.innerHTML == "O" && button5.innerHTML == "O" && button8.innerHTML == "O")
         {
            return "O";
         }
      else if (button3.innerHTML == "O" && button6.innerHTML == "O" && button9.innerHTML == "O")
         {
            return "O";
         }
      else if (button1.innerHTML == "O" && button5.innerHTML == "O" && button9.innerHTML == "O")
         {
            return "O";
         }
      else if (button3.innerHTML == "O" && button5.innerHTML == "O" && button7.innerHTML == "O")
      {
            return "O";
      }
   
      var flag = 0;
      for (let i = 1; i < 10; i++)
      {
         if (document.getElementById(i.toString()).innerHTML == '')
         {
            flag = 1;
         }
      }

      if (flag == 0)
      {
         return "D";
      }

      return 0;
}