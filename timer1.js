/*  A timer which will beep after a specified amount of time has passed. 
  The user can specify an unlimited number of alarms using command line arguments */
  
  for (let i = 2; i < process.argv.length; i++){

    if (process.argv[i] < 0) {
      continue;
    }

    if (!Number.isInteger(Number(process.argv[i]))) {
      continue;
    }
 

    setTimeout(() => {
      process.stdout.write('\x07');
    }, process.argv[i]*1000);
}

