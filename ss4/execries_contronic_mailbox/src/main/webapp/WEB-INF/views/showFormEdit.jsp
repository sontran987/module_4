<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: TechCare
  Date: 6/19/2023
  Time: 11:42 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<form:form action="/edit" method="post" modelAttribute="mail">
    <table>
        <tr hidden>
            <td>
                <form:hidden path="id"/>
            </td>
        </tr>
        <tr>
            <td>
                <form:label path="languages">Languages: </form:label>
            </td>
            <td>
                <form:select path="languages">
                    <c:forEach var="lang" items="${languages}">
                        <form:option value="${lang}">${lang}</form:option>
                    </c:forEach>
                </form:select>
            </td>
        </tr>
        <tr>
            <td>
                <form:label path="paseSize">Page Size: </form:label>
            </td>
            <td>
                <p>Show<span>
        <form:select path="paseSize">
            <c:forEach var="page" items="${pages}">
                <form:option value="${page}">${page}</form:option>
            </c:forEach>
        </form:select>
            </span>
                    emails per page
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <form:label path="spamsFilter">Spams filter: </form:label>
            </td>
            <td>
                <form:checkbox path="spamsFilter" label="Enable spams filter"/>
            </td>
        </tr>
        <tr>
            <td>
                <form:label path="signature">Signature</form:label>
            </td>
            <td>
                <form:textarea path="signature"/>
            </td>
        </tr>
        <tr>
            <td></td>
            <td>
<%--                <button type="submit">update</button>--%>
<%--                <a href="/"><button type="button">cancel</button></a>--%>
                <form:button> update</form:button>
            </td>

        </tr>
    </table>
</form:form>
</body>
</html>
