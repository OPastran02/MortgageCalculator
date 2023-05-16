const slidersValuesNoi=[]; // Sliders Values
const WithAutomationPercentages=[15,10,1.5,10,10] // Backend calculation values


/**
 * These are the noifields with its calulation
 * fieldID - ID on HTML Tag
 * Value - integer value of the field
 * valueFormatted - the formatted value of the field i.e Value=1000000 valueFormated $1.000.000
 * onEnter - The function that has the calculate of the field
 */
const noifields =[
    {id:0,fieldID : "noi-total_rental_income_1",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_total_rental_income(this.id); }},
    {id:1,fieldID : "noi-vacancy-loss-input-year-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_rent_loss_due_to_vacancy(this.id); }},
    {id:2,fieldID : "noi-gross-profit-input-year-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_gross_profit(this.id); }},
    {id:3,fieldID : "noi-utilities-maintenance-input-year-1",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_utilities_maintenance(this.id); }},
    {id:4,fieldID : "noi-advertising-marketing-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_advertising_marketing(this.id); }},
    {id:5,fieldID : "noi-management-fees-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_other(this.id); }},
    {id:6,fieldID : "noi-general-administrative-1",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_general_administrative(this.id); }},
    {id:7,fieldID : "noi-salaries-personnel-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_salaries_personnel(this.id); }},
    {id:8,fieldID : "noi-operating-expenses-1",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_operating_expenses(this.id); }},
    {id:9,fieldID : "noi-net-operating-income-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_net_operating_income(this.id); }},
    {id:10,fieldID : "noi-percentage-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_NOI_percentage(this.id); }},
    {id:11,fieldID : "noi-total_rental_income_2",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_total_rental_income(this.id); }},
    {id:12,fieldID : "noi-vacancy-loss-input-year-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_rent_loss_due_to_vacancy_with_Automation(this.id); }},
    {id:13,fieldID : "noi-gross-profit-input-year-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_gross_profit_with_Automation(this.id); }}, 
    {id:14,fieldID : "noi-utilities-maintenance-input-year-2",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_utilities_maintenance(this.id); }},
    {id:15,fieldID : "noi-advertising-marketing-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_advertising_marketing_with_Automation(this.id); }},
    {id:16,fieldID : "noi-management-fees-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_other(this.id); }},
    {id:17,fieldID : "noi-general-administrative-2",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_general_administrative_with_Automation(this.id); }},
    {id:18,fieldID : "noi-salaries-personnel-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_salaries_personnel_with_Automation(this.id); }},
    {id:19,fieldID : "noi-new-software-cost-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_new_software_cost_with_Automation(this.id); }},
    {id:20,fieldID : "noi-operating-expenses-2",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_operating_expenses_with_Automation(this.id); }},
    {id:21,fieldID : "noi-net-operating-income-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_net_operating_income_with_Automation(this.id); }},
    {id:22,fieldID : "noi-percentage-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_NOI_percentage_with_Automation(this.id); }},
    {id:23,fieldID : "noi-revenue-recovered-from-vacancy-loss",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_Revenue_recovered_from_vacancy_loss(this.id); }},
    {id:24,fieldID : "noi-net-operating-income-increase",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_net_operating_income_increase(this.id); }},
    {id:25,fieldID : "noi-increase",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_noi_increase(this.id); }},
    {id:26,fieldID : "noi-time-to-pay-off-new-technology",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_time_to_pay_off_new_technology(this.id); }},
    {id:27,fieldID : "noi-new-technology-roi-multiple",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_new_technology_roi_multiple(this.id); }},
    {id:28,fieldID : "noi-total-opex",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_total_opex(this.id); }},
    {id:29,fieldID : "noi-insurance-and-taxes-1", value: 0, valueFormatted: "0", onEnter: function(){ return calculate_insurance_and_taxes(this.id); }},
    {id:30,fieldID : "noi-insurance-and-taxes-2", value: 0, valueFormatted: "0", onEnter: function(){ return calculate_insurance_and_taxes_with_automation(this.id); }}
];


function createSliders(){
    const slidersID=[
        'noi-customRange1','noi-customRange2','noi-customRange3','noi-customRange4','noi-customRange5','noi-customRange6',
        'noi-customRange7','noi-customRange8','noi-customRange9','noi-customRange10','noi-customRange11'] //amount of sliders
    const inputsID=[
        'noi-customRange1i','noi-customRange2i','noi-customRange3i','noi-customRange4i','noi-customRange5i','noi-customRange6i',
        'noi-customRange7i','noi-customRange8i','noi-customRange9i','noi-customRange10i','noi-customRange11i'] //amount of sliders
    const slidersInfo=[
        'noi-rangeValue1','noi-rangeValue2','noi-rangeValue3','noi-rangeValue4','noi-rangeValue5','noi-rangeValue6',
        'noi-rangeValue7','noi-rangeValue8','noi-rangeValue9','noi-rangeValue10','noi-rangeValue11'] //amount of sliders
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
        slidersValuesNoi[i]=parseFloat(range.value); 
        calculateAllNoi();   
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
            slidersValuesNoi[pos]=parseFloat(range.value);
            calculateAllNoi(); 
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
            slidersValuesNoi[pos]=parseFloat(inputs.value);
            calculateAllNoi(); 
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

// Trigger all the calculates.
function calculateAllNoi(){
    for (let i=0;i<=noifields.length-1; i++){
        document.getElementById(noifields[i].fieldID).value = noifields[i].onEnter();
    }    
}

/**
 * 
 * Calculator without automation
 *
 */

// Number of units managed X Average monthly rent per unit X 12
function calculate_total_rental_income(val){
    noifields[val].value = slidersValuesNoi[0] * slidersValuesNoi[1] * 12;
    noifields[val].valueFormatted = reducirNumero(noifields[val].value)
    return noifields[val].valueFormatted;
}

// Percentage(VacancyRate) X Total Rental Income
function calculate_rent_loss_due_to_vacancy(val){
    noifields[val].value = noifields[0].value * (slidersValuesNoi[2] / 100);
    noifields[val].valueFormatted = reducirNumero(noifields[val].value)
    return noifields[val].valueFormatted;
}

// Total Rental Income - Rent loss due to vacancy
function calculate_gross_profit(val){
    noifields[val].value = noifields[0].value - noifields[1].value;
    noifields[val].valueFormatted = reducirNumero(noifields[val].value)
    return noifields[val].valueFormatted;
}

// Total Rental Income X Percentage(Repairs & Maintenance)
function calculate_utilities_maintenance(val){
    noifields[val].value = (slidersValuesNoi[3]/100) * noifields[0].value;
    noifields[val].valueFormatted = reducirNumero(noifields[val].value)
    return noifields[val].valueFormatted;
}

// Total Rental Income X Percentage(Advertising & Marketing (leasing exp))
function calculate_advertising_marketing(val){
    noifields[val].value = (slidersValuesNoi[4]/100) * noifields[0].value;
    noifields[val].valueFormatted = reducirNumero(noifields[val].value)
    return noifields[val].valueFormatted;
}

// This NOW is Management Fees
//(Total Rental Income + Percentage(other)) X Percentage(Management Fees)
function calculate_other(val){
    noifields[val].value = (slidersValuesNoi[5]/100) * (noifields[0].value * (1+(slidersValuesNoi[10]/100)));
    noifields[val].valueFormatted = reducirNumero(noifields[val].value)
    return noifields[val].valueFormatted;
}

// Total Rental Income X Percentage(General & Administrative)
function calculate_general_administrative(val){
    noifields[val].value = (slidersValuesNoi[6]/100) * noifields[0].value;
    noifields[val].valueFormatted = reducirNumero(noifields[val].value)
    return noifields[val].valueFormatted;
}

// Total Rental Income X Percentage(General & Administrative)
function calculate_salaries_personnel(val){
    noifields[val].value = (slidersValuesNoi[8]/100) * noifields[0].value;
    noifields[val].valueFormatted = reducirNumero(noifields[val].value)
    return noifields[val].valueFormatted;
}

// Total Rental Income X Percentage(Insurance and taxes)
function calculate_insurance_and_taxes(val){
    noifields[val].value = (slidersValuesNoi[9]/100) * noifields[0].value;
    noifields[val].valueFormatted = reducirNumero(noifields[val].value)
    return noifields[val].valueFormatted;
}

// Total always is Zero
function calculate_new_software_cost(val){
    return 0;
}

// Sum of all values
function calculate_operating_expenses(val){
    let value=0;
    for (let i=3; i<=7; i++){
        value += noifields[i].value;
    }
    value += noifields[29].value;
    noifields[val].value = value
    noifields[val].valueFormatted = reducirNumero(noifields[val].value)
    return noifields[val].valueFormatted;
}

// Gross profit menos operating expenses
function calculate_net_operating_income(val)
{
    noifields[val].value =  noifields[2].value - noifields[8].value;
    noifields[val].valueFormatted = reducirNumero(noifields[val].value)
    return noifields[val].valueFormatted;
}

// Percentage
function calculate_NOI_percentage(val){
    noifields[val].value = noifields[9].value * 100 / noifields[2].value;
    noifields[val].valueFormatted = noifields[val].value.toFixed(0) + " %";
    return noifields[val].valueFormatted;
}


/**
 * 
 * Calculator with automation
 *
 */

function calculate_rent_loss_due_to_vacancy_with_Automation(val){
    noifields[val].value = (1-((WithAutomationPercentages[0])/100)) * noifields[1].value;
    noifields[val].valueFormatted = reducirNumero(noifields[val].value)
    return noifields[val].valueFormatted;
}

function calculate_gross_profit_with_Automation(val){
    noifields[val].value = noifields[11].value - noifields[12].value;
    noifields[val].valueFormatted = reducirNumero(noifields[val].value)
    return noifields[val].valueFormatted;
}

function calculate_advertising_marketing_with_Automation(val){
    noifields[val].value = (1-((WithAutomationPercentages[1])/100)) * noifields[4].value;
    noifields[val].valueFormatted = reducirNumero(noifields[val].value)
    return noifields[val].valueFormatted;
}

function calculate_general_administrative_with_Automation(val){
    noifields[val].value = (1-((WithAutomationPercentages[3])/100)) * noifields[6].value;
    noifields[val].valueFormatted = reducirNumero(noifields[val].value)
    return noifields[val].valueFormatted;
}

function calculate_salaries_personnel_with_Automation(val){
    noifields[val].value = (1-((WithAutomationPercentages[4])/100)) * noifields[7].value;
    noifields[val].valueFormatted = reducirNumero(noifields[val].value)
    return noifields[val].valueFormatted;
}

function calculate_insurance_and_taxes_with_automation(val){
    noifields[val].value = noifields[29].value
    noifields[val].valueFormatted = reducirNumero(noifields[val].value)
    return noifields[val].valueFormatted;
}

function calculate_new_software_cost_with_Automation(val){
    noifields[val].value = WithAutomationPercentages[2] * slidersValuesNoi[0] * 12;
    noifields[val].valueFormatted = reducirNumero(noifields[val].value)
    return noifields[val].valueFormatted;
}

function calculate_operating_expenses_with_Automation(val){
    let value=0;
    for (let i=14; i<=19; i++){
        value += noifields[i].value;
    }
    value += noifields[30].value;
    noifields[val].value = value;
    noifields[val].valueFormatted = reducirNumero(noifields[val].value)
    return noifields[val].valueFormatted;
}

function calculate_net_operating_income_with_Automation(val){
    noifields[val].value =  noifields[13].value - noifields[20].value;
    noifields[val].valueFormatted = reducirNumero(noifields[val].value)
    return noifields[val].valueFormatted;
}

function calculate_NOI_percentage_with_Automation(val){
    noifields[val].value =  noifields[21].value * 100 / noifields[13].value;
    noifields[val].valueFormatted = noifields[val].value.toFixed(0)+ " %" ;
    return noifields[val].valueFormatted;
}

// Summary
function calculate_net_operating_income_increase(val){
    noifields[val].value =  noifields[21].value - noifields[9].value;
    noifields[val].valueFormatted = reducirNumero(noifields[val].value)
    return noifields[val].valueFormatted;
}

function calculate_noi_increase(val){
    noifields[val].value =  noifields[22].value - noifields[10].value;
    noifields[val].valueFormatted = noifields[val].value.toFixed(0)+" %";
    return noifields[val].valueFormatted;
}

function calculate_time_to_pay_off_new_technology(val){
    noifields[val].value =  noifields[19].value /((noifields[8].value - noifields[20].value) /365);
    noifields[val].valueFormatted = Math.ceil(noifields[val].value) + " Days";
    return noifields[val].valueFormatted;
}

function calculate_new_technology_roi_multiple(val){
    noifields[val].value =  noifields[24].value / noifields[19].value;
    noifields[val].valueFormatted = noifields[val].value.toFixed(1)+" X";
    return noifields[val].valueFormatted;
}

function calculate_Revenue_recovered_from_vacancy_loss(val){
    noifields[val].value =  noifields[1].value - noifields[12].value;
    noifields[val].valueFormatted = reducirNumero(noifields[val].value)
    return noifields[val].valueFormatted;
}

function calculate_total_opex(val){
    let value=0;
    let cant=1;
    for (let i=3; i<=10;i++){
        value += slidersValuesNoi[i];
        cant++
    }
    noifields[val].value = value; // asignar el valor acumulado
    let promedio = value / (cant - 1); // calcular el promedio
    noifields[val].valueFormatted = promedio.toFixed(0)+" %"; // asignar el promedio al campo total
    return noifields[val].valueFormatted;
}

// Helpers
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

// Convert to pdf
function generarPDFNOI(){
    var mail=document.getElementById("noi-email");
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


        
        // Title
        doc.setTextColor(47, 77, 237);
        doc.text(figmaX(25), figmaY(30), "Property Management NOI Calculator");

        // Subtitle
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
        doc.text(figmaX(260), figmaY(95),  slidersValuesNoi[0].toString());

        doc.text(figmaX(30), figmaY(108), "Average monthly rent per unit:");
        doc.text(figmaX(260), figmaY(108), '$ ' + slidersValuesNoi[1].toString());

        //Problema con los slides
        doc.text(figmaX(30), figmaY(121), "Vacancy Rate:");
        doc.text(figmaX(260), figmaY(121), slidersValuesNoi[2].toString()+ ' %');
        //doc.text(figmaX(415), figmaY(121), slidersValuesNoi[0].value);

        //Operating Expenses %
        doc.setFontSize(15);
        doc.setTextColor(255, 255, 255);
        doc.text(figmaX(30), figmaY(150), "Operating Expenses % of Gross Rent Per Unit");

        doc.setFontSize(13);
        doc.setTextColor(0, 0, 0.1);
        doc.text(figmaX(30), figmaY(165), "Repairs & Maintenance");
        doc.text(figmaX(415), figmaY(165), slidersValuesNoi[3].toString()+ ' %');

        doc.text(figmaX(30), figmaY(178), "Advertising & Marketing (leasing exp)");
        doc.text(figmaX(415), figmaY(178), slidersValuesNoi[4].toString()+ ' %');

        doc.text(figmaX(30), figmaY(191), "Management Fees");
        doc.text(figmaX(415), figmaY(191), slidersValuesNoi[5].toString()+ ' %');

        doc.text(figmaX(30), figmaY(204), "General & Administrative");
        doc.text(figmaX(415), figmaY(204), slidersValuesNoi[6].toString()+ ' %');
        
        doc.text(figmaX(30), figmaY(217), "Salaries & Personnel");
        doc.text(figmaX(415), figmaY(217), slidersValuesNoi[7].toString()+ ' %');

        doc.text(figmaX(30), figmaY(231), "Utilities");
        doc.text(figmaX(415), figmaY(231), slidersValuesNoi[8].toString()+ ' %');

        doc.text(figmaX(30), figmaY(244), "Other");
        doc.text(figmaX(415), figmaY(244), slidersValuesNoi[9].toString()+ ' %');

        doc.text(figmaX(30), figmaY(257), "Insurance and Taxes");
        doc.text(figmaX(415), figmaY(257), slidersValuesNoi[10].toString()+ ' %');

        doc.setFontSize(14);
        doc.text(figmaX(30), figmaY(272), "Total Opex");
        doc.text(figmaX(415), figmaY(272), noifields[28].valueFormatted);

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
        doc.text(figmaX(205), figmaY(316), noifields[0].valueFormatted);
        doc.text(figmaX(205), figmaY(329), noifields[1].valueFormatted);
        doc.text(figmaX(205), figmaY(342), noifields[2].valueFormatted);
        doc.text(figmaX(205), figmaY(355), noifields[3].valueFormatted);
        doc.text(figmaX(205), figmaY(368), noifields[4].valueFormatted);
        doc.text(figmaX(205), figmaY(381), noifields[5].valueFormatted);
        doc.text(figmaX(205), figmaY(394), noifields[6].valueFormatted);
        doc.text(figmaX(205), figmaY(407), noifields[7].valueFormatted);
        doc.text(figmaX(205), figmaY(420), "-");
        doc.text(figmaX(205), figmaY(433), noifields[8].valueFormatted);
        doc.text(figmaX(205), figmaY(446), noifields[9].valueFormatted);
        doc.text(figmaX(205), figmaY(459), noifields[10].valueFormatted);
        doc.text(figmaX(205), figmaY(472), "-");

        //With Automation
        doc.text(figmaX(325), figmaY(316), noifields[11].valueFormatted);
        doc.text(figmaX(325), figmaY(329), noifields[12].valueFormatted);
        doc.text(figmaX(325), figmaY(342), noifields[13].valueFormatted);
        doc.text(figmaX(325), figmaY(355), noifields[14].valueFormatted);
        doc.text(figmaX(325), figmaY(368), noifields[15].valueFormatted);
        doc.text(figmaX(325), figmaY(381), noifields[16].valueFormatted);
        doc.text(figmaX(325), figmaY(394), noifields[17].valueFormatted);
        doc.text(figmaX(325), figmaY(407), noifields[18].valueFormatted);
        doc.text(figmaX(325), figmaY(420), noifields[19].valueFormatted);
        doc.text(figmaX(325), figmaY(433), noifields[20].valueFormatted);
        doc.text(figmaX(325), figmaY(446), noifields[21].valueFormatted);
        doc.text(figmaX(325), figmaY(459), noifields[22].valueFormatted);
        doc.text(figmaX(325), figmaY(472), noifields[26].valueFormatted);

        //Net Gain Faltan los resultados
        doc.text(figmaX(415), figmaY(329), '-'+noifields[23].valueFormatted);
        doc.text(figmaX(415), figmaY(368), '-'+reducirNumero(noifields[14].value - noifields[4].value));
        doc.text(figmaX(415), figmaY(394), '-'+reducirNumero(noifields[6].value - noifields[17].value));
        doc.text(figmaX(415), figmaY(407), '-'+reducirNumero(noifields[7].value - noifields[18].value));
        doc.text(figmaX(415), figmaY(433), '-'+noifields[19].valueFormatted);
        doc.text(figmaX(415), figmaY(446), '-'+reducirNumero(noifields[8].value - noifields[20].value));
        doc.text(figmaX(415), figmaY(459), '-'+reducirNumero(noifields[21].value - noifields[9].value));
        doc.text(figmaX(415), figmaY(472), '-'+noifields[25].valueFormatted);

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
        doc.text(figmaX(415), figmaY(49), noifields[23].valueFormatted);

        doc.text(figmaX(30), figmaY(64), "Net Operating Income Increase");
        doc.text(figmaX(415), figmaY(64), noifields[24].valueFormatted);

        doc.text(figmaX(30), figmaY(79), "NOI % increase");
        doc.text(figmaX(415), figmaY(79), noifields[25].valueFormatted);

        doc.text(figmaX(30), figmaY(94), "Time to pay off new technology");
        doc.text(figmaX(415), figmaY(94), noifields[26].valueFormatted);

        doc.text(figmaX(30), figmaY(109), "New Technology ROI Multiple");
        doc.text(figmaX(415), figmaY(109), noifields[27].valueFormatted);

        // Save the PDF file
        doc.save("Test.pdf");
        
        // Send Email
        enviarCorreo()
    }else{
        alertMsg.classList.remove('alert-hidden'); 
        mail.classList.add('border-red');    
    }
}

// Download CSV
function descargarXLSX() {
    var mail=document.getElementById("noi-email")
    var alertMsg = document.querySelector('.alert-input');
    const re = /\S+@\S+\.\S+/;
    if(re.test(mail.value)){
        alertMsg.classList.add('alert-hidden'); 
        mail.classList.remove('border-red');
        // Create a new workbook and a new spreadsheet
        var libro = XLSX.utils.book_new();
        
        var hoja = XLSX.utils.sheet_add_aoa(libro.Sheets, [['Portfolio values (input)']], {origin: 'A3'});
        var hoja = XLSX.utils.sheet_add_aoa(libro.Sheets, [
            ['Number of units managed', slidersValuesNoi[0].toString()],
            ['Average monthly rent per unit', "$ " + slidersValuesNoi[1].toString()],
            ['Vacancy rate', slidersValuesNoi[2].toString() + " %"]
        ], {origin: 'A4'});

        var hoja = XLSX.utils.sheet_add_aoa(libro.Sheets, [['Operating Expenses % of Gross Rent Per unit (input)']], {origin: 'A8'});
        var hoja = XLSX.utils.sheet_add_aoa(libro.Sheets, [
            ['Repairs & Maintenance', slidersValuesNoi[3].toString()+" %"],
            ['Advertising & Marketing (leasing exp)', slidersValuesNoi[4].toString()+" %"],
            ['Management Fees', slidersValuesNoi[5].toString()+" %"],
            ['General & Administrative', slidersValuesNoi[6].toString()+" %"],
            ['Utilities', slidersValuesNoi[7].toString()+" %"],
            ['Salaries & Personnel', slidersValuesNoi[8].toString()+" %"],
            ['Insurance and Taxes', slidersValuesNoi[9].toString()+" %"],
            ['Other', slidersValuesNoi[10].toString()+" %"],
            ['Total Opex', noifields[28].valueFormatted],
        ], {origin: 'A8'}); 

        var hoja = XLSX.utils.sheet_add_aoa(libro.Sheets, [
            ['','Without Automation',' With Automation','Net Gain'],
            ['Total Rental Income', noifields[0].valueFormatted,noifields[11].valueFormatted,''],
            ['Rent loss due to vacancy', noifields[1].valueFormatted,noifields[12].valueFormatted,noifields[23].valueFormatted],
            ['Gross Profit', noifields[2].valueFormatted,noifields[13].valueFormatted,''],
            ['','','','']
            ['Utilities & Maintenance', noifields[3].valueFormatted,noifields[14].valueFormatted,reducirNumero(noifields[14].value - noifields[3].value)],
            ['Advertising & Marketing', noifields[4].valueFormatted,noifields[15].valueFormatted,reducirNumero(noifields[15].value - noifields[4].value)],
            ['Management Fees', noifields[5].valueFormatted,noifields[16].valueFormatted,reducirNumero(noifields[16].value - noifields[5].value)],
            ['General & Administrative', noifields[6].valueFormatted,noifields[17].valueFormatted,reducirNumero(noifields[17].value - noifields[6].value)],
            ['Salaries & Personnel', noifields[7].valueFormatted,noifields[18].valueFormatted,reducirNumero(noifields[18].value - noifields[7].value)],
            ['Salaries & Personnel', noifields[29].valueFormatted,noifields[30].valueFormatted,reducirNumero(noifields[30].value - noifields[29].value)],
            ['Insurance and taxes', noifields[29].valueFormatted,noifields[30].valueFormatted,reducirNumero(noifields[30].value - noifields[29].value)],
            ['New software cost', '-',noifields[19].valueFormatted,noifields[19].valueFormatted],
            ['Operating Expenses', noifields[8].valueFormatted,noifields[20].valueFormatted,reducirNumero(noifields[20].value - noifields[8].value)],
            ['Net Operating Income', noifields[9].valueFormatted,noifields[21].valueFormatted,noifields[24].valueFormatted],
            ['NOI Percentage', noifields[10].valueFormatted,noifields[22].valueFormatted,noifields[25].valueFormatted],
        ], {origin: 'A20'}); 

        var hoja = XLSX.utils.sheet_add_aoa(libro.Sheets, [['Results Summary']], {origin: 'E3'});
        var hoja = XLSX.utils.sheet_add_aoa(libro.Sheets, [
            ['Revenue recovered from Vacancy loss', noifields[23].valueFormatted],
            ['Net Operating Income Increase', noifields[24].valueFormatted],
            ['NOI % increase', noifields[25].valueFormatted],
            ['Time to pay off new technology', noifields[26].valueFormatted],
            ['New Technology ROI Multiple', noifields[27].valueFormatted]
        ], {origin: 'E4'}); 
        
        // Add the worksheet to the workbook
        XLSX.utils.book_append_sheet(libro, hoja, 'Portfolio values');
        
        // Download the XLSX file
        XLSX.writeFile(libro, 'datos.xlsx');
        
        // Send Email
        enviarCorreo()
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

//Send Email
function enviarCorreo() {
    var email = document.getElementById('noi-email').value;

    // Configure the EmailJS service
    emailjs.init("zl2YZJ7QzjNpgk6d4");

    // Set email parameters
    var parametros = {
        email: email,
    };

    // Send the email using EmailJS
    emailjs.send("service_rd47v2u", "template_502mask", parametros).then(
    );
}
