function addUser()
{
    var player1_name = document.getElementById("player1_input").value;
    var player2_name = document.getElementById("player2_input").value;
    localStorage.setItem("Player 1" , player1_name);
    localStorage.setItem("Player 2" , player2_name);
    window.location = "index2.html";
}