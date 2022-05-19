package com.returnordermanag.componentProcessModule.client;

import org.springframework.cloud.openfeign.FeignClient;
//import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

//@FeignClient(name = "paymentFeignClient", url = "http://localhost:8082/card/")
@FeignClient(name = "paymentFeignClient")

public interface PaymentFeignClient {

	@GetMapping(value = "/{cardNumber}/{charge}")
	double getCurrentBalance(@PathVariable long cardNumber, @PathVariable double charge);
}
