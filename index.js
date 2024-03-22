
// 





document.addEventListener('keydown', (event) => {
    const key = event.key; 
    
    const display = document.querySelector('input[name="display"]');

    if (event.code.startsWith('F')) {
        event.preventDefault(); 
        return;
    }

    if (/[0-9]/.test(key)) {
        display.value += key; 
    }

    
    if (['+', '-', '*', '/'].includes(key)) {
        display.value += key; 
    }

   
    if (key === '.' && !display.value.includes('.')) {
        display.value += key; 
    }

    
    if (key === 'Enter') {
        display.value = eval(display.value); 
    }

    
    if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);     }

    
    if (key === 'Delete') {
        display.value = ''; 
    }

    
   
});
