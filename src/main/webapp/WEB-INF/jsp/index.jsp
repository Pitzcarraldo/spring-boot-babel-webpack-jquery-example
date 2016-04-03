<!DOCTYPE html>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html lang="ko">
<head lang="ko">
	<title>Spring Boot Babel Webpack jQuery</title>
	<meta charset="UTF-8">
	<meta http-equiv="x-ua-compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
	<meta name="description" content="">
	<meta name="format-detection" content="telephone=no">
	<link rel="stylesheet" href="/dist/css/app.css">
</head>
<body>
<div class="search_box">
	<input
			type="text"
			placeholder="name"
			data-log="home_search"
	>
	<button
			type="button"
			data-log="home_search"
	>
		Test <span class="ic"></span>
	</button>
</div>
<script src="/dist/js/app.js" charSet="UTF-8"></script>
</body>
</html>