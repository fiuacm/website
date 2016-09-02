<?php

$posted_data = json_decode(file_get_contents('php://input'), TRUE);
$github_action = $posted_data["action"];

echo json_encode($posted_data);

if ($github_action !== "opened") {
  return;
}
shell_exec('git pull origin master');

?>
