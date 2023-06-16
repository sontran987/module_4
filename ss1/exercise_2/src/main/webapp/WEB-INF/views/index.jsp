<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>JSP - Hello World</title>
</head>
<body>
<form action="/dictionary" method="post">
    <label> Search Dictionary: </label>
    <input type="text" name="english" required>
    <button type="submit">Search</button>
</form>
<p>${result}</p>

</body>
</html>