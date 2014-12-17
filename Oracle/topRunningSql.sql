SELECT * FROM ( SELECT
  sql_fulltext,
  sql_id,
  elapsed_time,
  child_number,
  disk_reads,
  executions,
  first_load_time,
  last_load_time
  FROM v$sql
  ORDER BY elapsed_time DESC)
  WHERE ROWNUM < 10;
