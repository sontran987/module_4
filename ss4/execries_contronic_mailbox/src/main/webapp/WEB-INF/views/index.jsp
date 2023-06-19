<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>JSP - Hello World</title>
</head>
<body>
<a href="/mailbox">Setting</a>
<c:if test="${msg!=null}">
    <p>${msg}</p>
</c:if>
<table>
    <tr>
        <th>STT</th>
        <th>Languages</th>
        <th>Page size</th>
        <th>spams filter</th>
        <th>signature</th>
    </tr>
    <c:forEach items="${list}" var="mail" varStatus="loop">
        <td>${loop.count}</td>
        <td>${mail.languages}</td>
        <td>${mail.paseSize}</td>
        <td>${mail.spamsFilter}</td>
        <td>${mail.signature}</td>
    </c:forEach>
</table>
</body>
</html>