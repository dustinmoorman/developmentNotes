<?php
//The objective is to reverse a string without using any
//explicit reversal functions.

$str = 'Weekend';

function stringreversal($string){
  $reversed_str = '';

  for($pos = strlen($string) - 1;$pos >= 0; $pos--){
    $reversed_str .= $string[$pos];
  }
  return $reversed_str;
}

echo "Original String: " . $str . "\r\n";
echo "Reversed: " . stringreversal($str);
