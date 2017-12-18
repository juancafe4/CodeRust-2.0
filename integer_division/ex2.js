const interger_division = function(dividend, divisor) { 
   // Corner cases 

   if (divisor === 0) {
    return infinity;
   }

   if (divisor === 1) {
    return dividend;
   }

   if (dividend === divisor) {
    return 1;
   }

   if (dividend < divisor) {
    return 0;
   }

   let quotient = 1;
   let val = divisor
   while (val < dividend) {
    val <<= 1;
    quotient <<= 1;
    if (val > dividend) {
      val >>= 1;
      quotient >>= 1;
  
      return quotient += interger_division(dividend - val, divisor);
    }
   }

   return quotient;
}


console.log(interger_division(10, 5));

console.log(interger_division(45, 5));  
