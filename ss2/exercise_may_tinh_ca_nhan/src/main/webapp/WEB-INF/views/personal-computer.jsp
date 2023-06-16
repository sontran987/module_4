<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>JSP - Hello World</title>
</head>
<body >
<div style=" margin: 5px;">
    <h1>Calculate</h1>
<form action="/calculate" method="post">
    <input type="number" placeholder="Enter number 1" name="number1">
    <br>
    <input type="number" placeholder="Enter number 2" name="number2">
    <br>
    <select name="calculate">
        <option value="">choose calculation</option>
        <option value="add">Addition(+)</option>
        <option value="sub">Subtraction(-)</option>
        <option value="mutip">Mutiplication(x)</option>
        <option value="divi">Division(/)</option>
    </select>
    <br>
    <button type="submit">Save</button>
</form>
<c:if test="${result != null}">
    <p>${result}</p>
</c:if>
</div>
</body>
</html>