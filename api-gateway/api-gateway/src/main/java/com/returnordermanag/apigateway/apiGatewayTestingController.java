package com.returnordermanag.apigateway;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class apiGatewayTestingController {

	
	
	@GetMapping("test-api")
	public String tesingApi() {
		return  "Working";
	}
	
	
}
