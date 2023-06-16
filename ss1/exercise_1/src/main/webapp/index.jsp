<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>JSP - Hello World</title>
</head>
<body>
<h1> Chuyển đổi tiền tệ</h1>
<form method="post" action="/calculate">
    <label>USD: </label>
    <input type="number" min="0" name="usd" placeholder="Enter USD">
    <label>Ti gia: </label>
    <input type="number" min="0" name="exchange" placeholder="Ti gia">
    <button type="submit">Submit</button>
</form>
</body>
</html>