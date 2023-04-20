const slidersValues=[]; //sliders Values
const WithAutomationPercentages=[15,10,1.5,10,10] // backend calculation values


/**
 * These are the fields with its calulation
 * fieldID - ID on HTML Tag
 * Value - integer value of the field
 * valueFormatted - the formatted value of the field i.e Value=1000000 valueFormated $1.000.000
 * onEnter - The function that has the calculate of the field
 */
const fields =[
    {id:0,fieldID : "total_rental_income_1",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_total_rental_income(this.id); }},
    {id:1,fieldID : "vacancy-loss-input-year-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_rent_loss_due_to_vacancy(this.id); }},
    {id:2,fieldID : "gross-profit-input-year-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_gross_profit(this.id); }},
    {id:3,fieldID : "utilities-maintenance-input-year-1",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_utilities_maintenance(this.id); }},
    {id:4,fieldID : "advertising-marketing-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_advertising_marketing(this.id); }},
    {id:5,fieldID : "management-fees-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_other(this.id); }},
    {id:6,fieldID : "general-administrative-1",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_general_administrative(this.id); }},
    {id:7,fieldID : "salaries-personnel-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_salaries_personnel(this.id); }},
    {id:8,fieldID : "operating-expenses-1",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_operating_expenses(this.id); }},
    {id:9,fieldID : "net-operating-income-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_net_operating_income(this.id); }},
    {id:10,fieldID : "noi-percentage-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_NOI_percentage(this.id); }},
    {id:11,fieldID : "total_rental_income_2",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_total_rental_income(this.id); }},
    {id:12,fieldID : "vacancy-loss-input-year-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_rent_loss_due_to_vacancy_with_Automation(this.id); }},
    {id:13,fieldID : "gross-profit-input-year-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_gross_profit_with_Automation(this.id); }}, 
    {id:14,fieldID : "utilities-maintenance-input-year-2",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_utilities_maintenance(this.id); }},
    {id:15,fieldID : "advertising-marketing-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_advertising_marketing_with_Automation(this.id); }},
    {id:16,fieldID : "management-fees-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_other(this.id); }},
    {id:17,fieldID : "general-administrative-2",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_general_administrative_with_Automation(this.id); }},
    {id:18,fieldID : "salaries-personnel-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_salaries_personnel_with_Automation(this.id); }},
    {id:19,fieldID : "new-software-cost-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_new_software_cost_with_Automation(this.id); }},
    {id:20,fieldID : "operating-expenses-2",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_operating_expenses_with_Automation(this.id); }},
    {id:21,fieldID : "net-operating-income-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_net_operating_income_with_Automation(this.id); }},
    {id:22,fieldID : "noi-percentage-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_NOI_percentage_with_Automation(this.id); }},
    {id:23,fieldID : "revenue-recovered-from-vacancy-loss",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_Revenue_recovered_from_vacancy_loss(this.id); }},
    {id:24,fieldID : "net-operating-income-increase",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_net_operating_income_increase(this.id); }},
    {id:25,fieldID : "noi-increase",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_noi_increase(this.id); }},
    {id:26,fieldID : "time-to-pay-off-new-technology",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_time_to_pay_off_new_technology(this.id); }},
    {id:27,fieldID : "new-technology-roi-multiple",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_new_technology_roi_multiple(this.id); }},
    {id:28,fieldID : "total-opex",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_total_opex(this.id); }},
    {id:29,fieldID : "insurance-and-taxes-1", value: 0, valueFormatted: "0", onEnter: function(){ return calculate_insurance_and_taxes(this.id); }},
    {id:30,fieldID : "insurance-and-taxes-2", value: 0, valueFormatted: "0", onEnter: function(){ return calculate_insurance_and_taxes_with_automation(this.id); }}
];


function createSliders(){
    const slidersID=['customRange1','customRange2','customRange3','customRange4','customRange5','customRange6','customRange7','customRange8','customRange9','customRange10','customRange11'] //amount of sliders
    const inputsID=['customRange1i','customRange2i','customRange3i','customRange4i','customRange5i','customRange6i','customRange7i','customRange8i','customRange9i','customRange10i','customRange11i'] //amount of sliders
    const slidersInfo=['rangeValue1','rangeValue2','rangeValue3','rangeValue4','rangeValue5','rangeValue6','rangeValue7','rangeValue8','rangeValue9','rangeValue10','rangeValue11'] //amount of sliders
    for (let i=0; i<=slidersID.length-1; i++){
        let range=document.getElementById(slidersID[i]);
        let inputs=document.getElementById(slidersID[i] + 'i')
        let rangeValue=document.getElementById(slidersInfo[i]);
        if (i==1){
            rangeValue.innerHTML = "$ "+range.value;
        }else if (i>=2){
            rangeValue.innerHTML = range.value + " %";
        }else{
            rangeValue.innerHTML = range.value
        }
        slidersValues[i]=parseFloat(range.value); 
        calculateAll();   
        range.addEventListener('input', () => { 
            if (i==1){
                rangeValue.innerHTML = "$ "+range.value;
            }else if (i>=2){
                rangeValue.innerHTML = range.value + " %";
            }else{
                rangeValue.innerHTML = range.value
            }
            inputs.value = range.value;
            let pos = slidersID.indexOf(range.id);
            slidersValues[pos]=parseFloat(range.value);
            calculateAll(); 
        });
        inputs.addEventListener('input', () => { 
            if (/[^0-9\.,]/g.test(inputs.value)) {
                inputs.value = inputs.value.replace(/[^0-9\.,]/g, '');
            }
            if (i==1){
                rangeValue.innerHTML = "$ "+inputs.value;
            }else if (i>=2){
                rangeValue.innerHTML = inputs.value + " %";
            }else{
                rangeValue.innerHTML = inputs.value
            }
            range.value = inputs.value;
            let pos = inputsID.indexOf(inputs.id);
            slidersValues[pos]=parseFloat(inputs.value);
            calculateAll(); 
            inputs.dataset.previousValue = inputs.value;
        });
        
        inputs.addEventListener('click', () => {
            inputs.value = "";
        });

        inputs.addEventListener('focus', () => {
            inputs.dataset.previousValue = inputs.value;
        });
        
        inputs.addEventListener('blur', () => {
            if (inputs.value === "") {
                inputs.value = inputs.dataset.previousValue || "0";
            }
        });
    }
}

//trigger all the calculates.
function calculateAll(){
    for (let i=0;i<=fields.length-1; i++){
        document.getElementById(fields[i].fieldID).value = fields[i].onEnter();
    }    
}

/**
 * 
 * Calculator without automation
 *
 */

// Number of units managed X Average monthly rent per unit X 12
function calculate_total_rental_income(val){
    fields[val].value = slidersValues[0] * slidersValues[1] * 12;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

// Percentage(VacancyRate) X Total Rental Income
function calculate_rent_loss_due_to_vacancy(val){
    fields[val].value = fields[0].value * (slidersValues[2] / 100);
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

//Total Rental Income - Rent loss due to vacancy
function calculate_gross_profit(val){
    fields[val].value = fields[0].value - fields[1].value;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

//Total Rental Income X Percentage(Repairs & Maintenance)
function calculate_utilities_maintenance(val){
    fields[val].value = (slidersValues[3]/100) * fields[0].value;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

//Total Rental Income X Percentage(Advertising & Marketing (leasing exp))
function calculate_advertising_marketing(val){
    fields[val].value = (slidersValues[4]/100) * fields[0].value;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

//This NOW is Management Fees
//(Total Rental Income + Percentage(other)) X Percentage(Management Fees)
function calculate_other(val){
    fields[val].value = (slidersValues[5]/100) * (fields[0].value * (1+(slidersValues[10]/100)));
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

//Total Rental Income X Percentage(General & Administrative)
function calculate_general_administrative(val){
    fields[val].value = (slidersValues[6]/100) * fields[0].value;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

//Total Rental Income X Percentage(General & Administrative)
function calculate_salaries_personnel(val){
    fields[val].value = (slidersValues[8]/100) * fields[0].value;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

//Total Rental Income X Percentage(Insurance and taxes)
function calculate_insurance_and_taxes(val){
    fields[val].value = (slidersValues[9]/100) * fields[0].value;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

//Total always is Zero
function calculate_new_software_cost(val){
    return 0;
}

//sum of all values
function calculate_operating_expenses(val){
    let value=0;
    for (let i=3; i<=7; i++){
        value += fields[i].value;
    }
    value += fields[29].value;
    fields[val].value = value
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

//gross profit menos operating expenses
function calculate_net_operating_income(val)
{
    fields[val].value =  fields[2].value - fields[8].value;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

//Percentage
function calculate_NOI_percentage(val){
    fields[val].value = fields[9].value * 100 / fields[2].value;
    fields[val].valueFormatted = fields[val].value.toFixed(0) + " %";
    return fields[val].valueFormatted;
}


/**
 * 
 * Calculator with automation
 *
 */

function calculate_rent_loss_due_to_vacancy_with_Automation(val){
    fields[val].value = (1-((WithAutomationPercentages[0])/100)) * fields[1].value;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_gross_profit_with_Automation(val){
    fields[val].value = fields[11].value - fields[12].value;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_advertising_marketing_with_Automation(val){
    fields[val].value = (1-((WithAutomationPercentages[1])/100)) * fields[4].value;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_general_administrative_with_Automation(val){
    fields[val].value = (1-((WithAutomationPercentages[3])/100)) * fields[6].value;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_salaries_personnel_with_Automation(val){
    fields[val].value = (1-((WithAutomationPercentages[4])/100)) * fields[7].value;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_insurance_and_taxes_with_automation(val){
    fields[val].value = fields[29].value
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_new_software_cost_with_Automation(val){
    fields[val].value = WithAutomationPercentages[2] * slidersValues[0] * 12;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_operating_expenses_with_Automation(val){
    let value=0;
    for (let i=14; i<=19; i++){
        value += fields[i].value;
    }
    value += fields[30].value;
    fields[val].value = value;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_net_operating_income_with_Automation(val){
    fields[val].value =  fields[13].value - fields[20].value;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_NOI_percentage_with_Automation(val){
    fields[val].value =  fields[21].value * 100 / fields[13].value;
    fields[val].valueFormatted = fields[val].value.toFixed(0)+ " %" ;
    return fields[val].valueFormatted;
}

//summary
function calculate_net_operating_income_increase(val){
    fields[val].value =  fields[21].value - fields[9].value;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_noi_increase(val){
    fields[val].value =  fields[22].value - fields[10].value;
    fields[val].valueFormatted = fields[val].value.toFixed(0)+" %";
    return fields[val].valueFormatted;
}

function calculate_time_to_pay_off_new_technology(val){
    fields[val].value =  fields[19].value /((fields[8].value - fields[20].value) /365);
    fields[val].valueFormatted = Math.ceil(fields[val].value) + " Days";
    return fields[val].valueFormatted;
}

function calculate_new_technology_roi_multiple(val){
    fields[val].value =  fields[24].value / fields[19].value;
    fields[val].valueFormatted = fields[val].value.toFixed(1)+" X";
    return fields[val].valueFormatted;
}

function calculate_Revenue_recovered_from_vacancy_loss(val){
    fields[val].value =  fields[1].value - fields[12].value;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_total_opex(val){
    let value=0;
    for (let i=3; i<=10;i++){
        value += slidersValues[i];
    }
    fields[val].value = value;
    fields[val].valueFormatted = fields[val].value.toFixed(0)+" %";
    return fields[val].valueFormatted;
}

//helpers
function reducirNumero(numero) {

    var opciones = { style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 0, useGrouping: true, currency: 'USD' };
    if (numero >= 1000000) {
        return "$ " + (numero / 1000000).toFixed(1) + 'M';
    } else if (numero >= 200000) {
        return "$ " + (numero / 1000).toFixed(0) + 'k';
    } else {
        return "$ "+ numero.toLocaleString('en-US', opciones);
    }
}

createSliders();

//convert to pdf
function generarPDFNOI(){
    var mail=document.getElementById("email");
    var alertMsg = document.querySelector('.alert-input');
    const re = /\S+@\S+\.\S+/;
    if(re.test(mail.value)){
        alertMsg.classList.add('alert-hidden'); 
        mail.classList.remove('border-red');
        var doc = new jsPDF();
        
        doc.setFillColor(47, 77, 237); //Bg Portfolio Title
        doc.rect(figmaX(25), figmaY(70), 120, 10, "F");

        doc.setFillColor(47, 77, 237); //Bg Operating Expenses % Title
        doc.rect(figmaX(25), figmaY(140), 189, 10, "F");

        doc.setFillColor(47, 77, 237); //Bg Benefits Title
        doc.rect(figmaX(25), figmaY(291), 189, 10, "F");

        doc.setFillColor(248, 249, 253); //Bg Portfolio Container
        doc.rect(figmaX(25), figmaY(85), 120, 24, "F");

        doc.setFillColor(	248, 249, 253); //Bg Operating Expenses % Title Container
        doc.rect(figmaX(25), figmaY(155), 189, 68, "F");

        doc.setFillColor(	248, 249, 253); //Bg Benefits Container
        doc.rect(figmaX(25), figmaY(306), 189, 96, "F");


        
        // Agregar el texto
        doc.setTextColor(47, 77, 237);
        doc.text(figmaX(25), figmaY(30), "Property Management NOI Calculator");

        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0.1);
        doc.text(figmaX(25), figmaY(50), "New Technology Savings Calculator for Owner-Managed Multifamily Rental Properties");

        //Portfolio values
        doc.setFontSize(15);
        doc.setTextColor(255, 255, 255);
        doc.text(figmaX(30), figmaY(80), "Portfolio values");

        doc.setFontSize(13);
        doc.setTextColor(0, 0, 0.1);
        doc.text(figmaX(30), figmaY(95), "Number of units managed:");
        doc.text(figmaX(260), figmaY(95),  slidersValues[0].toString());

        doc.text(figmaX(30), figmaY(108), "Average monthly rent per unit:");
        doc.text(figmaX(260), figmaY(108), '$ ' + slidersValues[1].toString());

        //Problema con los slides
        doc.text(figmaX(30), figmaY(121), "Vacancy Rate:");
        doc.text(figmaX(260), figmaY(121), slidersValues[2].toString()+ ' %');
        //doc.text(figmaX(415), figmaY(121), slidersValues[0].value);

        //Operating Expenses %
        doc.setFontSize(15);
        doc.setTextColor(255, 255, 255);
        doc.text(figmaX(30), figmaY(150), "Operating Expenses % of Gross Rent Per Unit");

        doc.setFontSize(13);
        doc.setTextColor(0, 0, 0.1);
        doc.text(figmaX(30), figmaY(165), "Repairs & Maintenance");
        doc.text(figmaX(415), figmaY(165), slidersValues[3].toString()+ ' %');

        doc.text(figmaX(30), figmaY(178), "Advertising & Marketing (leasing exp)");
        doc.text(figmaX(415), figmaY(178), slidersValues[4].toString()+ ' %');

        doc.text(figmaX(30), figmaY(191), "Management Fees");
        doc.text(figmaX(415), figmaY(191), slidersValues[5].toString()+ ' %');

        doc.text(figmaX(30), figmaY(204), "General & Administrative");
        doc.text(figmaX(415), figmaY(204), slidersValues[6].toString()+ ' %');
        
        doc.text(figmaX(30), figmaY(217), "Salaries & Personnel");
        doc.text(figmaX(415), figmaY(217), slidersValues[7].toString()+ ' %');

        doc.text(figmaX(30), figmaY(231), "Utilities");
        doc.text(figmaX(415), figmaY(231), slidersValues[8].toString()+ ' %');

        doc.text(figmaX(30), figmaY(244), "Other");
        doc.text(figmaX(415), figmaY(244), slidersValues[9].toString()+ ' %');

        doc.text(figmaX(30), figmaY(257), "Insurance and Taxes");
        doc.text(figmaX(415), figmaY(257), slidersValues[10].toString()+ ' %');

        doc.setFontSize(14);
        doc.text(figmaX(30), figmaY(272), "Total Opex");
        doc.text(figmaX(415), figmaY(272), fields[28].valueFormatted);

        //Benefits
        doc.setFontSize(13);
        doc.setTextColor(255, 255, 255);
        doc.text(figmaX(30), figmaY(301), "Your Benefits");
        doc.text(figmaX(175), figmaY(301), "Without Automation");
        doc.text(figmaX(295), figmaY(301), "With Automation");
        doc.text(figmaX(405), figmaY(301), "Net Gain");

        doc.setFontSize(11);
        doc.setTextColor(0, 0, 0.1);
        //Titles
        doc.text(figmaX(30), figmaY(316), "Total Rental Income");
        doc.text(figmaX(30), figmaY(329), "Rent loss due to vacancy");
        doc.text(figmaX(30), figmaY(342), "Gross Profit");
        doc.text(figmaX(30), figmaY(355), "Utilities & Maintenance");
        doc.text(figmaX(30), figmaY(368), "Advertising & Marketing");
        doc.text(figmaX(30), figmaY(381), "Other");
        doc.text(figmaX(30), figmaY(394), "General & Administrative");
        doc.text(figmaX(30), figmaY(407), "Salaries & Personnel");
        doc.text(figmaX(30), figmaY(420), "New software cost");
        doc.text(figmaX(30), figmaY(433), "Operating Expenses");
        doc.text(figmaX(30), figmaY(446), "Net Operating Income ");
        doc.text(figmaX(30), figmaY(459), "NOI Percentage");
        doc.text(figmaX(30), figmaY(472), "Days to pay off new technology");

        //Without Automation
        doc.text(figmaX(205), figmaY(316), fields[0].valueFormatted);
        doc.text(figmaX(205), figmaY(329), fields[1].valueFormatted);
        doc.text(figmaX(205), figmaY(342), fields[2].valueFormatted);
        doc.text(figmaX(205), figmaY(355), fields[3].valueFormatted);
        doc.text(figmaX(205), figmaY(368), fields[4].valueFormatted);
        doc.text(figmaX(205), figmaY(381), fields[5].valueFormatted);
        doc.text(figmaX(205), figmaY(394), fields[6].valueFormatted);
        doc.text(figmaX(205), figmaY(407), fields[7].valueFormatted);
        doc.text(figmaX(205), figmaY(420), "-");
        doc.text(figmaX(205), figmaY(433), fields[8].valueFormatted);
        doc.text(figmaX(205), figmaY(446), fields[9].valueFormatted);
        doc.text(figmaX(205), figmaY(459), fields[10].valueFormatted);
        doc.text(figmaX(205), figmaY(472), "-");

        //With Automation
        doc.text(figmaX(325), figmaY(316), fields[11].valueFormatted);
        doc.text(figmaX(325), figmaY(329), fields[12].valueFormatted);
        doc.text(figmaX(325), figmaY(342), fields[13].valueFormatted);
        doc.text(figmaX(325), figmaY(355), fields[14].valueFormatted);
        doc.text(figmaX(325), figmaY(368), fields[15].valueFormatted);
        doc.text(figmaX(325), figmaY(381), fields[16].valueFormatted);
        doc.text(figmaX(325), figmaY(394), fields[17].valueFormatted);
        doc.text(figmaX(325), figmaY(407), fields[18].valueFormatted);
        doc.text(figmaX(325), figmaY(420), fields[19].valueFormatted);
        doc.text(figmaX(325), figmaY(433), fields[20].valueFormatted);
        doc.text(figmaX(325), figmaY(446), fields[21].valueFormatted);
        doc.text(figmaX(325), figmaY(459), fields[22].valueFormatted);
        doc.text(figmaX(325), figmaY(472), fields[26].valueFormatted);

        //Net Gain Faltan los resultados
        doc.text(figmaX(415), figmaY(329), fields[23].valueFormatted);
        doc.text(figmaX(415), figmaY(368), reducirNumero(fields[14].value - fields[4].value));
        doc.text(figmaX(415), figmaY(394), reducirNumero(fields[6].value - fields[17].value));
        doc.text(figmaX(415), figmaY(407), reducirNumero(fields[7].value - fields[18].value));
        doc.text(figmaX(415), figmaY(433), fields[19].valueFormatted);
        doc.text(figmaX(415), figmaY(446), reducirNumero(fields[8].value - fields[20].value));
        doc.text(figmaX(415), figmaY(459), reducirNumero(fields[21].value - fields[9].value));
        doc.text(figmaX(415), figmaY(472), fields[25].valueFormatted);

        doc.addPage();

        doc.setFillColor(47, 77, 237); //Bg Results Summary Title
        doc.rect(figmaX(25), figmaY(20), 189, 10, "F");

        doc.setFillColor(	248, 249, 253); //Bg Results Summary Container
        doc.rect(figmaX(25), figmaY(45), 189, 40, "F");
        
        //Results Summary
        doc.setFontSize(15);
        doc.setTextColor(255, 255, 255);
        doc.text(figmaX(30), figmaY(32), "Results Summary");

        doc.setFontSize(13);
        doc.setTextColor(0, 0, 0.1);
        doc.text(figmaX(30), figmaY(49), "Revenue recovered from Vacancy loss");
        doc.text(figmaX(415), figmaY(49), fields[23].valueFormatted);

        doc.text(figmaX(30), figmaY(64), "Net Operating Income Increase");
        doc.text(figmaX(415), figmaY(64), fields[24].valueFormatted);

        doc.text(figmaX(30), figmaY(79), "NOI % increase");
        doc.text(figmaX(415), figmaY(79), fields[25].valueFormatted);

        doc.text(figmaX(30), figmaY(94), "Time to pay off new technology");
        doc.text(figmaX(415), figmaY(94), fields[26].valueFormatted);

        doc.text(figmaX(30), figmaY(109), "New Technology ROI Multiple");
        doc.text(figmaX(415), figmaY(109), fields[27].valueFormatted);

        // Guardar el archivo PDF
        doc.save("Test.pdf");
    }else{
        alertMsg.classList.remove('alert-hidden'); 
        mail.classList.add('border-red');    
    }
}

function descargarXLSX() {
    var mail=document.getElementById("email")
    var alertMsg = document.querySelector('.alert-input');
    const re = /\S+@\S+\.\S+/;
    if(re.test(mail.value)){
        alertMsg.classList.add('alert-hidden'); 
        mail.classList.remove('border-red');
        // Crear un nuevo libro y una nueva hoja de cálculo
        var libro = XLSX.utils.book_new();
        
        var hoja = XLSX.utils.sheet_add_aoa(libro.Sheets, [['Portfolio values (input)']], {origin: 'A3'});
        var hoja = XLSX.utils.sheet_add_aoa(libro.Sheets, [
            ['Number of units managed', slidersValues[0].toString()],
            ['Average monthly rent per unit', "$ " + slidersValues[1].toString()],
            ['Vacancy rate', slidersValues[2].toString() + " %"]
        ], {origin: 'A4'});

        var hoja = XLSX.utils.sheet_add_aoa(libro.Sheets, [['Operating Expenses % of Gross Rent Per unit (input)']], {origin: 'A8'});
        var hoja = XLSX.utils.sheet_add_aoa(libro.Sheets, [
            ['Repairs & Maintenance', slidersValues[3].toString()+" %"],
            ['Advertising & Marketing (leasing exp)', slidersValues[4].toString()+" %"],
            ['Management Fees', slidersValues[5].toString()+" %"],
            ['General & Administrative', slidersValues[6].toString()+" %"],
            ['Utilities', slidersValues[7].toString()+" %"],
            ['Salaries & Personnel', slidersValues[8].toString()+" %"],
            ['Insurance and Taxes', slidersValues[9].toString()+" %"],
            ['Other', slidersValues[10].toString()+" %"],
            ['Total Opex', fields[28].valueFormatted],
        ], {origin: 'A8'}); 

        var hoja = XLSX.utils.sheet_add_aoa(libro.Sheets, [
            ['','Without Automation',' With Automation','Net Gain'],
            ['Total Rental Income', fields[0].valueFormatted,fields[11].valueFormatted,''],
            ['Rent loss due to vacancy', fields[1].valueFormatted,fields[12].valueFormatted,fields[23].valueFormatted],
            ['Gross Profit', fields[2].valueFormatted,fields[13].valueFormatted,''],
            ['','','','']
            ['Utilities & Maintenance', fields[3].valueFormatted,fields[14].valueFormatted,reducirNumero(fields[14].value - fields[3].value)],
            ['Advertising & Marketing', fields[4].valueFormatted,fields[15].valueFormatted,reducirNumero(fields[15].value - fields[4].value)],
            ['Management Fees', fields[5].valueFormatted,fields[16].valueFormatted,reducirNumero(fields[16].value - fields[5].value)],
            ['General & Administrative', fields[6].valueFormatted,fields[17].valueFormatted,reducirNumero(fields[17].value - fields[6].value)],
            ['Salaries & Personnel', fields[7].valueFormatted,fields[18].valueFormatted,reducirNumero(fields[18].value - fields[7].value)],
            ['Salaries & Personnel', fields[29].valueFormatted,fields[30].valueFormatted,reducirNumero(fields[30].value - fields[29].value)],
            ['Insurance and taxes', fields[29].valueFormatted,fields[30].valueFormatted,reducirNumero(fields[30].value - fields[29].value)],
            ['New software cost', '-',fields[19].valueFormatted,fields[19].valueFormatted],
            ['Operating Expenses', fields[8].valueFormatted,fields[20].valueFormatted,reducirNumero(fields[20].value - fields[8].value)],
            ['Net Operating Income', fields[9].valueFormatted,fields[21].valueFormatted,fields[24].valueFormatted],
            ['NOI Percentage', fields[10].valueFormatted,fields[22].valueFormatted,fields[25].valueFormatted],
        ], {origin: 'A20'}); 

        var hoja = XLSX.utils.sheet_add_aoa(libro.Sheets, [['Results Summary']], {origin: 'E3'});
        var hoja = XLSX.utils.sheet_add_aoa(libro.Sheets, [
            ['Revenue recovered from Vacancy loss', fields[23].valueFormatted],
            ['Net Operating Income Increase', fields[24].valueFormatted],
            ['NOI % increase', fields[25].valueFormatted],
            ['Time to pay off new technology', fields[26].valueFormatted],
            ['New Technology ROI Multiple', fields[27].valueFormatted]
        ], {origin: 'E4'}); 
        
        // Agregar la hoja de cálculo al libro
        XLSX.utils.book_append_sheet(libro, hoja, 'Portfolio values');
        
        // Descargar el archivo XLSX
        XLSX.writeFile(libro, 'datos.xlsx');
    }else{
        alertMsg.classList.remove('alert-hidden'); 
        mail.classList.add('border-red');
    }
}


function figmaX(val){
    return (val/1920*800);
}

function figmaY(val){
    return (val/1080*600);
}
