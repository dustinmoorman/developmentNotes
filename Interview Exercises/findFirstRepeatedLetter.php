<?php

//The objective is to find the first repeated letter
//in a given string. For example, in the string 'twitter'
//the first repeated letter is 't'.

function findFirstRepeatedLetterIn($str){
  $occurances = array();
  $strlen = strlen($str);
  for($pos = 0; $pos <= $strlen; $pos++){
    if(!in_array($str[$pos], $occurances)){
      if(ctype_space($str[$pos]) === false) 
        $occurances[] = $str[$pos];
    } else return $str[$pos];
  }
  return "No duplicate occurances";
}

$a = 'the quick brown fox jumps over the lazy doge';

echo "String: " . $a . "\r\n";
echo "First Repeated Letter: " . findFirstRepeatedLetterIn($a);
