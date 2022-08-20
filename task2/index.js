var tbody = document.getElementById('tbody');
fetch("http://localhost:3000/rows")
    .then(res => res.json())
    .then(json => {
        json.map(data => {
            console.log(data)
            tbody.append(td_fun(data))
        })
    })

function td_fun(data) {

    let td = document.createElement('tr');
    td.innerHTML = `<td colspan="3">${data.MACHINENAME}</td>
    <td colspan="3">${data.MACHINEID}</td>
    <td colspan="2">${data.Today}</td>
    <td colspan="2">${data.MTD}</td>
    <td colspan="2">${data.YTD}</td>
    <td colspan="3">${data.Activepower}</td>
    <td colspan="3">${data.ApparentPower}</td>
    <td colspan="3">${data.ReactivePower}</td>
    <td colspan="3">${data.CURRENT}</td>
    <td colspan="3">${data.VOLTAGE}</td>
    <td colspan="3">${data.PowerFactor}</td>
    <td colspan="2">${data.Today1}</td>
    <td colspan="2">${data.MTD1}</td>
    <td colspan="2">${data.YTD1}</td>
    `;
    return td;
}