// ===============light and dark mode switching=================//
const navthemeButton = document.querySelector(".navtheme_button");

navthemeButton.addEventListener('click', () =>{
    const body =document.body;

    if(body.className ==""){
        body.className ="dark"
        navthemeButton.innerHTML = `<i class="uil uil-sun"></i>`

    }
    else{
        body.className = ""
        navthemeButton.innerHTML = `<i class="uil uil-moon-eclipse"></i>`
        
    }
}
)
//===========Mobile device open and close side bar bottom=======================/


const sidebaropenBtn = document.querySelector(".sidebar_toggle_open");
const sidebarCloseBtn =document.querySelector(".sidebar_toggle_close");
const sidebar =document.querySelector(".sidebar");

sidebaropenBtn.addEventListener('click', () =>{
    sidebar.style.left ="0";
    sidebarCloseBtn.style.display = "inline-block";
    sidebaropenBtn.style.display = "none";
})

sidebarCloseBtn.addEventListener('click', () =>{
    sidebar.style.left ="-100%";
    sidebarCloseBtn.style.display = "none";
    sidebaropenBtn.style.display = "inline-block";
})

//===========bar chart=======================/

  const chart= document.getElementById(`chart`);

  new Chart(chart, {
    type: 'bar',
    data: {
      labels: ["Jan", "feb", "Mar", "Apr", "May", "Jun", "jul", "Aug", "Sep", "oct","Nov", "Dec"],
      datasets: [{
        label: 'Sales for the month',
        data: [1452, 1349, 1533, 4345, 2232, 3945, 1234, 1423, 3231, 2314, 3141, 3221],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

//===========pie chart=======================/
  const pieChart = document.querySelector("#Categories")
  const data ={
    datasets:[
        {
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            data: [10, 20, 30, 40, 50, 60, 70],
        }
    ]
  }


 new Chart(pieChart, {
  type: 'pie',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        
      }
    }
  },
});










    


