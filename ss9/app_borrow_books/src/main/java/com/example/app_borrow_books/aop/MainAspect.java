package com.example.app_borrow_books.aop;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class MainAspect {
    private long numberOfRequestToServer = 0;

    @Pointcut("within(com.example.app_borrow_books.controller.*)")
    public void countNumberOfRequestsToServer() {

    }
    @Before("countNumberOfRequestsToServer()")
    public void beforeCountNumberOfClientsHandler(JoinPoint joinPoint){
        System.out.println(joinPoint.getSignature().getName());
        this.numberOfRequestToServer++;
        System.out.println("The number of request to service"+this.numberOfRequestToServer);
    }
}
