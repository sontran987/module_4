<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>JSP - Hello World</title>
</head>
<body>
<h1 style="text-align: center">Sandwich Condiments</h1>
<form action="/save" method="post" >
    <input type="checkbox" id="lettuce" name="condiment" value="Lettuce">
    <label for="lettuce">Lettuce</label>
    <input type="checkbox" id="tomato" name="condiment" value="Tomato">
    <label for="tomato">Tomato</label>
    <input type="checkbox" id="mustard" name="condiment" value="Mustard">
    <label for="mustard">Mustard</label>
    <input type="checkbox" id="sprouts" name="condiment" value="Sprouts">
    <label for="sprouts">Lettuce</label>
    <hr style="height: 2px">
    <button type="submit">Save</button>
</form>
<c:if test="${msg != null}">
    <p>${msg}</p>
</c:if>
</body>
</html>