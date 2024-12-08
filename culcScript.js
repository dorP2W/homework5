

document.getElementById('performButton').onclick = function(){
    let type1 = document.getElementById('typeInput').value;
    let amount1 = document.getElementById('amountInput').value;
    if(amount1 == ''){
        alert('Error: please enter shekel amount')
        return; // Stop further execution
    }
    if(type1 == 'Euro' || type1 == 'euro'){
        alert('Your worth in euro is: ' + (amount1/4.2) );
    }else if(type1 == 'Dollar' || type1 == 'dollar'){
        alert('Your worth in dollar is: ' + (amount1/3.9) );
    }else if(type1 == 'Pound sterling' || type1 == 'pound sterling'){
        alert('Your worth in pound sterling is: ' + (amount1/5.0) );
    }else{
        alert('Error: Invalid currency type. Please enter "Euro", "Dollar", or "Pound sterling".')
    }
}