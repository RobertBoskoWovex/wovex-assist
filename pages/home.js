export default function home(request, env) {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<link rel="stylesheet" href="/style.css">
<title>Wovex Assist</title>
</head>

<body>
<header>
    Wovex Assist: Outcome Draft Builder
</header>

<div class="content">
  <p>Paste or type your notes below to get draft goals, outcomes and measures.</p>
</div>

<textarea placeholder="Enter or paste text and any preferences here!"></textarea>

<div class="bottom">
  <div>
    Use this Wovex Assist to generate draft structured suggestions from your notes.<br/><br/>
    Do not paste passwords, secrets, special-category personal data, or anything your organisation would not permit you to share with an external AI service.<br/><br/>
    Your text and details are not remembered.
  </div>

  <div class="buttons">
    <button class="btn grey-button">Clear</button>
    <button class="btn blue-button">Show Outcomes</button>
    <button class="btn blue-button">Show Goals, Outcomes, Measures</button>
  </div>
</div>

</body>
</html>
`;

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=UTF-8"
    }
  });
}
