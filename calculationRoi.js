const slidersValuesRoi=[]; //sliders Values
const WithAutomationSoftware=[20,10,1,15,15] // backend calculation values
const revenueLossDuetoVacany=[0,0,0,0,0,0,0,0,0]
const percentageRevenue=[66,2,13,4,11,4]
/**
 * These are the roifields with its calulation
 * fieldID - ID on HTML Tag
 * Value - integer value of the field
 * valueFormatted - the formatted value of the field i.e Value=1000000 valueFormated $1.000.000
 * onEnter - The function that has the calculate of the field
 */
const roifields =[
    // With automation
    {id:0,fieldID : "roi-management-fees-2",value: 0,valueFormatted: "0", onEnter: function(){ return roi_calulate_management_fees(this.id); }},
    {id:1,fieldID : "roi-application-fees-2",value : 0,valueFormatted: "0", onEnter: function(){ return roi_calculate_application_fees(this.id); }},
    {id:2,fieldID : "roi-leasing-fees-2",value : 0,valueFormatted: "0", onEnter: function(){ return roi_calculate_leasing_fee(this.id); }},  
    {id:3,fieldID : "roi-owner-fees-2",value: 0,valueFormatted: "0", onEnter: function(){ return roi_calculate_owner_fees(this.id); }},
    {id:4,fieldID : "roi-tenant-fees-2",value : 0,valueFormatted: "0", onEnter: function(){ return roi_calculate_tenant_fees(this.id); }},
    {id:5,fieldID : "roi-other-2",value : 0,valueFormatted: "0", onEnter: function(){ return roi_calculate_other(this.id); }}, 
    {id:6,fieldID : "roi-revenue-loss-due-to-vacancy-2",value: 0,valueFormatted: "0", onEnter: function(){ return roi_roi_calculate_revenue_loss_due_to_vacancy_with_Automation(this.id); }},
    {id:7,fieldID : "roi-gross-profit-year-2",value : 0,valueFormatted: "0", onEnter: function(){ return roi_roi_calculate_gross_profit_with_Automation(this.id); }},
    {id:8,fieldID : "roi-salaries-personnel-2",value: 0,valueFormatted: "0", onEnter: function(){ return roi_roi_calculate_salaries_personnel_with_Automation(this.id); }},
    {id:9,fieldID : "roi-new-owner-advertising-2",value : 0,valueFormatted: "0", onEnter: function(){ return roi_roi_calculate_new_owner_advertising_with_Automation(this.id); }},
    {id:10,fieldID : "roi-facilities-2",value : 0,valueFormatted: "0", onEnter: function(){ return roi_roi_calculate_facilities_with_Automation(this.id); }},
    {id:11,fieldID : "roi-other-operating-expenses-2",value: 0,valueFormatted: "0", onEnter: function(){ return roi_roi_calculate_total_other_operating_expenses_with_automation(this.id); }},
    {id:12,fieldID : "roi-payroll-taxes-2",value : 0,valueFormatted: "0", onEnter: function(){ return roi_roi_calculate_total_payroll_taxes_with_Automation(this.id); }},
    {id:13,fieldID : "roi-new-software-cost-2",value : 0,valueFormatted: "0", onEnter: function(){ return roi_calculate_new_software_cost_with_automation(this.id); }}, 
    {id:14,fieldID : "roi-operating-expenses-2",value: 0,valueFormatted: "0", onEnter: function(){ return roi_roi_calculate_operating_expenses_with_automation(this.id); }},
    {id:15,fieldID : "roi-net-operating-income-2",value : 0,valueFormatted: "0", onEnter: function(){ return roi_roi_roi_calculate_net_operating_income_with_Automation(this.id); }},
    {id:16,fieldID : "roi-net-operating-income-porcentage-2",value : 0,valueFormatted: "0", onEnter: function(){ return roi_roi_calculate_net_operating_income_percentage_with_Automation(this.id); }},
    {id:17,fieldID : "roi-days-to-pay-off-new-technology-2",value: 0,valueFormatted: "0", onEnter: function(){ return roi_calculate_days_to_pay_off_new_technology_with_Automation(this.id); }},
    // Without automation
    {id:18,fieldID : "roi-management-fees-1",value: 0,valueFormatted: "0", onEnter: function(){ return roi_calulate_management_fees(this.id); }},
    {id:19,fieldID : "roi-application-fees-1",value : 0,valueFormatted: "0", onEnter: function(){ return roi_calculate_application_fees(this.id); }},
    {id:20,fieldID : "roi-leasing-fees-1",value : 0,valueFormatted: "0", onEnter: function(){ return roi_calculate_leasing_fee(this.id); }},
    {id:21,fieldID : "roi-owner-fees-1",value: 0,valueFormatted: "0", onEnter: function(){ return roi_calculate_owner_fees(this.id); }},
    {id:22,fieldID : "roi-tenant-fees-1",value : 0,valueFormatted: "0", onEnter: function(){ return roi_calculate_tenant_fees(this.id); }},
    {id:23,fieldID : "roi-other-1",value : 0,valueFormatted: "0", onEnter: function(){ return roi_calculate_other(this.id); }},
    {id:24,fieldID : "roi-revenue-loss-due-to-vacancy-1",value: 0,valueFormatted: "0", onEnter: function(){ return roi_calculate_revenue_loss_due_to_vacancy(this.id); }},
    {id:25,fieldID : "roi-gross-profit-year-1",value : 0,valueFormatted: "0", onEnter: function(){ return roi_calculate_gross_profit(this.id); }},
    {id:26,fieldID : "roi-salaries-personnel-1",value: 0,valueFormatted: "0", onEnter: function(){ return roi_calculate_salaries_personnel(this.id); }},
    {id:27,fieldID : "roi-new-owner-advertising-1",value : 0,valueFormatted: "0", onEnter: function(){ return roi_calculate_new_owner_advertising(this.id); }},
    {id:28,fieldID : "roi-facilities-1",value : 0,valueFormatted: "0", onEnter: function(){ return roi_calculate_facilities(this.id); }},
    {id:29,fieldID : "roi-other-operating-expenses-1",value: 0,valueFormatted: "0", onEnter: function(){ return roi_calculate_total_other_operating_expenses(this.id); }},
    {id:30,fieldID : "roi-payroll-taxes-1",value : 0,valueFormatted: "0", onEnter: function(){ return roi_calculate_total_payroll_taxes(this.id); }},
    {id:31,fieldID : "roi-operating-expenses-1",value: 0,valueFormatted: "0", onEnter: function(){ return roi_calculate_operating_expenses(this.id); }},
    {id:32,fieldID : "roi-net-operating-income-1",value : 0,valueFormatted: "0", onEnter: function(){ return roi_calculate_net_operating_income(this.id); }},
    {id:33,fieldID : "roi-net-operating-income-porcentage-1",value : 0,valueFormatted: "0", onEnter: function(){ return roi_calculate_net_operating_income_percentage(this.id); }},
    
    {id:34,fieldID : "roi-net-operating-income-increase",value : 0,valueFormatted: "0", onEnter: function(){ return roi_calculate_net_operating_income_increase_summary(this.id); }},
    {id:35,fieldID : "roi-revenue-recovered-from-vacancy-loss",value : 0,valueFormatted: "0", onEnter: function(){ return roi_calculate_revenue_recovered_from_vacancy_loss_summary(this.id); }},
    {id:36,fieldID : "roi-increase",value: 0,valueFormatted: "0", onEnter: function(){ return roi_calculate_noi_increase_summary(this.id); }},
    {id:37,fieldID : "roi-time-to-pay-off-new-technology",value : 0,valueFormatted: "0", onEnter: function(){ return roi_calculate_time_to_pay_off_new_technology_sumamry(this.id); }},
    {id:38,fieldID : "roi-new-technology-roi-multiple",value : 0,valueFormatted: "0", onEnter: function(){ return roi_calculate_new_technology_roi_multiple_summary(this.id); }},
    {id:39,fieldID : "roi-total-opex",value : 0,valueFormatted: "0", onEnter: function(){ return roi_calculate_total_opex_roi_summary(this.id); }},

];

function createSlidersRoi(){
    const slidersID=['roi-customRange1','roi-customRange2','roi-customRange3','roi-customRange4',
    'roi-customRange5','roi-customRange6','roi-customRange7','roi-customRange8','roi-customRange9'] //amount of sliders
    const inputsID=['roi-customRange1i','roi-customRange2i','roi-customRange3i','roi-customRange4i','roi-customRange5i',
    'roi-customRange6i','roi-customRange7i','roi-customRange8i','roi-customRange9i'] //amount of sliders
    const slidersInfo=['roi-rangeValue1','roi-rangeValue2','roi-rangeValue3','roi-rangeValue4',
    'roi-rangeValue5','roi-rangeValue6','roi-rangeValue7','roi-rangeValue8','roi-rangeValue9'] //amount of sliders
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
        slidersValuesRoi[i]=parseFloat(range.value); 
        calculateBackEndValues(); 
        calculateAllRoi();   
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
            slidersValuesRoi[pos]=parseFloat(range.value);
            calculateBackEndValues(); 
            calculateAllRoi(); 
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
            slidersValuesRoi[pos]=parseFloat(inputs.value);
            calculateBackEndValues(); 
            calculateAllRoi(); 
            calculateBackEndValues(); 
            calculateAllRoi(); 
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
// Trigger all middleware calculations.
function calculateBackEndValues(){
    revenueLossDuetoVacany[0]= 365
    revenueLossDuetoVacany[1] = slidersValuesRoi[0] * revenueLossDuetoVacany[0]
    revenueLossDuetoVacany[2] = revenueLossDuetoVacany[1] * (slidersValuesRoi[3] / 100) 
    revenueLossDuetoVacany[3] = slidersValuesRoi[1] / 30
    revenueLossDuetoVacany[4] = revenueLossDuetoVacany[3] * revenueLossDuetoVacany[2]
    revenueLossDuetoVacany[5] = revenueLossDuetoVacany[4] * (slidersValuesRoi[2] / 100) 
    revenueLossDuetoVacany[6] = revenueLossDuetoVacany[2] * revenueLossDuetoVacany[3]
    revenueLossDuetoVacany[7] = revenueLossDuetoVacany[5] + revenueLossDuetoVacany[6]
    revenueLossDuetoVacany[8] = revenueLossDuetoVacany[3] * (slidersValuesRoi[2] / 100) + slidersValuesRoi[1]

}
// Trigger all the calculations.
function calculateAllRoi(){
    console.log('roi')
    for (let i=0;i<=roifields.length-1; i++){
        document.getElementById(roifields[i].fieldID).value = roifields[i].onEnter();
    }    
}


function calculate_total_opex_roi(val){
    let value=0;
    let cant=1;
    for (let i=3; i<=10;i++){
        value += slidersValuesRoi[i];
        cant++
    }
    roifields[val].value = value;
    let promedio = value / (cant - 1);
    roifields[val].valueFormatted = promedio.toFixed(0)+" %";
    return roifields[val].valueFormatted;
}


/**
 * 
 * Calculator both
 *
 */

function roi_calulate_management_fees(val){
    roifields[val].value = revenueLossDuetoVacany[8] * slidersValuesRoi[0] * (percentageRevenue[0]/100);
    roifields[val].valueFormatted = reducirNumero(roifields[val].value)
    return roifields[val].valueFormatted;
}

function roi_calculate_application_fees(val){
    roifields[val].value = revenueLossDuetoVacany[8] * slidersValuesRoi[0] * (percentageRevenue[1]/100);
    roifields[val].valueFormatted = reducirNumero(roifields[val].value)
    return roifields[val].valueFormatted;
}

function roi_calculate_leasing_fee(val){
    roifields[val].value = revenueLossDuetoVacany[8] * slidersValuesRoi[0] * (percentageRevenue[2]/100);
    roifields[val].valueFormatted = reducirNumero(roifields[val].value)
    return roifields[val].valueFormatted;
}

function roi_calculate_owner_fees(val){
    roifields[val].value = revenueLossDuetoVacany[8] * slidersValuesRoi[0] * (percentageRevenue[3]/100);
    roifields[val].valueFormatted = reducirNumero(roifields[val].value)
    return roifields[val].valueFormatted;
}

function roi_calculate_tenant_fees(val){
    roifields[val].value = revenueLossDuetoVacany[8] * slidersValuesRoi[0] * (percentageRevenue[4]/100);
    roifields[val].valueFormatted = reducirNumero(roifields[val].value)
    return roifields[val].valueFormatted;
}

function roi_calculate_other(val){
    roifields[val].value = revenueLossDuetoVacany[8] * slidersValuesRoi[0] * (percentageRevenue[5]/100);
    roifields[val].valueFormatted = reducirNumero(roifields[val].value)
    return roifields[val].valueFormatted;
}



/**
 * 
 * Calculator with automation
 *
 */
function roi_roi_calculate_revenue_loss_due_to_vacancy_with_Automation(val){
    roifields[val].value = (1-(WithAutomationSoftware[0]/100)) * roifields[24].value
    roifields[val].valueFormatted = reducirNumero(roifields[val].value)
    return roifields[val].valueFormatted;
}

function roi_roi_calculate_gross_profit_with_Automation(val){
    let value=0;
    for (let i=0; i<=6;i++){
        value += roifields[i].value;
    }
    roifields[val].value = value
    roifields[val].valueFormatted = reducirNumero(roifields[val].value)
    return roifields[val].valueFormatted;
}

function roi_roi_calculate_salaries_personnel_with_Automation(val){
    roifields[val].value = roifields[26].value * (1-WithAutomationSoftware[4]/100)
    roifields[val].valueFormatted = reducirNumero(roifields[val].value)
    return roifields[val].valueFormatted;
}

function roi_roi_calculate_new_owner_advertising_with_Automation(val){
    roifields[val].value = roifields[27].value
    roifields[val].valueFormatted = reducirNumero(roifields[val].value)
    return roifields[val].valueFormatted;
}

function roi_roi_calculate_facilities_with_Automation(val){
    roifields[val].value = roifields[28].value * (1-WithAutomationSoftware[3]/100)
    roifields[val].valueFormatted = reducirNumero(roifields[val].value)
    return roifields[val].valueFormatted;
}

function roi_roi_calculate_total_other_operating_expenses_with_automation(val){
    roifields[val].value = roifields[29].value
    roifields[val].valueFormatted = reducirNumero(roifields[val].value)
    return roifields[val].valueFormatted;
}

function roi_roi_calculate_total_payroll_taxes_with_Automation(val){
    roifields[val].value = roifields[30].value * (1-WithAutomationSoftware[4]/100)
    roifields[val].valueFormatted = reducirNumero(roifields[val].value)
    return roifields[val].valueFormatted;
}

function roi_calculate_new_software_cost_with_automation(val){
    roifields[val].value = WithAutomationSoftware[2] * slidersValuesRoi[0] * 12
    roifields[val].valueFormatted = reducirNumero(roifields[val].value)
    return roifields[val].valueFormatted;
}

function roi_roi_calculate_operating_expenses_with_automation(val){
    let value=0;
    for (let i=8; i<=13;i++){
        value += roifields[i].value;
    }
    roifields[val].value = value
    roifields[val].valueFormatted = reducirNumero(roifields[val].value)
    return roifields[val].valueFormatted;
}

function roi_roi_roi_calculate_net_operating_income_with_Automation(val){
    roifields[val].value =  roifields[7].value - roifields[14].value;
    roifields[val].valueFormatted = reducirNumero(roifields[val].value)
    return roifields[val].valueFormatted;
}

function roi_roi_calculate_net_operating_income_percentage_with_Automation(val){
    roifields[val].value = (roifields[15].value / roifields[7].value)*100;
    roifields[val].valueFormatted = roifields[val].value.toFixed(2) + " %";
    return roifields[val].valueFormatted;
}

function roi_calculate_days_to_pay_off_new_technology_with_Automation(val){
    roifields[val].value =  roifields[13].value / ((roifields[31].value - roifields[14].value)/365) ;
    roifields[val].valueFormatted = roifields[val].value.toFixed(2) +  " Days";
    return roifields[val].valueFormatted;
}

/**
 * 
 * Calculator without automation
 *
 */

function roi_calculate_revenue_loss_due_to_vacancy(val){

    roifields[val].value = revenueLossDuetoVacany[7] * -1;
    roifields[val].valueFormatted = reducirNumero(roifields[val].value)
    return roifields[val].valueFormatted;
}

function roi_calculate_gross_profit(val){
    let value=0;
    for (let i=17; i<=24;i++){
        value += roifields[i].value;
    }
    roifields[val].value = value
    roifields[val].valueFormatted = reducirNumero(roifields[val].value)
    return roifields[val].valueFormatted;
}

function roi_calculate_salaries_personnel(val){
    roifields[val].value = roifields[18].value * (slidersValuesRoi[4]/100)
    roifields[val].valueFormatted = reducirNumero(roifields[val].value)
    return roifields[val].valueFormatted;
}

function roi_calculate_new_owner_advertising(val){
    roifields[val].value = roifields[18].value * (slidersValuesRoi[5]/100)
    roifields[val].valueFormatted = reducirNumero(roifields[val].value)
    return roifields[val].valueFormatted;
}

function roi_calculate_facilities(val){
    roifields[val].value = roifields[18].value * (slidersValuesRoi[6]/100)
    roifields[val].valueFormatted = reducirNumero(roifields[val].value)
    return roifields[val].valueFormatted;
}

function roi_calculate_total_other_operating_expenses(val){
    roifields[val].value = roifields[18].value * (slidersValuesRoi[7]/100)
    roifields[val].valueFormatted = reducirNumero(roifields[val].value)
    return roifields[val].valueFormatted;
}

function roi_calculate_total_payroll_taxes(val){
    roifields[val].value = roifields[18].value * (slidersValuesRoi[8]/100)
    roifields[val].valueFormatted = reducirNumero(roifields[val].value)
    return roifields[val].valueFormatted;
}

function roi_calculate_operating_expenses(val){
    let value=0;
    for (let i=26; i<=30;i++){
        value += roifields[i].value;
    }
    roifields[val].value = value
    roifields[val].valueFormatted = reducirNumero(roifields[val].value)
    return roifields[val].valueFormatted;
}

function roi_calculate_net_operating_income(val){
    roifields[val].value =  roifields[25].value - roifields[31].value;
    roifields[val].valueFormatted = reducirNumero(roifields[val].value)
    return roifields[val].valueFormatted;
}

function roi_calculate_net_operating_income_percentage(val){
    roifields[val].value =  (roifields[32].value / roifields[25].value)*100;
    roifields[val].valueFormatted = roifields[val].value.toFixed(2) + " %";
    return roifields[val].valueFormatted;
}
/**
 * 
 * Calculator summary
 */
function roi_calculate_net_operating_income_increase_summary(val){
    roifields[val].value =(roifields[32].value - roifields[15].value)*-1;
    roifields[val].valueFormatted = reducirNumero(roifields[val].value)
    return roifields[val].valueFormatted;
}

function roi_calculate_revenue_recovered_from_vacancy_loss_summary(val){
    roifields[val].value = (roifields[24].value - roifields[6].value)*-1;
    roifields[val].valueFormatted = reducirNumero(roifields[val].value)
    return roifields[val].valueFormatted;
}

function roi_calculate_noi_increase_summary(val){
    roifields[val].value = (roifields[33].value - roifields[16].value)*-1;
    roifields[val].valueFormatted = roifields[val].value.toFixed(2);
    return roifields[val].valueFormatted;
}

function roi_calculate_time_to_pay_off_new_technology_sumamry(val){
    roifields[val].value = roifields[17].value
    roifields[val].valueFormatted = roifields[val].value.toFixed(0) + " Days";
    return roifields[val].valueFormatted;
}

function roi_calculate_new_technology_roi_multiple_summary(val){
    roifields[val].value = roifields[34].value / roifields[13].value 
    roifields[val].valueFormatted = roifields[val].value.toFixed(1) + " X";
    return roifields[val].valueFormatted;
}

function roi_calculate_total_opex_roi_summary(val){
    let value=0;
    let cant=1;
    for (let i=4; i<=8;i++){
        value += slidersValuesRoi[i];
        cant++
    }
    roifields[val].value = value;
    let promedio = value / (cant - 1);
    roifields[val].valueFormatted = promedio.toFixed(0)+" %";
    return roifields[val].valueFormatted;
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

createSlidersRoi();
calculateBackEndValues(); 
calculateAllRoi();  

// Convert to pdf
function generarPDFROI(){
    var mail=document.getElementById("roi-email");
    var alertMsg = document.querySelector('.alert-input');
    const re = /\S+@\S+\.\S+/;
    if(re.test(mail.value)){
        alertMsg.classList.add('alert-hidden-roi'); 
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


        
        // Title
        doc.setTextColor(47, 77, 237);
        doc.text(figmaX(25), figmaY(30), "Property Management ROI Calculator");

        // Subtitle
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0.1);
        doc.text(figmaX(25), figmaY(50), "New Technology Savings Calculator for Third-Party Rental Propery Managers");

        // Portfolio values
        doc.setFontSize(15);
        doc.setTextColor(255, 255, 255);
        doc.text(figmaX(30), figmaY(80), "Portfolio values");

        doc.setFontSize(13);
        doc.setTextColor(0, 0, 0.1);
        doc.text(figmaX(30), figmaY(95), "Number of units managed:");
        doc.text(figmaX(260), figmaY(95),  slidersValuesRoi[0].toString());

        doc.text(figmaX(30), figmaY(108), "Average monthly rent per unit:");
        doc.text(figmaX(260), figmaY(108), '$ ' + slidersValuesRoi[1].toString());

        // Problema con los slides
        doc.text(figmaX(30), figmaY(121), "Management fee:");
        doc.text(figmaX(260), figmaY(121),  slidersValuesRoi[2].toString()+ ' %');

        doc.text(figmaX(30), figmaY(134), "Vacancy Rate:");
        doc.text(figmaX(260), figmaY(134),  slidersValuesRoi[3].toString()+ ' %');

        // Operating Expenses %
        doc.setFontSize(15);
        doc.setTextColor(255, 255, 255);
        doc.text(figmaX(30), figmaY(163), "Operating Expenses % of Gross Rent Per Unit");

        doc.setFontSize(13);
        doc.setTextColor(0, 0, 0.1);
        doc.text(figmaX(30), figmaY(178), "Salaries & Personnel");
        doc.text(figmaX(415), figmaY(178), slidersValuesRoi[4].toString()+ ' %');

        doc.text(figmaX(30), figmaY(191), "New Owner Advertising");
        doc.text(figmaX(415), figmaY(191), slidersValuesRoi[5].toString()+ ' %');

        doc.text(figmaX(30), figmaY(204), "Facilities (auto, tech, rent etc.)");
        doc.text(figmaX(415), figmaY(204), slidersValuesRoi[6].toString()+ ' %');

        doc.text(figmaX(30), figmaY(217), "Other operating expenses");
        doc.text(figmaX(415), figmaY(217), slidersValuesRoi[7].toString()+ ' %');
        
        doc.text(figmaX(30), figmaY(232), "Payroll taxes");
        doc.text(figmaX(415), figmaY(232), slidersValuesRoi[8].toString()+ ' %');

        doc.setFontSize(14);
        doc.text(figmaX(30), figmaY(247), "Total Opex");
        doc.text(figmaX(415), figmaY(247), roifields[39].valueFormatted);

        // Benefits
        doc.setFontSize(13);
        doc.setTextColor(255, 255, 255);
        doc.text(figmaX(30), figmaY(276), "Your Benefits");
        doc.text(figmaX(175), figmaY(276), "Without Automation");
        doc.text(figmaX(295), figmaY(276), "With Automation");
        doc.text(figmaX(405), figmaY(276), "Net Gain");

        doc.setFontSize(11);
        doc.setTextColor(0, 0, 0.1);
        // Titles
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

        // Without Automation
        doc.text(figmaX(325), figmaY(291), roifields[18].valueFormatted);
        doc.text(figmaX(325), figmaY(304), roifields[19].valueFormatted);
        doc.text(figmaX(325), figmaY(317), roifields[20].valueFormatted);
        doc.text(figmaX(325), figmaY(330), roifields[21].valueFormatted);
        doc.text(figmaX(325), figmaY(343), roifields[22].valueFormatted);
        doc.text(figmaX(325), figmaY(356), roifields[23].valueFormatted);
        doc.text(figmaX(205), figmaY(369), (roifields[24].valueFormatted));
        doc.text(figmaX(325), figmaY(382), roifields[7].valueFormatted);

        doc.text(figmaX(325), figmaY(395), roifields[8].valueFormatted);
        doc.text(figmaX(325), figmaY(408), roifields[9].valueFormatted);
        doc.text(figmaX(325), figmaY(421), roifields[10].valueFormatted);
        doc.text(figmaX(325), figmaY(434), roifields[11].valueFormatted);
        doc.text(figmaX(205), figmaY(460), "-");
        doc.text(figmaX(205), figmaY(473), roifields[31].valueFormatted);
        doc.text(figmaX(205), figmaY(486), roifields[32].valueFormatted);
        doc.text(figmaX(205), figmaY(499), roifields[33].valueFormatted);
        doc.text(figmaX(205), figmaY(512), "-");


        // With Automation
        doc.text(figmaX(205), figmaY(291), roifields[0].valueFormatted);
        doc.text(figmaX(205), figmaY(304), roifields[1].valueFormatted);
        doc.text(figmaX(205), figmaY(317), roifields[2].valueFormatted);
        doc.text(figmaX(205), figmaY(330), roifields[3].valueFormatted);
        doc.text(figmaX(205), figmaY(343), roifields[4].valueFormatted);
        doc.text(figmaX(205), figmaY(356), roifields[5].valueFormatted);
        doc.text(figmaX(325), figmaY(369), roifields[6].valueFormatted);
        doc.text(figmaX(205), figmaY(382), roifields[25].valueFormatted);

        doc.text(figmaX(205), figmaY(395), roifields[26].valueFormatted);
        doc.text(figmaX(205), figmaY(408), roifields[27].valueFormatted);
        doc.text(figmaX(205), figmaY(421), roifields[28].valueFormatted);
        doc.text(figmaX(205), figmaY(434), roifields[29].valueFormatted);
        doc.text(figmaX(205), figmaY(447), roifields[30].valueFormatted);
        doc.text(figmaX(325), figmaY(447), roifields[12].valueFormatted);

        doc.text(figmaX(325), figmaY(460), roifields[13].valueFormatted);
        doc.text(figmaX(325), figmaY(473), roifields[14].valueFormatted);
        doc.text(figmaX(325), figmaY(486), roifields[15].valueFormatted);
        doc.text(figmaX(325), figmaY(499), roifields[16].valueFormatted);
        doc.text(figmaX(325), figmaY(512), roifields[17].valueFormatted);


        // Net Gain Faltan los resultados
        doc.text(figmaX(415), figmaY(369), '-'+roifields[35].valueFormatted);
        doc.text(figmaX(415), figmaY(395), '-'+roifields[14].valueFormatted);
        doc.text(figmaX(415), figmaY(408), "-");
        doc.text(figmaX(415), figmaY(421), '-'+reducirNumero(roifields[28].value - roifields[10].value));
        doc.text(figmaX(415), figmaY(434), "-");
        doc.text(figmaX(415), figmaY(447), '-'+reducirNumero(roifields[30].value - roifields[12].value));
        doc.text(figmaX(415), figmaY(460),  '-'+roifields[13].valueFormatted);
        doc.text(figmaX(415), figmaY(473),  '-'+reducirNumero(roifields[31].value - roifields[14].value));
        doc.text(figmaX(415), figmaY(486), '-'+reducirNumero(roifields[15].value- roifields[32].value));
        doc.text(figmaX(415), figmaY(499),  '-'+roifields[36].valueFormatted + ' %');

        // Add another page
        doc.addPage();

        doc.setFillColor(47, 77, 237); //Bg Results Summary Title
        doc.rect(figmaX(25), figmaY(20), 189, 10, "F");

        doc.setFillColor(	248, 249, 253); //Bg Results Summary Container
        doc.rect(figmaX(25), figmaY(45), 189, 40, "F");
        
        // Results Summary
        doc.setFontSize(15);
        doc.setTextColor(255, 255, 255);
        doc.text(figmaX(30), figmaY(32), "Results Summary");

        doc.setFontSize(13);
        doc.setTextColor(0, 0, 0.1);
        doc.text(figmaX(30), figmaY(49), "Revenue recovered from Vacancy loss");
        doc.text(figmaX(415), figmaY(49), roifields[35].valueFormatted);

        doc.text(figmaX(30), figmaY(64), "Net Operating Income Increase");
        doc.text(figmaX(415), figmaY(64), roifields[34].valueFormatted);

        doc.text(figmaX(30), figmaY(79), "NOI % increase");
        doc.text(figmaX(415), figmaY(79), roifields[36].valueFormatted + ' %');

        doc.text(figmaX(30), figmaY(94), "Time to pay off new technology");
        doc.text(figmaX(415), figmaY(94), roifields[37].valueFormatted);

        doc.text(figmaX(30), figmaY(109), "New Technology ROI Multiple");
        doc.text(figmaX(415), figmaY(109), roifields[38].valueFormatted);

        // Save the PDF file
        doc.save("Test.pdf");
        
        // Send Email
        enviarCorreoRoi()
    }else{
        alertMsg.classList.remove('alert-hidden-roi'); 
        mail.classList.add('border-red');
    }    
}

// Download CSV
function descargarXLSXRoi() {
    var mail=document.getElementById("roi-email")
    var alertMsg = document.querySelector('.alert-input-roi');
    const re = /\S+@\S+\.\S+/;
    if(re.test(mail.value)){
        alertMsg.classList.add('alert-hidden-roi'); 
        mail.classList.remove('border-red');
        // Create a new workbook and a new spreadsheet
        var libro = XLSX.utils.book_new();
        
        var hoja = XLSX.utils.sheet_add_aoa(libro.Sheets, [['Portfolio values (input)']], {origin: 'A3'});
        var hoja = XLSX.utils.sheet_add_aoa(libro.Sheets, [
            ['Number of units managed', slidersValuesRoi[0].toString()],
            ['Average monthly rent per unit', "$ " + slidersValuesRoi[1].toString()],
            ['Management fee', slidersValuesRoi[2].toString() + " %"],
            ['Vacancy rate', slidersValuesRoi[3].toString() + " %"],
        ], {origin: 'A4'});

        var hoja = XLSX.utils.sheet_add_aoa(libro.Sheets, [['Operating Expenses % of Gross Rent Per unit (input)']], {origin: 'A9'});
        var hoja = XLSX.utils.sheet_add_aoa(libro.Sheets, [
            ['Salaries & Personnel', slidersValuesRoi[4].toString()+" %"],
            ['New Owner Advertising', slidersValuesRoi[5].toString()+" %"],
            ['Facilities (auto, tech, rent etc.)', slidersValuesRoi[6].toString()+" %"],
            ['Other operating expenses', slidersValuesRoi[7].toString()+" %"],
            ['Payroll taxes', slidersValuesRoi[8].toString()+" %"],
            ['Total Opex', roifields[39].valueFormatted],
        ], {origin: 'A9'}); 

        var hoja = XLSX.utils.sheet_add_aoa(libro.Sheets, [
            ['','Without Automation',' With Automation','Net Gain'],
            ['Revenue: Management fees', roifields[18].valueFormatted,roifields[0].valueFormatted,''],
            ['Revenue: Application fees', roifields[19].valueFormatted,roifields[1].valueFormatted,''],
            ['Revenue: Leasing fees', roifields[20].valueFormatted,roifields[2].valueFormatted,''],
            ['Revenue: Owner fees', roifields[21].valueFormatted,roifields[3].valueFormatted,''],
            ['Revenue: Tenant fees', roifields[22].valueFormatted,roifields[4].valueFormatted,''],
            ['Revenue: Other', roifields[23].valueFormatted,roifields[5].valueFormatted,''],
            ['Revenue loss due to vacancy', roifields[24].valueFormatted,roifields[6].valueFormatted,reducirNumero(roifields[6].value - roifields[24].value)],
            ['Gross Profit', roifields[25].valueFormatted,roifields[7].valueFormatted,''],
            ['','','',''],
            ['Salaries & Personnel', roifields[26].valueFormatted,roifields[8].valueFormatted,reducirNumero(roifields[26].value - roifields[8].value)],
            ['New Owner Advertising', roifields[27].valueFormatted,roifields[9].valueFormatted,'-'],
            ['Facilities (auto, tech, rent etc.)', roifields[28].valueFormatted,roifields[10].valueFormatted,reducirNumero(roifields[28].value - roifields[10].value)],
            ['Other operating expenses', roifields[29].valueFormatted,roifields[11].valueFormatted,'-'],
            ['Payroll taxes', roifields[30].valueFormatted,roifields[12].valueFormatted,reducirNumero(roifields[30].value - roifields[12].value)],
            ['New software cost', '-',roifields[13].valueFormatted,roifields[13].valueFormatted],
            ['Operating Expenses', roifields[31].valueFormatted,roifields[14].valueFormatted,reducirNumero(roifields[31].value - roifields[14].value)],
            ['Net Operating Income', roifields[32].valueFormatted,roifields[15].valueFormatted,reducirNumero(roifields[15].value - roifields[32].value)],
            ['Net Operating Income %', roifields[33].valueFormatted,roifields[16].valueFormatted,reducirNumero(roifields[16].value - roifields[33].value)],
            ['Days to pay off new technology', '',roifields[17].valueFormatted,''],
        ], {origin: 'A20'}); 

        var hoja = XLSX.utils.sheet_add_aoa(libro.Sheets, [['Results Summary']], {origin: 'E3'});
        var hoja = XLSX.utils.sheet_add_aoa(libro.Sheets, [
            ['Revenue recovered from Vacancy loss', roifields[35].valueFormatted],
            ['Net Operating Income Increase', roifields[34].valueFormatted],
            ['NOI % increase', roifields[36].valueFormatted + ' %'],
            ['Time to pay off new technology', roifields[37].valueFormatted],
            ['New Technology ROI Multiple', roifields[38].valueFormatted]
        ], {origin: 'E4'}); 
        
        // Add the worksheet to the workbook
        XLSX.utils.book_append_sheet(libro, hoja, 'Portfolio values');
        
        // Download the XLSX file
        XLSX.writeFile(libro, 'datos.xlsx');
        
        //Send Email
        enviarCorreoRoi()
    }else{
        alertMsg.classList.remove('alert-hidden-roi'); 
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
function enviarCorreoRoi() {
    var email = document.getElementById('roi-email').value;

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
