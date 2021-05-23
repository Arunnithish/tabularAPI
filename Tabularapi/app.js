

async function fetchData(){
    const response = await  fetch('ZonAnn.Ts+dSST.csv');
    const data = await response.text();
 console.log(data);

    const table = data.split('\n').slice(1);
    table.forEach(row => {
        const column = row.split(',');
        const year = column[0];
        const temp = column[1];
        console.log(year,temp);
     
    });
}

 
