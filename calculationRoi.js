const slidersValues=[]; //sliders Values
const WithAutomationSoftware=[20,10,1,15,15] // backend calculation values
const revenueLossDuetoVacany=[0,0,0,0,0,0,0,0,0]
const percentageRevenue=[66,2,13,4,11,4]
/**
 * These are the fields with its calulation
 * fieldID - ID on HTML Tag
 * Value - integer value of the field
 * valueFormatted - the formatted value of the field i.e Value=1000000 valueFormated $1.000.000
 * onEnter - The function that has the calculate of the field
 */
const fields =[
    //with automation
    {id:0,fieldID : "management-fees-2",value: 0,valueFormatted: "0", onEnter: function(){ return calulate_management_fees(this.id); }},
    {id:1,fieldID : "application-fees-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_application_fees(this.id); }},
    {id:2,fieldID : "leasing-fees-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_leasing_fee(this.id); }},  
    {id:3,fieldID : "owner-fees-2",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_owner_fees(this.id); }},
    {id:4,fieldID : "tenant-fees-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_tenant_fees(this.id); }},
    {id:5,fieldID : "other-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_other(this.id); }}, 
    {id:6,fieldID : "revenue-loss-due-to-vacancy-2",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_revenue_loss_due_to_vacancy_with_Automation(this.id); }},
    {id:7,fieldID : "gross-profit-year-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_gross_profit_with_Automation(this.id); }},
    {id:8,fieldID : "salaries-personnel-2",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_salaries_personnel_with_Automation(this.id); }},
    {id:9,fieldID : "new-owner-advertising-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_new_owner_advertising_with_Automation(this.id); }},
    {id:10,fieldID : "facilities-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_facilities_with_Automation(this.id); }},
    {id:11,fieldID : "other-operating-expenses-2",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_total_other_operating_expenses_with_automation(this.id); }},
    {id:12,fieldID : "payroll-taxes-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_total_payroll_taxes_with_Automation(this.id); }},
    {id:13,fieldID : "new-software-cost-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_new_software_cost_with_automation(this.id); }}, 
    {id:14,fieldID : "operating-expenses-2",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_operating_expenses_with_automation(this.id); }},
    {id:15,fieldID : "net-operating-income-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_net_operating_income_with_Automation(this.id); }},
    {id:16,fieldID : "net-operating-income-porcentage-2",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_net_operating_income_percentage_with_Automation(this.id); }},
    {id:17,fieldID : "days-to-pay-off-new-technology-2",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_days_to_pay_off_new_technology_with_Automation(this.id); }},
    //without automation
    {id:18,fieldID : "management-fees-1",value: 0,valueFormatted: "0", onEnter: function(){ return calulate_management_fees(this.id); }},
    {id:19,fieldID : "application-fees-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_application_fees(this.id); }},
    {id:20,fieldID : "leasing-fees-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_leasing_fee(this.id); }},
    {id:21,fieldID : "owner-fees-1",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_owner_fees(this.id); }},
    {id:22,fieldID : "tenant-fees-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_tenant_fees(this.id); }},
    {id:23,fieldID : "other-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_other(this.id); }},
    {id:24,fieldID : "revenue-loss-due-to-vacancy-1",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_revenue_loss_due_to_vacancy(this.id); }},
    {id:25,fieldID : "gross-profit-year-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_gross_profit(this.id); }},
    {id:26,fieldID : "salaries-personnel-1",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_salaries_personnel(this.id); }},
    {id:27,fieldID : "new-owner-advertising-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_new_owner_advertising(this.id); }},
    {id:28,fieldID : "facilities-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_facilities(this.id); }},
    {id:29,fieldID : "other-operating-expenses-1",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_total_other_operating_expenses(this.id); }},
    {id:30,fieldID : "payroll-taxes-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_total_payroll_taxes(this.id); }},
    {id:31,fieldID : "operating-expenses-1",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_operating_expenses(this.id); }},
    {id:32,fieldID : "net-operating-income-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_net_operating_income(this.id); }},
    {id:33,fieldID : "net-operating-income-porcentage-1",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_net_operating_income_percentage(this.id); }},
    
    {id:34,fieldID : "net-operating-income-increase",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_net_operating_income_increase_summary(this.id); }},
    {id:35,fieldID : "revenue-recovered-from-vacancy-loss",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_revenue_recovered_from_vacancy_loss_summary(this.id); }},
    {id:36,fieldID : "noi-increase",value: 0,valueFormatted: "0", onEnter: function(){ return calculate_noi_increase_summary(this.id); }},
    {id:37,fieldID : "time-to-pay-off-new-technology",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_time_to_pay_off_new_technology_sumamry(this.id); }},
    {id:38,fieldID : "new-technology-roi-multiple",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_new_technology_roi_multiple_summary(this.id); }},
    {id:39,fieldID : "total-opex",value : 0,valueFormatted: "0", onEnter: function(){ return calculate_total_opex_summary(this.id); }},

];

function createSliders(){
    const slidersID=['customRange1','customRange2','customRange3','customRange4',
    'customRange5','customRange6','customRange7','customRange8','customRange9'] //amount of sliders
    const inputsID=['customRange1i','customRange2i','customRange3i','customRange4i','customRange5i',
    'customRange6i','customRange7i','customRange8i','customRange9i'] //amount of sliders
    const slidersInfo=['rangeValue1','rangeValue2','rangeValue3','rangeValue4',
    'rangeValue5','rangeValue6','rangeValue7','rangeValue8','rangeValue9'] //amount of sliders
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
        slidersValues[i]=parseInt(range.value); 
        calculateBackEndValues(); 
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
            slidersValues[pos]=parseInt(range.value);
            calculateBackEndValues(); 
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
            slidersValues[pos]=parseInt(inputs.value);
            calculateBackEndValues(); 
            calculateAll(); 
            calculateBackEndValues(); 
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
//trigger all middleware calculations.
function calculateBackEndValues(){
    revenueLossDuetoVacany[0]= 365
    revenueLossDuetoVacany[1] = slidersValues[0] * revenueLossDuetoVacany[0]
    revenueLossDuetoVacany[2] = revenueLossDuetoVacany[1] * (slidersValues[3] / 100) 
    revenueLossDuetoVacany[3] = slidersValues[1] / 30
    revenueLossDuetoVacany[4] = revenueLossDuetoVacany[3] * revenueLossDuetoVacany[2]
    revenueLossDuetoVacany[5] = revenueLossDuetoVacany[4] * (slidersValues[2] / 100) 
    revenueLossDuetoVacany[6] = revenueLossDuetoVacany[2] * revenueLossDuetoVacany[3]
    revenueLossDuetoVacany[7] = revenueLossDuetoVacany[5] + revenueLossDuetoVacany[6]
    revenueLossDuetoVacany[8] = revenueLossDuetoVacany[3] * (slidersValues[2] / 100) + slidersValues[1]

    console.log(revenueLossDuetoVacany)
}
//trigger all the calculations.
function calculateAll(){
    for (let i=0;i<=fields.length-1; i++){
        document.getElementById(fields[i].fieldID).value = fields[i].onEnter();
    }    

    console.log(fields)
    console.log(slidersValues)
}


function calculate_total_opex(val){
    let value=0;
    for (let i=3; i<=10;i++){
        value += slidersValues[i];
    }
    fields[val].value = value;
    fields[val].valueFormatted = fields[val].value.toFixed(1)+" %";
    return fields[val].valueFormatted;
}

/**
 * 
 * Calculator both
 *
 */

function calulate_management_fees(val){
    fields[val].value = revenueLossDuetoVacany[8] * slidersValues[0] * (percentageRevenue[0]/100);
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_application_fees(val){
    fields[val].value = revenueLossDuetoVacany[8] * slidersValues[0] * (percentageRevenue[1]/100);
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_leasing_fee(val){
    fields[val].value = revenueLossDuetoVacany[8] * slidersValues[0] * (percentageRevenue[2]/100);
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_owner_fees(val){
    fields[val].value = revenueLossDuetoVacany[8] * slidersValues[0] * (percentageRevenue[3]/100);
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_tenant_fees(val){
    fields[val].value = revenueLossDuetoVacany[8] * slidersValues[0] * (percentageRevenue[4]/100);
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_other(val){
    fields[val].value = revenueLossDuetoVacany[8] * slidersValues[0] * (percentageRevenue[5]/100);
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}



/**
 * 
 * Calculator with automation
 *
 */
function calculate_revenue_loss_due_to_vacancy_with_Automation(val){
    fields[val].value = (1-(WithAutomationSoftware[0]/100)) * fields[24].value
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_gross_profit_with_Automation(val){
    let value=0;
    for (let i=0; i<=6;i++){
        value += fields[i].value;
    }
    fields[val].value = value
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_salaries_personnel_with_Automation(val){
    fields[val].value = fields[26].value * (1-WithAutomationSoftware[4]/100)
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_new_owner_advertising_with_Automation(val){
    fields[val].value = fields[27].value
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_facilities_with_Automation(val){
    fields[val].value = fields[28].value * (1-WithAutomationSoftware[3]/100)
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_total_other_operating_expenses_with_automation(val){
    fields[val].value = fields[29].value
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_total_payroll_taxes_with_Automation(val){
    fields[val].value = fields[30].value * (1-WithAutomationSoftware[4]/100)
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_new_software_cost_with_automation(val){
    fields[val].value = WithAutomationSoftware[2] * slidersValues[0] * 12
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_operating_expenses_with_automation(val){
    let value=0;
    for (let i=8; i<=13;i++){
        value += fields[i].value;
    }
    fields[val].value = value
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_net_operating_income_with_Automation(val){
    fields[val].value =  fields[7].value - fields[14].value;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_net_operating_income_percentage_with_Automation(val){
    fields[val].value = (fields[15].value / fields[7].value)*100;
    fields[val].valueFormatted = fields[val].value.toFixed(2) + " %";
    return fields[val].valueFormatted;
}

function calculate_days_to_pay_off_new_technology_with_Automation(val){
    fields[val].value =  fields[13].value / ((fields[31].value - fields[14].value)/365) ;
    fields[val].valueFormatted = fields[val].value.toFixed(2) +  " Days";
    return fields[val].valueFormatted;
}

/**
 * 
 * Calculator without automation
 *
 */

function calculate_revenue_loss_due_to_vacancy(val){

    fields[val].value = revenueLossDuetoVacany[7] * -1;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_gross_profit(val){
    let value=0;
    for (let i=17; i<=24;i++){
        value += fields[i].value;
    }
    fields[val].value = value
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_salaries_personnel(val){
    fields[val].value = fields[18].value * (slidersValues[4]/100)
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_new_owner_advertising(val){
    fields[val].value = fields[18].value * (slidersValues[5]/100)
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_facilities(val){
    fields[val].value = fields[18].value * (slidersValues[6]/100)
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_total_other_operating_expenses(val){
    fields[val].value = fields[18].value * (slidersValues[7]/100)
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_total_payroll_taxes(val){
    fields[val].value = fields[18].value * (slidersValues[8]/100)
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_operating_expenses(val){
    let value=0;
    for (let i=26; i<=30;i++){
        value += fields[i].value;
    }
    fields[val].value = value
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_net_operating_income(val){
    fields[val].value =  fields[25].value - fields[31].value;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_net_operating_income_percentage(val){
    fields[val].value =  (fields[32].value / fields[25].value)*100;
    fields[val].valueFormatted = fields[val].value.toFixed(2) + " %";
    return fields[val].valueFormatted;
}
/**
 * 
 * Calculator summary
 */
function calculate_net_operating_income_increase_summary(val){
    fields[val].value =(fields[32].value - fields[15].value)*-1;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_revenue_recovered_from_vacancy_loss_summary(val){
    fields[val].value = (fields[24].value - fields[6].value)*-1;
    fields[val].valueFormatted = reducirNumero(fields[val].value)
    return fields[val].valueFormatted;
}

function calculate_noi_increase_summary(val){
    fields[val].value = (fields[33].value - fields[16].value)*-1;
    fields[val].valueFormatted = fields[val].value.toFixed(2);
    return fields[val].valueFormatted;
}

function calculate_time_to_pay_off_new_technology_sumamry(val){
    fields[val].value = fields[17].value
    fields[val].valueFormatted = fields[val].value.toFixed(0) + " Days";
    return fields[val].valueFormatted;
}

function calculate_new_technology_roi_multiple_summary(val){
    fields[val].value = fields[34].value / fields[13].value 
    fields[val].valueFormatted = fields[val].value.toFixed(1) + " X";
    return fields[val].valueFormatted;
}

function calculate_total_opex_summary(val){
    let value=0;
    for (let i=4; i<=8;i++){
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
calculateBackEndValues(); 
calculateAll();  

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
        doc.rect(figmaX(25), figmaY(153), 189, 10, "F");

        doc.setFillColor(47, 77, 237); //Bg Benefits Title
        doc.rect(figmaX(25), figmaY(266), 189, 10, "F");

        doc.setFillColor(248, 249, 253); //Bg Portfolio Container
        doc.rect(figmaX(25), figmaY(85), 120, 29, "F");

        doc.setFillColor(	248, 249, 253); //Bg Operating Expenses % Title Container
        doc.rect(figmaX(25), figmaY(168), 189, 46, "F");

        doc.setFillColor(	248, 249, 253); //Bg Benefits Container
        doc.rect(figmaX(25), figmaY(281), 189, 135, "F");


        
        // Agregar el texto
        doc.setTextColor(47, 77, 237);
        doc.text(figmaX(25), figmaY(30), "Property Management ROI Calculator");

        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0.1);
        doc.text(figmaX(25), figmaY(50), "New Technology Savings Calculator for Third-Party Rental Propery Managers");

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
        doc.text(figmaX(30), figmaY(121), "Management fee:");
        doc.text(figmaX(260), figmaY(121),  slidersValues[2].toString()+ ' %');

        doc.text(figmaX(30), figmaY(134), "Vacancy Rate:");
        doc.text(figmaX(260), figmaY(134),  slidersValues[3].toString()+ ' %');

        //Operating Expenses %
        doc.setFontSize(15);
        doc.setTextColor(255, 255, 255);
        doc.text(figmaX(30), figmaY(163), "Operating Expenses % of Gross Rent Per Unit");

        doc.setFontSize(13);
        doc.setTextColor(0, 0, 0.1);
        doc.text(figmaX(30), figmaY(178), "Salaries & Personnel");
        doc.text(figmaX(415), figmaY(178), slidersValues[4].toString()+ ' %');

        doc.text(figmaX(30), figmaY(191), "New Owner Advertising");
        doc.text(figmaX(415), figmaY(191), slidersValues[5].toString()+ ' %');

        doc.text(figmaX(30), figmaY(204), "Facilities (auto, tech, rent etc.)");
        doc.text(figmaX(415), figmaY(204), slidersValues[6].toString()+ ' %');

        doc.text(figmaX(30), figmaY(217), "Other operating expenses");
        doc.text(figmaX(415), figmaY(217), slidersValues[7].toString()+ ' %');
        
        doc.text(figmaX(30), figmaY(232), "Payroll taxes");
        doc.text(figmaX(415), figmaY(232), slidersValues[8].toString()+ ' %');

        doc.setFontSize(14);
        doc.text(figmaX(30), figmaY(247), "Total Opex");
        doc.text(figmaX(415), figmaY(247), fields[39].valueFormatted);

        //Benefits
        doc.setFontSize(13);
        doc.setTextColor(255, 255, 255);
        doc.text(figmaX(30), figmaY(276), "Your Benefits");
        doc.text(figmaX(175), figmaY(276), "Without Automation");
        doc.text(figmaX(295), figmaY(276), "With Automation");
        doc.text(figmaX(405), figmaY(276), "Net Gain");

        doc.setFontSize(11);
        doc.setTextColor(0, 0, 0.1);
        //Titles
        doc.text(figmaX(30), figmaY(291), "Revenue: Management fees");
        doc.text(figmaX(30), figmaY(304), "Revenue: Application fees");
        doc.text(figmaX(30), figmaY(317), "Revenue: Leasing fees");
        doc.text(figmaX(30), figmaY(330), "Revenue: Owner fees");
        doc.text(figmaX(30), figmaY(343), "Revenue: Tenant fees");
        doc.text(figmaX(30), figmaY(356), "Revenue: Other");
        doc.text(figmaX(30), figmaY(369), "Revenue loss due to vacancy");
        doc.text(figmaX(30), figmaY(382), "Gross Profit");
        doc.text(figmaX(30), figmaY(395), "Salaries & Personnel");
        doc.text(figmaX(30), figmaY(408), "New Owner Advertising");
        doc.text(figmaX(30), figmaY(421), "Facilities (auto, tech, rent etc.)");
        doc.text(figmaX(30), figmaY(434), "Other operating expenses");
        doc.text(figmaX(30), figmaY(447), "Payroll taxes");
        doc.text(figmaX(30), figmaY(460), "New software cost");
        doc.text(figmaX(30), figmaY(473), "Operating Expenses");
        doc.text(figmaX(30), figmaY(486), "Net Operating Income");
        doc.text(figmaX(30), figmaY(499), "Net Operating Income %");
        doc.text(figmaX(30), figmaY(512), "Days to pay off new technology");

        //Without Automation
        doc.text(figmaX(325), figmaY(291), fields[18].valueFormatted);
        doc.text(figmaX(325), figmaY(304), fields[19].valueFormatted);
        doc.text(figmaX(325), figmaY(317), fields[20].valueFormatted);
        doc.text(figmaX(325), figmaY(330), fields[21].valueFormatted);
        doc.text(figmaX(325), figmaY(343), fields[22].valueFormatted);
        doc.text(figmaX(325), figmaY(356), fields[23].valueFormatted);
        doc.text(figmaX(205), figmaY(369), '('+(fields[24].valueFormatted)+')');
        doc.text(figmaX(325), figmaY(382), fields[7].valueFormatted);

        doc.text(figmaX(325), figmaY(395), fields[8].valueFormatted);
        doc.text(figmaX(325), figmaY(408), fields[9].valueFormatted);
        doc.text(figmaX(325), figmaY(421), fields[10].valueFormatted);
        doc.text(figmaX(325), figmaY(434), fields[11].valueFormatted);
        doc.text(figmaX(205), figmaY(460), "-");
        doc.text(figmaX(205), figmaY(473), fields[31].valueFormatted);
        doc.text(figmaX(205), figmaY(486), fields[32].valueFormatted);
        doc.text(figmaX(205), figmaY(499), fields[33].valueFormatted);
        doc.text(figmaX(205), figmaY(512), "-");


        //With Automation
        doc.text(figmaX(205), figmaY(291), fields[0].valueFormatted);
        doc.text(figmaX(205), figmaY(304), fields[1].valueFormatted);
        doc.text(figmaX(205), figmaY(317), fields[2].valueFormatted);
        doc.text(figmaX(205), figmaY(330), fields[3].valueFormatted);
        doc.text(figmaX(205), figmaY(343), fields[4].valueFormatted);
        doc.text(figmaX(205), figmaY(356), fields[5].valueFormatted);
        doc.text(figmaX(325), figmaY(369), '('+fields[6].valueFormatted+')');
        doc.text(figmaX(205), figmaY(382), fields[25].valueFormatted);

        doc.text(figmaX(205), figmaY(395), fields[26].valueFormatted);
        doc.text(figmaX(205), figmaY(408), fields[27].valueFormatted);
        doc.text(figmaX(205), figmaY(421), fields[28].valueFormatted);
        doc.text(figmaX(205), figmaY(434), fields[29].valueFormatted);
        doc.text(figmaX(205), figmaY(447), fields[30].valueFormatted);
        doc.text(figmaX(325), figmaY(447), fields[12].valueFormatted);

        doc.text(figmaX(325), figmaY(460), fields[13].valueFormatted);
        doc.text(figmaX(325), figmaY(473), fields[14].valueFormatted);
        doc.text(figmaX(325), figmaY(486), fields[15].valueFormatted);
        doc.text(figmaX(325), figmaY(499), fields[16].valueFormatted);
        doc.text(figmaX(325), figmaY(512), fields[17].valueFormatted);


        //Net Gain Faltan los resultados
        doc.text(figmaX(415), figmaY(369), fields[35].valueFormatted);
        doc.text(figmaX(415), figmaY(395), fields[14].valueFormatted);
        doc.text(figmaX(415), figmaY(408), "-");
        doc.text(figmaX(415), figmaY(421), reducirNumero(fields[28].value - fields[10].value));
        doc.text(figmaX(415), figmaY(434), "-");
        doc.text(figmaX(415), figmaY(447), reducirNumero(fields[30].value - fields[12].value));
        doc.text(figmaX(415), figmaY(460),  fields[13].valueFormatted);
        doc.text(figmaX(415), figmaY(473),  reducirNumero(fields[31].value - fields[14].value));
        doc.text(figmaX(415), figmaY(486), reducirNumero(fields[15].value- fields[32].value));
        doc.text(figmaX(415), figmaY(499),  fields[36].valueFormatted + ' %');

        //2da Page
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
        doc.text(figmaX(415), figmaY(49), fields[35].valueFormatted);

        doc.text(figmaX(30), figmaY(64), "Net Operating Income Increase");
        doc.text(figmaX(415), figmaY(64), fields[34].valueFormatted);

        doc.text(figmaX(30), figmaY(79), "NOI % increase");
        doc.text(figmaX(415), figmaY(79), fields[36].valueFormatted + ' %');

        doc.text(figmaX(30), figmaY(94), "Time to pay off new technology");
        doc.text(figmaX(415), figmaY(94), fields[37].valueFormatted);

        doc.text(figmaX(30), figmaY(109), "New Technology ROI Multiple");
        doc.text(figmaX(415), figmaY(109), fields[38].valueFormatted);

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
            ['Management fee', slidersValues[2].toString() + " %"],
            ['Vacancy rate', slidersValues[3].toString() + " %"],
        ], {origin: 'A4'});

        var hoja = XLSX.utils.sheet_add_aoa(libro.Sheets, [['Operating Expenses % of Gross Rent Per unit (input)']], {origin: 'A9'});
        var hoja = XLSX.utils.sheet_add_aoa(libro.Sheets, [
            ['Salaries & Personnel', slidersValues[4].toString()+" %"],
            ['New Owner Advertising', slidersValues[5].toString()+" %"],
            ['Facilities (auto, tech, rent etc.)', slidersValues[6].toString()+" %"],
            ['Other operating expenses', slidersValues[7].toString()+" %"],
            ['Payroll taxes', slidersValues[8].toString()+" %"],
            ['Total Opex', fields[39].valueFormatted],
        ], {origin: 'A9'}); 

        var hoja = XLSX.utils.sheet_add_aoa(libro.Sheets, [
            ['','Without Automation',' With Automation','Net Gain'],
            ['Revenue: Management fees', fields[18].valueFormatted,fields[0].valueFormatted,''],
            ['Revenue: Application fees', fields[19].valueFormatted,fields[1].valueFormatted,''],
            ['Revenue: Leasing fees', fields[20].valueFormatted,fields[2].valueFormatted,''],
            ['Revenue: Owner fees', fields[21].valueFormatted,fields[3].valueFormatted,''],
            ['Revenue: Tenant fees', fields[22].valueFormatted,fields[4].valueFormatted,''],
            ['Revenue: Other', fields[23].valueFormatted,fields[5].valueFormatted,''],
            ['Revenue loss due to vacancy', fields[24].valueFormatted,fields[6].valueFormatted,reducirNumero(fields[6].value - fields[24].value)],
            ['Gross Profit', fields[25].valueFormatted,fields[7].valueFormatted,''],
            ['','','',''],
            ['Salaries & Personnel', fields[26].valueFormatted,fields[8].valueFormatted,reducirNumero(fields[26].value - fields[8].value)],
            ['New Owner Advertising', fields[27].valueFormatted,fields[9].valueFormatted,'-'],
            ['Facilities (auto, tech, rent etc.)', fields[28].valueFormatted,fields[10].valueFormatted,reducirNumero(fields[28].value - fields[10].value)],
            ['Other operating expenses', fields[29].valueFormatted,fields[11].valueFormatted,'-'],
            ['Payroll taxes', fields[30].valueFormatted,fields[12].valueFormatted,reducirNumero(fields[30].value - fields[12].value)],
            ['New software cost', '-',fields[13].valueFormatted,fields[13].valueFormatted],
            ['Operating Expenses', fields[31].valueFormatted,fields[14].valueFormatted,reducirNumero(fields[31].value - fields[14].value)],
            ['Net Operating Income', fields[32].valueFormatted,fields[15].valueFormatted,reducirNumero(fields[15].value - fields[32].value)],
            ['Net Operating Income %', fields[33].valueFormatted,fields[16].valueFormatted,reducirNumero(fields[16].value - fields[33].value)],
            ['Days to pay off new technology', '',fields[17].valueFormatted,''],
        ], {origin: 'A20'}); 

        var hoja = XLSX.utils.sheet_add_aoa(libro.Sheets, [['Results Summary']], {origin: 'E3'});
        var hoja = XLSX.utils.sheet_add_aoa(libro.Sheets, [
            ['Revenue recovered from Vacancy loss', fields[35].valueFormatted],
            ['Net Operating Income Increase', fields[34].valueFormatted],
            ['NOI % increase', fields[36].valueFormatted + ' %'],
            ['Time to pay off new technology', fields[37].valueFormatted],
            ['New Technology ROI Multiple', fields[38].valueFormatted]
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

function enviarEmail(mail) {
    const email = "marcelo_o_pastran@hotmail.com";
    const asunto = "alguien ha pedido un reporte!";
    const cuerpo = mail;

    const url = "https://www.googleapis.com/gmail/v1/users/me/messages/send";
    const accessToken = "TU_ACCESS_TOKEN"; // Reemplaza con tu token de acceso

    const mensaje = [
        "Content-Type: text/plain; charset=\"UTF-8\"\n",
        "MIME-Version: 1.0\n",
        "Content-Transfer-Encoding: 7bit\n",
        `to: ${email}\n`,
        `subject: ${asunto}\n\n`,
        cuerpo
    ].join("");

    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            console.log("El correo electrónico fue enviado con éxito");
        } else if (request.readyState === 4 && request.status !== 200) {
            console.error("Error al enviar el correo electrónico");
        }
    };
    request.open("POST", url, true);
    request.setRequestHeader("Authorization", `Bearer ${accessToken}`);
    request.setRequestHeader("Content-Type", "message/rfc822");
    request.send(mensaje);
}
