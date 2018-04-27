package controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebControlle {
	@GetMapping(value="/")
    public String homepage(){
        return "index";
    }
}
