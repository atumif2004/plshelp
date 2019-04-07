    
    



    var money = parseInt(prompt("Ваш бюджет на месяц?"));
    var time = prompt("Введите дату в формате YYYY-MM-DD");
    
    var stat = prompt("Введите обязательную статью расходов в этом месяце");
    var price = parseInt(prompt("Во сколько обойдется?"));

    var stat2 = prompt("Введите обязательную статью расходов в этом месяце");
    var price2 = parseInt(prompt("Во сколько обойдется?"));

   
 
    var expenses = {
    stat : price,
    stat2 : price2
    }
 
     var AppData = {
        budjet: money,
        timeData: time,
        expenses,
        optionalExpenses:"",
        income: " ",
        savings:false
        
    }

 
    var budD=money-(price+price2);
 
    alert("Бюджет на один день= "+budD/30+ " руб");

 