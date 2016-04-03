package com.github.pitzcarraldo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @author Minkyu Cho(mrnoname@naver.com)
 */
@Controller
public class IndexController {
	@RequestMapping("/")
	public String index() {
		return "index";
	}


	@RequestMapping("/internal/log/{logname}")
	@ResponseBody
	public String log(@PathVariable String logname) {
		return logname;
	}

}
